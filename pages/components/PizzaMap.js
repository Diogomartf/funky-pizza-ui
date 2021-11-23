const PizzaMapPhases = ({ title, description }) => (
  <div className="space-y-2 w-44">
    <div className="text-lg font-bold text-red-600 md:text-2xl">{title}</div>
    <div className="text-red-500 text-md md:text-xl">{description}</div>
  </div>
);

const PizzaMap = () => (
  <div
    id="pizzamap"
    className="flex flex-col pb-8 pl-8 -mx-5 space-y-6 bg-white md:px-8 md:pb-16 rounded-2xl md:-mx-0"
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
      <div className="pr-8 space-y-10 min-w-max md:pr-0">
        <div className="flex items-center h-6 px-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500">
          <div className="w-1/3 h-2 bg-white rounded-full" />
        </div>
        <div className="flex justify-between space-x-24">
          <PizzaMapPhases
            title="Cooking..."
            description="Our tasty Pizzas are in the oven."
          />
          <PizzaMapPhases
            title="Phase 1"
            description="Launch our 2205 collectible pizzas. Aiming for January."
          />
          <PizzaMapPhases title="Phase 2" description="TBD" />
          <PizzaMapPhases title="Phase 3" description="TBD" />
        </div>
      </div>
    </div>
  </div>
);

export default PizzaMap;
