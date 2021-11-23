import { useState } from "react";
import MenuIcon from "./MenuIcon";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          <a href="/">
            <img
              src="logo.svg"
              alt="Funky Pizza logo"
              className="w-48 md:w-56 lg:w-64"
            />
          </a>
        )}
        <div
          className={`flex ${
            isOpen ? "w-full flex-col-reverse mb-12" : "space-x-16"
          }`}
        >
          <div
            className={`${
              !isOpen ? "hidden" : "flex space-y-8"
            } md:space-x-5 md:flex flex-col md:flex-row`}
          >
            <p className="w-40 text-sm font-semibold md:w-28 text-darkRed md:mx-2 lg:mx-6 xl:mx-8 2xl:mx-12">
              Tasty collectible NFTs for every pizza lover.
            </p>
            <a
              onClick={() => setIsOpen(false)}
              href="#about"
              className="group h-fit"
            >
              <p className="mb-2 text-3xl font-semibold uppercase md:font-medium md:text-sm text-darkRed">
                About
              </p>
              <hr
                className={`border-2 border-tomato/20 group-hover:border-tomato ${
                  isOpen ? "w-full" : "w-28"
                }`}
              />
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="#pizzamap"
              className="group h-fit"
            >
              <p className="mb-2 text-3xl font-semibold uppercase md:font-medium md:text-sm text-darkRed">
                Pizzamap
              </p>
              <hr
                className={`border-2 border-tomato/20 group-hover:border-tomato ${
                  isOpen ? "w-full" : "w-28"
                }`}
              />
            </a>
          </div>
          <div className="flex">
            <div className={!isOpen ? "hidden md:flex" : "flex"}>
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
