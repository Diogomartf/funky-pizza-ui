import { useWallet } from "@web3-ui/hooks";
import Link from "next/link";

const CrustyButton = ({ onClick, children }) => (
  <button
    className="p-3 text-sm font-medium text-white uppercase transition rounded-full bg-gradient-to-r from-orangy to-orangeCrust hover:drop-shadow-lg hover:duration-200 h-fit"
    onClick={onClick}
  >
    {children}
  </button>
);

const WalletAddress = ({ connection }) => (
  <div className="p-1 ml-2 bg-white rounded-full">
    <p className="font-mono text-xs text-gray-700 normal-case">
      {connection.ens
        ? connection.ens
        : `
    ${connection.userAddress.substring(
      0,
      4
    )}...${connection.userAddress.substring(
            connection.userAddress.length - 4
          )}`}
    </p>
  </div>
);

export default function ConnectWallet() {
  const {
    connection,
    connectWallet,
    connected,
    correctNetwork,
    switchToCorrectNetwork,
  } = useWallet();

  if (!correctNetwork)
    return (
      <CrustyButton onClick={switchToCorrectNetwork}>
        {" "}
        Switch Network
      </CrustyButton>
    );

  if (connected)
    return (
      connection.userAddress && (
        <Link href="/mint">
          <CrustyButton>
            <div className="flex items-center space-x-2">
              Mint
              <WalletAddress connection={connection} />
            </div>
          </CrustyButton>
        </Link>
      )
    );

  return <CrustyButton onClick={connectWallet}>Connect wallet</CrustyButton>;
}
