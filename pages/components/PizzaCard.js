import Image from "next/image";

const PizzaCard = ({ color, index }) => {
  return (
    <div className="flex items-center justify-center w-64 h-64 bg-white rounded-lg min-w-[256px]">
      <div className={`w-56 h-56 bg-pastel-${color} rounded`}>
        <Image
          src={`/pizzas/funky-pizza-${index}.png`}
          alt="funky pizza"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default PizzaCard;
