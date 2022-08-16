import { DetailsCheckout } from "../components/DetailsCheckout";
import { FormCheckout } from "../components/FormCheckout"

export const Checkout = () => {
  return (
    <main className="font-Roboto max-w-[1300px] w-full mx-auto flex  justify-center gap-5 text-gray-100 mt-20 px-5">
        <FormCheckout/>
        <DetailsCheckout/>
    </main>
  );
};
