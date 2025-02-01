import React from "react";
import ZodiacSymbol from "../ZodiacSymbol/ZodiacSymbol";

const ProfileDetailedInfo = () => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <div className="flex items-start justify-between rounded-3xl bg-[#0D101A] px-2 min-w-[110px] py-2 w888:min-w-[95px]">
        <p className="text-white text-xs font-light text-center w-full">AIR</p>
      </div>
      <div className="relative border-2 border-gold rounded-full w-[306px] h-[306px] w888:w-[250px] w888:h-[250px]">
        <div className="absolute top-0 left-0 flex items-center justify-between gap-10 -ml-[53px] w-full h-full rounded-full w888:gap-5 w888:-ml-[42px]">
          <div className="flex items-start justify-between rounded-3xl bg-[#0D101A] p-2 min-w-[110px] w888:min-w-[95px]">
            <ZodiacSymbol
              zodiac={`Leo`}
              className="w-[18px] h-auto opacity-70"
            />
            <ZodiacSymbol
              zodiac={`Leo`}
              className="w-[18px] h-auto opacity-70"
            />
          </div>
          <div className="flex items-start justify-between rounded-3xl bg-[#0D101A] p-2 min-w-[110px] w888:min-w-[95px] border-gold border">
            <ZodiacSymbol
              zodiac={`Leo`}
              className="w-[18px] h-auto opacity-70"
            />
            <ZodiacSymbol
              zodiac={`Leo`}
              className="w-[18px] h-auto opacity-70"
            />
          </div>
          <div className="flex items-start justify-between rounded-3xl bg-[#0D101A] p-2 min-w-[110px] w888:min-w-[95px]">
            <ZodiacSymbol
              zodiac={`Leo`}
              className="w-[18px] h-auto opacity-70"
            />
            <ZodiacSymbol
              zodiac={`Leo`}
              className="w-[18px] h-auto opacity-70"
            />
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between rounded-3xl bg-[#0D101A] px-2 min-w-[110px] w888:min-w-[95px] py-2">
        <p className="text-white text-xs font-light text-center w-full">
          CARDINAL
        </p>
      </div>
      <div className="flex items-start justify-between rounded-3xl bg-[#0D101A] px-2 min-w-[110px] w888:min-w-[95px] py-2">
        <p className="text-white text-xs font-light text-center w-full">
          MASCULINE
        </p>
      </div>
    </div>
  );
};

export default ProfileDetailedInfo;
