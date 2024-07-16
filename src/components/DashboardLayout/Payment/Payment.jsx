import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_Pk);

const Payment = () => {
  const [cart] = useCart();
  const total = cart?.reduce((sum, item) => parseFloat(item.price) + sum, 0);
  const price = parseFloat(total?.toFixed(2));

  return (
    <div className="w-full px-20">
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
