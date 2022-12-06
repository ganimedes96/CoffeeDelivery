import { ContextCoffeeCart } from "../context/CartContext";
import { FormatMoney } from "../utils/FormatMoney";
import { CoffeeCartCard } from "./CoffeeCartCard";




const DELIVERY = 3.50;

export const DetailsCheckout = () => {
  const { coffeeToCart, cartOrdersTotalPrice } = ContextCoffeeCart()
  const formattedItemsTotal = FormatMoney(cartOrdersTotalPrice)
  const formattedTotalPrice = FormatMoney( cartOrdersTotalPrice + DELIVERY)
  const formattedDELIVERYPrice = FormatMoney(DELIVERY) 
  

  return (
    <section>
      <h2 className="text-left mb-3 font-bold text-[18px] text-gray-200">
        Cafés selecionados
      </h2>
      <div className="divide-y divide-blue-500 flex flex-col items-center justify-center w-full bg-gray-200 text-gray-400 rounded-md p-10 gap-10">
     
       {
        coffeeToCart.map((coffeeCart) => (
            <CoffeeCartCard key={coffeeCart.id} coffee={coffeeCart}/>
        ))
       }
     
        <div className="flex flex-col items-center justify-center gap-5 mt-2 pt-5 w-full">
          <div className="flex items-center justify-between w-full">
            <span>Total de itens</span>
            <span>R$ {formattedItemsTotal}</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span>Entrega</span>
            <span>R$ {formattedDELIVERYPrice}</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <strong>Total</strong>
            <strong>R$ {formattedTotalPrice}</strong>
          </div>
          <button type='submit' className="w-full p-3 rounded-md bg-yellow-300 text-gray-100">
            CONFIRMAR PEDIDO
          </button>
        </div>
      </div>
    </section>
  );
};
