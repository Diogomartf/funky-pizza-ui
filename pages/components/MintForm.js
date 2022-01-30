import { useState } from "react";
import { useTransaction, useWallet } from "@web3-ui/hooks";
import { ethers } from "ethers";

export default function MintForm({ contract, mintPrice, maxPerMint }) {
  const { connected, correctNetwork } = useWallet();
  const [mintAmount, setMintAmount] = useState(1);
  const [lastTransaction, setLastTransaction] = useState(null);
  const increment = () =>
    mintAmount < maxPerMint && setMintAmount(mintAmount + 1);

  const decrement = () => mintAmount > 1 && setMintAmount(mintAmount - 1);

  const [execute, loading, mintError] = useTransaction(contract?.mint);

  const mintNFT = async () => {
    if (connected && correctNetwork) {
      const transcation = await execute([
        mintAmount,
        {
          value: ethers.utils.parseEther((mintPrice * mintAmount).toString()),
        },
      ]);

      setLastTransaction(transcation);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center text-white">
        <div className="flex space-x-2 p-2 rounded-full bg-white items-center drop-shadow-md">
          <button
            className="p-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"
            onClick={decrement}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33398 8H12.6673"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="text-tomato">{mintAmount}</div>
          <button
            className="p-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"
            onClick={increment}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3.33334V12.6667"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.33398 8H12.6673"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <button
          onClick={mintNFT}
          className="flex px-6 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 uppercase"
          disabled={!connected || !correctNetwork}
        >
          {loading && (
            <svg
              class="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          {!loading && "Mint"}
        </button>
      </div>
      {lastTransaction && (
        <a
          href={`https://rinkeby.etherscan.io/tx/${lastTransaction.hash}`}
          className="text-black"
          target="_blank"
        >
          Your Funky Pizza transaction
        </a>
      )}
    </>
  );
}
