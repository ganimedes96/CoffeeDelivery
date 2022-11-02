import { ContextCoffeeCart } from "../../context/CartContext";
import { Card } from "./Card";


export const Menu = ({
 
}) => {
  
  const {  menu } = ContextCoffeeCart();

 
   
    
  return (
    <section className="flex flex-col items-start justify-start max-w-[1300px] w-full mx-auto mt-10 px-5">
      <h2 className="my-10 text-xl font-bold px-2 text-gray-200">
        Nossos cafes
      </h2>
      <ul className="flex flex-wrap gap-9  justify-center items-center mt-6">
       { menu.map((product) => (
          <Card key={product.id} coffee={product}/>
       ))}
      </ul>
    </section>
  );
};
