export enum PaymentMethodTypes {
    CREDIT = "credit",
    DEBIT = "debit",
    MONEY = "money",
    NONE = "none",
  }
  
  export interface Address {
    cep: string;
    rua: string;
    numero: string;
    complemento?: string | undefined;
    cidade: string;
    bairro: string;
    uf: string;
  }
  
  type Categories =
    | "tradicional"
    | "gelado"
    | "com leite"
    | "especial"
    | "alcoólico";
  
  export interface Product {
    id: number;
    img_url: string;
    categories: Categories[];
    name: string;
    description: string;
    price: number;
  }
  
  export interface CartProduct {
    id: string;
    subTotal: number;
    product: Product;
    count: number;
  }
  
  export interface PurchaseInformation {
    address: Address;
    PaymentMethod: PaymentMethodTypes;
  }
  
  interface CartState {
    products: Product[];
    cartProducts: CartProduct[];
    purchaseInformation: PurchaseInformation;
  }