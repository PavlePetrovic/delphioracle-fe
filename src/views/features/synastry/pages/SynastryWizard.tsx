import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../../redux/reduxTypes";
import { userInfoType } from "@appTypes/universal";
import TextInput from "@components/TextInput/TextInput";
import City from "@features/infoWizard/components/wizardSteps/City";
import SingleSelect from "@components/SingleSelect/SingleSelect";
import { initiateSynastryConversation } from "../reducer/synastry.actions";
import {
  clearSynastryChatData,
  setSynastryChatInitialFetch,
} from "../reducer/synastry.reducer";
import { clearLocValues } from "@features/infoWizard/reducer/userData.reducer";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";
import CreditsIco from "../../../../assets/icons/credits-ico.svg";
import Button from "@components/Button/Button";
import DateTime from "@features/infoWizard/components/wizardSteps/DateTime";
import { decrementCredits } from "../../auth/reducer/authentication.reducer";

const initialUserInfo: userInfoType = {
  name: "",
  surname: "",
  year: 0,
  month: 0,
  day: 0,
  hour: 0,
  minute: 0,
  city: "",
  gender: "",
  lat: "",
  lon: "",
  timezone: "",
  timezone_value: "",
  knowledge_level: "",
};

interface typeOptionsType {
  value: "Male" | "Female" | "Other" | "";
  label: string;
}

const genderOptions: typeOptionsType[] = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];

const SynastryWizard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userId = useAppSelector((state) => state.authentication.authData?.uid);
  const internalAuthData = useAppSelector(
    (state) => state.authentication.internalAuthData.value,
  );
  const synastryList = useAppSelector((state) => state.synastry.list);

  const [userInfo, setUserInfo] = useState<userInfoType>(initialUserInfo);

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      dispatch(
        initiateSynastryConversation({
          other_person_info: userInfo,
          userId: `${userId}`,
        }),
      );
      dispatch(decrementCredits(5));
      dispatch(setSynastryChatInitialFetch(true));

      if (synastryList?.threads?.length) {
        navigate(`/synastry/chat/${synastryList.threads.length}`);
      } else {
        navigate(`/synastry/chat/0`);
      }
    },
    [userInfo, userId, synastryList],
  );

  useEffect(() => {
    dispatch(clearSynastryChatData());

    return () => {
      dispatch(clearLocValues());
    };
  }, []);

  return (
    <ScrollWrapper id="scrollSynastryWizard" className="mt-2.5 h-full w-full">
      <div className="flex h-full min-h-full w-full flex-col items-center justify-between gap-4">
        <h1 className="mt-2 text-center font-philosopher text-[34px] text-white w888:mb-4 w888:mt-0 w888:text-2xl">
          Synastry - Add your Connection
        </h1>
        <form
          onSubmit={submitHandler}
          className="flex w-1/2 flex-col gap-4 w888:w-full"
        >
          <div className="flex w-full items-center gap-5 w888:flex-col">
            <div className="flex w-1/2 flex-col items-center gap-2.5 pb-[1px] w888:w-full">
              <p className="text-center text-base font-light text-white w888:text-sm">
                Connection Name
              </p>
              <TextInput
                label=""
                onChange={(e) => {
                  e.preventDefault();
                  setUserInfo((prevUserInfo) => {
                    return {
                      ...prevUserInfo,
                      name: `${e.target.value}`,
                    };
                  });
                }}
                value={userInfo.name}
                placeholder={"Type your connection's name…"}
                className="!bg-[#0D101AB8] !py-2"
                disabled={false}
              />
            </div>
            <div className="flex w-1/2 flex-col items-center gap-[11px] w888:w-full">
              <p className="text-center text-base font-light text-white w888:text-sm">
                Connection Gender
              </p>
              <SingleSelect
                selectedValue={{
                  value: userInfo?.gender,
                  label: userInfo?.gender,
                }}
                data={genderOptions}
                menuPlacement="bottom"
                label={""}
                placeholder={"Gender"}
                onChange={(newValue) => {
                  setUserInfo((prevUserInfo) => {
                    return {
                      ...prevUserInfo,
                      gender: `${newValue?.value}`,
                    };
                  });
                }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-0.5 text-center text-base font-light text-white w888:text-sm">
              Where were they born?
            </p>
            <City
              placeholder="Type their birthplace…"
              onChange={(value) =>
                value.city &&
                setUserInfo((prevUserInfo) => {
                  return {
                    ...prevUserInfo,
                    city: `${value.city}`,
                    lat: `${Math.round(value?.lat * 100) / 100}`,
                    lon: `${Math.round(value?.lon * 100) / 100}`,
                    timezone: value?.timezone,
                    timezone_value: value?.timezone_value,
                  };
                })
              }
            />
          </div>
          <p className="-mb-3 mt-2 text-center text-[17px] font-light text-white w888:text-sm">
            Birthday and Time
          </p>
          <div className="mx-auto">
            <DateTime
              placeholder="Pick their birthdate and time"
              valueExist={{
                year: "",
                month: "",
                day: "",
                hour: "",
                minute: "",
              }}
              onChange={(value) => {
                setUserInfo((prevUserInfo) => {
                  return {
                    ...prevUserInfo,
                    year: +value?.year,
                    month: +value?.month,
                    day: +value?.day,
                    hour: +value?.hour,
                    minute: +value?.minute,
                  };
                });
              }}
            />
          </div>

          <div className="mt-10 w888:mb-4">
            <Button
              type="goldMain"
              text="Add New Connection"
              disable={
                internalAuthData?.credits ? internalAuthData?.credits < 5 : true
              }
              CustomIco={
                <div
                  className={`flex items-center justify-center gap-1 rounded-full bg-[#E0EFFF1F] px-3 py-[1px] font-light text-gold`}
                >
                  <CreditsIco className="h-auto w-[13px] [&_path]:fill-gold" />
                  <span className="text-gold">5</span>
                </div>
              }
              className="mx-auto w-fit !pl-3 !pr-2.5 !font-extralight"
            />
          </div>
        </form>
        <div className="h-[40px] w-full"></div>
      </div>
    </ScrollWrapper>
  );
};

export default SynastryWizard;
