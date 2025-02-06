import {
  formatDate,
  formatTime,
  resolveKnowledgeLevel,
} from "@common/utility/Utils";
import { userInfoType } from "@appTypes/universal";

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
    <div className="-mb-2 flex flex-col gap-3 p-5 w888:-mb-5 w888:gap-1 w888:p-2">
      <h2 className="line text-center font-philosopher text-3xl leading-8 text-white w888:text-xl w888:leading-[22px]">
        {userInfo.name}, please verify your details
      </h2>
      <div className="mt-4 flex flex-col gap-0.5">
        <p className="text-base font-extralight text-dimmed-text-gray w888:text-sm">
          Date of birth
        </p>
        <p className="font-philosopher text-xl text-white w888:text-lg">
          {formatDate(`${dateOfBirth}`)}
        </p>
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-base font-extralight text-dimmed-text-gray w888:text-sm">
          Time of birth
        </p>
        <p className="font-philosopher text-xl text-white w888:text-lg">
          {formatTime(timeOfBirth)}
        </p>
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-base font-extralight text-dimmed-text-gray w888:text-sm">
          Your birth location is
        </p>
        <p className="font-philosopher text-xl text-white w888:text-lg">{`${userInfo.city}`}</p>
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-base font-extralight text-dimmed-text-gray w888:text-sm">
          Knowledge Level
        </p>
        <p className="font-philosopher text-xl text-white first-letter:uppercase w888:text-lg">
          {resolveKnowledgeLevel(userInfo.knowledge_level)}
        </p>
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-base font-extralight text-dimmed-text-gray w888:text-sm">
          Your gender
        </p>
        <p className="font-philosopher text-xl text-white first-letter:uppercase w888:text-lg">
          {userInfo.gender?.toLocaleLowerCase() === "other"
            ? "Not defined"
            : userInfo.gender}
        </p>
      </div>
    </div>
  );
};

export default Preview;
