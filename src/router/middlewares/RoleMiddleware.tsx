import { type ReactNode } from "react";
import { Navigate } from "react-router";
import { type routeMetaType } from "../routes/types";

interface routeMiddlewareType {
  route: routeMetaType;
  selectedRole: string;
  children: ReactNode;
}

const RoleMiddleware = ({
  route,
  selectedRole,
  children,
}: routeMiddlewareType) => {
  if (route.roles != null) {
    for (let i = 0; i < route.roles.length; i++) {
      if (route.roles[i] === selectedRole) {
        return <>{children}</>;
      }
    }

    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default RoleMiddleware;
