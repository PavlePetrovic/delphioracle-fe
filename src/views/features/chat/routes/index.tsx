import { lazy, type FC } from "react";
import { lazyRetry } from "@common/utility/Utils";
import { type routeType } from "@router/routes/types";

const ChatBox: FC | any = lazy(
  async () => await lazyRetry(async () => await import("../pages/ChatBox")),
);

const ChatBoxQuestions: FC | any = lazy(
  async () =>
    await lazyRetry(async () => await import("../pages/ChatBoxQuestions")),
);

const ChatBoxLanding: FC | any = lazy(
  async () =>
    await lazyRetry(async () => await import("../pages/ChatBoxLanding")),
);

const chatRouter: routeType[] = [
  {
    path: "/chat-box",
    element: <ChatBox />,
    meta: {
      layout: "app_framed",
      title: "Chat",
      type: "page",
      private: true,
    },
  },
  {
    path: "/chat-box-public",
    element: <ChatBox isPublic={true} />,
    meta: {
      layout: "app_framed",
      title: "Chat",
      type: "page",
      public: true,
    },
  },
  {
    path: "/chat-box-questions",
    element: <ChatBoxQuestions />,
    meta: {
      layout: "app_framed",
      title: "Chat Questions",
      type: "page",
      private: true,
    },
  },
  {
    path: "/chat-box-questions-public",
    element: <ChatBoxQuestions isPublic={true} />,
    meta: {
      layout: "app_framed",
      title: "Chat Questions",
      type: "page",
      public: true,
    },
  },
  {
    path: "/chat-landing",
    element: <ChatBoxLanding />,
    meta: {
      layout: "app_framed",
      title: "Chat Landing",
      type: "page",
      public: true,
    },
  },
];

export default chatRouter;
