import { Fragment, ReactNode, useEffect, useState } from "react";
import ArrowDown from "@assets/icons/arrow-down-2.svg";

type propsTypes = {
  title: string | ReactNode;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  defaultState?: boolean;
  hideArrow?: boolean;
  disableContentClose?: boolean;
  isOpen?: (e: boolean) => void;
};

const Accordion = ({
  title,
  children,
  className,
  containerClassName,
  defaultState,
  hideArrow,
  disableContentClose,
  isOpen,
}: propsTypes) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof defaultState === "boolean") {
      setOpen(defaultState);
    } else {
      setOpen(true);
    }
  }, [defaultState]);

  useEffect(() => {
    isOpen && isOpen(open);
  }, [open]);

  return (
    <div
      className={`flex flex-col ${containerClassName || ""} cursor-pointer`}
      onClick={(e) =>
        !disableContentClose && !hideArrow ? setOpen(!open) : null
      }
    >
      <div
        className={`flex cursor-pointer items-center justify-between gap-2`}
        onClick={(e) =>
          disableContentClose && !hideArrow ? setOpen(!open) : null
        }
      >
        {title ? (
          <Fragment>
            {typeof title === "string" ? (
              <div
                className={
                  "text-z-grey-600 flex items-center gap-2 text-sm font-[500]"
                }
              >
                {title}
              </div>
            ) : title ? (
              title
            ) : null}
            {!hideArrow ? (
              <div className={`flex items-center gap-1`}>
                <div
                  className={
                    "flex h-[26px] w-[26px] items-center justify-between rounded-lg hover:bg-transparent"
                  }
                >
                  <ArrowDown
                    className={`m-auto w-[26px] cursor-pointer transition-all duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            ) : null}
          </Fragment>
        ) : null}
      </div>
      <div className={`flex flex-col gap-3 ${open ? "" : "hide-list"}`}>
        <div
          className={`mt-3 ${
            className ? className : ""
          } flex flex-col gap-[3px] ${
            open ? "expand-list transition-all" : "hide-list transition-all"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
