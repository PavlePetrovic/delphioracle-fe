import { useAppSelector } from "../../../../redux/reduxTypes";
import ZodiacSymbol from "@components/ZodiacSymbol/ZodiacSymbol";
import AscendentIco from "@assets/icons/ascendent-ico.svg";
import MoonIco from "@assets/icons/moon-ico.svg";
import SunIco from "@assets/icons/sun-ico.svg";

const Report = () => {
  const stats = useAppSelector(
    (state) => state.chat.chatData.value?.account_info?.report?.profile_stats,
  );
  // [AC_icon, Ascendant_sign]-- - [Sun_icon, Sun_sign]-- - [moon_sign, moon_icon];
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="w888:min-w-[95px] flex min-w-[110px] items-start justify-between rounded-3xl bg-[#0D101A] px-2 py-2">
        <p className="w-full text-center text-xs font-light text-white">AIR</p>
      </div>
      <div className="border-gold w888:w-[250px] w888:h-[250px] w480:w-[220px] w480:h-[220px] relative h-[306px] w-[306px] rounded-full border-2">
        <div className="w888:gap-5 w888:-ml-[42px] w480:gap-2.5 w480:-ml-[46px] absolute top-0 left-0 -ml-[53px] flex h-full w-full items-center justify-between gap-10 rounded-full">
          <div className="w888:min-w-[95px] hover:border-gold flex min-w-[110px] cursor-pointer items-center justify-between rounded-3xl bg-[#0D101A] p-2 hover:border">
            <AscendentIco className="h-auto w-[25px] opacity-70" />
            <ZodiacSymbol
              zodiac={`${stats?.ascendant}`}
              className="h-auto w-[18px] opacity-70"
            />
          </div>
          <div className="w888:min-w-[95px] hover:border-gold flex min-w-[110px] cursor-pointer items-center justify-between rounded-3xl bg-[#0D101A] p-2 hover:border">
            <SunIco className="h-auto w-[18px] opacity-70" />
            <ZodiacSymbol
              zodiac={`${stats?.sun}`}
              className="h-auto w-[18px] opacity-70"
            />
          </div>
          <div className="w888:min-w-[95px] hover:border-gold flex min-w-[110px] cursor-pointer items-center justify-between rounded-3xl bg-[#0D101A] p-2 hover:border">
            <MoonIco className="h-auto w-[18px] opacity-70" />
            <ZodiacSymbol
              zodiac={`${stats?.moon}`}
              className="h-auto w-[18px] opacity-70"
            />
          </div>
        </div>
      </div>
      <div className="w888:min-w-[95px] mt-0.5 flex min-w-[110px] items-start justify-between rounded-3xl bg-[#0D101A] px-2 py-2">
        <p className="w-full text-center text-xs font-light text-white">
          CARDINAL
        </p>
      </div>
      <div className="w888:min-w-[95px] flex min-w-[110px] items-start justify-between rounded-3xl bg-[#0D101A] px-2 py-2">
        <p className="w-full text-center text-xs font-light text-white">
          MASCULINE
        </p>
      </div>
      <p className="w888:w-full mt-6 mb-6 w-[75%] text-center text-xs font-light text-[#f6faffc6]">
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
