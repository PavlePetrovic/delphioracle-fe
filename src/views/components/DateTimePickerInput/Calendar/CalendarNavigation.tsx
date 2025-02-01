type calendarNvaigationType = "month" | "year" | "decade";

type propsTypes = {
  view: calendarNvaigationType;
  setView: (e: calendarNvaigationType) => void;
  handleClose: () => void;
};

const CalendarNavigation = ({ view, setView, handleClose }: propsTypes) => {
  const handleNavigation = (
    action: "prev" | "next",
    view: calendarNvaigationType
  ) => {
    if (action === "prev") {
      switch (view) {
        case "year":
          return setView("decade");
        case "month":
          return setView("year");
        default:
          return setView("decade");
      }
    } else if (action === "next") {
      switch (view) {
        case "decade":
          return setView("year");
        case "year":
          return setView("month");
        default:
          return setView("month");
      }
    }
  };

  return (
    <div className="w-full flex items-center h-[44px] mt-1.5">
      <div
        className="group flex items-center justify-center w-full h-full hover:bg-[#e0efff25] cursor-pointer rounded-[10px]"
        onClick={() =>
          view === "decade" ? handleClose() : handleNavigation("prev", view)
        }
      >
        <button
          type="button"
          className="text-white text-base mb-[2px] group-hover:text-gold font-normal"
        >
          {view === "decade"
            ? "Close"
            : view === "year"
            ? "Year"
            : view === "month"
            ? "Month"
            : "Prev"}
        </button>
      </div>
      <div className="w-[4px] bg-[#e0efff25] rounded-xl h-[65%] mx-1.5"></div>
      <div
        className="group flex items-center justify-center w-full h-full hover:bg-[#e0efff25] cursor-pointer rounded-[10px]"
        onClick={() =>
          view === "month" ? handleClose() : handleNavigation("next", view)
        }
      >
        <button
          type="button"
          className="text-white text-base mb-[2px] group-hover:text-gold font-normal"
          onClick={() => handleNavigation("next", view)}
        >
          {view === "decade"
            ? "Month"
            : view === "year"
            ? "Day"
            : view === "month"
            ? "Finish"
            : "Next"}
        </button>
      </div>
    </div>
  );
};

export default CalendarNavigation;
