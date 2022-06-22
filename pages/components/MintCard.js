import { useState } from "react";
import { ethers } from "ethers";
import {
  useContractWrite,
  useContractRead,
  useWaitForTransaction,
  useConnect,
  useNetwork,
} from "wagmi";

import MintForm from "./MintForm";
import LoadingOverCard from "./LoadingOvenCard";
import { contractConfig } from "../../contractConfig";

export default function MintCard() {
  const [mintAmount, setMintAmount] = useState(1);
  const { isConnected } = useConnect();
  const { activeChain } = useNetwork();

  const increment = () =>
    mintAmount < maxPerMint && setMintAmount(mintAmount + 1);
  const decrement = () => mintAmount > 1 && setMintAmount(mintAmount - 1);

  const etherscanUrl = () =>
    activeChain.id === 1
      ? `https://etherscan.io/tx/${mintData.hash}`
      : `https://rinkeby.etherscan.io/tx/${mintData.hash}`;

  const openseaUrl = () =>
    activeChain.id === 1
      ? `https://opensea.io/assets/${mintData?.to}/${tokenId()}`
      : `https://testnets.opensea.io/assets/rinkeby/${
          mintData?.to
        }/${tokenId()}`;

  const { data: maxPerMint } = useContractRead(contractConfig, "maxPerMint");
  const { data: paused } = useContractRead(contractConfig, "paused");
  const { data: price, isSuccess: isPriceSuccess } = useContractRead(
    contractConfig,
    "price"
  );

  const {
    data: mintData,
    write: mintNFT,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
    error: mintError,
  } = useContractWrite(contractConfig, "mint", {
    args: mintAmount,
    overrides: {
      value: isPriceSuccess && price.mul(mintAmount),
    },
  });

  const {
    data: mintedData,
    isSuccess: isMinted,
    error: txError,
  } = useWaitForTransaction({
    hash: mintData?.hash,
  });

  const tokenId = () => parseInt(mintedData.logs[0].topics[3]);

  txError && console.log("txError:", txError);

  return (
    <div>
      {isMintLoading ? (
        <LoadingOverCard></LoadingOverCard>
      ) : (
        <div>
          {isMintStarted ? (
            <div className="flex flex-col space-y-2 items-end justify-end p-4 mx-auto bg-[url('/pizza-leds.jpeg')] shadow w-60 h-52 md:w-80 md:h-64 md:mb-0 lg:mb-0 md:p-8 rounded-xl bg-center bg-cover ">
              <a
                href={etherscanUrl()}
                className="p-2 px-4 mx-auto text-xs text-white bg-gradient-to-r from-orangy to-orangeCrust hover:drop-shadow-lg hover:duration-200 rounded-2xl"
                target="_blank"
              >
                Check transaction
              </a>

              {isMinted && (
                <a
                  className="p-2 px-4 mx-auto text-xs text-white bg-gradient-to-b from-teal-500 to-blue-500 hover:drop-shadow-lg hover:duration-200 rounded-2xl"
                  href={openseaUrl()}
                  target="_blank"
                >
                  Check on Opensea
                </a>
              )}
            </div>
          ) : (
            <div className="min-w-[350px] flex flex-col p-4 mx-auto space-y-6 bg-white border shadow md:mb-0 lg:mb-0 md:p-8 rounded-xl max-w-min">
              <div className="flex justify-between text-tomato">
                <div className="text-sm font-semibold">Mint a Funky Pizza</div>
                <div className="text-sm font-semibold">ETH</div>
              </div>
              <div className="text-5xl text-center text-tomato md:text-6xl font-modak">
                {price ? ethers.utils.formatEther(price) : "0.00522"}
              </div>

              <MintForm
                mintNFT={mintNFT}
                error={mintError}
                loading={isMintLoading}
                mintAmount={mintAmount}
                increment={increment}
                decrement={decrement}
                isPaused={paused}
                isConnected={isConnected}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
