import { ethers } from "ethers";
import { useEffect, useState } from "react";
import funkyPizzaAbi from "../abi/funkyPizza.json";

const Wallet = () => {
  const [details, setdetails] = useState({
    price: "",
    currentID: 0,
    maxSupply: 0,
  });
  const [account, setAccount] = useState();
  const FUNKY_PIZZA_ADDRESS = "0xd4D19bc7F76488Cf0b9BbCC71Ef4d38E86876D4E";

  useEffect(async () => {
    if (typeof window !== "undefined") {
      checkIfWalletIsConnected();
    }
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      }

      //Check if we're authorized to access the user's wallet
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  // Connect to users wallet
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setAccount(accounts[0]);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const mint = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const funkyContract = new ethers.Contract(
      FUNKY_PIZZA_ADDRESS,
      funkyPizzaAbi.abi,
      signer
    );
    console.log("funkyContract:", funkyContract);
    let funkyMintPrice = await funkyContract.price();

    setdetails({
      price: ethers.utils.formatEther(await funkyContract.price()),
    });

    let mintTxn = await funkyContract.mint(1, { value: funkyMintPrice });

    console.log("Mining...", mintTxn.hash);
    await mintTxn.wait();
    console.log("Mined -- ", mintTxn.hash);
  };

  return (
    <div className="flex flex-col justify-center">
      {account && (
        <div>
          <div className="p-1 text-sm text-gray-600 bg-gray-100 rounded">
            <p>
              {String(account).substring(0, 6) +
                "..." +
                String(account).substring(38)}
            </p>
          </div>
          <div>
            <div className="font-bold">{details.price}ETH</div>
          </div>
          <button
            className="p-4 text-white rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500"
            onClick={mint}
          >
            mint
          </button>
        </div>
      )}
      {!account && (
        <button
          className="p-4 text-white rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500"
          onClick={connectWallet}
        >
          Connect wallet
        </button>
      )}
    </div>
  );
};

export default Wallet;
