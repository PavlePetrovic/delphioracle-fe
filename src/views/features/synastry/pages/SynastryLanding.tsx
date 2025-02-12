import { useNavigate } from "react-router";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";
import { IoPersonAddOutline } from "react-icons/io5";
import { PiMagicWandLight } from "react-icons/pi";
import SynastryIco from "@assets/icons/synastry-chat-ico.svg";

const SynastryLanding = () => {
  const navigate = useNavigate();

  return (
    <ScrollWrapper id="scrollSynastryLanding" className="mt-3 h-full w-full">
      <div className="flex h-full min-h-full w-full flex-col items-center justify-between gap-8 px-2">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <h2 className="text-center font-philosopher text-3xl text-white w888:text-2xl">
            Discover the Magic of Synastry
          </h2>
          <p className="w-2/3 text-center text-base font-light italic text-white w888:w-full w888:text-sm">
            Synastry compares two birth charts to reveal how your energies
            align. Whether it's love, friendship, business, or a karmic
            connection, synastry offers insights into compatibility,
            relationship dynamics, strengths, and opportunities for growth.
          </p>
        </div>

        <div className="flex w-[454px] flex-col items-center justify-center gap-5 w888:w-full">
          <h4 className="mb-1 text-center font-philosopher text-2xl text-white w888:text-xl">
            Choose Your Path
          </h4>
          <div
            className="flex cursor-pointer items-center gap-[19px] rounded-2xl border border-transparent bg-main-grey px-6 py-2.5 transition-all hover:border-gold hover:opacity-80 w888:gap-[15px] w888:px-3"
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
                Curious how your stars align with someone new? Enter their birth
                details to explore your connection.
              </p>
            </div>
          </div>
          <div
            className={`flex cursor-pointer items-center gap-[19px] rounded-2xl border border-transparent bg-main-grey px-6 py-2.5 transition-all hover:border-gold hover:opacity-80 w888:gap-[15px] w888:px-3`}
            onClick={() => navigate("/synastry/menu")}
          >
            <div className="-ml-[2px] h-[32px] w-[32px] w888:h-[22px] w888:w-[22px]">
              <PiMagicWandLight className="h-[32px] w-[32px] text-white w888:h-[22px] w888:w-[22px]" />
            </div>
            <div>
              <h5 className="text-lg font-light text-gold w888:text-base">
                Continue with an Existing Connection
              </h5>
              <p className="mt-1 text-[15px] font-light text-white w888:text-sm">
                Ready to dive deeper into an existing connection? Pick up where
                you left off and uncover even more.
              </p>
            </div>
          </div>
          {/* {!synastryList?.threads?.length ? (
            <p className="-mt-2 w-[85%] text-center text-xs font-light text-[#f6faff9c] w888:w-full">
              <span className="font-medium">Need Help?</span> If you've already
              added someone and this button is disabled, please contact support
            </p>
          ) : null} */}
        </div>
        <div className="h-[32px] w-[32px] pb-[70px] w888:h-[34px] w888:w-[34px]">
          <SynastryIco className="h-[32px] w-[32px] w888:h-[34px] w888:w-[34px]" />
        </div>
      </div>
    </ScrollWrapper>
  );
};

export default SynastryLanding;
