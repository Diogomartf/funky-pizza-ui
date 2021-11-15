const Footer = () => {
  return (
    <div className="flex items-end justify-between my-8">
      <img
        src="logo.svg"
        alt="Funky Pizza logo"
        className="w-40 md:w-56 lg:w-64"
      />
      <div className="text-sm font-bold text-right text-darkRed">
        All rights reserved @ FunkyPizza — 2021
      </div>
    </div>
  );
};

export default Footer;
