
export const PresentationCoffeeDev = () => {
    return (
        <main className="font-Roboto max-w-[1300px] w-full mx-auto flex items-center justify-between text-gray-100 mt-24 px-5">
        <section className="w-1/2">
          <div className="flex flex-col items-start justify-center gap-4">
            <h1 className="text-5xl font-bold  ">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="font-normal text-xl text-gray-200">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div className="flex items-center justify-between mt-[66px]">
            <div className="flex flex-col items-start justify-center gap-5">
              <div className="flex items-center justify-center gap-3">
                <img
                  src="../../public/assets/cart.svg"
                  alt="carrinho de compras"
                />
                <p>Compra simples e segura</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <img src="../../public/assets/clock.svg" alt="cronometro" />
                <p>Entrega rápida e rastreada</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-5">
              <div className="flex items-center justify-center gap-3">
                <img src="../../public/assets/box.svg" alt="caixa" />
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <img src="../../public/assets/cof.svg" alt="xicara de cafe" />
                <p>O café chega fresquinho até você</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-1/2 flex items-center justify-end">
          <img
            className="w-[476px] h-[360px]"
            src="../../public/assets/Imagem.svg"
            alt=""
          />
        </section>
      </main>
    )
}