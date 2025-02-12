import { useCallback, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useParams } from "react-router";
import LoadingPage from "@components/LoadingPage/LoadingPage";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PK}`);

const CheckoutForm = () => {
  const params = useParams();
  const fetchClientSecret: () => Promise<string> = useCallback(() => {
    // Create a Checkout Session
    const body = JSON.stringify({
      price_id: `${params?.priceId}`,
      user_id: `${params?.userId}`,
      // local_host: "nesto",
    });

    return fetch(`${import.meta.env.VITE_API_BASELINK}/stripe-session-create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `${localStorage.getItem("delphiAccessToken")}`,
      },
      body: body,
    })
      .then((res) => res.json())
      .then((data) => {
        return data.clientSecret;
      });
  }, []);

  const options = { fetchClientSecret };

  useEffect(() => {}, [params]);

  return !params?.priceId || !params?.userId ? (
    <LoadingPage />
  ) : (
    <ScrollWrapper id="stripeScrollWrapper" className="h-svh bg-dark-blue">
      <div className="z-[999] flex items-center justify-center bg-dark-blue py-8">
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout className="w-full" />
        </EmbeddedCheckoutProvider>
      </div>
    </ScrollWrapper>
  );
};

export default CheckoutForm;
