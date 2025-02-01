import React, { RefObject, useEffect, useMemo, useRef, useState } from "react";
import { shuffledQuestions, shuffledSynastryQuestions } from "../chatData";
import LoveCategory from "@assets/icons/love-category-ico.svg";
import HealthCategory from "@assets/icons/health-category-ico.svg";
import KnowCategory from "@assets/icons/know-category-ico.svg";
import CareerCategory from "@assets/icons/career-category-ico.svg";
import SocialCategory from "@assets/icons/social-category-ico.svg";
import PremiumIndicatorIco from "@assets/icons/premium-indicator-icp.svg";
import RomanceCategory from "@assets/icons/romance-category-ico.svg";
import FriendshipCategory from "@assets/icons/friendship-category-ico.svg";
import BusinessCategory from "@assets/icons/business-category-ico.svg";
import CreditsIco from "@assets/icons/credits-ico.svg";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";
import { useAppDispatch, useAppSelector } from "@redux/reduxTypes";
import { questionsArrayType, questionsCategoriesType } from "../chatBoxTypes";
import {
  setCentralizedLoading,
  setPromptedMessage,
} from "../reducer/chatBox.reducer";
import { useNavigate } from "react-router";
import DailyQuote from "../components/DailyQuote";
import { IoCloseOutline } from "react-icons/io5";
import {
  setSynastryCentralizedLoading,
  setSynastryPromptedMessage,
} from "@features/synastry/reducer/synastry.reducer";
import { isStringEmpty } from "@common/utility/Utils";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../../../firebaseConfig/firebaseConfig";

