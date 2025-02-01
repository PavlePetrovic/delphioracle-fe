import { ChangeEvent, useMemo, useState } from "react";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";

type propsTypes = {
  label: string;
  value?: string;
  name?: string;
  className?: string;
  showPass: boolean;
  invalid?: boolean;
  invalidMessage?: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const PasswordInput = (props: propsTypes) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showPass, setShowPass] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoaded(true);
    setInputValue(e.target.value);
    props.onChange(e);
  };

  useMemo(() => {
    if (typeof props.value === "string") {
      setInputValue(props.value);
    }
  }, [props.value]);

  useMemo(() => {
    if (props.showPass) {
      setShowPass(props.showPass);
    }
  }, []);

  return (
    <div className="relative flex flex-col w-full">
      <label
        htmlFor="password-input"
        className={`${
          props.invalid ? "text-red-400" : "text-white"
        } text-sm font-light mb-1.5 select-none"`}
      >
        {props.label}
      </label>
      <input
        type={showPass ? "text" : "password"}
        name={props.name || "password"}
        value={!isLoaded ? props.value : inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
        placeholder="&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;"
        autoComplete="new-password"
        disabled={props.disabled}
        className={`
               ${
                 props.className
               } bg-[#0D101A] text-white p-1.5 pl-3.5 rounded-full text-base font-normal
               ${props.invalid ? "" : ""}
               focus:outline-none
            `}
      />
      <div
        className="absolute top-[37px] right-[12px] cursor-pointer"
        onClick={() => setShowPass((prevState) => !prevState)}
      >
        {showPass ? (
          <BiSolidShow
            className={`text-white ${props.invalid && "text-invalid-red"}`}
          />
        ) : (
          <BiSolidHide
            className={`text-white ${props.invalid && "text-invalid-red"}`}
          />
        )}
      </div>
      {props.invalid && props.invalidMessage && (
        <p className="text-red-400 text-sm font-light mt-1.5">
          {props.invalidMessage}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;
