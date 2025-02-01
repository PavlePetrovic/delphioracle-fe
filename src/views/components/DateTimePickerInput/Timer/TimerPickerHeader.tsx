const TimerPickerHeader = () => {
  return (
    <div className="flex h-[20px] w-full items-center">
      <div className="flex h-full w-full items-center justify-center rounded-[10px]">
        <div className="mb-[2px] text-[13px] font-light text-[#e0efff41]">
          Hours
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-center rounded-[10px]">
        <div className="mb-[2px] text-[13px] font-light text-[#e0efff41]">
          Minutes
        </div>
      </div>
    </div>
  );
};

export default TimerPickerHeader;
