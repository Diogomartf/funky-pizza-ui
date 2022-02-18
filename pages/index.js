import { useState } from "react";
import Head from "next/head";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import PizzaMap from "./components/PizzaMap";
import MetaTags from "./components/MetaTags";
import Favicon from "./components/Favicon";
import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero isOpen={isOpen} />
      <About />
      <PizzaMap />
      <Team />
      <Footer />
    </div>
  );
}
