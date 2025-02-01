import { useState, useEffect, useMemo, ReactNode } from "react";
import CheckIco from "@assets/icons/check-ico-green.svg";

interface propsTypes {
  text: string | ReactNode;
  isChecked?: boolean;
  onChange: (e: boolean) => void;
  invalid?: boolean;
  disabled?: boolean;
  className?: string;
  link?: boolean;
  invalidMessage?: string;
  linkPath?: string;
  linkNode?: ReactNode;
  notAllChecked?: boolean;
  disableCheckFunction?: boolean;
  textStyle?: string;
  containerClassName?: string;
  onlyCheckOn?: boolean;
}

const CheckBox = (props: propsTypes) => {
  const [checked, setChecked] = useState(false);
  const [boxStyle, setBoxStyle] = useState("");

  const checkedHnadle = (e: any) => {
    e.stopPropagation();
    if (props.onlyCheckOn) {
      props.onChange(!checked);
    } else {
      if (!props.disableCheckFunction) {
        setChecked((prevChecked) => !prevChecked);
      }
      props.onChange(!checked);
    }
  };

  useEffect(() => {
    if (checked) {
      if (props.disabled) {
        setBoxStyle("text-gray cursor-not-allowed");
      } else {
        setBoxStyle("text-main-color");
      }
    } else {
      if (props.disabled) {
        setBoxStyle("text-gray cursor-not-allowed");
      } else {
        setBoxStyle("text-black");
      }
    }
  }, [checked, props.disabled, props.isChecked]);

  useMemo(() => {
    setChecked(props?.isChecked ? props.isChecked : false);
  }, [props.isChecked]);

  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center justify-center gap-2">
        <div
          className={`relative ${
            props.containerClassName ? props.containerClassName : ""
          }`}
          onClick={(e) => !props.disabled && checkedHnadle(e)}
        >
          <div
            className={`h-5 w-5 rounded 
            ${props.disabled ? "cursor-not-allowed" : "cursor-pointer"}
            ${
              props.disabled
                ? "bg-light-gray grayscale"
                : props.invalid
                  ? "border-2 border-red-400 text-red-400"
                  : checked || props.notAllChecked
                    ? "bg-dark-blue"
                    : "bg-dark-blue"
            }
            ${props.className ? props.className : ""} `}
          >
            {checked || props.notAllChecked ? (
              <div className={"flex h-5 w-5 items-center justify-center"}>
                {checked ? (
                  <CheckIco className={"h-3.5 w-3.5 [&_path]:fill-white"} />
                ) : (
                  <></>
                )}
              </div>
            ) : null}
          </div>
        </div>
        {props.linkNode || props.text ? (
          typeof props.text !== "string" ? (
            <>{props.text}</>
          ) : (
            <span
              className={`w-fit text-xs font-light ${boxStyle} ${
                props.invalid ? "text-red-400" : "text-white"
              } select-none ${props.textStyle}`}
            >
              {props.linkNode ? props.linkNode : `${props.text}`}
            </span>
          )
        ) : null}
      </div>

      {props.invalid && props.invalidMessage && (
        <p className="mt-1.5 text-center text-sm font-light text-red-400">
          {props.invalidMessage}
        </p>
      )}
    </div>
  );
};

export default CheckBox;
