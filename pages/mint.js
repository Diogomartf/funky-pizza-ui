import { useEffect } from "react";
import { useState } from "react";
import Head from "next/head";
import MetaTags from "./components/MetaTags";
import Favicon from "./components/Favicon";
import funkyPizzaABI from "./abi/FunkyPizza";
import {
  useContract,
  useTransaction,
  useReadOnlyContract,
} from "@web3-ui/hooks";

import { ethers } from "ethers";
import MintSection from "./components/MintSection";

export default function Mint() {
  const [readOnlyContract, isReadOnlYReady] = useReadOnlyContract(
    "0xFCb3B9B12FD26465AEC5c539637E5088aE07CCeF",
    funkyPizzaABI.abi
  );
  const funkyPizzaContract = useContract(
    "0xFCb3B9B12FD26465AEC5c539637E5088aE07CCeF",
    funkyPizzaABI.abi
  );
  const [execute, loading, error] = useTransaction(funkyPizzaContract.mint);

  const [maxSupply, setMaxSupply] = useState("-");
  const [totalSupply, setTotalSupply] = useState("-");
  const [mintPrice, setMintPrice] = useState();

  const fetchData = async () => {
    const [maxSupply, totalSupply, mintPrice] = await Promise.all([
      await readOnlyContract.max_supply(),
      await readOnlyContract.totalSupply(),
      await readOnlyContract.price(),
    ]);
    setMaxSupply(maxSupply.toString());
    setTotalSupply(totalSupply.toString());
    setMintPrice(ethers.utils.formatEther(mintPrice.toString()));
  };

  useEffect(() => {
    if (readOnlyContract && Object.entries(readOnlyContract).length > 0) {
      fetchData();
    }
  }, [readOnlyContract]);

  return (
    <div>
      <Head>
        <title>Funky Pizza | The best pizza on the blockchain</title>
        <MetaTags />
        <Favicon />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Modak&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="max-w-[70rem] px-5 py-1 mx-auto">
        <MintSection />
      </div>
    </div>
  );
}
