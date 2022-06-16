import "tailwindcss/tailwind.css";
import "./styles/global.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";

import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.rinkeby],
  [
    infuraProvider({ infuraId: process.env.NEXT_PUBLIC_INFURIA_KEY }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Funky Pizza App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className="relative font-sans bg-beige">
          <div className="max-w-[70rem] px-5 py-1 mx-auto">
            <Component {...pageProps} />
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
