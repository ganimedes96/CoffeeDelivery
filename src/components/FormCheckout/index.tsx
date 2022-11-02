import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ContextCoffeeCart } from "../../context/CartContext";

import { DetailsCheckout } from "../DetailsCheckout";
import { Form } from "./Form";
import { PaymentMethod } from "./PaymentMethod";

export const FormCheckout = () => {
  const [methodPaymentSelected, setMethodPaymentSelected] = useState("");
  // const {
  //   finalizePurchase,
  //   clearCart,
  //   purchaseInformation,
  //   handleTotalAmount,
  //   handleTotalItemsOnCart,
  // } = useCart();

  // const { address } = purchaseInformation;
  // const navigate = useNavigate();
  // const form = useForm({
  //   defaultValues: {
  //     cep: address.cep,
  //     rua: address.rua,
  //     numero: address.numero,
  //     complemento: address.complemento,
  //     bairro: address.bairro,
  //     cidade: address.cidade,
  //     uf: address.uf,
  //   },
  // });

  //  const total = handleTotalAmount();

  // const { handleSubmit, reset } = form;

  

  // const totalWithShipping = total + 3.5;

  // const onSubmit = (formData: Address) => {
  //   console.log(formData.cep);
  //   finalizePurchase(formData, methodPaymentSelected as PaymentMethodTypes);
  //   reset();
  //   clearCart();
    
  // };

  return (
    <form action="">
      <div className="font-Roboto max-w-[1300px] w-full mx-auto flex  justify-center gap-5 text-gray-100 mt-20 px-5">
        <section>
          <h2 className="text-left mb-3 font-bold text-[18px] text-gray-200">
            Complete seu pedido
          </h2>
          <div className="flex flex-col items-start justify-center bg-gray-200 rounded-md p-10">
            <div className="flex items-center justify-center gap-2 text-gray-400 text-[16px] font-normal">
              <img src="../../public/assets/IconCheckout.svg" alt="" />
              <h2>Endereço de Entrega</h2>
            </div>
            <p className="font-normal text-[14px] text-gray-400 pl-7">
              Informe o endereço onde deseja receber seu pedido
            </p>
            
            <Form />
           
          </div>
          <PaymentMethod 
            methodPaymentSelected={methodPaymentSelected}
            setMethodPaymentSelected={setMethodPaymentSelected}
          />
        </section>
        <section>
          <DetailsCheckout />
        </section>
      </div>
    </form>
  );
};
