import { Provider, NETWORKS } from "@web3-ui/hooks";
import Navbar from "./components/Navbar";
import "tailwindcss/tailwind.css";
import "./styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider
      network={NETWORKS.rinkeby}
      rpcUrl={`https://rinkeby.infura.io/v3/${process.env.NEXT_PUBLIC_INFURIA_KEY}`}
    >
      <div className="relative font-sans bg-beige">
        <div className="max-w-[70rem] px-5 py-1 mx-auto">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}

export default MyApp;
