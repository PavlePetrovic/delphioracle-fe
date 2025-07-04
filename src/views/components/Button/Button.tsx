import { ReactNode } from "react";
import { BsArrowRight } from "react-icons/bs";
import Spinner from "../Spinner/Spinner";

type propsTypes = {
  type: "goldMain" | "main" | "border" | "naked";
  text?: string;
  actionIco?: boolean;
  className?: string;
  CustomIco?: ReactNode;
  disable?: boolean;
  processing?: boolean;
  customStyle?: {
    text?: string;
    border?: string;
    background?: string;
    icon?: string;
  };
  onClick?: () => void;
};

const Button = ({
  type,
  text,
  actionIco,
  className,
  CustomIco,
  disable,
  processing,
  customStyle,
  onClick,
}: propsTypes) => {
  return type === "goldMain" ? (
    <button
      className={`bg-main-grey flex items-center justify-center gap-2 rounded-full border border-[#ffffff1d] px-5 py-1.5 font-light text-gold w888:px-4 w888:py-[5px] w888:text-sm ${className} transition-all hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-65`}
      onClick={onClick}
      disabled={disable}
    >
      {text && (
        <span className="flex items-center justify-center gap-1.5 font-normal text-gold">
          {text} {processing ? <Spinner /> : ""}
        </span>
      )}
      {actionIco && !CustomIco && (
        <BsArrowRight className={`text-xl ${customStyle?.icon}`} />
      )}
      {CustomIco && CustomIco}
    </button>
  ) : type === "main" ? (
    <button
      className={`flex items-center justify-center gap-2 ${
        customStyle?.border ? customStyle.border : ""
      } ${customStyle?.background ? customStyle.background : "bg-main-grey"} ${
        customStyle?.text ? customStyle.text : "text-white"
      } rounded-full px-5 py-1.5 font-light w888:px-4 w888:py-[5px] w888:text-sm ${className} transition-all hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-65`}
      onClick={onClick}
      disabled={disable}
    >
      {text && (
        <span className="flex items-center justify-center gap-1.5">
          {text} {processing ? <Spinner /> : ""}
        </span>
      )}
      {actionIco && !CustomIco && (
        <BsArrowRight className={`text-xl ${customStyle?.icon}`} />
      )}
      {CustomIco && CustomIco}
    </button>
  ) : type === "border" ? (
    <button
      className={`flex items-center justify-center gap-2 ${
        customStyle?.border ? customStyle.border : "border border-white"
      } ${
        customStyle?.background ? customStyle.background : "bg-transparent"
      } ${
        customStyle?.text ? customStyle.text : "text-white"
      } rounded-full px-5 py-1 font-light w888:px-4 w888:py-1 w888:text-sm ${className} transition-all hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-65`}
      onClick={onClick}
      disabled={disable}
    >
      {text && (
        <span className="flex items-center justify-center gap-1.5">
          {text} {processing ? <Spinner /> : ""}
        </span>
      )}
      {actionIco && !CustomIco && (
        <BsArrowRight className={`text-xl ${customStyle?.icon}`} />
      )}
      {CustomIco && CustomIco}
    </button>
  ) : type === "naked" ? (
    <button
      className={`rounded-full px-5 py-1.5 font-light text-white w888:px-4 w888:py-1 w888:text-sm ${className} transition-all hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-65`}
      onClick={onClick}
      disabled={disable}
    >
      {text && (
        <span className="flex items-center justify-center gap-1.5">
          {text} {processing ? <Spinner /> : ""}
        </span>
      )}
      {actionIco && !CustomIco && (
        <BsArrowRight className={`text-xl ${customStyle?.icon}`} />
      )}
      {CustomIco && CustomIco}
    </button>
  ) : (
    <button className={`${className}`} disabled={disable}>
      {text} {processing ? <Spinner /> : ""}
    </button>
  );
};

export default Button;
