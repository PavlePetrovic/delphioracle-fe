import { type ReactNode } from "react";
import { createPortal } from "react-dom";

const CreatePortal = ({
  children,
  root,
}: {
  children: ReactNode;
  root?: string;
}) => {
  const modalRoot = document.getElementById(root || "modal-box") as HTMLElement;

  if (!modalRoot) {
    return null;
  }

  return createPortal(children, modalRoot);
};

export default CreatePortal;
