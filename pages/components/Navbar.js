import { useState } from "react";
import Link from "next/link";

import MenuIcon from "./MenuIcon";
import SocialLinks from "./SocialLinks";
import ConnectWallet from "./ConnectWallet";
import NavButton from "./NavButton";

const Navbar = ({ isOpen, setIsOpen }) => {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`flex ${isOpen ? "nav-overlay" : "hidden"}`}
      ></div>
      <div
        className={`flex justify-between my-8 z-10 ${
          isOpen &&
          "bg-white w-full -mx-5 -mt-2 px-5 pb-8 pt-[40px] rounded-b-2xl absolute"
        }`}
      >
        {!isOpen && (
          <div className="flex">
            <Link href="/">
              <img
                src="logo.svg"
                alt="Funky Pizza logo"
                className="w-48 md:w-56"
              />
            </Link>
            <p className="hidden w-40 ml-2 text-sm font-semibold md:block md:w-28 text-darkRed md:mx-2 lg:mx-6 xl:mx-8 2xl:mx-12">
              Tasty collectible NFTs for every pizza lover.
            </p>
          </div>
        )}
        <div
          className={`flex md:items-start ${
            isOpen && "w-full flex-col-reverse mb-12"
          }`}
        >
          <div
            className={`${
              !isOpen ? "hidden" : "flex space-y-8"
            } md:space-x-3 md:flex flex-col md:flex-row`}
          >
            <NavButton href="#about" onClick={() => setIsOpen(false)}>
              About
            </NavButton>
            <NavButton href="#pizzamap" onClick={() => setIsOpen(false)}>
              Pizzamap
            </NavButton>
            <div className="relative hidden space-y-2 md:block">
              <NavButton href="#" onClick={() => setShowSocial(!showSocial)}>
                Social
              </NavButton>
              {showSocial && (
                <div className="absolute hidden p-1 bg-white rounded-full top-11 -left-2/3 md:space-x-2 md:flex md:items-center">
                  <SocialLinks />
                </div>
              )}
            </div>

            <ConnectWallet />
          </div>
          <div className="flex">
            <div className={isOpen ? "flex space-x-3 mb-12" : "hidden"}>
              <SocialLinks />
            </div>
            <div
              className={!isOpen ? "md:hidden" : "ml-auto"}
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon open={isOpen} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
