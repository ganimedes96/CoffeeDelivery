import { PaymentMethodTypes } from "../../@types/types";
import { Bank, CreditCard, Money } from "phosphor-react";

export const methodsType = [
  {
    option: PaymentMethodTypes.CREDIT,
    icon: <CreditCard size={16} />,
    name: "Cartão de crédito",
  },
  {
    option: PaymentMethodTypes.DEBIT,
    icon: <Bank size={16} />,
    name: "Cartão de Débito",
  },
  {
    option: PaymentMethodTypes.MONEY,
    icon: <Money size={16} />,
    name: "Dinheiro",
  },
];

interface PaymentMethodProps {
  methodPaymentSelected: string;
  setMethodPaymentSelected(value: string): void;
}

export const PaymentMethod = ({
  methodPaymentSelected,
  setMethodPaymentSelected,
}: PaymentMethodProps) => {
  const handleMethodPayment = (option: string) => {
    setMethodPaymentSelected(option);
  };
  return (
    <div className="flex flex-col items-start justify-center bg-gray-200 rounded-md p-10 mt-5">
      <div className="flex items-center justify-center gap-2 text-gray-400 text-[16px] font-normal">
        <img src="../../public/assets/dollar.svg" alt="dollar" />
        <span>Pagamento</span>
      </div>
      <p className="font-normal text-[14px] text-gray-400 pl-7">
        O pagamento é feito na entrega. Escolha a forma que deseja pagar
      </p>
      <div className="w-full flex items-center justify-between mt-5 text-gray-300">
        {methodsType.map((method) => {
          return (
            <div 
              className={`${methodPaymentSelected === method.option ? "bg-blue-100 border-2  border-blue-500 ": "bg-gray-100" } flex items-center justify-center p-2 rounded-md gap-2 w-[178px]`}
              key={method.option}
              onClick={() => handleMethodPayment(method.option)}  
            >
              {method.icon}
              <span>{method.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
