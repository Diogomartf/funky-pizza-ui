const PizzaMapPhases = ({ title, description }) => (
  <div className="space-y-2 w-44">
    <div className={`text-xl font-semibold text-tomato md:text-2xl`}>
      {title}
    </div>
    <div className="text-sm font-semibold text-darkRed">{description}</div>
  </div>
);

const PizzaMap = () => (
  <div className="px-5 lg:px-0">
    <div
      id="pizzamap"
      className="flex flex-col pb-8 pl-5 -mx-5 space-y-6 bg-white md:px-8 md:pb-16 rounded-2xl md:-mx-0"
    >
      <div className="flex items-center justify-between overflow-hidden">
        <p className="text-4xl uppercase md:text-7xl font-modak text-tomato">
          Pizzamap
        </p>
        <img
          src="pizzas/sliced-funky-pizza.png"
          alt="pizza on pizzamap"
          className="w-40 overflow-hidden md:w-auto"
        />
      </div>
      <div className="-ml-5">
        <div className="px-5 overflow-x-auto">
          <div className="space-y-10 min-w-max lg:min-w-0 md:pr-0">
            <div className="flex items-center h-6 px-2 rounded-full bg-gradient-to-r from-yellow-500 to-orangeCrust">
              <div className="w-1/3 h-2 bg-white rounded-full" />
            </div>
            <div className="flex justify-between space-x-24">
              <PizzaMapPhases
                title="Cooking..."
                description="Our tasty Pizzas are in the oven."
              />
              <PizzaMapPhases
                title="Serving"
                description="Launch our 2205 collectible pizzas. On the Bitcoin pizza day, 22/05/2022."
              />
              <PizzaMapPhases
                title="Eating"
                description="Make pizza related apps that will increase the value of the brand. Make partnerships with pizza brands."
              />
              <PizzaMapPhases
                title="More pizza"
                description="What the community feels right, with pizza of course."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PizzaMap;
