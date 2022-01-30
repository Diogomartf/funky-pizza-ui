import { useWallet } from "@web3-ui/hooks";
import Link from "next/link";

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
      <div>
        <button
          className="py-4 px-6 text-white rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 uppercase whitespace-nowrap drop-shadow-md hover:drop-shadow-lg transition duration-0 hover:duration-500"
          onClick={switchToCorrectNetwork}
        >
          Switch Network
        </button>
      </div>
    );

  if (connected)
    return (
      connection.userAddress && (
        <Link href="/mint">
          <button className="flex justify-center items-center py-2 pl-6 pr-3 text-white rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 uppercase whitespace-nowrap h-fit drop-shadow-md hover:drop-shadow-lg transition duration-0 hover:duration-500">
            Mint
            <div className="p-3 text-black rounded-full bg-white ml-2 text-xs normal-case">
              {connection.ens
                ? connection.ens
                : `
    ${connection.userAddress.substring(
      0,
      4
    )}...${connection.userAddress.substring(
                    connection.userAddress.length - 4
                  )}`}
            </div>
          </button>
        </Link>
      )
    );

  return (
    <div>
      <button
        className="py-4 px-6 text-white rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 uppercase whitespace-nowrap drop-shadow-md hover:drop-shadow-lg transition duration-0 hover:duration-500"
        onClick={connectWallet}
      >
        Connect wallet
      </button>
    </div>
  );
}
