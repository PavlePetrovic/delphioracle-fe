import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

type propsTypes = {
  label: string;
  value?: number | "";
  placeholder?: string;
  className?: string;
  invalid?: boolean;
  min?: number;
  max?: number;
  hideArrows?: boolean;
  invalidMessage?: string;
  disabled?: boolean;
  onChange: (e: number) => void;
};

const regex = /\d/;

const NumberInput = (props: propsTypes) => {
  const [value, setValue] = useState<number | "">("");

  function updateValue(value: number) {
    if (typeof props.min === "number" && value < props.min) {
      return;
    }
    if (typeof props.max === "number" && value > props.max) {
      return;
    }
    setValue(value);
    props.onChange(value);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value != "" && !isNaN(parseInt(e.target.value))) {
      if (+e.target.value >= 999999) {
        updateValue(999999);
      } else {
        updateValue(+e.target.value);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!regex.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
    if (JSON.stringify(value).length === 1 && e.key === "Backspace") {
      updateValue(0);
    }
  };

  const onArrowHandler = (v: number) => {
    updateValue(+v);
  };

  useEffect(() => {
    setValue(props.value ? props.value : 0);
  }, [props.value]);

  return (
    <div className="flex flex-col w-full">
      {props.label ? (
        <label
          htmlFor="number-input"
          className="text-white text-sm font-light mb-1.5 select-none"
        >
          {props.label}
        </label>
      ) : (
        ""
      )}
      <div className="flex items-center w-full">
        <input
          type="text"
          name="number-input"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={props.placeholder}
          disabled={props.disabled}
          className={`w-full p-2 pl-2.5 rounded-l-xl text-base font-normal h-full ${
            props.disabled
              ? "disabled:animate-pulse cursor-not-allowed"
              : "text-[#d5d5d5] bg-[#0D101A]"
          } ${props.invalid ? "bg-red-400" : ""} focus:outline-none ${
            props.className || ""
          } ${props.hideArrows && "rounded-r-xl"}`}
        />
        {!props.hideArrows ? (
          <div
            className={`flex flex-col text-black rounded-r-xl pr-2 pb-[1.5px] pt-[1.5px]
               ${props.invalid ? "bg-red-400" : "bg-[#0D101A]"}
               ${
                 props.disabled
                   ? "disabled:animate-pulse cursor-not-allowed"
                   : ""
               }
           `}
          >
            <MdKeyboardArrowUp
              onClick={
                props.disabled
                  ? () => null
                  : () =>
                      onArrowHandler(
                        value !== "" && !isNaN(value)
                          ? value >= 999999
                            ? 999999
                            : value + 1
                          : 1
                      )
              }
              className={`${
                props.invalid ? "text-invalid-red" : "text-[#cccccc]"
              } text-[24.5px] -mb-1 hover:text-black transition-all select-none ${
                props.disabled ? "bg-ultra-light-gray cursor-not-allowed" : ""
              }`}
            />
            <MdKeyboardArrowDown
              onClick={() =>
                props.disabled
                  ? () => null
                  : value !== "" && !isNaN(value)
                  ? onArrowHandler(value <= 0 ? 0 : value - 1)
                  : () => null
              }
              className={`${
                props.invalid ? "text-invalid-red" : "text-[#cccccc]"
              } text-[24.5px] -mt-1 hover:text-black transition-all select-none ${
                props.disabled ? "bg-ultra-light-gray cursor-not-allowed" : ""
              }`}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      {props.invalid && props.invalidMessage && (
        <p className="text-invalid-red text-sm font-light mt-1.5">
          {props.invalidMessage}
        </p>
      )}
    </div>
  );
};

export default NumberInput;
