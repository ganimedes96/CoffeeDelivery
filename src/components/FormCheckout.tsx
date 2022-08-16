
export const FormCheckout = () => {
    return (

        <section>
        <h2 className="text-left mb-3 font-bold text-[18px] text-gray-200">Complete seu pedido</h2>
          <div className="flex flex-col items-start justify-center bg-gray-200 rounded-md p-10">
              <div className="flex items-center justify-center gap-2 text-gray-400 text-[16px] font-normal">
              <img src="../../public/assets/IconCheckout.svg" alt="" />
              <h2>Endereço de Entrega</h2>
              </div>
              <p className="font-normal text-[14px] text-gray-400 pl-7" >Informe o endereço onde deseja receber seu pedido</p>
              <form action="" className="flex flex-col items-start justify-center gap-4 mt-6">
              <input type="number" placeholder="Cep" className="p-3 rounded-md placeholder:text-gray-200 text-gray-400" />
              <input type="text" placeholder="Ex. Rua Joao Felix" className="p-3 placeholder:text-gray-200 text-gray-400 rounded-md w-full"/>
              <div className="flex items-center justify-between gap-3 w-full ">
                      <input type="number" placeholder="Numero" className="p-3 rounded-md placeholder:text-gray-200 text-gray-400 w-1/1" />
                      <input type="text" placeholder="Complemente" className="p-3 rounded-md placeholder:text-gray-200 text-gray-400 w-full"/>
              </div>
              <div className="flex items-center justify-center gap-3 w-full ">
                      <input type="text" placeholder="Bairro" className="p-3 rounded-md placeholder:text-gray-200 text-gray-400 w-1/1" />
                      <input type="text" placeholder="Cidade" className="p-3 rounded-md placeholder:text-gray-200 text-gray-400 w-full" />
                      <input type="text" placeholder="UF" className="p-3 rounded-md placeholder:text-gray-200 text-gray-400 w-1/6" />
              </div>
              </form>
          </div>
              <section className="flex flex-col items-start justify-center bg-gray-200 rounded-md p-10 mt-5">
                  <div className="flex items-center justify-center gap-2 text-gray-400 text-[16px] font-normal">
                      <img src="../../public/assets/dollar.svg" alt="dollar" />
                      <span>Pagamento</span>
                  </div>
                  <p className="font-normal text-[14px] text-gray-400 pl-7">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                  <div className="w-full flex items-center justify-between mt-5 text-gray-300">
                      <button className="flex items-center justify-center p-2 bg-gray-100 rounded-md gap-2 w-[178px]">
                              <img src="../../public/assets/card.svg" alt="cartao" />
                              <span>Cartão de crédito</span>
                      </button>
                      <button  className="flex items-center justify-center  p-2 bg-gray-100 rounded-md gap-2 w-[178px]">
                          <img src="../../public/assets/debit.svg" alt="Debito" />
                          <span>cartão de débito</span>
                      </button>
                      <button  className="flex items-center justify-center  p-2 bg-gray-100 rounded-md gap-2 w-[178px]">
                          <img src="../../public/assets/money.svg" alt="cedula" />
                          <span>dinheiro</span>
                      </button>
                  </div>
              </section> 
        </section>
    )
}