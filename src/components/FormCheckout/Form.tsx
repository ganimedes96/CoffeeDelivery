// import { useForm, useFormContext } from "react-hook-form";

export const Form = () => {
  // const { register, setValue, setFocus } = useFormContext();
  // const handleForm = async ( event:React.ChangeEvent<HTMLInputElement>) => {
  //     const cep = event.target.value
  //     if(cep.length === 8){
  //       const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  //       const data = await response.json()
  //       if(!data.erro){
  //         setValue('rua', data.logradouro);
  //         setValue('uf', data.uf);
  //         setValue('cidade', data.localidade);
  //         setValue('bairro', data.bairro);
  //         setFocus('numero')
  //       }
  //     }
  // } 
  return (
    <form className="flex flex-col items-start justify-center gap-4 mt-6">
      <input
        type="number"
        
        placeholder="Cep"
        className="p-3 rounded-md placeholder:text-gray-200 text-gray-400"
      />
      <input
        type="text"
        placeholder="Ex. Rua Joao Felix"
        className="p-3 placeholder:text-gray-200 text-gray-400 rounded-md w-full"
      />
      <div className="flex items-center justify-between gap-3 w-full ">
        <input
          type="number"
          placeholder="Numero"
          className="p-3 rounded-md placeholder:text-gray-200 text-gray-400 w-1/1"
        />
        <input
          type="text"
          placeholder="Complemente"
          className="p-3 rounded-md placeholder:text-gray-200 text-gray-400 w-full"
        />
      </div>
      <div className="flex items-center justify-center gap-3 w-full ">
        <input
          type="text"
          placeholder="Bairro"
          className="p-3 rounded-md placeholder:text-gray-200 text-gray-400 w-1/1"
        />
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-md placeholder:text-gray-200 text-gray-400 w-full"
        />
        <input
          type="text"
          placeholder="UF"
          className="p-3 rounded-md placeholder:text-gray-200 text-gray-400 w-1/6"
        />
      </div>
    </form>
  );
};
