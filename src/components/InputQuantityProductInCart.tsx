import { Minus, Plus } from "phosphor-react";

interface InputAmountProductsProps {
  min?: number;
  count?: number;
  setCount(count: number): void;
}

export const InputQuantityProductInCart = ({
  count = 0,
  setCount,
  min = 0,
}: InputAmountProductsProps) => {
    const handleClickIncrement = () => {
        setCount( count + 1 );
    }

    const handleClickDecrement = () => {
        setCount( count - 1 );
    }
    return (
        <>
            <button 
                className="text-blue-500 text-xl"
                onClick={handleClickDecrement}
                disabled={count === min}
            > 
                <Minus size={14}/>
             </button>
            <span>{count}</span>
            <button 
                className="text-blue-500 text-xl"
                onClick={handleClickIncrement}
            >
                <Plus size={14}/>
            </button>
        </>
    )
};
