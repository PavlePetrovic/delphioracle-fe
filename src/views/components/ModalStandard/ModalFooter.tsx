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
      className={`fixed bottom-0 z-[10] flex w-full items-center justify-between gap-3 rounded-b-2xl bg-dark-blue px-[17px] py-[16px] ${
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
      <div className={`mx-auto flex items-center justify-center gap-3`}>
        {close && !hideCloseButton && (
          <Button
            type="main"
            text={closeButtonText || "Cancel"}
            onClick={() => close()}
            className={`${
              actionButton?.className ? actionButton?.className : ""
            } py-[7.5px] text-[#f6faffc6]`}
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
