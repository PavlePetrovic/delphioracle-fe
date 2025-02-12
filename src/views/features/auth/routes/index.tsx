import { lazy, type FC } from "react";
import { lazyRetry } from "@common/utility/Utils";
import { type routeType } from "@router/routes/types";

const Auth: FC | any = lazy(
  async () => await lazyRetry(async () => await import("../pages/Auth")),
);

const NotExists: FC | any = lazy(
  async () =>
    await lazyRetry(async () => await import("../components/NotExists")),
);

const Verification: FC | any = lazy(
  async () =>
    await lazyRetry(async () => await import("../pages/Verification")),
);

const authRouter: routeType[] = [
  {
    path: "/auth/:authType",
    element: <Auth />,
    meta: {
      layout: "app_framed",
      title: "Authentication",
      type: "page",
      public: true,
      restricted: true,
    },
  },
  {
    path: "/auth/:authType/:referralKey",
    element: <Auth />,
    meta: {
      layout: "app_framed",
      title: "Authentication",
      type: "page",
      public: true,
      restricted: true,
    },
  },
  {
    path: "/verification",
    element: <Verification />,
    meta: {
      layout: "app_framed",
      title: "Verify",
      type: "page",
      public: true,
      restricted: true,
    },
  },
  {
    path: "*",
    element: <NotExists />,
    meta: {
      layout: "app_framed",
      title: "Not Exist",
      type: "page",
      public: true,
    },
  },
];

export default authRouter;
