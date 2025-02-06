import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/reduxTypes";
import { useNavigate } from "react-router";
import { getSynastryData } from "../reducer/synastry.actions";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";
import { IoPersonAddOutline } from "react-icons/io5";
import { PiMagicWandLight } from "react-icons/pi";
import SynastryIco from "@assets/icons/synastry-chat-ico.svg";
import { clearSynastryChatData } from "../reducer/synastry.reducer";

const SynastryLanding = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authData = useAppSelector((state) => state.authentication.authData);
  const synastryList = useAppSelector((state) => state.synastry.list);

  useEffect(() => {
    authData?.uid &&
      dispatch(
        getSynastryData({
          userId: `${authData?.uid}`,
        }),
      );

    return () => {
      dispatch(clearSynastryChatData());
    };
  }, [authData?.uid]);

  return (
    <ScrollWrapper id="scrollSynastryLanding" className="mt-3 h-full w-full">
      <div className="flex h-full min-h-full w-full flex-col items-center justify-between gap-8 px-2">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <h2 className="text-center font-philosopher text-3xl text-white w888:text-2xl">
            Discover the Magic of Synastry
          </h2>
          <p className="w-2/3 text-center text-base font-light italic text-white w888:w-full w888:text-sm">
            Synastry is the art of comparing two astrological charts to reveal
            the dynamics of your connection. Whether you're exploring love,
            friendship, or any other bond, Synastry provides insights into
            compatibility, strengths, and areas for growth
            {/* <br />
            By analyzing the interplay between two charts, Synastry unveils how celestial placements shape your interactions. It highlights the harmonies that bring you closer and the challenges that offer opportunities for growth. This ancient astrological practice helps you understand not only the other person but also your own role in the relationship. */}
          </p>
        </div>

        <div className="flex w-[454px] flex-col items-center justify-center gap-5 w888:w-full">
          <h4 className="mb-1 text-center font-philosopher text-2xl text-white w888:text-xl">
            Choose Your Path
          </h4>
          <div
            className="bg-main-grey flex cursor-pointer items-center gap-[19px] rounded-2xl border border-transparent px-6 py-2.5 transition-all hover:border-gold hover:opacity-80 w888:gap-[15px] w888:px-3"
            onClick={() => navigate("/synastry/wizard")}
          >
            <div className="h-[32px] w-[28px] w888:h-[18px] w888:w-[18px]">
              <IoPersonAddOutline className="h-[32px] w-[28px] text-white w888:h-[18px] w888:w-[18px]" />
            </div>
            <div>
              <h5 className="text-lg font-light text-gold w888:text-base">
                Add a New Connection
              </h5>
              <p className="mt-1 text-[15px] font-light text-white w888:text-sm">
                Want to see how your stars align with someone new? Enter their
                details to unlock fresh insights.
              </p>
            </div>
          </div>
          <div
            className={`bg-main-grey flex items-center gap-[19px] rounded-2xl px-6 py-2.5 transition-all w888:gap-[15px] w888:px-3 ${
              !synastryList?.threads?.length
                ? "cursor-not-allowed opacity-40"
                : "cursor-pointer border border-transparent hover:border-gold hover:opacity-80"
            }`}
            onClick={() =>
              synastryList?.threads?.length && navigate("/synastry/menu")
            }
          >
            <div className="-ml-[2px] h-[32px] w-[32px] w888:h-[22px] w888:w-[22px]">
              <PiMagicWandLight className="h-[32px] w-[32px] text-white w888:h-[22px] w888:w-[22px]" />
            </div>
            <div>
              <h5 className="text-lg font-light text-gold w888:text-base">
                Continue with an Existing Connection
              </h5>
              <p className="mt-1 text-[15px] font-light text-white w888:text-sm">
                Already have someone in mind? Pick up where you left off and
                dive deeper into your Synastry journey.
              </p>
            </div>
          </div>
          {!synastryList?.threads?.length ? (
            <p className="-mt-2 w-[85%] text-center text-xs font-light text-[#f6faff9c] w888:w-full">
              Please contact support if you have already added some people and
              this button is still disabled
            </p>
          ) : null}
        </div>
        <div className="h-[40px] w-[40px] pb-[80px] w888:h-[34px] w888:w-[34px]">
          <SynastryIco className="h-[40px] w-[40px] w888:h-[34px] w888:w-[34px]" />
        </div>
      </div>
    </ScrollWrapper>
  );
};

export default SynastryLanding;
