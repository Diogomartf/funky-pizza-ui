const Footer = () => {
  return (
    <div className="flex items-end justify-between pt-48 my-8 space-x-6">
      <img
        src="logo.svg"
        alt="Funky Pizza logo"
        className="w-40 md:w-56 lg:w-64"
      />
      <div className="text-sm font-bold text-right text-darkRed">
        All rights reserved @ Funky Pizza — {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
