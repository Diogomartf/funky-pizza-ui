import { ConnectButton } from "@rainbow-me/rainbowkit";

const BUTTON_CLASSES =
  "w-full px-3 py-3 text-sm text-center text-white uppercase transition rounded-full md:text-md bg-gradient-to-r from-orangy to-orangeCrust hover:drop-shadow-lg hover:duration-200 h-fit";

export default function MintButton({ mintNFT, loading }) {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openChainModal, openConnectModal, mounted }) => {
        return (
          <div
            className="w-full"
            {...(!mounted && {
              "aria-hidden": true,
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className={`${BUTTON_CLASSES} text-xs`}
                  >
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className={BUTTON_CLASSES}
                  >
                    Wrong network
                  </button>
                );
              }
              if (loading) {
                return (
                  <button className={BUTTON_CLASSES}>
                    <svg
                      className="w-5 h-5 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </button>
                );
              }

              return (
                <button
                  type="button"
                  onClick={() => mintNFT()}
                  className={BUTTON_CLASSES}
                >
                  Mint
                </button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
