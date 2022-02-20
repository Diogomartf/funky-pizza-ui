import { useState } from "react";
import Head from "next/head";
import MetaTags from "./components/MetaTags";
import Favicon from "./components/Favicon";
import Navbar from "./components/Navbar";
import MintSection from "./components/MintSection";

export default function Mint() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Mint a Funky Pizza | The best pizza on the blockchain</title>
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
      <MintSection />
    </div>
  );
}
