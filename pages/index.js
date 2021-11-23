import Head from "next/head";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PizzaCard from "./components/PizzaCard";
import ProjectTomatoCard from "./components/ProjectTomatoCard";
import Team from "./components/Team";
import PizzaMap from "./components/PizzaMap";
import MetaTags from "./components/MetaTags";
import Favicon from "./components/Favicon";

export default function Home() {
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
        <Navbar />
        <div className="space-y-12">
          <div className="flex justify-between my-12 -mr-5 space-x-5 overflow-x-auto md:space-x-4 md:mr-0">
            {["red", "green", "blue", "purple"].map((color, index) => (
              <PizzaCard key={color} color={color} index={index} />
            ))}
          </div>
          <div className="flex flex-col justify-between space-y-6 md:space-x-4 md:space-y-0 md:flex-row">
            <ProjectTomatoCard title="Number of Pizzas" text="2205" />
            <ProjectTomatoCard title="Number of Ingredients" text="24" />
            <ProjectTomatoCard
              title="Estimated Mint Value (ETH)"
              text="0.0522"
            />
            <ProjectTomatoCard title="Launch Date" text="JAN" />
          </div>
        </div>
        <div
          id="about"
          className="flex flex-col justify-between my-24 space-y-6 md:mt-0 md:pt-32 md:mb-32 md:space-y-0 md:flex-row"
        >
          <div className="text-xs font-bold md:text-sm text-darkRed">
            About Funky Pizza
          </div>
          <div className="max-w-3xl text-2xl font-bold md:text-4xl text-darkRed">
            <p>
              We are a group of friends that writes and designs software for a
              living. We were having fun minting NFTs when we ordered 
              <span className="text-orangeCrust">Pizza</span>. A thought came,
              we can generate the coolest, weirdest and funkiest pizzas on the
              blockchain. Something we'd put on our wall. This is how it
              started.
            </p>
            <p>
              <span className="text-orangeCrust">Pizza</span> brings us
              together. It’s culture. World wide. Like, you know, crypto.
            </p>
          </div>
        </div>
        <Team />
        <PizzaMap />
        <Footer />
      </div>
    </div>
  );
}
