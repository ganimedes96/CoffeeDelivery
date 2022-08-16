import { ActionsCartType } from './actions'
import { produce } from 'immer'

export enum PaymentMethodTypes {
    CREDIT = 'credit',
    DEBIT = 'debit',
    MONEY = 'money',
    NONE = 'none'
}

export interface Address {
    cep: string;
    street: string;
    number: string;
    complement?: string | undefined;
    city: string;
    district: string;
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
    address: Address
    PaymentMethod: PaymentMethodTypes
}

interface CartState {
    products: Product[];
    cartProducts: CartProduct[];
    purchaseInformation: PurchaseInformation

}

export function cartReducer(state: CartState, action: any ){
    switch (action.type) {
         case ActionsCartType.ADD_ITEM_CART:
            return produce( state, (draft) => {
                const { product, count } = action.payload
                draft.cartProducts.push({ 
                    product,
                    count,
                    subTotal: count * product.price,
                    id: new Date().toISOString()
                })
            }) 
        default: 
            return state      
    }
}