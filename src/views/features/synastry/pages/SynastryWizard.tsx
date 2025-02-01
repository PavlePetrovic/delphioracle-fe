import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../../redux/reduxTypes";
import { userInfoType } from "@features/chatBox/chatBoxTypes";
import TextInput from "@components/TextInput/TextInput";
import City from "@features/getUserInfo/components/wizardSteps/City";
// import DateTimePickerInput from "views/components/DateTimePickerInput/DateTimePickerInput";
import SingleSelect from "@components/SingleSelect/SingleSelect";
import { initiateSynastryConversation } from "../reducer/synastry.actions";
import { setSynastryChatInitialFetch } from "../reducer/synastry.reducer";
import { clearLocValues } from "@features/getUserInfo/reducer/userData.reducer";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";
import CreditsIco from "../../../../assets/icons/credits-ico.svg";
import Button from "@components/Button/Button";
import DateTime from "@features/getUserInfo/components/wizardSteps/DateTime";

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
  const synastryList = useAppSelector((state) => state.synastry.list);

  const [userInfo, setUserInfo] = useState<userInfoType>(initialUserInfo);
  const [addPartner, setAddPartner] = useState(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAddPartner(true);
  };

  useEffect(() => {
    if (addPartner) {
      dispatch(
        initiateSynastryConversation({
          other_person_info: userInfo,
          userId: `${userId}`,
        }),
      );

      dispatch(setSynastryChatInitialFetch(true));

      if (synastryList?.threads?.length) {
        navigate(`/synastry/chat/${synastryList.threads.length + 1}`);
      } else {
        navigate(`/synastry/chat/1`);
      }
    }

    return () => {
      setAddPartner(false);
    };
  }, [addPartner]);

  useEffect(() => {
    return () => {
      dispatch(clearLocValues());
    };
  }, []);

  return (
    <ScrollWrapper id="scrollSynastryWizard" className="mt-2.5 h-full w-full">
      <div className="flex h-full min-h-full w-full flex-col items-center justify-between gap-4">
        <h1 className="font-philosopher w888:mt-0 w888:text-2xl w888:mb-4 mt-2 text-center text-[34px] text-white">
          Synastry - Add Partner
        </h1>
        <form
          onSubmit={submitHandler}
          className="w888:w-full flex w-1/2 flex-col gap-4"
        >
          <div className="w888:flex-col flex w-full items-center gap-5">
            <div className="w888:w-full flex w-1/2 flex-col items-center gap-2.5 pb-[1px]">
              <p className="w888:text-sm text-center text-base font-light text-white">
                Partner Name
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
                placeholder={"Type name"}
                className="!bg-[#0D101AB8] !py-2"
                disabled={false}
              />
            </div>
            <div className="w888:w-full flex w-1/2 flex-col items-center gap-[11px]">
              <p className="w888:text-sm text-center text-base font-light text-white">
                Partner gender
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
            <p className="w888:text-sm mb-0.5 text-center text-base font-light text-white">
              City where your partner were born?
            </p>
            <City
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
          <p className="w888:text-sm mt-2 -mb-3 text-center text-[17px] font-light text-white">
            Partner birthday and time
          </p>
          <div className="mx-auto">
            <DateTime
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

          <div className="w888:mb-4 mt-10">
            <Button
              type="goldMain"
              text="Add New One"
              CustomIco={
                <button
                  className={`text-gold flex items-center justify-center gap-1 rounded-full bg-[#E0EFFF1F] px-3 py-[1px] font-light`}
                  onClick={() => null}
                >
                  <CreditsIco className="[&_path]:fill-gold h-auto w-[13px]" />
                  <span className="text-gold">5</span>
                </button>
              }
              className="mx-auto w-fit !pr-2.5 !pl-3 !font-extralight"
              onClick={() => navigate("/synastry/wizard")}
            />
          </div>
        </form>
        <div className="h-[40px] w-full"></div>
      </div>
    </ScrollWrapper>
  );
};

export default SynastryWizard;
