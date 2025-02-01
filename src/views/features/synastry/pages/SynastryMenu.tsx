import { useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../../redux/reduxTypes";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";
import ZodiacSymbol from "@components/ZodiacSymbol/ZodiacSymbol";
import { getSynastryData } from "../reducer/synastry.actions";

const SynastryMenu = () => {
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

  return (
    <ScrollWrapper id="scrollSynastryLanding" className="mt-3 h-full w-full">
      <div className="flex h-full min-h-full w-full flex-col items-center justify-between gap-8 px-2">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <h2 className="font-philosopher w888:text-2xl text-center text-3xl text-white">
            Synastry - Menu
          </h2>
        </div>

        <div className="flex h-[60%] flex-wrap items-center justify-center gap-5">
          {synastryList?.threads?.map((thread: any, index: number) => {
            return (
              <div
                key={index}
                className={`group flex cursor-pointer items-center gap-2 ${
                  processing
                    ? "pointer-events-none animate-pulse cursor-not-allowed opacity-75"
                    : "cursor-pointer"
                }`}
                onClick={() => {
                  handleTransport(index);
                }}
              >
                <div className="bg-transparent-gray bg-glass w888:h-[35px] w888:w-[35px] flex h-[40px] w-[40px] flex-col items-center justify-center rounded-full border border-[#ffffff2f] p-2 hover:cursor-pointer hover:opacity-80">
                  <ZodiacSymbol
                    zodiac={
                      thread?.thread_info?.other_person_report?.profile_stats
                        ?.sun
                    }
                    className="group-hover:[&_path]:fill-gold w888:w-[30px] h-auto w-auto"
                  />
                </div>
                <p className="font-philosopher group-hover:text-gold w888:text-base text-2xl text-white">
                  {thread?.thread_info?.other_person_info?.name}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w888:w-[34px] w888:h-[34px] h-[40px] w-[40px] pb-[80px]"></div>
      </div>
    </ScrollWrapper>
  );
};

export default SynastryMenu;
