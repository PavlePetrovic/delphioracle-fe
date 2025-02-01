import { type FC } from "react";

export interface routeType {
  path: string;
  element: FC | any;
  meta: routeMetaType;
  children?: routeType[];
}

export interface routeMetaType {
  layout?: "app" | "app_framed" | "app_frameless" | "blank"; // determines layout, navbars etc for certain view (default is blank)
  type?: "page" | "component"; // determines if route is a page or component
  title?: string; // used for rendering document title on pages
  public?: boolean; // determines if a page is public and everyone can access (default is false)
  private?: boolean; // determines if a page is private and only logged users can access (default is false)
  shield?: boolean; // determines if a page is shielded between private and public (example is company wizard for clients) (default is false)
  restricted?: boolean; // // determines if a public page is restricted and accessible only for unauthenticated users (default is false)
  roles?: ["admin" | "client"]; // determines which roles can access (default is all roles included)
}
