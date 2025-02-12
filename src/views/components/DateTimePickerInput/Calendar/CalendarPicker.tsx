import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/esm/shared/types.js";
import ModalStandard from "@components/ModalStandard/ModalStandard";
import CalendarNavigation from "./CalendarNavigation";
import "./CalendarPicker.css";

type calendarPickerValue = {
  year: string;
  month: string;
  day: string;
};

type propsTypes = {
  valueExist?: calendarPickerValue;
  placeholder?: string;
  onChange: (value: calendarPickerValue) => void;
  handleExternalEvents?: () => void;
};

const initialCalendarPickerValue = {
  year: "0",
  month: "0",
  day: "0",
};

type calendarNvaigationType = "month" | "year" | "decade";

let monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CalendarPicker = ({
  valueExist,
  placeholder,
  onChange,
  handleExternalEvents,
}: propsTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<calendarNvaigationType>("decade");
  const [internalCalendarValue, setInternalCalendarValue] = useState<Value>(
    new Date(1991, 0, 1),
  );
  const [userPickedValue, setUserPickedValue] = useState<calendarPickerValue>(
    initialCalendarPickerValue,
  );

  const handleDateChange = (value: string, view: "year" | "month" | "day") => {
    setUserPickedValue((prevValue) => {
      return { ...prevValue, [view]: value };
    });
    if (view !== "day") {
      setView(view);
    } else {
      setIsOpen(false);
      handleExternalEvents && handleExternalEvents();
    }
  };

  const changeInternalValue = () => {
    const year = +userPickedValue?.year === 0 ? 1991 : +userPickedValue?.year;
    const month =
      +userPickedValue?.month === 0 ? 0 : +userPickedValue?.month - 1;
    const day = +userPickedValue?.day === 0 ? 1 : +userPickedValue?.day;

    setInternalCalendarValue(new Date(year, month, day));
  };

  useEffect(() => {
    changeInternalValue();
    onChange(userPickedValue);
  }, [userPickedValue]);

  useEffect(() => {
    valueExist && setUserPickedValue(valueExist);
  }, []);

  const doesInputHaveContent =
    +userPickedValue?.year === 0 &&
    +userPickedValue?.month === 0 &&
    +userPickedValue?.day === 0
      ? false
      : true;

  return (
    <>
      {/* CALENDAR INPUT PREVIEW */}
      <div className="flex cursor-pointer items-center justify-center gap-1.5 rounded-[16px] bg-main-grey p-1.5">
        <div
          className={`animate-pulse rounded-xl bg-[#e0efff1f] px-8 py-2 text-base font-light text-white w888:text-sm ${
            doesInputHaveContent ? "hidden" : ""
          }`}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {placeholder ? placeholder : "Pick a birth date"}
        </div>
        {/* Month Box */}
        <div
          className={`rounded-xl bg-[#e0efff1f] px-5 py-2 text-base font-light text-white w888:text-sm ${
            +userPickedValue.month === 0 ? "animate-pulse" : ""
          } ${doesInputHaveContent ? "" : "hidden"}`}
          onClick={() => {
            setView("year");
            setIsOpen(true);
          }}
        >
          {+userPickedValue.month === 0
            ? "Pick"
            : monthsArray[+userPickedValue.month - 1]}
        </div>
        {/* Day Box */}
        <div
          className={`rounded-xl bg-[#e0efff1f] px-5 py-2 text-base font-light text-white w888:text-sm ${
            +userPickedValue.day === 0 ? "animate-pulse" : ""
          } ${doesInputHaveContent ? "" : "hidden"}`}
          onClick={() => {
            setView("month");
            setIsOpen(true);
          }}
        >
          {+userPickedValue.day === 0 ? "Pick" : `${userPickedValue.day}.`}
        </div>
        {/* Year Box */}
        <div
          className={`rounded-xl bg-[#e0efff1f] px-5 py-2 text-base font-light text-white w888:text-sm ${
            +userPickedValue.year === 0 ? "animate-pulse" : ""
          } ${doesInputHaveContent ? "" : "hidden"}`}
          onClick={() => {
            setView("decade");
            setIsOpen(true);
          }}
        >
          {+userPickedValue.year === 0 ? "Pick" : `${userPickedValue.year}.`}
        </div>
      </div>
      {/* CALENDAR MODAL */}
      {isOpen && (
        <ModalStandard
          close={() => {
            setIsOpen(false);
            setView("decade");
          }}
          hideModalHeader
          hideModalFooter
          modalClassName="w-[380px] h-[480px]"
        >
          <div className="my-[18px] flex h-full w-full flex-col items-center justify-center rounded-[14px]">
            <Calendar
              className=""
              value={internalCalendarValue}
              view={view}
              next2Label={false}
              prev2Label={false}
              showNavigation={true}
              onClickYear={(e) =>
                handleDateChange(`${e?.getFullYear()}`, "year")
              }
              onClickMonth={(e) =>
                handleDateChange(`${e?.getMonth() + 1}`, "month")
              }
              onClickDay={(e) => handleDateChange(`${e?.getDate()}`, "day")}
              showNeighboringDecade
              showNeighboringMonth={false}
              maxDate={new Date(2100, 0, 1)}
            />
            <CalendarNavigation
              view={view}
              setView={setView}
              handleClose={() => {
                setIsOpen(false);
              }}
            />
          </div>
        </ModalStandard>
      )}
    </>
  );
};

export default CalendarPicker;
