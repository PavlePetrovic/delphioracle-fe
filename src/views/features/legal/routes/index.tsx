import { lazy, type FC } from "react";
import { lazyRetry } from "@common/utility/Utils";
import { type routeType } from "@router/routes/types";

const PrivacyPolicy: FC | any = lazy(
  async () =>
    await lazyRetry(async () => await import("../pages/PrivacyPolicy")),
);

const TermsOfUse: FC | any = lazy(
  async () => await lazyRetry(async () => await import("../pages/TermsOfUse")),
);

const HowItWorks: FC | any = lazy(
  async () => await lazyRetry(async () => await import("../pages/HowItWorks")),
);

const WhoAreWe: FC | any = lazy(
  async () => await lazyRetry(async () => await import("../pages/WhoAreWe")),
);

const FAQ: FC | any = lazy(
  async () => await lazyRetry(async () => await import("../pages/FAQ")),
);

const CommunityReflections: FC | any = lazy(
  async () =>
    await lazyRetry(async () => await import("../pages/CommunityReflections")),
);

const legalRouter: routeType[] = [
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
    meta: {
      layout: "app_framed",
      title: "Privacy Policy",
      type: "page",
      public: true,
    },
  },
  {
    path: "/terms-of-use",
    element: <TermsOfUse />,
    meta: {
      layout: "app_framed",
      title: "Terms Of Use",
      type: "page",
      public: true,
    },
  },
  {
    path: "/how-it-works",
    element: <HowItWorks />,
    meta: {
      layout: "app_framed",
      title: "How It Works",
      type: "page",
      public: true,
    },
  },
  {
    path: "/who-are-we",
    element: <WhoAreWe />,
    meta: {
      layout: "app_framed",
      title: "Who Are We",
      type: "page",
      public: true,
    },
  },
  {
    path: "/faq",
    element: <FAQ />,
    meta: {
      layout: "app_framed",
      title: "FAQ",
      type: "page",
      public: true,
    },
  },
  {
    path: "/community-reflections",
    element: <CommunityReflections />,
    meta: {
      layout: "app_framed",
      title: "Community Reflections",
      type: "page",
      public: true,
    },
  },
];

export default legalRouter;
