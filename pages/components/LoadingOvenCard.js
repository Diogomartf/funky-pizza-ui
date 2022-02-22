const LoadingPizzaCard = () => (
  <div className="flex items-end justify-center p-4 mx-auto w-60 h-52 md:w-80 md:h-64 bg-gray-700 shadow md:mb-0 lg:mb-0 md:p-8 rounded-xl bg-[url('/oven.jpg')] bg-cover bg-center">
    <div className="px-4 py-3 text-white bg-opacity-50 bg-orangeCrust rounded-3xl h-fit animate-pulse">
      Cooking...
    </div>
  </div>
);

export default LoadingPizzaCard;
