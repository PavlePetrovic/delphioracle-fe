import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "@redux/reduxTypes";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";
import ZodiacSymbol from "@components/ZodiacSymbol/ZodiacSymbol";
import { getSynastryData } from "../reducer/synastry.actions";
import {
  clearSynastryChatData,
  setSynastryChatData,
} from "../reducer/synastry.reducer";
import planet from "@assets/icons/planet.png";
import Button from "@components/Button/Button";
import LoadingPage from "@/views/components/LoadingPage/LoadingPage";
import ArrowDown from "@assets/icons/arrow-down-2.svg";

const SynastryMenu = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authData = useAppSelector((state) => state.authentication.authData);
  const synastryListLoading = useAppSelector(
    (state) => state.synastry.chat?.loading,
  );
  const synastryList = useAppSelector((state) => state.synastry.list);

  const handleTransport = (index: number) => {
    dispatch(setSynastryChatData(synastryList?.threads[index]));
    navigate(`/synastry/chat/${index}`);
  };

  useEffect(() => {
    authData?.uid && console.log("SynastryMenu.tsx -> getSynastryData");

    authData?.uid &&
      dispatch(
        getSynastryData({
          userId: `${authData?.uid}`,
        }),
      );
  }, [authData?.uid]);

  return (
    <ScrollWrapper id="scrollSynastryLanding" className="mt-3 h-full w-full">
      <div className="flex h-full min-h-full w-full flex-col items-center justify-between gap-6 px-2">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <h2 className="text-center font-philosopher text-3xl text-white w888:text-2xl">
            Synastry - Connections
          </h2>
        </div>

        {synastryListLoading ? (
          <LoadingPage />
        ) : (
          <div className="flex h-full w-full flex-col items-center gap-5">
            {synastryList?.threads?.length ? (
              synastryList?.threads?.map((thread: any, index: number) => {
                return (
                  <div
                    key={index}
                    className={`group flex w-full cursor-pointer items-center gap-4 pb-5 ${index + 1 === synastryList?.threads?.length ? "" : "border-b border-main-grey"} cursor-pointer`}
                    onClick={() => {
                      handleTransport(index);
                    }}
                  >
                    <div className="flex h-[40px] w-[40px] flex-col items-center justify-center rounded-full border border-[#ffffff2f] bg-main-grey p-2 hover:cursor-pointer hover:opacity-80 w888:h-[35px] w888:w-[35px]">
                      {
                        <ZodiacSymbol
                          zodiac={
                            thread?.thread_info?.other_person_report
                              ?.profile_stats?.sun
                          }
                          className="h-auto w-auto w888:w-[30px] group-hover:[&_path]:fill-gold"
                        />
                      }
                    </div>
                    <p className="font-philosopher text-xl text-white group-hover:text-gold w888:text-base">
                      {thread?.thread_info?.other_person_info?.name}
                    </p>
                    <ArrowDown
                      className={`ml-auto w-[18px] -rotate-90 cursor-pointer transition-all duration-200 group-hover:[&_path]:stroke-gold`}
                    />
                  </div>
                );
              })
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-1">
                <img
                  src={planet}
                  alt="planet.png"
                  className="h-auto w-[160px]"
                />
                <p className="font-philosopher text-xl font-light text-white">
                  No Connections
                </p>
                <Button
                  type="goldMain"
                  text="Add New Connection"
                  actionIco
                  onClick={() => navigate("/synastry/wizard")}
                  className="mt-9 !text-sm"
                />
              </div>
            )}
          </div>
        )}
        <div className="h-[40px] w-[40px] pb-[80px] w888:h-[34px] w888:w-[34px]"></div>
      </div>
    </ScrollWrapper>
  );
};

export default SynastryMenu;
