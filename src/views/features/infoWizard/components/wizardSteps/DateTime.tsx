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
  placeholder?: string;
  onChange: (value: dateTimeDataType) => void;
};

const DateTime = ({ valueExist, placeholder, onChange }: propsTypes) => {
  const [internalValue, setInternalValue] = useState<dateTimeDataType>({
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
  });
  const [flowlessTimerOpening, setFlowlessTimerOpening] = useState(false);

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

  useEffect(() => {
    flowlessTimerOpening && setFlowlessTimerOpening(false);
  }, [flowlessTimerOpening]);

  return (
    <div>
      <CalendarPicker
        placeholder={
          placeholder ? placeholder : "Pick your birth date and time"
        }
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
        handleExternalEvents={() => setFlowlessTimerOpening(true)}
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
            autoOpen={flowlessTimerOpening}
          />
        </div>
      )}
    </div>
  );
};

export default DateTime;
