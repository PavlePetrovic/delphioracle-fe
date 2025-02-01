// ** React Imports
import { Suspense } from "react";
import RoleMiddleware from "../middlewares/RoleMiddleware";
import { type routerWrapperType } from "./types";
import LoadingPage from "@components/LoadingPage/LoadingPage";

const PrivateRoute = ({ children, route }: routerWrapperType) => {
  return (
    <RoleMiddleware route={route} selectedRole={"admin"}>
      <Suspense fallback={<LoadingPage />}>{children}</Suspense>
    </RoleMiddleware>
  );
};

export default PrivateRoute;
