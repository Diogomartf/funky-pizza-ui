import { useState, useEffect } from "react";
import {
  useContract,
  useReadOnlyContract,
  useTransaction,
  useWallet,
} from "@web3-ui/hooks";
import funkyPizzaABI from "../abi/FunkyPizza";
import { ethers } from "ethers";

import MintForm from "./MintForm";
import LoadingOverCard from "./LoadingOvenCard";

export default function MintCard() {
  const { connected, correctNetwork } = useWallet();
  const [maxSupply, setMaxSupply] = useState("-");
  const [totalSupply, setTotalSupply] = useState("-");
  const [mintPrice, setMintPrice] = useState("-");
  const [maxPerMint, setMaxPerMint] = useState(1);
  const [mintAmount, setMintAmount] = useState(1);
  const [lastTransaction, setLastTransaction] = useState(null);

  const [readOnlyFunkyPizzaContract, isReadOnlyFunkyPizzaContract] =
    useReadOnlyContract(
      process.env.NEXT_PUBLIC_FUNKY_PIZZA_ADDRESS,
      funkyPizzaABI.abi
    );
  const [funkyPizzaContract, isReady] = useContract(
    process.env.NEXT_PUBLIC_FUNKY_PIZZA_ADDRESS,
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
      isReadOnlyFunkyPizzaContract &&
      readOnlyFunkyPizzaContract &&
      Object.entries(readOnlyFunkyPizzaContract).length > 0
    ) {
      fetchData();
    }
  }, [readOnlyFunkyPizzaContract]);

  const increment = () =>
    mintAmount < maxPerMint && setMintAmount(mintAmount + 1);
  const decrement = () => mintAmount > 1 && setMintAmount(mintAmount - 1);

  const [execute, loading, error] = useTransaction(funkyPizzaContract?.mint);

  const mintNFT = async () => {
    if (connected && correctNetwork) {
      const transaction = await execute([
        mintAmount,
        {
          value: ethers.utils.parseEther((mintPrice * mintAmount).toString()),
        },
      ]);

      if (!transaction.code) {
        setLastTransaction(transaction);
      }
    }
  };

  return (
    <div>
      {loading ? (
        <LoadingOverCard></LoadingOverCard>
      ) : (
        <div>
          {lastTransaction ? (
            <div className="flex items-end justify-center p-4 mx-auto bg-[url('/pizza-leds.jpeg')] shadow w-60 h-52 md:w-80 md:h-64 md:mb-0 lg:mb-0 md:p-8 rounded-xl bg-center bg-cover ">
              <a
                href={`https://rinkeby.etherscan.io/tx/${lastTransaction.hash}`}
                className="p-2 px-4 mx-auto text-xs text-white bg-gradient-to-r from-orangy to-orangeCrust hover:drop-shadow-lg hover:duration-200 rounded-2xl"
                target="_blank"
              >
                Check transaction
              </a>
            </div>
          ) : (
            <div className="flex flex-col p-4 mx-auto space-y-6 bg-white border shadow md:mb-0 lg:mb-0 md:p-8 rounded-xl max-w-min min-w-min">
              <div className="flex justify-between text-tomato">
                <div className="text-sm font-semibold">Mint a Funky Pizza</div>
                <div className="text-sm font-semibold">ETH</div>
              </div>
              <div className="text-center text-7xl text-tomato md:text-8xl font-modak">
                {mintPrice}
              </div>
              <MintForm
                increment={increment}
                decrement={decrement}
                mintAmount={mintAmount}
                mintPrice={mintPrice}
                maxPerMint={maxPerMint}
                mintNFT={mintNFT}
                loading={loading}
                error={error}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
