import { type ReactNode, useEffect, Fragment } from "react";

const defaultTitle = "Delphi Oracle";

interface TitleWrapperType {
  title?: string | undefined;
  children: ReactNode;
}

const TitleWrapper = ({ title, children }: TitleWrapperType) => {
  useEffect(() => {
    if (title) {
      document.title = title + " | " + defaultTitle;
    } else {
      document.title = defaultTitle;
    }
  }, [title]);

  useEffect(() => {
    return () => {
      document.title = defaultTitle;
    };
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default TitleWrapper;
