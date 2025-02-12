import LoveCategory from "@assets/icons/love-category-ico.svg";
import HealthCategory from "@assets/icons/health-category-ico.svg";
import KnowCategory from "@assets/icons/know-category-ico.svg";
import CareerCategory from "@assets/icons/career-category-ico.svg";
import SocialCategory from "@assets/icons/social-category-ico.svg";
import { questionsCategoriesType } from "../types";

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
            className="group flex cursor-pointer items-center justify-center gap-[7px] rounded-xl bg-[#e0efff11] px-2.5 py-[3px] w888:hidden"
            onClick={() => onClick && onClick(pill.category)}
          >
            <pill.Icon className="h-auto w-[13px] group-hover:[&_path]:fill-gold" />
            <p className="text-xs font-extralight text-white group-hover:text-gold">
              {pill.category}
            </p>
          </div>
        );
      })}
      <div
        className="hidden cursor-pointer items-center justify-center gap-[7px] rounded-xl bg-[#e0efff11] px-2.5 py-[3px] w888:flex"
        onClick={() => onClick && onClick("All")}
      >
        <p className="text-xs font-extralight text-gold">
          Check out more questions here
        </p>
      </div>
    </div>
  );
};

export default ChatQuestionsPills;
