import { useState } from "react";
import Head from "next/head";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PizzaCard from "./components/PizzaCard";
import ProjectTomatoCard from "./components/ProjectTomatoCard";
import Team from "./components/Team";
import PizzaMap from "./components/PizzaMap";
import MetaTags from "./components/MetaTags";
import Favicon from "./components/Favicon";
import About from "./components/About";
import Wallet from "./components/Wallet";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative font-sans bg-beige">
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
        <Toaster position="bottom-center" />
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`space-y-12 ${isOpen && "pt-[133px] md:pt-0"}`}>
          <div className="pr-5 -mx-5">
            <div className="flex justify-between pl-5 my-12 -mr-5 space-x-5 overflow-x-auto xl:overflow-hidden xl:mr-0 horizontal-list">
              {["red", "green", "blue", "purple"].map((color, index) => (
                <PizzaCard key={color} color={color} index={index} />
              ))}
            </div>
          </div>
          <Wallet />
          <div className="flex flex-col justify-between space-y-6 overflow-auto md:space-x-4 md:space-y-0 md:flex-row">
            <ProjectTomatoCard title="Number of Pizzas" text="2205" />
            <ProjectTomatoCard title="Number of Ingredients" text="24" />
            <ProjectTomatoCard
              title="Estimated Mint Value (ETH)"
              text="0.0522"
            />
            <ProjectTomatoCard title="Launch Date" text="JAN" />
          </div>
        </div>
        <About />
        <Team />
        <PizzaMap />
        <Footer />
      </div>
    </div>
  );
}
