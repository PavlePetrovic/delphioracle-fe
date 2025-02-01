import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/reduxTypes";
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
  const loading = useAppSelector((state) => state.synastry.chat?.loading);

  const [processing, setProcessing] = useState(false);

  const handleTransport = (index: number) => {
    setProcessing(true);
    dispatch(
      getSynastryData({
        threadId: `${synastryList?.threads[index]?.thread_info?.thread_id}`,
        userId: `${authData?.uid}`,
      }),
    )
      .unwrap()
      .then(() => {
        setProcessing(false);

        navigate(`/synastry/chat/${index}`);
      })
      .catch((error) => {
        setProcessing(false);

        console.log(error);
      });
  };

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

  // return loading || !authData?.uid ? (
  //   <div className="flex items-center justify-center w-full h-full -mt-10">
  //     <LoadingPage />
  //   </div>
  // ) : (
  // <ScrollWrapper
  //   id="scrollSynastryLanding"
  //   className="w-full h-full mt-3 w888:mt-2"
  // >
  //     <div className="flex flex-col gap-10 items-center justify-center mx-auto my-4 mt-[6%] w-[90%] h900:mt-0 w888:gap-7 w888:w-full">
  //       <h1 className="text-white font-philosopher text-center text-4xl w888:text-2xl">
  //         Synastry Menu
  //       </h1>
  // <div className="flex items-center justify-center flex-wrap gap-5 h-[60%]">
  //   {synastryList?.threads?.map((thread: any, index: number) => {
  //     return (
  //       <div
  //         key={index}
  //         className={`group flex gap-2 items-center cursor-pointer ${
  //           processing
  //             ? "pointer-events-none cursor-not-allowed opacity-75 animate-pulse"
  //             : "cursor-pointer"
  //         }`}
  //         onClick={() => {
  //           handleTransport(index);
  //         }}
  //       >
  //         <div className="flex flex-col items-center justify-center bg-transparent-gray bg-glass border border-[#ffffff2f] p-2 w-[40px] h-[40px] rounded-full w888:h-[35px] w888:w-[35px] hover:cursor-pointer hover:opacity-80">
  //           <ZodiacSymbol
  //             zodiac="Aquarius"
  //             className="w-auto h-auto group-hover:[&_path]:fill-gold w888:w-[30px]"
  //           />
  //         </div>
  //         <p className="font-philosopher text-2xl text-white group-hover:text-gold w888:text-base">
  //           {thread?.thread_info?.other_person_info?.name}
  //         </p>
  //       </div>
  //     );
  //   })}
  // </div>
  //       <Button
  //         type="goldMain"
  //         text="Add New One"
  //         CustomIco={
  //           <button
  //             className={`flex items-center justify-center gap-1 bg-[#E0EFFF1F] text-gold rounded-full px-3 py-[1px] font-light`}
  //             onClick={() => null}
  //           >
  //             <CreditsIco className="[&_path]:fill-gold w-[13px] h-auto" />
  //             <span className="text-gold">5</span>
  //           </button>
  //         }
  //         className="!font-extralight !pl-3 !pr-2.5"
  //         onClick={() => navigate("/synastry/wizard")}
  //       />
  //     </div>
  //   </ScrollWrapper>
  // );

  return (
    <ScrollWrapper id="scrollSynastryLanding" className="mt-3 h-full w-full">
      <div className="flex h-full min-h-full w-full flex-col items-center justify-between gap-8 px-2">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <h2 className="font-philosopher w888:text-2xl text-center text-3xl text-white">
            Discover the Magic of Synastry
          </h2>
          <p className="w888:w-full w888:text-sm w-2/3 text-center text-base font-light text-white italic">
            Synastry is the art of comparing two astrological charts to reveal
            the dynamics of your connection. Whether you're exploring love,
            friendship, or any other bond, Synastry provides insights into
            compatibility, strengths, and areas for growth
            {/* <br />
            By analyzing the interplay between two charts, Synastry unveils how celestial placements shape your interactions. It highlights the harmonies that bring you closer and the challenges that offer opportunities for growth. This ancient astrological practice helps you understand not only the other person but also your own role in the relationship. */}
          </p>
        </div>

        <div className="w888:w-full flex w-[454px] flex-col items-center justify-center gap-5">
          <h4 className="font-philosopher w888:text-xl mb-1 text-center text-2xl text-white">
            Choose Your Path
          </h4>
          <div
            className="w888:gap-[15px] bg-transparent-gray bg-glass w888:px-3 hover:border-gold flex cursor-pointer items-center gap-[19px] rounded-2xl border border-transparent px-6 py-2.5 transition-all hover:opacity-80"
            onClick={() => navigate("/synastry/wizard")}
          >
            <div className="w888:w-[18px] w888:h-[18px] h-[32px] w-[28px]">
              <IoPersonAddOutline className="w888:w-[18px] w888:h-[18px] h-[32px] w-[28px] text-white" />
            </div>
            <div>
              <h5 className="text-gold w888:text-base text-lg font-light">
                Add a New Connection
              </h5>
              <p className="w888:text-sm mt-1 text-[15px] font-light text-white">
                Want to see how your stars align with someone new? Enter their
                details to unlock fresh insights.
              </p>
            </div>
          </div>
          <div
            className={`w888:gap-[15px] bg-transparent-gray bg-glass w888:px-3 flex items-center gap-[19px] rounded-2xl px-6 py-2.5 transition-all ${
              !synastryList?.threads?.length
                ? "cursor-not-allowed opacity-40"
                : "hover:border-gold cursor-pointer border border-transparent hover:opacity-80"
            }`}
            onClick={() =>
              synastryList?.threads?.length && navigate("/synastry/menu")
            }
          >
            <div className="w888:w-[22px] w888:h-[22px] -ml-[2px] h-[32px] w-[32px]">
              <PiMagicWandLight className="w888:w-[22px] w888:h-[22px] h-[32px] w-[32px] text-white" />
            </div>
            <div>
              <h5 className="text-gold w888:text-base text-lg font-light">
                Continue with an Existing Connection
              </h5>
              <p className="w888:text-sm mt-1 text-[15px] font-light text-white">
                Already have someone in mind? Pick up where you left off and
                dive deeper into your Synastry journey.
              </p>
            </div>
          </div>
          {!synastryList?.threads?.length ? (
            <p className="w888:w-full -mt-2 w-[85%] text-center text-xs font-light text-[#f6faff9c]">
              Please contact support if you have already added some people and
              this button is still disabled
            </p>
          ) : null}
        </div>
        <div className="w888:w-[34px] w888:h-[34px] h-[40px] w-[40px] pb-[80px]">
          <SynastryIco className="w888:w-[34px] w888:h-[34px] h-[40px] w-[40px]" />
        </div>
      </div>
    </ScrollWrapper>
  );
};

export default SynastryLanding;
