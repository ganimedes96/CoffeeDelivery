import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { produce } from "immer";
import { Product, IAddressInfo } from "../@types/types";

import { api } from "../services/api";

interface CartProviderProps {
  children: ReactNode;
}
export interface OrdersCartProps extends Product {
  quantityCoffee: number;
}

interface CartContextData {
  menu: Product[];
  handleTotalItemsOnCart: number;
  cartOrdersTotalPrice: number;
  checkoutInfo: IAddressInfo | null;
  handleQuantityProductInCart: (
    coffeeId: number,
    type: "increase" | "decrease"
  ) => void;
  addCoffeeToCart: (coffee: OrdersCartProps) => void;
  coffeeToCart: OrdersCartProps[];
  removeCoffeeFromCart: (coffeeId: number) => void;
  handleCheckoutInfo: (data: IAddressInfo) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [menu, setMenu] = useState<OrdersCartProps[]>([]);
  const [coffeeToCart, setCoffeeToCart] = useState<OrdersCartProps[]>([]);
  const [checkoutInfo, setCheckoutInfo] = useState<IAddressInfo | null>(null);
  useEffect(() => {
    api.get("catalog").then((response) => {
      setMenu(response.data);
    });
  }, [setMenu]);

  const handleTotalItemsOnCart = coffeeToCart.length;

  const cartOrdersTotalPrice = coffeeToCart.reduce((acc, item) => {
    return acc + item.price * item.quantityCoffee;
  }, 0);

  const addCoffeeToCart = (coffee: OrdersCartProps) => {
    const checkIfCoffeeExists = coffeeToCart.findIndex(
      (cart) => cart.id === coffee.id
    );
    const newCoffee = produce(coffeeToCart, (draft) => {
      if (checkIfCoffeeExists < 0) {
        draft.push(coffee);
      } else {
        draft[checkIfCoffeeExists].quantityCoffee += coffee.quantityCoffee;
      }
    });
    setCoffeeToCart(newCoffee);
  };

  const handleQuantityProductInCart = (
    coffeeId: number,
    type: "increase" | "decrease"
  ) => {
    const newCoffee = produce(coffeeToCart, (draft) => {
      const coffeeExists = coffeeToCart.findIndex(
        (coffee) => coffee.id === coffeeId
      );
      if (coffeeExists >= 0) {
        const order = draft[coffeeExists];

        draft[coffeeExists].quantityCoffee =
          type === "increase"
            ? order.quantityCoffee - 1
            : order.quantityCoffee + 1;
      }
    });
    setCoffeeToCart(newCoffee);
  };

  const removeCoffeeFromCart = (coffeeId: number) => {
    const findCoffee = produce(coffeeToCart, (draft) => {
      const coffeeExists = coffeeToCart.findIndex(
        (item) => item.id === coffeeId
      );
      if (coffeeExists >= 0) {
        draft.splice(coffeeExists, 1);
      }
    });
    setCoffeeToCart(findCoffee);
  };

  const handleCheckoutInfo = (data: IAddressInfo) => {
    setCheckoutInfo(data);
    setCoffeeToCart([])
  };

  return (
    <CartContext.Provider
      value={{
        menu,
        handleTotalItemsOnCart,
        cartOrdersTotalPrice,
        coffeeToCart,
        checkoutInfo,
        handleQuantityProductInCart,
        addCoffeeToCart,
        removeCoffeeFromCart,
        handleCheckoutInfo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function ContextCoffeeCart(): CartContextData {
  const context = useContext(CartContext);
  return context;
}
