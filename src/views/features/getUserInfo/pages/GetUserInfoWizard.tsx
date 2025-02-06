import { ReactNode, useCallback, useState } from "react";
import { userInfoType } from "@appTypes/universal";
import GetUserInfoWizardWrapper from "../wrappers/GetUserInfoWizardWrapper";
import Name from "../components/wizardSteps/Name";
import City from "../components/wizardSteps/City";
import DateTime from "../components/wizardSteps/DateTime";
import Gender from "../components/wizardSteps/Gender";
import GetUserInfoWizardBox from "../components/GetUserInfoWizardBox";
import Preview from "../components/wizardSteps/Preview";
import Survey from "../components/wizardSteps/Survey";
import { initiateConversation } from "@/views/features/chat/reducer/chatBox.actions";
import { useAppDispatch } from "../../../../redux/reduxTypes";
import { useNavigate } from "react-router";

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

type wizardStepsTypes =
  | "name"
  | "city"
  | "date-time"
  | "gender"
  | "survey"
  | "preview";

const GetUserInfoWizard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<userInfoType>(initialUserInfo);
  const [renderStep, setRenderStep] = useState<wizardStepsTypes>("name");

  const renderSpecificInput = useCallback(
    (inputType: wizardStepsTypes): ReactNode => {
      // Rendering components based on wizard step
      switch (inputType) {
        case "name":
          return (
            <GetUserInfoWizardBox
              header="It's great to have you here."
              label="What's your name?"
              input={
                <Name
                  onChange={(value) =>
                    setUserInfo((prevUserInfo) => {
                      return {
                        ...prevUserInfo,
                        name: `${value}`,
                      };
                    })
                  }
                  value={userInfo.name}
                />
              }
              onClickNext={() => setRenderStep("city")}
              disableNextButton={userInfo.name ? false : true}
            />
          );

        case "city":
          return (
            <GetUserInfoWizardBox
              header="Thanks for providing your name! "
              label="Could you share the city where you were born?"
              input={
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
                  value={userInfo.city}
                />
              }
              onClickBack={() => setRenderStep("name")}
              onClickNext={() => setRenderStep("date-time")}
              disableNextButton={userInfo.city ? false : true}
            />
          );

        case "date-time":
          return (
            <GetUserInfoWizardBox
              header="We're interested in celebrating your special day!"
              label="What's the date and time you were born?"
              input={
                <div className="mx-auto w-fit">
                  <DateTime
                    onChange={(value) =>
                      +value.year &&
                      setUserInfo((prevUserInfo) => {
                        return {
                          ...prevUserInfo,
                          year: +value?.year,
                          month: +value?.month,
                          day: +value?.day,
                          hour: +value?.hour,
                          minute: +value?.minute,
                        };
                      })
                    }
                    valueExist={{
                      year: `${userInfo.year}`,
                      month: `${userInfo.month}`,
                      day: `${userInfo.day}`,
                      hour: `${userInfo.hour}`,
                      minute: `${userInfo.minute}`,
                    }}
                  />
                </div>
              }
              collapseGaps={true}
              onClickBack={() => setRenderStep("city")}
              onClickNext={() => setRenderStep("gender")}
              disableNextButton={userInfo.month < 1 ? true : false}
            />
          );

        case "gender":
          return (
            <GetUserInfoWizardBox
              header="Gender is an important aspect of personalization"
              label="Would you mind sharing your gender with us?"
              input={
                <Gender
                  onChange={(value) =>
                    value &&
                    setUserInfo((prevUserInfo) => {
                      return {
                        ...prevUserInfo,
                        gender: `${value}`,
                      };
                    })
                  }
                  value={userInfo.gender}
                />
              }
              onClickBack={() => setRenderStep("date-time")}
              onClickNext={() => setRenderStep("survey")}
              disableNextButton={userInfo.gender ? false : true}
            />
          );

        case "survey":
          return (
            <GetUserInfoWizardBox
              header="How would you like the Oracle to respond?"
              label=""
              input={
                <Survey
                  onChange={(value) =>
                    value &&
                    setUserInfo((prevUserInfo) => {
                      return {
                        ...prevUserInfo,
                        knowledge_level: `${value}`,
                      };
                    })
                  }
                  value={userInfo.knowledge_level}
                />
              }
              onClickBack={() => setRenderStep("gender")}
              onClickNext={() => setRenderStep("preview")}
              disableNextButton={userInfo.knowledge_level ? false : true}
            />
          );

        case "preview":
          return (
            <GetUserInfoWizardBox
              header=""
              label=""
              input={<></>}
              preview={<Preview userInfo={userInfo} />}
              onClickBack={() => setRenderStep("survey")}
              onClickNext={() => goToChat()}
            />
          );

        default:
          return <></>;
      }
    },
    [userInfo],
  );

  const goToChat = () => {
    dispatch(
      initiateConversation({
        user_info: userInfo,
      }),
    );
    sessionStorage.setItem("wizardPassed", "true");
    navigate("/chat-landing");
  };

  return (
    <GetUserInfoWizardWrapper>
      {renderSpecificInput(renderStep)}
    </GetUserInfoWizardWrapper>
  );
};

export default GetUserInfoWizard;
