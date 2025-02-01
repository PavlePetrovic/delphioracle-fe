// ** React Imports
import { Fragment } from "react";
// ** Layouts

// ** Route Components
import PublicRoute from "../wrappers/PublicRoute";
import PrivateRoute from "../wrappers/PrivateRoute";
import ShieldRoute from "../wrappers/ShieldRoute";

// ** Utils
import { type routeType } from "./types";
import TitleWrapper from "@views/layouts/TitleWrapper/TitleWrapper";
import AppFramedLayout from "@views/layouts/AppFramedLayout/AppFramedLayout";
import AppFramelessLayout from "@views/layouts/AppFramelessLayout/AppFramelessLayout";

// ** Return Filtered Array of routes & Paths
const MergeLayoutRoutes = (routes: routeType[]) => {
  const LayoutRoutes: routeType[] = [];

  if (routes) {
    routes.filter((route) => {
      let layout = "blank";
      // ** Checks if Route layout or Default layout matches current layout

      if (route.meta) {
        let RouteTag = PublicRoute;
        if (route.meta && route.meta.private) {
          RouteTag = PrivateRoute;
        } else if (route.meta && route.meta.shield) {
          RouteTag = ShieldRoute;
        }

        if (route.meta) {
          route.meta?.layout === "app_framed" || route.meta?.layout === "app"
            ? (layout = "app_framed")
            : route.meta?.layout === "app_frameless"
              ? (layout = "app_frameless")
              : (layout = "blank");
        }

        if (route.element) {
          const Wrapper = route.meta?.title ? TitleWrapper : Fragment;
          const wrapperProps = {
            ...(route.meta?.title ? { title: route.meta.title } : {}),
          };
          const LayoutWrapper =
            layout === "app_framed" || layout === "app"
              ? AppFramedLayout
              : layout === "app_frameless"
                ? AppFramelessLayout
                : Fragment;

          route.element = (
            <Wrapper {...wrapperProps}>
              <LayoutWrapper>
                <RouteTag route={route.meta}>{route.element}</RouteTag>
              </LayoutWrapper>
            </Wrapper>
          );
        }

        if (route.children != null) {
          route.children = [
            ...route.children.map((child: routeType) => {
              const SubrouteWrapper = child.meta?.title
                ? TitleWrapper
                : Fragment;
              const subrouteWrapperProps = {
                ...(child.meta?.title ? { title: child.meta.title } : {}),
              };

              let SubrouteTag = PublicRoute;
              if (child.meta && child.meta.private) {
                SubrouteTag = PrivateRoute;
              } else if (child.meta && child.meta.shield) {
                SubrouteTag = ShieldRoute;
              }

              return {
                ...child,
                element: (
                  <SubrouteWrapper {...subrouteWrapperProps}>
                    <SubrouteTag route={child.meta}>
                      {child.element}
                    </SubrouteTag>
                  </SubrouteWrapper>
                ),
              };
            }),
          ];
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

export default MergeLayoutRoutes;
