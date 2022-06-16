import MintButton from "./MintButton";

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
  mintAmount,
  increment,
  decrement,
  isPaused,
}) {
  return (
    <>
      <div className="flex items-center justify-between space-x-3 md:space-x-5">
        {isPaused ? (
          <div className="flex justify-center w-full px-6 py-4 text-white uppercase rounded-full cursor-pointer bg-gradient-to-r from-orangy to-orangeCrust hover:drop-shadow-lg hover:duration-200 h-fit">
            Mint Paused
          </div>
        ) : (
          <>
            <QuantityInput
              increment={increment}
              decrement={decrement}
              mintAmount={mintAmount}
            />
            <MintButton mintNFT={mintNFT} loading={loading} />
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
