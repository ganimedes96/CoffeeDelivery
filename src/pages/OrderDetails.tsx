import { ContextCoffeeCart } from "../context/CartContext";
import clock from "../../public/assets/clock.svg";
import map from "../../public/assets/Icon.svg";
import dollar from "../../public/assets/money.svg";
import ImageSuccess from "../../public/assets/Illustration.svg";

export const OrderDetails = () => {
  const { checkoutInfo } = ContextCoffeeCart();
  return (
    <div className="flex items-center justify-around  mt-32 ">
      <div className="text-gray-200 ">
        <h1 className="text-3xl font-bold text-yellow-300">
          Uhu! Pedido confirmado
        </h1>
        <p className="text-gray-200 text-xl mb-10">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div className="border-2 flex flex-col items-start justify-center w-[460px] gap-5 p-5 rounded-tr-3xl rounded-bl-3xl rounded border-violet-400">
          <div className="flex items-center justify-center gap-4">
            <img src={map} alt="marcador de mapa" />
            <p>
              Entraga em{" "}
              <strong>
                {checkoutInfo?.address}, {checkoutInfo?.number}
              </strong>{" "}
              {checkoutInfo?.district}-{checkoutInfo?.city}, {checkoutInfo?.uf}{" "}
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <img src={clock} alt="cronometro" />
            <div>
              <p>Previsão de entrega </p>
              <strong>20 min - 30 min </strong>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <img src={dollar} alt="cronometro" />
            <div>
              <p>Pagamento na entrega</p>
              <strong>{checkoutInfo?.type}</strong>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={ImageSuccess} alt="" />
      </div>
    </div>
  );
};
