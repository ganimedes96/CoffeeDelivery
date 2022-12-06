import { DetailsCheckout } from "../DetailsCheckout";
import { Bank, CreditCard, Money } from "phosphor-react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import styles from "./methodPayment.module.scss";
import { type } from "os";
import { ContextCoffeeCart } from "../../context/CartContext";

const NewCheckoutFormSchema = z.object({
  cep: z.number().min(1),
  address: z.string().min(1),
  number: z.number().min(1),
  complement: z.string(),
  district: z.string().min(1),
  city: z.string().min(1),
  uf: z.string().min(2),
  type: z.enum(["CREDITO", "DEBITO", "DINHEIRO"]),
});

type NewAddressFormCheckout = z.infer<typeof NewCheckoutFormSchema>;

export const FormCheckout = () => {
  const { handleCheckoutInfo, checkoutInfo,  } = ContextCoffeeCart();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAddressFormCheckout>({
    resolver: zodResolver(NewCheckoutFormSchema),
    defaultValues: {
      type: "CREDITO",
    },
  });
  const navigate = useNavigate()
  const handleSubmitForm = (data: NewAddressFormCheckout) => {

    handleCheckoutInfo(data);
    console.log("Hello",checkoutInfo);
    navigate('/success')
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="font-Roboto max-w-[1300px] w-full mx-auto flex  justify-center gap-5 text-gray-100 mt-20 px-5">
        <section>
          <h2 className="text-left mb-3 font-bold text-[18px] text-gray-200">
            Complete seu pedido
          </h2>
          <div>
            <div className="flex flex-col items-start justify-center bg-gray-200 rounded-md p-10">
              <div className="flex items-center justify-center gap-2 text-gray-400 text-[16px] font-normal">
                <img src="../../public/assets/IconCheckout.svg" alt="" />
                <h2>Endereço de Entrega</h2>
              </div>
              <p className="font-normal text-[14px] text-gray-400 pl-7">
                Informe o endereço onde deseja receber seu pedido
              </p>

              <div className="flex flex-col items-start justify-center gap-4 mt-6">
                <input
                  {...register("cep", { valueAsNumber: true })}
                  type="number"
                  placeholder="Cep"
                  className={`p-3 rounded-md placeholder:text-gray-200 text-gray-400 `}
                />
                {errors.cep?.message && (
                  <p className="text-red-500">{"Informe o CEP"}</p>
                )}

                <input
                  {...register("address")}
                  type="text"
                  placeholder="Ex. Rua Joao Felix"
                  className={`p-3 rounded-md placeholder:text-gray-200 text-gray-400 w-full `}
                />
                {errors.address?.message && (
                  <p className="text-red-500">Informe um endereço</p>
                )}
                <div className="flex items-center justify-between gap-3 w-full ">
                  <div>
                    <input
                      {...register("number", { valueAsNumber: true })}
                      type="number"
                      placeholder="Numero"
                      className={`p-3 rounded-md placeholder:text-gray-200 text-gray-400 w-1/1 `}
                    />
                    {errors.number?.message && (
                      <p className="text-red-500">Informe um numero</p>
                    )}
                  </div>

                  <input
                    {...register("complement")}
                    type="text"
                    placeholder="Complemento"
                    className={`p-3 rounded-md placeholder:text-gray-200 text-gray-400 w-full `}
                  />
                </div>
                <div className="flex items-center justify-center gap-3 w-full ">
                  <div className="w-full">
                    <input
                      {...register("district")}
                      type="text"
                      placeholder="Bairro"
                      className={`p-3 rounded-md placeholder:text-gray-200 text-gray-400 w-full `}
                    />
                    {errors.district?.message && (
                      <p className="text-red-500">Informe um Bairro</p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      {...register("city")}
                      type="text"
                      placeholder="Cidade"
                      className={`p-3 rounded-md placeholder:text-gray-200 text-gray-400 w-full`}
                    />
                    {errors.city?.message && (
                      <p className="text-red-500">Informe uma Cidade</p>
                    )}
                  </div>
                  <div className="w-1/6">
                    <input
                      {...register("uf")}
                      type="text"
                      placeholder="UF"
                      className={`p-3 rounded-md placeholder:text-gray-200 text-gray-400 w-[50px]`}
                    />
                    {errors.uf?.message && (
                      <p className="text-red-500">Informe a UF</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center bg-gray-200 rounded-md p-10 mt-5">
              <div className="flex items-center justify-center gap-2 text-gray-400 text-[16px] font-normal">
                <img src="../../public/assets/dollar.svg" alt="dollar" />
                <span>Pagamento</span>
              </div>
              <p className="font-normal text-[14px] text-gray-400 pl-7">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>

              <Controller
                control={control}
                name="type"
                render={({ field }) => {
                  return (
                    <RadioGroup.Root
                      onValueChange={field.onChange}
                      value={field.value}
                      className="mt-6 text-sm flex items-center justify-between w-full text-gray-300 gap-4"
                    >
                      <RadioGroup.Item
                        className={`${styles.buttonRadio} border-2 border-violet-400 rounded`}
                        value="CREDITO"
                      >
                        {" "}
                        <CreditCard size={24} />
                        CREDITO
                      </RadioGroup.Item>
                      <RadioGroup.Item
                        className={`${styles.buttonRadio} border-2 border-violet-400 rounded`}
                        value="DEBITO"
                      >
                        {" "}
                        <Bank size={24} />
                        DEBITO
                      </RadioGroup.Item>
                      <RadioGroup.Item
                        className={`${styles.buttonRadio} border-2 border-violet-400 rounded`}
                        value="DINHEIRO"
                      >
                        {" "}
                        <Money size={24} /> DINHEIRO
                      </RadioGroup.Item>
                    </RadioGroup.Root>
                  );
                }}
              ></Controller>
            </div>
          </div>
        </section>

        <DetailsCheckout />
      </div>
    </form>
  );
};
