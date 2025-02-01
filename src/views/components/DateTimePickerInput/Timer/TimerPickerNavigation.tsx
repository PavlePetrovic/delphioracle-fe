const TimerPickerNavigation = ({
  handleClose,
}: {
  handleClose: () => void;
}) => {
  return (
    <div className="w-full flex items-center h-[44px] mt-1.5">
      <div
        className="group flex items-center justify-center w-full h-full hover:bg-[#e0efff25] cursor-pointer rounded-[10px]"
        onClick={() => handleClose()}
      >
        <button
          type="button"
          className="text-white text-base mb-[2px] group-hover:text-gold font-normal"
        >
          Close
        </button>
      </div>
      <div className="w-[4px] bg-[#e0efff25] rounded-xl h-[65%] mx-1.5"></div>
      <div
        className="group flex items-center justify-center w-full h-full hover:bg-[#e0efff25] cursor-pointer rounded-[10px]"
        onClick={() => handleClose()}
      >
        <button
          type="button"
          className="text-white text-base mb-[2px] group-hover:text-gold font-normal"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default TimerPickerNavigation;
