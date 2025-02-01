import { type ReactNode } from "react";
import { type routeMetaType } from "../routes/types";

export interface routerWrapperType {
  children: ReactNode;
  route: routeMetaType;
}
