import CopyIco from "@assets/icons/clipboard-ico.svg";
import { ReactNode, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ClickClipboardCopy = (props: {
  placeholder?: string;
  text: string;
  disableTruncate?: boolean;
  copyIcoHover?: boolean;
  icon?: ReactNode;
  containterClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const copyClipboard = (value: string) => {
    if (copied) return;
    navigator.clipboard.writeText(value);

    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        copyClipboard(props.text);
      }}
    >
      <div
        className={`bg-main-grey group flex cursor-pointer items-center gap-2 rounded-full px-5 py-1.5 text-white ${
          props.containterClassName
            ? props.containterClassName
            : props.containterClassName
        }`}
      >
        <button
          type="button"
          className={`w-full text-left ${
            props.disableTruncate
              ? ""
              : "flex items-center justify-start gap-3 overflow-hidden text-ellipsis whitespace-nowrap"
          }`}
        >
          {props.icon ? props.icon : ""}
          <span className="">
            {props.placeholder ? props.placeholder : props.text}
          </span>
        </button>
        <CopyIco
          className={`inline h-auto w-[25px] select-none [&_path]:fill-white ${
            copied
              ? "hidden"
              : props.copyIcoHover
                ? "hidden group-hover:block"
                : ""
          }`}
        />
        <IoMdCheckmarkCircleOutline
          className={`h-auto w-[25px] ${copied ? "inline" : "hidden"}`}
        />
      </div>
    </div>
  );
};

export default ClickClipboardCopy;
