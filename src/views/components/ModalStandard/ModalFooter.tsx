import Button from "../Button/Button";
import { ReactNode } from "react";

interface propTypes {
  close?: () => void;
  additionalButton?: {
    text: string;
    processing?: boolean;
    disabled?: boolean;
    onSubmit: () => void;
  };
  actionButton?: {
    text?: string;
    processing?: boolean;
    disabled?: boolean;
    onSubmit?: () => void;
    className?: string;
    submitIco?: boolean;
  };
  containerClassName?: string;
  customRef?: any;
  hideCloseButton?: boolean;
  closeButtonText?: string;
  additionalButtonChildren?: ReactNode;
  additionaButtonEnableSaveChanges?: {
    hasChanges?: boolean;
    show: () => void;
  };
}

const ModalFooter = ({
  close,
  actionButton,
  additionalButton,
  containerClassName,
  customRef,
  hideCloseButton,
  closeButtonText,
  additionalButtonChildren,
  additionaButtonEnableSaveChanges,
}: propTypes) => {
  return (
    <div
      ref={customRef || null}
      className={`rounded-b-2xl bg-dark-blue px-[17px] py-[16px] fixed bottom-0 w-full z-[10] flex gap-3 items-center justify-between ${
        containerClassName || ""
      }`}
    >
      <div>
        {/* third option here - NEED TO SETUP */}
        {additionalButton?.onSubmit && (
          <Button
            type="naked"
            text={additionalButton.text}
            disable={additionalButton.processing || additionalButton.disabled}
            onClick={() =>
              additionaButtonEnableSaveChanges?.hasChanges
                ? additionaButtonEnableSaveChanges?.show()
                : additionalButton.onSubmit()
            }
          />
        )}
        {additionalButtonChildren ? additionalButtonChildren : null}
      </div>
      <div className={"flex gap-3 items-center justify-center mx-auto"}>
        {close && !hideCloseButton && (
          <Button
            type="main"
            text={closeButtonText || "Cancel"}
            onClick={() => close()}
            className={`${
              actionButton?.className ? actionButton?.className : ""
            } text-[#f6faffc6] py-[7.5px]`}
          />
        )}
        {actionButton?.onSubmit && (
          <Button
            type="goldMain"
            actionIco={actionButton?.submitIco}
            disable={actionButton.disabled}
            processing={actionButton.processing}
            text={actionButton.text || "Confirm"}
            onClick={() =>
              actionButton.onSubmit ? actionButton.onSubmit() : null
            }
            className={actionButton.className}
          />
        )}
      </div>
    </div>
  );
};

export default ModalFooter;
