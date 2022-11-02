
import { NavLink } from 'react-router-dom'
import { ContextCoffeeCart } from '../context/CartContext';


export const Header = () => {
const { handleTotalItemsOnCart } = ContextCoffeeCart();

const countItemsOnCart = handleTotalItemsOnCart

  return (
    <header className="max-w-[1300px] w-full mx-auto py-8 px-5">
      <nav className="flex items-center justify-between ">
        <h2>
          <a href="/">
            <img src="../../public/assets/Logo.svg" alt="logo" />
          </a>
        </h2>
        <div className="flex items-center justify-center gap-5 relative">
          <div className="flex items-center justify-center gap-3 bg-blue-100 p-2 rounded-md ">
            <img src="../../public/assets/Vector.svg" alt="popup de mapa" />
            <span className="text-blue-700 ">Timon, MA</span>
          </div>
          <NavLink to="/checkout" title="Checkout">
          <button className=" bg-yellow-200 p-2 rounded-md" >
            <img src="../../public/assets/cart2.svg" alt="" />
          </button>
          { countItemsOnCart > 0 && <span className=" text-yellow-100 bg-yellow-300 px-[.4rem] rounded-full relative left-[-0.7rem] top-[-1.5rem]">{countItemsOnCart}</span>}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
