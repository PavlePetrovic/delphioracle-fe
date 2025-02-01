import { isStringEmpty } from "@common/utility/Utils";
import { useEffect, useState } from "react";
import CalendarPicker from "@components/DateTimePickerInput/Calendar/CalendarPicker";
import TimerPicker from "@components/DateTimePickerInput/Timer/TimerPicker";

export type dateTimeDataType = {
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
};

type propsTypes = {
  valueExist: dateTimeDataType;
  onChange: (value: dateTimeDataType) => void;
};

const DateTime = ({ valueExist, onChange }: propsTypes) => {
  const [internalValue, setInternalValue] = useState<dateTimeDataType>({
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
  });

  useEffect(() => {
    if (
      !isStringEmpty(internalValue.year) ||
      !isStringEmpty(internalValue.month) ||
      !isStringEmpty(internalValue.day) ||
      !isStringEmpty(internalValue.hour) ||
      !isStringEmpty(internalValue.minute)
    ) {
      onChange(internalValue);
    }
  }, [internalValue]);

  return (
    <div>
      <CalendarPicker
        valueExist={{
          year: valueExist.year,
          month: valueExist.month,
          day: valueExist.day,
        }}
        onChange={(value) => {
          setInternalValue((prevValue) => {
            return {
              ...prevValue,
              year: value.year,
              month: value.month,
              day: value.day,
            };
          });
        }}
      />
      {(+valueExist?.year > 0 || +internalValue?.year > 0) && (
        <div className="mx-auto mt-3 w-fit">
          <TimerPicker
            valueExist={{
              hours: valueExist.hour,
              minutes: valueExist.minute,
            }}
            onChange={(value) => {
              setInternalValue((prevValue) => {
                return {
                  ...prevValue,
                  hour: value.hours,
                  minute: value.minutes,
                };
              });
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DateTime;
