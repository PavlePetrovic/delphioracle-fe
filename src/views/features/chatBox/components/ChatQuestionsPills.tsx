import LoveCategory from "@assets/icons/love-category-ico.svg";
import HealthCategory from "@assets/icons/health-category-ico.svg";
import KnowCategory from "@assets/icons/know-category-ico.svg";
import CareerCategory from "@assets/icons/career-category-ico.svg";
import SocialCategory from "@assets/icons/social-category-ico.svg";
import { questionsCategoriesType } from "../chatBoxTypes";

type propsTypes = {
  onClick: (category: questionsCategoriesType) => void;
};

const pillsList: Array<{
  category: questionsCategoriesType;
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}> = [
  {
    category: "Know Thyself",
    Icon: KnowCategory,
  },
  {
    category: "Love Realm",
    Icon: LoveCategory,
  },
  {
    category: "Career & Finances",
    Icon: CareerCategory,
  },
  {
    category: "Health & Wellbeing",
    Icon: HealthCategory,
  },
  {
    category: "Social Sphere",
    Icon: SocialCategory,
  },
];

const ChatQuestionsPills = ({ onClick }: propsTypes) => {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {pillsList.map((pill) => {
        return (
          <div
            key={pill.category}
            className="group w888:hidden flex cursor-pointer items-center justify-center gap-[7px] rounded-xl bg-[#e0efff11] px-2.5 py-[3px]"
            onClick={() => onClick && onClick(pill.category)}
          >
            <pill.Icon className="group-hover:[&_path]:fill-gold h-auto w-[13px]" />
            <p className="group-hover:text-gold text-xs font-extralight text-white">
              {pill.category}
            </p>
          </div>
        );
      })}
      <div
        className="w888:flex hidden cursor-pointer items-center justify-center gap-[7px] rounded-xl bg-[#e0efff11] px-2.5 py-[3px]"
        onClick={() => onClick && onClick("All")}
      >
        <p className="text-gold text-xs font-extralight">
          Check out more questions here
        </p>
      </div>
    </div>
  );
};

export default ChatQuestionsPills;
