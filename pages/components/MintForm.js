import { useWallet } from "@web3-ui/hooks";

const QuantityInput = ({ increment, decrement, mintAmount }) => (
  <div className="flex items-center p-2 space-x-2 bg-white rounded-full drop-shadow-md">
    <button
      className="p-3 rounded-full bg-gradient-to-r from-orangy to-orangeCrust hover:drop-shadow-lg hover:duration-200 h-fit"
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
    <div className="w-4 text-center md:w-6 text-tomato">{mintAmount}</div>
    <button
      className="p-3 rounded-full bg-gradient-to-r from-orangy to-orangeCrust hover:drop-shadow-lg hover:duration-200 h-fit"
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33398 8H12.6673"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </div>
);

export default function MintForm({
  mintNFT,
  error,
  loading,
  increment,
  decrement,
  mintAmount,
  isPaused,
  isFetchingData,
}) {
  const { connected, connectWallet, correctNetwork } = useWallet();

  return (
    <>
      <div className="flex items-center justify-between space-x-3 md:space-x-5">
        {isFetchingData || isPaused ? (
          <div className="w-full flex justify-center px-6 py-4 text-white uppercase rounded-full cursor-pointer bg-gradient-to-r from-orangy to-orangeCrust hover:drop-shadow-lg hover:duration-200 h-fit">
            {isFetchingData ? "Preparing ingredients..." : "Mint Paused"}
          </div>
        ) : (
          <>
            <QuantityInput
              increment={increment}
              decrement={decrement}
              mintAmount={mintAmount}
            />
            <button
              onClick={!isPaused && (connected ? mintNFT : connectWallet)}
              className="flex px-6 py-4 text-white uppercase rounded-full cursor-pointer bg-gradient-to-r from-orangy to-orangeCrust hover:drop-shadow-lg hover:duration-200 h-fit"
              disabled={!correctNetwork || isPaused}
            >
              {loading && (
                <svg
                  className="w-5 h-5 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {!loading && "Mint"}
            </button>
          </>
        )}
      </div>
      {error && (
        <div className="px-2 py-1 mx-auto text-xs text-red-700 bg-red-100 rounded w-fit">
          {error.error?.message || error?.message}
        </div>
      )}
    </>
  );
}
