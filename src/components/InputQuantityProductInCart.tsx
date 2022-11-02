import { Minus, Plus } from "phosphor-react";
import { FormEvent } from "react";

interface InputAmountProductsProps {
  quantityCoffee: number;
  onIncrease: (event: FormEvent) => void
  onDecrease: (event: FormEvent) => void
}

export const InputQuantityProductInCart = ({
    quantityCoffee,
    onIncrease,
    onDecrease,
}: InputAmountProductsProps) => {
   
    return (
        <>
            <button 
                className="text-blue-500 text-xl py-[.5rem]"
                onClick={onIncrease}
                disabled={quantityCoffee <= 1}
            > 
                <Minus size={14}/>
             </button>
            <span>{quantityCoffee}</span>
            <button 
                className="text-blue-500 text-xl"
                onClick={onDecrease}
            >
                <Plus size={14}/>
            </button>
        </>
    )
};
