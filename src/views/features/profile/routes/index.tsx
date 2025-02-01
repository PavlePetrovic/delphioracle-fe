import { lazy, type FC } from "react";
import { lazyRetry } from "@common/utility/Utils";
import { type routeType } from "@router/routes/types";

const Profile: FC | any = lazy(
  async () => await lazyRetry(async () => await import("../pages/Profile")),
);

const Report: FC | any = lazy(
  async () => await lazyRetry(async () => await import("../pages/Report")),
);

const Settings: FC | any = lazy(
  async () => await lazyRetry(async () => await import("../pages/Settings")),
);

const Support: FC | any = lazy(
  async () => await lazyRetry(async () => await import("../pages/Support")),
);

const profileRouter: routeType[] = [
  {
    path: "profile",
    element: <Profile />,
    meta: {
      layout: "app_framed",
      title: "Profile",
      type: "page",
      private: true,
    },
    children: [
      {
        path: "",
        element: <Report />,
        meta: {
          layout: "app_framed",
          title: "Profile",
          type: "page",
          private: true,
        },
      },
      {
        path: "settings",
        element: <Settings />,
        meta: {
          layout: "app_framed",
          title: "Settings",
          type: "page",
          private: true,
        },
      },
      {
        path: "support",
        element: <Support />,
        meta: {
          layout: "app_framed",
          title: "Support",
          type: "page",
          private: true,
        },
      },
    ],
  },
];

export default profileRouter;
