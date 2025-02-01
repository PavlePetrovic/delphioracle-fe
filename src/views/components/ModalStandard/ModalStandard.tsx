import { ReactNode, useRef } from "react";
import CreatePortal from "../CreatePortal/CreatePortal";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalWrapper from "./ModalWrapper";
import ScrollWrapper from "../ScrollWrapper/ScrollWrapper";

type propsTypes = {
  close: () => void;
  title?: string;
  actionButton?: {
    text?: string;
    processing?: boolean;
    disabled?: boolean;
    onSubmit?: () => void;
    className?: string;
    submitIco?: boolean;
  };
  children?: ReactNode;
  modalClassName?: string;
  headerClassName?: string;
  headerChildren?: ReactNode;
  closeButtonText?: string;
  closeFooter?: () => void;
  additionalButton?: any;
  isLoading?: boolean;
  contentClassName?: string;
  additionalButtonChildren?: ReactNode;
  hideModalFooter?: boolean;
  hideModalHeader?: boolean;
  hideCloseButton?: boolean;
  hideCloseIco?: boolean;
};
const ModalWithContent = ({
  close,
  title,
  actionButton,
  children,
  modalClassName,
  headerClassName,
  headerChildren,
  closeButtonText,
  closeFooter,
  additionalButton,
  contentClassName,
  additionalButtonChildren,
  hideModalFooter = false,
  hideModalHeader = false,
  hideCloseIco,
  hideCloseButton,
}: propsTypes) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = (type?: "outside" | "header" | "footer") => {
    if (type === "header" || type === "outside") {
      return close();
    } else if (type === "footer") {
      return closeFooter ? closeFooter() : close();
    }
  };

  return (
    <CreatePortal root="modal">
      <ModalWrapper
        childrenClassName={`p-[0px] ${
          modalClassName ? modalClassName : "w-fit h-full"
        }`}
        close={() => handleCloseModal("outside")}
        customRef={modalRef}
      >
        {!hideModalHeader ? (
          <div className={"fixed top-0 z-10 w-full"} ref={headerRef}>
            <ModalHeader
              close={() => handleCloseModal("header")}
              className={`${headerClassName || ""}`}
              hideCloseIco={hideCloseIco}
            >
              {headerChildren ? (
                headerChildren
              ) : (
                <div className={"flex flex-col"}>
                  <h1
                    className={
                      "text-2xl font-philosopher text-white font-light w888:text-xl text-center -mr-1"
                    }
                  >
                    {title}
                  </h1>
                </div>
              )}
            </ModalHeader>
          </div>
        ) : null}
        <ScrollWrapper
          id="scrollBarContainerBox"
          className={`bg-dark-blue h-full rounded-3xl px-3.5 ${
            hideModalHeader ? "" : "pt-[65px]"
          } ${hideModalFooter ? "" : "pb-[68px]"} ${contentClassName || ""}`}
        >
          <div>{children}</div>
        </ScrollWrapper>
        {!hideModalFooter ? (
          <ModalFooter
            customRef={footerRef}
            containerClassName={"fixed bottom-0 w-full"}
            actionButton={actionButton}
            close={() => handleCloseModal("footer")}
            closeButtonText={closeButtonText}
            hideCloseButton={hideCloseButton}
            additionalButton={additionalButton}
            additionalButtonChildren={additionalButtonChildren}
          />
        ) : null}
      </ModalWrapper>
    </CreatePortal>
  );
};

export default ModalWithContent;
