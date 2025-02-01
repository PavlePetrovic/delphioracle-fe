import { lazy, type FC } from "react";
import { lazyRetry } from "@common/utility/Utils";
import { type routeType } from "@router/routes/types";

const SynastryWrappar: FC | any = lazy(
  async () =>
    await lazyRetry(async () => await import("../wrappers/SynastryWrapper")),
);

const SynastryLanding: FC | any = lazy(
  async () =>
    await lazyRetry(async () => await import("../pages/SynastryLanding")),
);

const SynastryMenu: FC | any = lazy(
  async () =>
    await lazyRetry(async () => await import("../pages/SynastryMenu")),
);

const SynastryWizard: FC | any = lazy(
  async () =>
    await lazyRetry(async () => await import("../pages/SynastryWizard")),
);

const SynastryChat: FC | any = lazy(
  async () =>
    await lazyRetry(async () => await import("../pages/SynastryChat")),
);

const synastryRouter: routeType[] = [
  {
    path: "/synastry",
    element: <SynastryWrappar />,
    meta: {
      layout: "app_framed",
      title: "Synastry",
      type: "page",
      private: true,
    },
    children: [
      {
        path: "landing",
        element: <SynastryLanding />,
        meta: {
          layout: "app_framed",
          title: "Synastry Landing",
          type: "page",
          private: true,
        },
      },
      {
        path: "menu",
        element: <SynastryMenu />,
        meta: {
          layout: "app_framed",
          title: "Synastry Menu",
          type: "page",
          private: true,
        },
      },
      {
        path: "wizard",
        element: <SynastryWizard />,
        meta: {
          layout: "app_framed",
          title: "Synastry Wizard",
          type: "page",
          private: true,
        },
      },
      {
        path: "chat/:chatIndex",
        element: <SynastryChat />,
        meta: {
          layout: "app_framed",
          title: "Synastry Chat",
          type: "page",
          private: true,
        },
      },
    ],
  },
];

export default synastryRouter;
