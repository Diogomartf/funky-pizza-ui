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
      <div className="flex flex-col justify-between space-y-6 overflow-auto md:space-x-4 md:space-y-0 md:flex-row">
        <ProjectTomatoCard title="Number of Pizzas" text="2205" />
        <ProjectTomatoCard title="Number of traits" text="54" />
        <ProjectTomatoCard title="Estimated Mint Value (ETH)" text="0.0052" />
        <ProjectTomatoCard title="Launch Date" text="22 May" />
      </div>
    </div>
  );
};

export default Hero;
