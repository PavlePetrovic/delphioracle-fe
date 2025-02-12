import { useAppDispatch, useAppSelector } from "@redux/reduxTypes";
import { useNavigate, useParams } from "react-router";
import ZodiacSymbol from "@components/ZodiacSymbol/ZodiacSymbol";
import Button from "@components/Button/Button";
import { BsArrowLeft } from "react-icons/bs";
import {
  clearSynastryChatData,
  setSynastryChatData,
} from "../reducer/synastry.reducer";
import Spinner from "@components/Spinner/Spinner";
import { synastryChatThreadType } from "../types";

const SynastryChatNavbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isMobile = useAppSelector((state) => state.global.isMobile);
  const synastryList = useAppSelector((state) => state.synastry.list);
  const chatData = useAppSelector((state) => state.synastry.chat);

  const key = useParams();

  const handleTransport = (index: number) => {
    if (Number(key?.chatIndex) !== index) {
      dispatch(setSynastryChatData(synastryList?.threads[index]));
      navigate(`/synastry/chat/${index}`);
    }
  };

  const loadingCondition = synastryList?.threads?.length
    ? synastryList?.threads?.length < Number(key?.chatIndex) + 1
    : true;

  return (
    <div className="sticky left-0 top-0 z-[10] flex w-full items-center bg-dark-blue p-2">
      <Button
        type="main"
        CustomIco={<BsArrowLeft className={`text-xl w888:text-base`} />}
        className="-ml-2 mr-4 w-fit !px-[9px] !py-[9px] w888:mr-2 w888:!px-[7px] w888:!py-[7px]"
        onClick={() => {
          navigate("/synastry/menu");
          dispatch(clearSynastryChatData());
        }}
      />
      <h3 className="mr-auto font-philosopher text-lg text-white w888:text-base">
        {loadingCondition
          ? "Collecting Insights..."
          : chatData?.value?.thread?.thread_info?.other_person_info?.name
            ? `You & ${chatData?.value?.thread?.thread_info?.other_person_info?.name}`
            : "Collecting Insights..."}
      </h3>
      <div className="ml-3 flex items-center gap-3">
        {synastryList?.threads?.map(
          (thread: synastryChatThreadType, index: number) => {
            return !isMobile && thread?.thread_info?.other_person_info?.name ? (
              <div
                key={index}
                className="flex w-[40px] flex-col items-center justify-center"
                onClick={() => handleTransport(index)}
              >
                <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[#ffffff2f] bg-main-grey p-1.5 text-white  hover:cursor-pointer hover:opacity-80">
                  <ZodiacSymbol
                    zodiac={`${thread?.thread_info?.other_person_report?.profile_stats?.sun}`}
                    className={`${
                      Number(key?.chatIndex) === index
                        ? "[&_path]:fill-gold"
                        : ""
                    }`}
                  />
                </div>
                <p
                  aria-label={`${thread?.thread_info?.other_person_info?.name}`}
                  className={`max-w-[40px] truncate text-[11px] ${
                    Number(key?.chatIndex) === index
                      ? "text-gold"
                      : "text-white"
                  }`}
                >
                  {thread?.thread_info?.other_person_info?.name}
                </p>
              </div>
            ) : (
              <p key={index} className="hidden"></p>
            );
          },
        )}
        {loadingCondition ? (
          <div className="flex animate-pulse flex-col items-center justify-center">
            <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[#ffffff2f] bg-main-grey p-1.5 text-white  hover:cursor-pointer hover:opacity-80">
              <Spinner classList="w-[16px] h-[16px]" />
            </div>
            <p className={`text-[11px] text-white`}>Adding...</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SynastryChatNavbar;