const chatQuestionsCategories: Array<{
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

const synastryQuestionsCategories: Array<{
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

const ChatBoxQuestions = ({
  isPublic,
  modal,
  synastry,
  closeModal,
  modalCategory,
}: {
  isPublic: boolean;
  modal: boolean;
  synastry?: boolean;
  modalCategory?: questionsCategoriesType;
  closeModal: () => void;
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mobileCategoriesRef: RefObject<HTMLDivElement> = useRef(null);

  const authData = useAppSelector((state) => state.authentication.authData);
  const isMobile = useAppSelector((state) => state.global.isMobile);

  const [filter, setFilter] = useState<questionsCategoriesType>("All");
  const [questionsCategories, setQuestionCategories] = useState<
    Array<{
      category: questionsCategoriesType;
      Icon: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string | undefined;
        }
      >;
    }>
  >();
  const [questions, setQuestions] = useState<Array<questionsArrayType>>();

  const sendMessage = (message: string) => {
    if (synastry) {
      dispatch(setSynastryPromptedMessage(message));
      dispatch(setSynastryCentralizedLoading(true));
    } else {
      dispatch(setPromptedMessage(message));
      dispatch(setCentralizedLoading(true));
    }
    if (modal) {
      closeModal && closeModal();
    } else {
      !authData || isPublic
        ? navigate("/chat-box-public")
        : navigate("/chat-box");
    }
  };

  useMemo(() => {
    if (synastry) {
      setQuestionCategories(synastryQuestionsCategories);
      setQuestions(shuffledSynastryQuestions);
    } else {
      setQuestionCategories(chatQuestionsCategories);
      setQuestions(shuffledQuestions);
    }
  }, [questionsCategories]);

  useEffect(() => {
    modalCategory && !isStringEmpty(modalCategory) && setFilter(modalCategory);
  }, [modalCategory]);

  return (
    <div
      className={`relative flex h-full flex-col gap-4 w888:gap-2 ${
        modal ? "rounded-2xl bg-dark-blue px-4 py-4" : "w888:p-1"
      }`}
    >
      {modal ? (
        <div
          className="absolute right-[-15px] top-[-15px] cursor-pointer rounded-full bg-[#3c414f] text-white hover:text-gold w888:right-[-8px] w888:top-[-8px]"
          onClick={() => closeModal && closeModal()}
        >
          <IoCloseOutline className="text-3xl text-gold w888:text-2xl" />
        </div>
      ) : (
        <></>
      )}
      {!isMobile ? (
        <></>
      ) : (
        // Mobile Categories
        <div
          ref={mobileCategoriesRef}
          className="h-fit px-1"
          style={{
            width: !modal ? window.innerWidth - 20 : "",
          }}
        >
          <ScrollWrapper
            id="scrollQuestionsCategoriesMobile"
            className={`flex items-center justify-between gap-1.5 pb-0.5`}
          >
            {questionsCategories?.map((data) => {
              return (
                <div
                  key={data.category}
                  onClick={() => {
                    setFilter((prevFilter) => {
                      return prevFilter === "All"
                        ? data.category
                        : prevFilter === data.category
                          ? "All"
                          : data.category;
                    });
                    analytics &&
                      logEvent(analytics, `prompt_category_${data.category}`);
                  }}
                  className={`bg-glass flex h-[60px] min-h-[60px] w-[60px] min-w-[60px] cursor-pointer flex-col items-center justify-between gap-1 rounded-xl border border-[#ffffff0f] bg-transparent-gray p-2 ${
                    filter === data.category ? "border border-gold" : ""
                  }`}
                >
                  <data.Icon
                    className={`h-auto w-[20px] ${
                      filter === data.category ? "[&_path]:fill-gold" : ""
                    }`}
                  />
                  <h4
                    className={`max-w-[60px] truncate px-[1px] text-xs font-extralight ${
                      filter === data.category ? "text-gold" : "text-white"
                    }`}
                  >
                    {isMobile ? data.category.split(" ")[0] : data.category}
                  </h4>
                </div>
              );
            })}
          </ScrollWrapper>
        </div>
      )}
      <div
        className={`flex h-full w-full gap-5 w888:mt-0 w888:h-[95%] w888:flex-col w888:gap-2.5 w888:pb-[27px] ${
          isMobile
            ? "h500:h-[70%] h600:h-[80%] h600:pb-[42px] h900:h-[93%]"
            : ""
        }`}
      >
        {!isMobile ? (
          <ScrollWrapper
            id="scrollCategories"
            className="flex w-1/4 flex-col gap-[11px] pr-3.5"
          >
            {!modal && <DailyQuote />}
            {/* Desktop Categories */}
            {questionsCategories?.map((data) => {
              return (
                <div
                  key={data.category}
                  onClick={() => {
                    setFilter((prevFilter) => {
                      return prevFilter === "All"
                        ? data.category
                        : prevFilter === data.category
                          ? "All"
                          : data.category;
                    });
                    analytics &&
                      logEvent(analytics, `prompt_category_${data.category}`);
                  }}
                  className={`group flex items-center justify-start gap-3 border p-4 ${
                    filter === data.category
                      ? "border-gold"
                      : "border-[#ffffff0f]"
                  } bg-glass w-full cursor-pointer rounded-xl bg-transparent-gray transition-all`}
                >
                  <data.Icon
                    className={`${
                      filter === data.category ? "[&_path]:fill-gold" : ""
                    } group-hover:[&_path]:fill-gold`}
                  />
                  <h4
                    className={`${
                      filter === data.category ? "text-gold" : "text-white"
                    } text-base font-extralight group-hover:text-gold`}
                  >
                    {data.category}
                  </h4>
                </div>
              );
            })}
          </ScrollWrapper>
        ) : (
          !modal && <DailyQuote />
        )}
        <ScrollWrapper
          id="scrollQuestions"
          className="h-full w-3/4 w888:mx-0.5 w888:mb-0.5 w888:flex w888:w-full"
        >
          <div className="grid w-full grid-cols-2 gap-3 pr-3.5 w888:flex w888:flex-col w888:gap-2 w888:pl-1 w888:pr-2 h600:pl-0.5 h600:pr-1.5">
            {filter &&
              filter !== "All" &&
              questions?.map((data) => {
                return (
                  filter === data.category && (
                    <div
                      key={data.id}
                      className="bg-glass group flex h-full min-h-[120px] w-full cursor-pointer flex-col items-start justify-between gap-2.5 rounded-2xl border border-[#ffffff0f] bg-transparent-gray p-4 hover:border-gold w888:min-h-[100px] w888:gap-[7px] w888:p-2.5"
                      onClick={() => sendMessage(data.question)}
                    >
                      <div className="flex w-full items-start justify-between gap-3">
                        <p className="w-max text-base font-extralight text-dimmed-text-gray group-hover:text-white w888:text-sm">
                          {data.question}{" "}
                          <span className="invisible">helperrr</span>
                        </p>
                        {data.premium ? (
                          <PremiumIndicatorIco className="w-[24px] min-w-[24px] w888:h-auto w888:w-[19px] w888:min-w-[19px]" />
                        ) : (
                          <div></div>
                        )}
                      </div>
                      <div className="mt-auto flex w-full items-center justify-between">
                        <div className="bg-glass rounded-full bg-transparent-gray px-2.5 py-0.5 text-sm font-extralight text-white w888:px-2 w888:py-[1px] w888:text-[12px]">
                          {data.category}
                        </div>
                        <div className="flex items-center justify-center gap-1 rounded-full bg-dark-dimmed-blue pl-1.5 pr-2">
                          <CreditsIco className="h-auto w-[10px] [&_path]:fill-gold" />
                          <p className="text-[12px] text-gold">
                            {data.credits}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                );
              })}
            {filter === "All" &&
              questions?.map((data) => {
                return (
                  <div
                    key={data.id}
                    className="bg-glass group flex h-full min-h-[120px] w-full cursor-pointer flex-col items-start justify-between gap-2.5 rounded-2xl border border-[#ffffff0f] bg-transparent-gray p-4 hover:border-gold w888:min-h-[100px] w888:gap-[7px] w888:p-2.5"
                    onClick={() => sendMessage(data.question)}
                  >
                    <div className="flex w-full items-start justify-between gap-3">
                      <p className="text-base font-extralight text-dimmed-text-gray group-hover:text-white w888:text-sm">
                        {data.question}
                      </p>
                      {data.premium ? (
                        <PremiumIndicatorIco className="w-[24px] min-w-[24px] w888:h-auto w888:w-[19px] w888:min-w-[19px]" />
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <div className="mt-auto flex w-full items-center justify-between">
                      <div className="bg-glass rounded-full bg-transparent-gray px-2.5 py-0.5 text-sm font-extralight text-white w888:px-2 w888:py-[1px] w888:text-[12px]">
                        {data.category}
                      </div>
                      <div className="flex items-center justify-center gap-1 rounded-full bg-dark-dimmed-blue pl-1.5 pr-2">
                        <CreditsIco className="h-auto w-[10px] [&_path]:fill-gold" />
                        <p className="text-[12px] text-gold">{data.credits}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </ScrollWrapper>
      </div>
    </div>
  );
};

export default ChatBoxQuestions;
