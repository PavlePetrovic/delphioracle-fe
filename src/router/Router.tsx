import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { getRoutes } from "./routes";
import { lazy } from "react";
import { lazyRetry } from "@common/utility/Utils";

const App: React.FC | any = lazy(
  async () => await lazyRetry(async () => await import("../App")),
);

const router = createBrowserRouter([
  { path: "", element: <App />, children: [...getRoutes()] },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
