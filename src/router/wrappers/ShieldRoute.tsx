// ** React Imports
import { Suspense } from "react";

import { type routerWrapperType } from "./types";
import LoadingPage from "@components/LoadingPage/LoadingPage";

const ShieldRoute = ({ children, route }: routerWrapperType) => {
  return <Suspense fallback={<LoadingPage />}>{children}</Suspense>;
};

export default ShieldRoute;
