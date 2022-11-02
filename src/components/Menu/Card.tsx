import { useState } from "react";
import { InputQuantityProductInCart } from "../InputQuantityProductInCart";
import { Product, CartProduct } from "../../@types/types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContextCoffeeCart } from "../../context/CartContext";

interface CoffeeProps {
  coffee: Product;
}

export const Card = ({ coffee }: CoffeeProps) => {
  const { id, name, description, price, img_url, categories } = coffee;
  const [quantityCoffee, setQuantityCoffee] = useState(0);

  const priceFixed = price.toFixed(2).replace(".", ",").toString();
  const { addCoffeeToCart } = ContextCoffeeCart();

  const notify = () =>
    toast.success("Adicionado com sucesso", {
      autoClose: 3000,
      position: "top-right",
    });

  const handleIncrementCoffee = () => {
    setQuantityCoffee((state) => state - 1);
  };

  const handleDecrementCoffee = () => {
    setQuantityCoffee((state) => state + 1);
  };

  const handleAddCoffeeToCart = () => {
    const coffeeToCart = {
      ...coffee,
      quantityCoffee,
    };
    addCoffeeToCart(coffeeToCart);
    notify();
    setQuantityCoffee(0);
  };

  return (
    <li
      key={id}
      className="w-[256px] h-[310px] mb-10 flex flex-col items-center justify-center  text-center bg-gray-300 p-4 relative rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md"
    >
      <img src={img_url} alt="" className="w-[120px] h-[120px] mt-[-4rem]" />
      <div className="flex items-center justify-center gap-1 mt-2">
        {categories.map((category, i) => (
          <span
            key={i}
            className="uppercase text-yellow-300 bg-yellow-200 py-1 px-2  rounded-xl text-[11px] font-bold "
          >
            {category}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-bold text-gray-600 my-3">{name}</h3>
      <p className="font-normal text-[14px] text-gray-500 mb-[33px]">
        {description}
      </p>
      <div className="flex items-center justify-around w-full gap-4">
        <strong>{`R$ ${priceFixed}`}</strong>
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-2 bg-gray-200 px-2 py-1 rounded-md">
            <InputQuantityProductInCart
              onDecrease={handleDecrementCoffee}
              onIncrease={handleIncrementCoffee}
              quantityCoffee={quantityCoffee}
            />
          </div>
          <button
            type="button"
            onClick={handleAddCoffeeToCart}
            disabled={!quantityCoffee}
            className="bg-blue-700 p-[8px] rounded-md"
          >
            <img src="../../public/assets/addCart.svg" alt="" />
          </button>
          <ToastContainer />
        </div>
      </div>
    </li>
  );
};
