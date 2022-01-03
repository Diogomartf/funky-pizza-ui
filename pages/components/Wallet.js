import { ethers } from "ethers";
import { useEffect, useState } from "react";
import funkyPizzaAbi from "../abi/funkyPizza.json";
import toast from "react-hot-toast";
import ErrorToast from "./ErrorToast";
import SuccesToast from "./SuccesToast";

const FUNKY_PIZZA_CONTRACT_ADDRESS =
  "0xd4D19bc7F76488Cf0b9BbCC71Ef4d38E86876D4E";

const initialState = {
  totalSupply: "-",
  mintPrice: 0,
  isMintPaused: true,
  maxMintAmount: 1,
  maxSupply: 2205,
};

const Wallet = () => {
  const [
    { totalSupply, mintPrice, isMintPaused, maxMintAmount, maxSupply },
    setMintState,
  ] = useState(initialState);
  const [mintAmount, setMintAmount] = useState(1);
  const [currentAccount, setCurrentAccount] = useState();
  const [isLoading, setIsLoading] = useState("");

  useEffect(async () => {
    if (typeof window !== "undefined") {
      checkIfWalletIsConnected();
    }
  }, []);

  useEffect(() => {
    if (currentAccount) {
      fetchContractState();
    }
  }, [currentAccount]);

  const succesToast = () => {
    toast.custom(<SuccesToast />);
  };

  const errorToast = () => {
    toast.custom(<ErrorToast />);
  };

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
        setCurrentAccount(account);
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
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const mint = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const funkyPizzaContract = new ethers.Contract(
        FUNKY_PIZZA_CONTRACT_ADDRESS,
        funkyPizzaAbi.abi,
        signer
      );
      try {
        setIsLoading(true);
        let mintTransaction = await funkyPizzaContract.mint(mintAmount, {
          value: mintPrice.mul(mintAmount),
        });

        console.log("Minting...", mintTransaction.hash);
        await mintTransaction.wait();
        console.log("Mined -- ", mintTransaction.hash);
        succesToast();
        fetchContractState();
      } catch (err) {
        console.log(err);
        errorToast();
      } finally {
        setIsLoading(false);
      }
    }
  };

  async function fetchContractState() {
    //if (isMintPaused) return;
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const funkyPizzaContract = new ethers.Contract(
        FUNKY_PIZZA_CONTRACT_ADDRESS,
        funkyPizzaAbi.abi,
        signer
      );

      try {
        //const contrcatIsMintPaused = await contract.paused();
        const contractMintPrice = await funkyPizzaContract.price();
        //const contractTotalSupply = await contract.totalSupply();
        const contractMaxMintAmount = await funkyPizzaContract.max_per_mint();
        const contractMaxMaxSupply = await funkyPizzaContract.max_supply();

        setMintState((oldState) => ({
          ...oldState,
          //isMintPaused: contrcatIsMintPaused,
          mintPrice: contractMintPrice,
          //totalSupply: parseInt(contractTotalSupply, 10),
          maxMintAmount: parseInt(contractMaxMintAmount, 10),
          maxSupply: parseInt(contractMaxMaxSupply, 10),
        }));
      } catch (err) {
        console.log("Error: ", err);
        errorToast();
      }
    }
  }

  const mintInputOnChange = (e) => {
    let value = parseInt(e.target.value, 10);

    if (value > maxMintAmount) value = maxMintAmount;

    setMintAmount(parseInt(value, 10));
  };

  return (
    <div className="flex flex-col justify-center">
      Minted {totalSupply}/{maxSupply}
      {currentAccount ? (
        <div>
          <div className="p-1 text-sm text-gray-600 bg-gray-100 rounded">
            <p>
              {String(currentAccount).substring(0, 6) +
                "..." +
                String(currentAccount).substring(38)}
            </p>
          </div>
          <div>
            <div className="font-bold">
              {ethers.utils.formatEther(mintPrice)}ETH
            </div>
          </div>
          <input
            type="number"
            min="1"
            max={maxMintAmount}
            value={mintAmount}
            onChange={mintInputOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            className="p-4 text-white rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 "
            onClick={mint}
          >
            {isLoading
              ? "Minting..."
              : `Mint NFT (${ethers.utils.formatEther(mintPrice)} Ξ)`}
          </button>
        </div>
      ) : (
        <button
          className="p-4 text-white rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Wallet;
