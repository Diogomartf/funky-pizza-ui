const Footer = () => {
  return (
    <div className="flex flex-col pt-48 my-8 space-y-6 md:space-x-6 md:items-end md:justify-between md:flex-row">
      <img
        src="logo.svg"
        alt="Funky Pizza logo"
        className="w-40 md:w-56 lg:w-64"
      />
      <div className="space-y-2">
        <p className="font-mono text-xs text-gray-500">
          contract address{" "}
          <a
            href="https://etherscan.io/address/0xF71364a7939ff3312363a12daB7cd405cbD31659"
            className="hover:underline"
            target="_blank"
          >
            {process.env.NEXT_PUBLIC_FUNKY_PIZZA_MAINNET_ADDRESS}
          </a>
        </p>
        <p className="text-sm font-bold text-right text-darkRed">
          All rights reserved @ Funky Pizza — {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
