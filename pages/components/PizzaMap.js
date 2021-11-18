const PizzaMapPhases = ({ title, description }) => (
  <div className="space-y-2 w-44">
    <div className="text-red-600 font-bold text-lg md:text-2xl">{title}</div>
    <div className="text-red-500 text-md md:text-xl">{description}</div>
  </div>
);

export const PizzaMap = () => (
  <div
    id="pizzamap"
    className="flex flex-col space-y-6 bg-white pl-8 md:px-8 pb-8 md:pb-16 rounded-2xl -mx-5 md:-mx-0"
  >
    <div className="flex justify-between overflow-hidden">
      <img src="pizzamap.svg" alt="pizzamap" className="w-52 md:w-96" />
      <img
        src="pizzas/sliced-funky-pizza.png"
        alt="pizzamap"
        className="w-40 md:w-auto"
      />
    </div>
    <div className="overflow-auto">
      <div className="space-y-10 min-w-max pr-8 md:pr-0">
        <div className="h-6 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center px-2">
          <div className="h-2 w-1/3 rounded-full bg-white" />
        </div>
        <div className="flex justify-between space-x-24">
          <PizzaMapPhases
            title="Cooking..."
            description="Our tasty Pizzas are in the hoven."
          />
          <PizzaMapPhases
            title="Phase 1"
            description="Launch our 2205 collectible pizzas. Aiming for December."
          />
          <PizzaMapPhases title="Phase 2" description="TBD" />
          <PizzaMapPhases title="Phase 3" description="TBD" />
        </div>
      </div>
    </div>
  </div>
);
