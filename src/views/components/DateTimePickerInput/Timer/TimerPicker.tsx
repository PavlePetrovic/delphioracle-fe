import { useEffect, useState } from "react";
import ModalStandard from "@components/ModalStandard/ModalStandard";
import { hoursData, minutesData } from "./TimerData";
import TimerPickerNavigation from "./TimerPickerNavigation";
import TimerPickerHeader from "./TimerPickerHeader";
import { isStringEmpty } from "@common/utility/Utils";

type propsTypes = {
  valueExist: timerPickerValue;
  autoOpen?: boolean;
  onChange: (e: timerPickerValue) => void;
};

type timerPickerValue = {
  hours: string;
  minutes: string;
};

const scrollClasses =
  "scrollbar-thumb-rounded-full scrollbar scrollbar-thumb-w-[4px] scrollbar-thin scrollbar-thumb-gold scrollbar-track-transparent overflow-y-scroll rounded";

const initialState: timerPickerValue = {
  hours: "",
  minutes: "",
};

const TimerPicker = ({ valueExist, autoOpen, onChange }: propsTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<timerPickerValue>(initialState);

  const handleSetValue = (value: string, type: "hours" | "minutes") => {
    setValue((prevValue) => {
      return {
        ...prevValue,
        [type]: value,
      };
    });
  };

  useEffect(() => {
    if (!isStringEmpty(value?.hours) || !isStringEmpty(value?.minutes)) {
      onChange(value);
    }
  }, [value]);

  useEffect(() => {
    autoOpen && setIsOpen(true);
  }, [autoOpen]);

  useEffect(() => {
    valueExist && setValue(valueExist);
  }, []);

  const isTimePicked =
    !isStringEmpty(value?.hours) || !isStringEmpty(value?.minutes);

  return (
    <>
      {/* TIMER INPUT PREVIEW */}
      <div
        className="flex cursor-pointer items-center justify-center rounded-[16px] bg-main-grey p-1.5"
        onClick={() => setIsOpen(true)}
      >
        <div
          className={`w-full animate-pulse rounded-xl bg-[#e0efff1f] px-3 py-1.5 text-center text-sm font-light text-white ${
            isTimePicked ? "hidden" : "block"
          }`}
        >
          Pick a birth time
        </div>
        <div
          className={`w-[48px] rounded-l-xl bg-[#e0efff1f] py-1.5 text-center text-sm font-light tracking-wide text-white ${
            isTimePicked ? "block" : "hidden"
          }`}
        >
          {+value?.hours < 10 ? `0${value?.hours}` : value?.hours}h
        </div>
        <p
          className={`w-fit bg-[#e0efff1f] px-0.5 py-1.5 text-sm font-light text-white ${
            isTimePicked ? "block" : "hidden"
          }`}
        >
          :
        </p>
        <div
          className={`w-[48px] rounded-r-xl bg-[#e0efff1f] py-1.5 text-center text-sm font-light tracking-wide text-white ${
            isTimePicked ? "block" : "hidden"
          }`}
        >
          {+value?.minutes < 10 ? `0${value?.minutes}` : value?.minutes}m
        </div>
      </div>
      {/* TIMER MODAL */}
      {isOpen && (
        <ModalStandard
          close={() => {
            setIsOpen(false);
          }}
          modalClassName="!w-[400px] w888:!w-[320px] !h-[333px]"
          hideModalHeader
          hideModalFooter
        >
          <div className="mb-2.5 mt-6 w-full">
            <TimerPickerHeader />
          </div>
          <div className="flex h-[207px] items-start justify-start gap-2">
            <div className="h-full w-1/2 rounded-lg border border-[#e0efff1f] p-1">
              <div
                className={`flex h-full w-full flex-col items-center justify-start gap-0.5 bg-dark-blue px-2 ${
                  isStringEmpty(value?.hours) ? "animate-pulse" : ""
                } ${scrollClasses}`}
              >
                {hoursData?.map((h) => (
                  <p
                    key={h}
                    className={`w-full cursor-pointer text-center ${
                      value?.hours === h
                        ? "border-[0.5px] border-gold text-gold"
                        : "text-white"
                    } rounded-xl pb-2 pt-1.5 text-base font-light tracking-wide transition-all hover:bg-[#e0efff1f]`}
                    onClick={() => handleSetValue(h, "hours")}
                  >
                    {+h < 10 ? `0${h}` : h}
                  </p>
                ))}
              </div>
            </div>
            <div className="h-full w-1/2 rounded-lg border border-[#e0efff1f] p-1">
              <div
                className={`flex h-full w-full flex-col items-center justify-start gap-0.5 bg-dark-blue px-2 ${
                  isStringEmpty(value?.minutes) ? "animate-pulse" : ""
                } ${scrollClasses}`}
              >
                {minutesData?.map((m) => (
                  <p
                    key={m}
                    className={`w-full cursor-pointer text-center ${
                      value?.minutes === m
                        ? "border-[0.5px] border-gold text-gold"
                        : "text-white"
                    } rounded-xl px-3 pb-2 pt-1.5 text-base font-light tracking-wide transition-all hover:bg-[#e0efff1f]`}
                    onClick={() => handleSetValue(m, "minutes")}
                  >
                    {+m < 10 ? `0${m}` : m}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="my-3.5 w-full">
            <TimerPickerNavigation handleClose={() => setIsOpen(false)} />
          </div>
        </ModalStandard>
      )}
    </>
  );
};

export default TimerPicker;
