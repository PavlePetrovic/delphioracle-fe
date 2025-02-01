// ** React Imports
import { Suspense } from "react";

// ** Utils
import { type routerWrapperType } from "./types";
import LoadingPage from "@components/LoadingPage/LoadingPage";
import { Navigate } from "react-router";
import { useAppSelector } from "@redux/reduxTypes";

const PublicRoute = ({ children, route }: routerWrapperType) => {
  const authData = useAppSelector((state) => state.authentication.authData);

  const restrictedRoute = route && route.restricted;

  if (authData && restrictedRoute) {
    {
      return <Navigate to="/chat-box" />;
    }
  }

  return <Suspense fallback={<LoadingPage />}>{children}</Suspense>;
};

export default PublicRoute;
