export enum PaymentMethodTypes {
    CREDIT = "credit",
    DEBIT = "debit",
    MONEY = "money",
    NONE = "none",
  }
  
  export interface IAddressInfo {
    cep: number;
    address: string;
    number: number;
    complement?: string | undefined;
    city: string;
    district: string;
    uf: string;
    type: string;
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
  

