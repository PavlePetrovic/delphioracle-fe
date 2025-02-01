import { type FC, lazy } from "react";
import { lazyRetry } from "@common/utility/Utils";
import { type routeType } from "@router/routes/types";

const GetUserInfoWizard: FC | any = lazy(
  async () =>
    await lazyRetry(async () => await import("../pages/GetUserInfoWizard")),
);

const GetUserInfoWelcome: FC | any = lazy(
  async () =>
    await lazyRetry(async () => await import("../pages/GetUserInfoWelcome")),
);

const userInfoRoutes: routeType[] = [
  {
    path: "/user-info",
    element: <GetUserInfoWizard />,
    meta: {
      layout: "app_frameless",
      title: "Info Wizard",
      type: "page",
      private: true,
    },
  },
  {
    path: "/user-info-public/wizard",
    element: <GetUserInfoWizard isPublic={true} />,
    meta: {
      layout: "app_frameless",
      title: "Info Wizard",
      type: "page",
      public: true,
    },
  },
  {
    path: "/user-info-public/welcome",
    element: <GetUserInfoWelcome isPublic={true} />,
    meta: {
      layout: "app_frameless",
      title: "Welcome",
      type: "page",
      public: true,
    },
  },
];

export default userInfoRoutes;
