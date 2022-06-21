import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function ConnectWallet() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <div
            onClick={openAccountModal}
            className="p-3 text-sm font-medium text-white uppercase transition rounded-full bg-gradient-to-r from-orangy to-orangeCrust hover:drop-shadow-lg hover:duration-200 h-fit"
            {...(!mounted && {
              "aria-hidden": true,
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <button onClick={openConnectModal} type="button">
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }
              return (
                <button type="button" className="flex items-center">
                  <p>
                    {account.ensName ? account.ensName : account.displayName}
                  </p>
                  <div className="p-1 px-2 ml-2 rounded-full bg-tomato">
                    <p className="font-mono text-xs text-white ">
                      {account.displayBalance
                        ? ` ${account.displayBalance}`
                        : ""}
                    </p>
                  </div>
                </button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
