import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PK}`);
  }
  return stripePromise;
};

export default getStripe;
