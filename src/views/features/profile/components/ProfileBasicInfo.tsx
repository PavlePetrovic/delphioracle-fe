import ZodiacSymbol from "@components/ZodiacSymbol/ZodiacSymbol";
import { useAppSelector } from "@redux/reduxTypes";
import {
  formatDate,
  formatTime,
  resolveKnowledgeLevel,
} from "@common/utility/Utils";
import LoadingPage from "@/views/components/LoadingPage/LoadingPage";

const ProfileBasicInfo = () => {
  const internalAuthData = useAppSelector(
    (state) => state.authentication.internalAuthData.value,
  );
  const internalAuthDataLoading = useAppSelector(
    (state) => state.authentication.internalAuthData.loading,
  );
  const userInfo = useAppSelector(
    (state) => state.authentication.internalAuthData.value?.user_info,
  );
  const report = useAppSelector(
    (state) => state.profile.profileData.value?.report,
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

  const knowledgeLevel = userInfo?.knowledge_level
    ? resolveKnowledgeLevel(userInfo?.knowledge_level)
    : "Not Provided";

  return internalAuthDataLoading ? (
    <div className="bg-main-grey flex h-[353px] animate-pulse flex-col gap-1.5 rounded-xl px-3.5 py-3.5 w888:h-[332px]">
      <LoadingPage />
    </div>
  ) : (
    // <Spinner classList="w-[30px] h-[30px]" />
    <div className="bg-main-grey flex flex-col gap-1.5 rounded-xl px-3.5 py-3.5">
      <div className="mb-2 flex flex-col items-start gap-0.5">
        <h2 className="font-prata text-[25px] tracking-wide text-white w888:text-[23px]">
          {userInfo?.name}
        </h2>
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-1">
            <ZodiacSymbol
              zodiac={`${report?.sun}`}
              className="h-auto w-[18px] opacity-70"
            />
            <p className="text-sm font-extralight text-white">{report?.sun}</p>
          </div>
          <div className="flex items-center gap-1">
            <ZodiacSymbol
              zodiac={`${report?.ascendant}`}
              className="h-auto w-[18px] opacity-70"
            />
            <p className="text-sm font-extralight text-white">
              {report?.ascendant}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <ZodiacSymbol
              zodiac={`${report?.moon}`}
              className="h-auto w-[18px] opacity-70"
            />
            <p className="text-sm font-extralight text-white">{report?.moon}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-[13px] font-extralight text-dimmed-text-gray w888:text-sm">
          Date of birth
        </p>
        <p className="-mt-0.5 text-lg font-light text-white w888:text-base">
          {formatDate(
            `${getDateOfBirth(userInfo?.year, userInfo?.month, userInfo?.day)}`,
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
              userInfo?.year,
              userInfo?.month,
              userInfo?.day,
              userInfo?.hour,
              userInfo?.minute,
            ),
          )}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-[13px] font-extralight text-dimmed-text-gray w888:text-sm">
          Birth location
        </p>
        <p className="-mt-0.5 text-lg font-light text-white w888:text-base">{`${userInfo?.city}`}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-[13px] font-extralight text-dimmed-text-gray w888:text-sm">
          Email Address
        </p>
        <p className="-mt-0.5 text-lg font-light text-white w888:text-base">{`${internalAuthData?.email}`}</p>
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
