import { useEffect, useState } from "react";

type propsTypes = {
  valueExist?: string;
  onChange: (value: string) => void;
};

const genders: Array<"Male" | "Female" | "Other"> = ["Male", "Female", "Other"];

const GenderInput = ({ valueExist, onChange }: propsTypes) => {
  const [value, setValue] = useState<"Male" | "Female" | "Other" | undefined>();

  useEffect(() => {
    value && onChange(value);
  }, [value]);

  useEffect(() => {
    if (valueExist) {
      if (
        valueExist === "Male" ||
        valueExist === "Female" ||
        valueExist === "Other"
      ) {
        setValue(valueExist);
      }
    }
  }, [valueExist]);

  return (
    <div className="flex gap-8 items-center justify-center w-full -mb-2 w888:flex-col w888:gap-3">
      {genders.map((gender) => {
        return (
          <div
            key={gender}
            className={`bg-dark-blue text-base py-3 rounded-2xl w-[140px] text-center hover:opacity-75 hover:cursor-pointer ${
              gender === value
                ? "border border-[#ffffff39] text-gold"
                : "border border-transparent text-white"
            } w888:w-full w888:py-2.5 w888:text-sm`}
            onClick={() => setValue(gender)}
          >
            {gender}
          </div>
        );
      })}
    </div>
  );
};

export default GenderInput;
