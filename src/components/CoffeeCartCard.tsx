import { FormEvent } from 'react'
import { Trash } from "phosphor-react"
import { ContextCoffeeCart, OrdersCartProps } from "../context/CartContext"
import { FormatMoney } from "../utils/FormatMoney"
import { InputQuantityProductInCart } from "./InputQuantityProductInCart"


interface DetailsCheckoutProps {
    coffee: OrdersCartProps
  }

export const CoffeeCartCard = ({coffee}: DetailsCheckoutProps) => {
    const {handleQuantityProductInCart, removeCoffeeFromCart } = ContextCoffeeCart()

    const totalPrice = coffee.price * coffee.quantityCoffee
    const formatedPrice = FormatMoney(totalPrice)

    const handleIncrementCoffee = (event: FormEvent) => {
        event.preventDefault()
        handleQuantityProductInCart(coffee.id, 'increase')
      }
      const handleDecrementCoffee = (event: FormEvent) => {
        event.preventDefault()
        handleQuantityProductInCart(coffee.id, 'decrease')
      }

      const handleRemoveCoffee = () => {
        removeCoffeeFromCart(coffee.id)
      }

    return (
        <div className="flex items-center justify-start w-full pt-5">
          <img
            className="w-[64px] h-[64px]"
            src={coffee.img_url}
            alt={coffee.name}
          />
          <div className="flex flex-col w-full items-center justify-between gap-2 px-2">
            <div className="flex items-center justify-between w-full gap-20">
              <div className="flex items-center justify-center gap-3">
                { coffee.categories.map((category) => (
                  <span>{category}</span>
                )
                )}

              </div>
              <strong>R$ {formatedPrice}</strong>
            </div>
            <div className="flex items-center w-full justify-start gap-2">
              <div className="flex items-center justify-center gap-3 bg-gray-100 px-2 py-1 rounded-md">
                <InputQuantityProductInCart 
                  quantityCoffee={coffee.quantityCoffee}  
                  onDecrease={handleDecrementCoffee}
                  onIncrease={handleIncrementCoffee}
                />
              </div>
              <button onClick={handleRemoveCoffee} className="flex items-center justify-center  bg-gray-100 px-2 py-2 gap-1 rounded-md">
                <Trash size={16}/>
                Remover
              </button>
            </div>
          </div>
        </div>
    )
}