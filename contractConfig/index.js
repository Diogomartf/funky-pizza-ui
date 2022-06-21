import funkyPizzaABI from "../abi/FunkyPizza";

export const contractConfig = {
  addressOrName: process.env.NEXT_PUBLIC_FUNKY_PIZZA_MAINNET_ADDRESS,
  contractInterface: funkyPizzaABI.abi,
};
