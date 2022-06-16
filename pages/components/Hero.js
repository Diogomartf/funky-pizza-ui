import Link from "next/link";
import PizzaCard from "./PizzaCard";
import ProjectTomatoCard from "./ProjectTomatoCard";

const Hero = ({ isOpen }) => {
  return (
    <div className={`space-y-12 ${isOpen ? "pt-[133px] md:pt-0" : ""}`}>
      <div className="pr-5 -mx-5">
        <div className="flex justify-between pl-5 my-12 -mr-5 space-x-5 overflow-x-auto xl:overflow-hidden xl:mr-0 horizontal-list">
          {["red", "green", "blue", "purple"].map((color, index) => (
            <PizzaCard key={color} color={color} index={index} />
          ))}
        </div>
      </div>
      <Link href="/mint">
        <div className="flex justify-center w-full px-6 py-4 text-3xl tracking-wide text-white uppercase rounded-full cursor-pointer md:text-5xl font-modak bg-gradient-to-b from-orangy via-orangeCrust to-tomato hover:drop-shadow-lg hover:duration-200 h-fit">
          mint now
        </div>
      </Link>
      <div className="flex flex-col justify-between space-y-6 overflow-auto md:space-x-4 md:space-y-0 md:flex-row">
        <ProjectTomatoCard title="Number of Pizzas" text="2205" />
        <ProjectTomatoCard title="Number of traits" text="54" />
        <ProjectTomatoCard title="Mint price (ETH)" text="0.00522" />
        <ProjectTomatoCard title="Currently minted  " text="186" />
      </div>
    </div>
  );
};

export default Hero;
