export const DetailsCheckout = () => {
  return (
    <section>
      <h2 className="text-left mb-3 font-bold text-[18px] text-gray-200">
        Cafés selecionados
      </h2>
      <div className="divide-y divide-blue-500 flex flex-col items-center justify-center w-full bg-gray-200 text-gray-400 rounded-md p-10 gap-10">
        <div className="flex items-center justify-center">
          <img
            className="w-[64px] h-[64px]"
            src="../../public/images/Image-1.svg"
            alt=""
          />
          <div className="flex flex-col items-center justify-between gap-2 px-2">
            <div className="flex items-center justify-between w-full gap-20">
              <span>Expresso Tradicional</span>
              <strong>R$ 9,90</strong>
            </div>
            <div className="flex items-center w-full justify-start gap-2">
              <div className="flex items-center justify-center gap-3 bg-gray-100 px-2 py-1 rounded-md">
                <button className="text-2xl">-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button className="flex items-center justify-center  bg-gray-100 px-2 py-2 gap-1 rounded-md">
                <img src="../../public/assets/trash.svg" />
                Remover
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-5">
          <img
            className="w-[64px] h-[64px]"
            src="../../public/images/Image-1.svg"
            alt=""
          />
          <div className="flex flex-col items-center justify-between gap-2 px-2">
            <div className="flex items-center justify-between w-full gap-20">
              <span>Expresso Tradicional</span>
              <strong>R$ 9,90</strong>
            </div>
            <div className="flex items-center w-full justify-start gap-2">
              <div className="flex items-center justify-center gap-3 bg-gray-100 px-2 py-1 rounded-md">
                <button className="text-2xl">-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button className="flex items-center justify-center  bg-gray-100 px-2 py-2 gap-1 rounded-md">
                <img src="../../public/assets/trash.svg" />
                Remover
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mt-2 pt-5 w-full">
            <div className="flex items-center justify-between w-full">
              <span>Total de itens</span>
              <span>R$ 29,00</span>
            </div>
            <div className="flex items-center justify-between w-full">
                <span>Entrega</span>
                <span>R$ 3,50</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <strong>Total</strong>
              <strong>R$ 33,20</strong>    
            </div>
            <button  className="w-full p-3 rounded-md bg-yellow-300 text-gray-100">
              CONFIRMAR PEDIDO
            </button>
        </div> 
      </div>
    </section>
  );
};
