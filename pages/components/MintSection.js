import { useState, useEffect } from "react";
import {
  useContract,
  useTransaction,
  useWallet,
  useReadOnlyContract,
} from "@web3-ui/hooks";
import funkyPizzaABI from "../abi/FunkyPizza";
import { ethers } from "ethers";

const funkyPizzaAddress = "0xFCb3B9B12FD26465AEC5c539637E5088aE07CCeF";

const MintForm = ({ contract, mintPrice, maxPerMint }) => {
  const { connected, correctNetwork } = useWallet();
  const [mintAmount, setMintAmount] = useState(1);
  const [lastTrasnaction, setLastTransaction] = useState(null);
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
      {lastTrasnaction && (
        <a
          href={`https://rinkeby.etherscan.io/tx/${lastTrasnaction.hash}`}
          className="text-black"
          target="_blank"
        >
          Your Funky Pizza transaction
        </a>
      )}
    </>
  );
};

export default function MintSection() {
  const [maxSupply, setMaxSupply] = useState("-");
  const [totalSupply, setTotalSupply] = useState("-");
  const [mintPrice, setMintPrice] = useState("-");
  const [maxPerMint, setMaxPerMint] = useState(1);

  const [readOnlyFunkyPizzaContract, isReadyOnlyReady] = useReadOnlyContract(
    funkyPizzaAddress,
    funkyPizzaABI.abi
  );
  const [funkyPizzaContract, isReady] = useContract(
    funkyPizzaAddress,
    funkyPizzaABI.abi
  );

  const fetchData = async () => {
    const [maxSupply, totalSupply, mintPrice, maxPerMint] = await Promise.all([
      await readOnlyFunkyPizzaContract.max_supply(),
      await readOnlyFunkyPizzaContract.totalSupply(),
      await readOnlyFunkyPizzaContract.price(),
      await readOnlyFunkyPizzaContract.maxPerMint(),
    ]);
    setMaxSupply(maxSupply.toString());
    setTotalSupply(totalSupply.toString());
    setMintPrice(ethers.utils.formatEther(mintPrice.toString()));
    setMaxPerMint(maxPerMint.toString());
  };

  useEffect(() => {
    if (
      readOnlyFunkyPizzaContract &&
      Object.entries(readOnlyFunkyPizzaContract).length > 0
    ) {
      fetchData();
    }
  }, [readOnlyFunkyPizzaContract]);

  return (
    <div className="flex flex-col p-8 space-y-6 rounded-xl bg-white max-w-min min-w-min mx-auto">
      <div className="flex justify-between text-tomato">
        <div>Mint a Funky Pizza</div>
        <div>ETH</div>
      </div>
      <div className="text-center text-tomato text-7xl md:text-8xl font-modak">
        {mintPrice}
      </div>
      <MintForm
        mintPrice={mintPrice}
        maxPerMint={maxPerMint}
        contract={funkyPizzaContract}
      />
    </div>
  );
}
