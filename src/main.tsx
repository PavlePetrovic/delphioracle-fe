// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Router from "@router/Router";
import * as Sentry from "@sentry/react";

if (
  import.meta.env.VITE_ENV === "production" &&
  window.location.origin.includes("thedelphioracle.com")
) {
  Sentry.init({
    dsn: `https://${import.meta.env.VITE_SENTRY_INIT}`,
    release: `delphi-oracle-app@1.0.0`,
    environment: `${import.meta.env.VITE_ENV}`,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    // Tracing
    tracesSampleRate: 0.5, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: [
      "localhost",
      "https://www.thedelphioracle.com",
      "https://dev.thedelphioracle.com",
    ],
    // Session Replay
    replaysSessionSampleRate: 0.5, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
}

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Router />
  </Provider>,
);
