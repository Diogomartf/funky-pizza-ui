import "tailwindcss/tailwind.css";
import "./styles/global.css";
import { Analytics } from "@vercel/analytics/react";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";

import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [chain.mainnet],
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
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: "#FF8D23",
          accentColorForeground: "white",
          borderRadius: "large",
          fontStack: "rounded",
        })}
      >
        <div className="relative font-sans bg-beige">
          <div className="max-w-[70rem] px-5 py-1 mx-auto">
            <Component {...pageProps} />
            <Analytics />
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
