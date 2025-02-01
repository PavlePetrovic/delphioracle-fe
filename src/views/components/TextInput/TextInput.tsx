import { ChangeEvent, useEffect, useState } from "react";

type propsTypes = {
  label?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  invalid?: boolean;
  invalidMessage?: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maxChar?: number;
  isAboveMaxChar?: (proof: boolean) => void;
  icon?: string;
};

const TextInput = (props: propsTypes) => {
  const [inputValue, setInputValue] = useState("");
  const [localError, setLocalError] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
    props.isAboveMaxChar &&
      props.maxChar &&
      props.isAboveMaxChar(e.target.value.length > props.maxChar);
  };

  useEffect(() => {
    if (props.value) {
      setInputValue(props.value);
    } else {
      setInputValue("");
    }
  }, [props.value]);

  useEffect(() => {
    if (props.maxChar) {
      if (inputValue.length > props.maxChar) {
        setLocalError(true);
      } else {
        setLocalError(false);
      }
    }
  }, [inputValue.length]);

  return (
    <div className="flex w-full flex-col">
      {props.label ? (
        <label
          htmlFor={props.name || "text-input"}
          className="mb-1.5 select-none text-sm font-light text-white"
        >
          {props.label}
        </label>
      ) : (
        ""
      )}
      <div
        className={`relative w-full ${
          props.icon ? "flex items-center justify-center" : ""
        }`}
      >
        <input
          type="text"
          name={props.name || "text-input"}
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
          placeholder={props.placeholder}
          disabled={props.disabled}
          autoComplete="off"
          className={`
               ${
                 props.className
               } w-full rounded-full bg-[#0D101A] p-1.5 pl-3.5 text-base font-normal text-white
               ${
                 props.invalid || localError
                   ? "bg-red-400"
                   : props.icon
                     ? "border-b border-l border-t"
                     : ""
               }
               ${props.icon ? "rounded-l-xl" : "rounded-full"}
               disabled:text-gray focus:outline-none disabled:animate-pulse
               disabled:cursor-not-allowed
               w888:p-1.5 w888:pl-3.5 w888:text-sm
            `}
          maxLength={props.maxChar}
        />
        {props.maxChar && (
          <div
            className={`${
              localError || props.invalid
                ? "text-invalid-red bg-invalid-dimmed-red"
                : "text-gray"
            } absolute -bottom-[19px] right-2 rounded-b-md px-1.5 py-[2px] text-[10px] tracking-wider`}
          >
            {inputValue.length}/{props.maxChar}
          </div>
        )}
        {props.icon ? (
          <div
            className={`flex h-full w-[47px] items-center justify-center rounded-r-xl border-b border-r border-t`}
          >
            <img src={props.icon} alt="input-ico" />
          </div>
        ) : null}
      </div>
      {(props.invalid && props.invalidMessage) || localError ? (
        <p className="text-invalid-red mt-1.5 text-sm font-light">
          {localError
            ? "Max 50 characters is allowed"
            : props.invalidMessage
              ? `${props.invalidMessage}`
              : ""}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default TextInput;
