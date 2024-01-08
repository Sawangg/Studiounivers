import { loadStripe, type Stripe } from "@stripe/stripe-js";
import { env } from "@src/env.mjs";

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  return stripePromise;
};

export default getStripe;
