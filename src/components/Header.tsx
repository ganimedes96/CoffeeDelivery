
import { NavLink } from 'react-router-dom'
import { useCart } from '../hooks/useCartContext';


export const Header = () => {
const { handleTotalItemsOnCart } = useCart();
const countItemsOnCart = handleTotalItemsOnCart()
  return (
    <header className="max-w-[1300px] w-full mx-auto py-8 px-5">
      <nav className="flex items-center justify-between ">
        <h2>
          <img src="../../public/assets/Logo.svg" alt="logo" />
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
          { countItemsOnCart > 0 && <span>{countItemsOnCart}</span>}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
