import { lazy, type FC } from "react";
import { lazyRetry } from "@common/utility/Utils";
import { type routeType } from "@router/routes/types";

const CheckoutForm: FC | any = lazy(
  async () =>
    await lazyRetry(async () => await import("../pages/CheckoutForm")),
);

const Return: FC | any = lazy(
  async () => await lazyRetry(async () => await import("../pages/Return")),
);

const stripeRouter: routeType[] = [
  {
    path: "/checkout/:priceId/:userId",
    element: <CheckoutForm />,
    meta: {
      layout: "blank",
      title: "Checkout",
      type: "page",
      private: true,
    },
  },
  {
    path: "/checkout-session/:sessionId",
    element: <Return />,
    meta: {
      layout: "app_framed",
      title: "Success",
      type: "page",
      private: true,
    },
  },
];

export default stripeRouter;
