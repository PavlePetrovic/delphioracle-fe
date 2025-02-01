import ZodiacSymbol from "@components/ZodiacSymbol/ZodiacSymbol";
import { useAppSelector } from "@redux/reduxTypes";
import {
  formatDate,
  getTime,
  formatTime,
  resolveKnowledgeLevel,
} from "@common/utility/Utils";

const ProfileBasicInfo = () => {
  const authData = useAppSelector((state) => state.authentication.authData);
  const userData = useAppSelector(
    (state) => state.chat.chatData.value?.account_info,
  );

  const getDateOfBirth = (year?: number, month?: number, day?: number) => {
    return year && month && day
      ? new Date(year, month - 1, day).toDateString()
      : "";
  };

  const getTimeOfBirth = (
    year?: number,
    month?: number,
    day?: number,
    hour?: number,
    minute?: number,
  ): Date => {
    // We dont check for hour and minutes in if, because they can have legally values 0
    if (year && month && day) {
      return new Date(year, month - 1, day, hour ?? 0, minute ?? 0);
    }
    // This line should never execute (hopefully):
    return new Date();
  };

  const knowledgeLevel = userData?.user_info?.knowledge_level
    ? resolveKnowledgeLevel(userData?.user_info?.knowledge_level)
    : "Not Provided";

  return (
    <div className="bg-glass flex flex-col gap-1.5 rounded-xl bg-transparent-gray px-3.5 py-3.5">
      <div className="mb-2 flex flex-col items-start gap-0.5">
        <h2 className="font-prata text-[25px] tracking-wide text-white w888:text-[23px]">
          {userData?.user_info?.name}
        </h2>
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-1">
            <ZodiacSymbol
              zodiac={`${userData?.report?.profile_stats?.sun}`}
              className="h-auto w-[18px] opacity-70"
            />
            <p className="text-sm font-extralight text-white">
              {userData?.report?.profile_stats?.sun}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <ZodiacSymbol
              zodiac={`${userData?.report?.profile_stats?.ascendant}`}
              className="h-auto w-[18px] opacity-70"
            />
            <p className="text-sm font-extralight text-white">
              {userData?.report?.profile_stats?.ascendant}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <ZodiacSymbol
              zodiac={`${userData?.report?.profile_stats?.moon}`}
              className="h-auto w-[18px] opacity-70"
            />
            <p className="text-sm font-extralight text-white">
              {userData?.report?.profile_stats?.moon}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-[13px] font-extralight text-dimmed-text-gray w888:text-sm">
          Date of birth
        </p>
        <p className="-mt-0.5 text-lg font-light text-white w888:text-base">
          {formatDate(
            `${getDateOfBirth(
              userData?.user_info?.year,
              userData?.user_info?.month,
              userData?.user_info?.day,
            )}`,
          )}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-[13px] font-extralight text-dimmed-text-gray w888:text-sm">
          Time of birth
        </p>
        <p className="-mt-0.5 text-lg font-light text-white w888:text-base">
          {formatTime(
            getTimeOfBirth(
              userData?.user_info?.year,
              userData?.user_info?.month,
              userData?.user_info?.day,
              userData?.user_info?.hour,
              userData?.user_info?.minute,
            ),
          )}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-[13px] font-extralight text-dimmed-text-gray w888:text-sm">
          Birth location
        </p>
        <p className="-mt-0.5 text-lg font-light text-white w888:text-base">{`${userData?.user_info?.city}`}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-[13px] font-extralight text-dimmed-text-gray w888:text-sm">
          Email Address
        </p>
        <p className="-mt-0.5 text-lg font-light text-white w888:text-base">{`${authData?.email}`}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-[13px] font-extralight text-dimmed-text-gray w888:text-sm">
          Knowledge Level
        </p>
        <p className="-mt-0.5 text-lg font-light text-white w888:text-base">
          {knowledgeLevel}
        </p>
      </div>
    </div>
  );
};

export default ProfileBasicInfo;
