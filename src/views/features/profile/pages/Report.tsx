import { useAppSelector } from "../../../../redux/reduxTypes";
import ZodiacSymbol from "@components/ZodiacSymbol/ZodiacSymbol";
import AscendentIco from "@assets/icons/ascendent-ico.svg";
import MoonIco from "@assets/icons/moon-ico.svg";
import SunIco from "@assets/icons/sun-ico.svg";

const Report = () => {
  const report = useAppSelector(
    (state) => state.profile.profileData.value?.report,
  );
  // [AC_icon, Ascendant_sign]-- - [Sun_icon, Sun_sign]-- - [moon_sign, moon_icon];
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="flex min-w-[110px] items-start justify-between rounded-3xl bg-[#0D101A] px-2 py-2 w888:min-w-[95px]">
        <p className="w-full text-center text-xs font-light text-white">AIR</p>
      </div>
      <div className="relative h-[306px] w-[306px] rounded-full border-2 border-gold w888:h-[250px] w888:w-[250px] w480:h-[220px] w480:w-[220px]">
        <div className="absolute left-0 top-0 -ml-[53px] flex h-full w-full items-center justify-between gap-10 rounded-full w888:-ml-[42px] w888:gap-5 w480:-ml-[46px] w480:gap-2.5">
          <div className="flex min-w-[110px] cursor-pointer items-center justify-between rounded-3xl bg-[#0D101A] p-2 hover:border hover:border-gold w888:min-w-[95px]">
            <AscendentIco className="h-auto w-[25px] opacity-70" />
            <ZodiacSymbol
              zodiac={`${report?.ascendant}`}
              className="h-auto w-[18px] opacity-70"
            />
          </div>
          <div className="flex min-w-[110px] cursor-pointer items-center justify-between rounded-3xl bg-[#0D101A] p-2 hover:border hover:border-gold w888:min-w-[95px]">
            <SunIco className="h-auto w-[18px] opacity-70" />
            <ZodiacSymbol
              zodiac={`${report?.sun}`}
              className="h-auto w-[18px] opacity-70"
            />
          </div>
          <div className="flex min-w-[110px] cursor-pointer items-center justify-between rounded-3xl bg-[#0D101A] p-2 hover:border hover:border-gold w888:min-w-[95px]">
            <MoonIco className="h-auto w-[18px] opacity-70" />
            <ZodiacSymbol
              zodiac={`${report?.moon}`}
              className="h-auto w-[18px] opacity-70"
            />
          </div>
        </div>
      </div>
      <div className="mt-0.5 flex min-w-[110px] items-start justify-between rounded-3xl bg-[#0D101A] px-2 py-2 w888:min-w-[95px]">
        <p className="w-full text-center text-xs font-light text-white">
          CARDINAL
        </p>
      </div>
      <div className="flex min-w-[110px] items-start justify-between rounded-3xl bg-[#0D101A] px-2 py-2 w888:min-w-[95px]">
        <p className="w-full text-center text-xs font-light text-white">
          MASCULINE
        </p>
      </div>
      <p className="mb-6 mt-6 w-[75%] text-center text-xs font-light text-[#f6faffc6] w888:w-full">
        Experimental feature - Still in progress
        <br />
        <br />
        By purchasing credits, you are directly supporting our work and helping
        us continue and complete this feature.
      </p>
    </div>
  );
};

export default Report;
