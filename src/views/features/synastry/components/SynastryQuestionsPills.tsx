import RomanceCategory from "@assets/icons/romance-category-ico.svg";
import FriendshipCategory from "@assets/icons/friendship-category-ico.svg";
import BusinessCategory from "@assets/icons/business-category-ico.svg";
import { questionsCategoriesType } from "@features/chatBox/chatBoxTypes";

type propsTypes = {
  onClick: (category: questionsCategoriesType) => void;
};

const synastryPillsList: Array<{
  category: questionsCategoriesType;
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}> = [
  {
    category: "Romance",
    Icon: RomanceCategory,
  },
  {
    category: "Friendship",
    Icon: FriendshipCategory,
  },
  {
    category: "Business",
    Icon: BusinessCategory,
  },
];

const SynastryQuestionsPills = ({ onClick }: propsTypes) => {
  return (
    <div className="flex items-center gap-1.5">
      {synastryPillsList.map((pill) => {
        return (
          <div
            key={pill.category}
            className="group flex cursor-pointer items-center justify-center gap-[7px] rounded-xl bg-[#e0efff11] px-2.5 py-[3px]"
            onClick={() => onClick && onClick(pill.category)}
          >
            <pill.Icon className="group-hover:[&_path]:fill-gold h-auto w-[13px]" />
            <p className="group-hover:text-gold text-xs font-extralight text-white">
              {pill.category}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SynastryQuestionsPills;
