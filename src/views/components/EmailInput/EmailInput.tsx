import { ChangeEvent, useEffect, useState } from "react";

type propsTypes = {
  label: string;
  value?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  invalid?: boolean;
  invalidMessage?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const EmailInput = (props: propsTypes) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  useEffect(() => {
    if (props.value) {
      setInputValue(props.value);
    }
  }, [props.value]);

  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor="email-input"
        className={`${
          props.invalid ? "text-red-400" : "text-white"
        } text-sm font-light mb-1.5 select-none`}
      >
        {props.label}
      </label>
      <input
        type="email"
        name={props.name || "email"}
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
        placeholder={props.placeholder}
        autoComplete="new-password"
        disabled={props.disabled}
        className={`
               ${
                 props.className
               } bg-[#0D101A] text-white p-1.5 pl-3.5 rounded-full text-base font-normal
               ${props.invalid ? "" : ""}
               focus:outline-none
               disabled:cursor-not-allowed disabled:text-gray
            `}
      />
      {props.invalid && props.invalidMessage && (
        <p className="text-red-400 text-sm font-light mt-1.5">
          {props.invalidMessage}
        </p>
      )}
    </div>
  );
};

export default EmailInput;
