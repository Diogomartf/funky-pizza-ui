import Head from "next/head";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PizzaCard from "./components/PizzaCard";
import ProjectTomatoCard from "./components/ProjectTomatoCard";
import Team from "./components/Team";

export default function Home() {
  return (
    <div className="relative font-sans bg-beige">
      <Head>
        <title>Funky Pizza</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Modak&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="max-w-6xl px-5 py-1 mx-auto md:px-0">
        <Navbar />
        <div className="space-y-12">
          <div className="flex my-12 -mr-5 space-x-5 overflow-x-auto md:mr-0">
            {["red", "green", "blue", "purple"].map((color, index) => (
              <PizzaCard key={color} color={color} index={index} />
            ))}
          </div>
          <div className="flex flex-col space-y-6 md:space-y-0 md:space-x-5 md:flex-row">
            <ProjectTomatoCard title="Number of Pizzas" text="2205" />
            <ProjectTomatoCard title="Number of Ingredients" text="24" />
            <ProjectTomatoCard title="Estimated Mint Value" text="0.0522" />
            <ProjectTomatoCard title="Launch Date" text="DEC" />
          </div>
        </div>
        <div
          id="about"
          className="flex flex-col justify-between my-32 space-y-6 md:space-y-0 md:flex-row"
        >
          <div className="text-xs font-bold md:text-sm text-darkRed">
            About Funky Pizza
          </div>
          <div className="max-w-3xl text-2xl font-bold md:text-4xl text-darkRed">
            We are a group of friends that writes software for a living, being
            fascinated by the crypto space, we were having fun minting NFTs when
            we ordered <span className="text-orangeCrust">Pizza</span>. This is
            how it started. In love with generative art and NFTs we thought how
            can we generate something cool. Something we'd put on our wall, oh,
            we mean plate. <span className="text-orangeCrust">Pizza</span>{" "}
            brings us together. It’s culture. World wide. Like, you know,
            crypto.
          </div>
        </div>
        <Team />
        <Footer />
      </div>
    </div>
  );
}
