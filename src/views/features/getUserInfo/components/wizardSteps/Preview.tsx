import {
  formatDate,
  formatTime,
  resolveKnowledgeLevel,
} from "@common/utility/Utils";
import { userInfoType } from "@features/chatBox/chatBoxTypes";

const Preview = ({ userInfo }: { userInfo: userInfoType }) => {
  let dateOfBirth = new Date(
    userInfo.year,
    userInfo.month - 1,
    userInfo.day,
  ).toDateString();

  let timeOfBirth = new Date(
    userInfo.year,
    userInfo.month - 1,
    userInfo.day,
    userInfo.hour,
    userInfo.minute,
  );

  return (
    <div className="w888:p-2 w888:gap-1 w888:-mb-5 -mb-2 flex flex-col gap-3 p-5">
      <h2 className="font-philosopher line w888:text-xl w888:leading-[22px] text-center text-3xl leading-8 text-white">
        {userInfo.name}, please verify your details
      </h2>
      <div className="mt-4 flex flex-col gap-0.5">
        <p className="text-dimmed-text-gray w888:text-sm text-base font-extralight">
          Date of birth
        </p>
        <p className="font-philosopher w888:text-lg text-xl text-white">
          {formatDate(`${dateOfBirth}`)}
        </p>
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-dimmed-text-gray w888:text-sm text-base font-extralight">
          Time of birth
        </p>
        <p className="font-philosopher w888:text-lg text-xl text-white">
          {formatTime(timeOfBirth)}
        </p>
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-dimmed-text-gray w888:text-sm text-base font-extralight">
          Your birth location is
        </p>
        <p className="font-philosopher w888:text-lg text-xl text-white">{`${userInfo.city}`}</p>
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-dimmed-text-gray w888:text-sm text-base font-extralight">
          Knowledge Level
        </p>
        <p className="font-philosopher w888:text-lg text-xl text-white first-letter:uppercase">
          {resolveKnowledgeLevel(userInfo.knowledge_level)}
        </p>
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-dimmed-text-gray w888:text-sm text-base font-extralight">
          Your gender
        </p>
        <p className="font-philosopher w888:text-lg text-xl text-white first-letter:uppercase">
          {userInfo.gender?.toLocaleLowerCase() === "other"
            ? "Not defined"
            : userInfo.gender}
        </p>
      </div>
    </div>
  );
};

export default Preview;
