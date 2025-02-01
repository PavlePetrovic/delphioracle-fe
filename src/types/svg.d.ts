/// <reference types="vite/client" />

declare module "*.svg" {
  import { FunctionComponent, ComponentProps } from "react";

  const ReactComponent: FunctionComponent<
    ComponentProps<"svg"> & { title?: string }
  >;

  export = ReactComponent;
}
