import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ActionsCartType } from "../reducer/actions";
import {
  CartProduct,
  cartReducer,
  Product,
  PurchaseInformation,
  PaymentMethodTypes,
} from "../reducer/reducer";
import { api } from "../services/api";

const emptyPurchase = {
  address: {
    cep: "",
    street: "",
    number: "",
    complement: "",
    city: "",
    district: "",
    uf: "",
  },
  paymentMethod: PaymentMethodTypes.NONE,
} as any;

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  menu: Product[];
  products: Product[];
  cartProducts: CartProduct[];
  purchaseInformation: PurchaseInformation;
  handleTotalItemsOnCart(): number;
  addProductToCart(productId: number, count: number): void;
  handleTotalAmount(): number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [menu, setMenu] = useState<Product[]>([]);

  useEffect(() => {
    api.get("catalog").then((response) => {
      setMenu(response.data);
    });
  }, [setMenu]);
  const menuDefault = menu;
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      products: [],
      cartProducts: [],
      purchaseInformation: emptyPurchase,
    },
    () => {
      return {
        cartProducts: [],
        products: menuDefault,
        purchaseInformation: emptyPurchase,
      };
    },
  );
  
  const { products, purchaseInformation, cartProducts } = cartState;
  console.log(products);

  const handleTotalItemsOnCart = () => {
    const totalCount = cartProducts.reduce((acc, item) => {
      return acc + item.count;
    }, 0);
    return totalCount;
  };

  const handleTotalAmount = () => {
      const totalAmount = cartProducts.reduce((acc, item) => {
        const subTotal = acc + item.subTotal;
        return subTotal
      }, 0)
      return totalAmount;
  }

  const addProductToCart = (productId: number, count: number) => {
    const product = menu.find((product) => product.id === productId);
    dispatch({
      type: ActionsCartType.ADD_ITEM_CART,
      payload: {
        product,
        count,
      },
    });
  };

  return (
    <CartContext.Provider
      value={{
        menu,
        products,
        cartProducts,
        purchaseInformation,
        handleTotalItemsOnCart,
        addProductToCart,
        handleTotalAmount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);
  return context;
}
