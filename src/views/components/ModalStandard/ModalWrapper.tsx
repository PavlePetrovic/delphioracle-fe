import { useState, type ReactNode, useEffect } from "react";
import CloseIco from "@assets/icons/close-ico.svg";
import "./modal.style.css";

const ModalWrapper = (props: {
  children?: ReactNode;
  close: () => void;
  overflow?: "unset";
  childrenClassName?: string;
  preventAutoScroll?: boolean;
  removePadding?: boolean;
  enableCloseIco?: boolean;
  containerClassName?: string;
  customRef?: any;
  styleChildren?: any;
}) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [stateModal, setStateModal] = useState<string>("");

  useEffect(() => {
    if (!props.preventAutoScroll) {
      const modalScrollbarContainerBox = document.getElementById(
        "modalScrollbarContainerBox",
      );
      modalScrollbarContainerBox?.scroll({ top: 1 });
    }
  }, [isMouseEnter]);

  useEffect(() => {
    if (stateModal === "close") {
      setTimeout(() => {
        props.close();
      }, 200);
    }
  }, [stateModal]);

  useEffect(() => {
    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <div
      className={`bg-glass show-animation fixed top-0 left-0 z-50 h-screen w-full overflow-hidden ${
        props.containerClassName ? props.containerClassName : ""
      }`}
      onMouseEnter={() => {
        setIsMouseEnter((prevMouseState) => !prevMouseState);
      }}
    >
      <div
        ref={props?.customRef ? props.customRef : null}
        className="h-screen w-full"
        onClick={() => props.close()}
      ></div>
      <div
        id="modalScrollbarContainerBox"
        className={`
           bg-dark-blue fixed top-[50%] left-[50%] z-10 h-auto max-h-[80vh] w-fit max-w-[80%] translate-x-[-50%] translate-y-[-50%] shadow-lg ${
             props.childrenClassName ? props.childrenClassName : ""
           } modal-custom-animation w888:max-w-[95%] w888:max-h-[95%] !rounded-xl`}
      >
        {props.enableCloseIco ? (
          <div
            className={`hover:bg-z-grey-100 group absolute top-[5px] right-[10px] mt-[4px] flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-lg`}
          >
            <CloseIco
              className={
                "group-hover:[&_path]:fill-main-color [&_path]:fill-z-grey-500 cursor-pointer transition-all "
              }
              onClick={() => props.close()}
            />
          </div>
        ) : null}
        {props.children}
      </div>
    </div>
  );
};

export default ModalWrapper;
