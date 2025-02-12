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
    <div className="-mb-2 flex w-full items-center justify-center gap-8 w888:flex-col w888:gap-3">
      {genders.map((gender) => {
        return (
          <div
            key={gender}
            className={`w-[140px] rounded-2xl bg-dark-blue py-3 text-center text-base hover:cursor-pointer hover:opacity-75 ${
              gender === value
                ? "border border-[#ffffff39] text-gold"
                : "border border-transparent text-white"
            } w888:w-full w888:py-2.5 w888:text-sm`}
            onClick={() => setValue(gender)}
          >
            {gender === "Other" ? "Beyond" : gender}
          </div>
        );
      })}
    </div>
  );
};

export default GenderInput;
