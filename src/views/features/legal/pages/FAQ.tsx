import { useEffect } from "react";
import Accordion from "@components/Accordion/Accordion";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";
import {
  aboutDelphiAndHowItWorks,
  accessingAndEngaging,
  personalizationAndFeatures,
  privacyAndSupport,
  rewardsAndGrowing,
} from "../data";

const FAQ = () => {
  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <ScrollWrapper id="scrollFAQ">
      <div className="flex flex-col items-start justify-center gap-4 pb-3 pr-2.5 text-white w888:px-2">
        <div className="mt-2 flex w-full items-center justify-between">
          <h1 className="text-center font-philosopher text-3xl text-gold w888:text-left w888:text-2xl">
            FAQ - Your Questions, Answered
          </h1>
        </div>
        <div className="mt-2 flex w-full items-center justify-between">
          <h1 className="mb-2 text-center text-xl text-gold w888:text-left">
            🔮 About The Delphi Oracle & How It Works
          </h1>
        </div>
        {aboutDelphiAndHowItWorks?.map((item, index) => (
          <div key={index} className="flex w-full flex-col">
            <Accordion
              key={index}
              containerClassName="w-full"
              title={
                <h4 className="font-philosopher text-lg">{`${index + 1}. ${
                  item.title
                }`}</h4>
              }
              defaultState={false}
            >
              <p className="text-base font-light transition-all">
                {item.content?.map((string) => (!string ? <br /> : string))}
              </p>
            </Accordion>
            {index + 1 !== aboutDelphiAndHowItWorks?.length ? (
              <div className="mt-[17px] h-[1px] w-full bg-[#FFFFFF3D]"></div>
            ) : null}
          </div>
        ))}
        <div className="mt-2 flex w-full items-center justify-between">
          <h1 className="mb-2 text-center text-xl text-gold w888:text-left">
            🛠️ Personalization & Features
          </h1>
        </div>
        {personalizationAndFeatures?.map((item, index) => (
          <div key={index} className="flex w-full flex-col">
            <Accordion
              key={index}
              containerClassName="w-full"
              title={
                <h4 className="font-philosopher text-lg">{`${index + 1}. ${
                  item.title
                }`}</h4>
              }
              defaultState={false}
            >
              <p className="text-base font-light transition-all">
                {item.content?.map((string) => (!string ? <br /> : string))}
              </p>
            </Accordion>
            {index + 1 !== personalizationAndFeatures?.length ? (
              <div className="mt-[17px] h-[1px] w-full bg-[#FFFFFF3D]"></div>
            ) : null}
          </div>
        ))}
        <div className="mt-2 flex w-full items-center justify-between">
          <h1 className="mb-2 text-center text-xl text-gold w888:text-left">
            📲 Accessing & Engaging with The Delphi Oracle
          </h1>
        </div>
        {accessingAndEngaging?.map((item, index) => (
          <div key={index} className="flex w-full flex-col">
            <Accordion
              key={index}
              containerClassName="w-full"
              title={
                <h4 className="font-philosopher text-lg">{`${index + 1}. ${
                  item.title
                }`}</h4>
              }
              defaultState={false}
            >
              <p className="text-base font-light transition-all">
                {item.content?.map((string) => (!string ? <br /> : string))}
              </p>
            </Accordion>
            {index + 1 !== accessingAndEngaging?.length ? (
              <div className="mt-[17px] h-[1px] w-full bg-[#FFFFFF3D]"></div>
            ) : null}
          </div>
        ))}
        <div className="mt-2 flex w-full items-center justify-between">
          <h1 className="mb-2 text-center text-xl text-gold w888:text-left">
            🔐 Privacy, Support & Troubleshooting
          </h1>
        </div>
        {privacyAndSupport?.map((item, index) => (
          <div key={index} className="flex w-full flex-col">
            <Accordion
              key={index}
              containerClassName="w-full"
              title={
                <h4 className="font-philosopher text-lg">{`${index + 1}. ${
                  item.title
                }`}</h4>
              }
              defaultState={false}
            >
              <p className="text-base font-light transition-all">
                {item.content?.map((string) => (!string ? <br /> : string))}
              </p>
            </Accordion>
            {index + 1 !== privacyAndSupport?.length ? (
              <div className="mt-[17px] h-[1px] w-full bg-[#FFFFFF3D]"></div>
            ) : null}
          </div>
        ))}
        <div className="mt-2 flex w-full items-center justify-between">
          <h1 className="text-center text-xl text-gold w888:text-left">
            💎 Earn Rewards While Growing The Delphi Oracle!
          </h1>
        </div>
        <div className="mb-2 flex w-[70%] items-center justify-between w888:w-full">
          <p className="text-base font-light">
            Looking to earn rewards while supporting a Know Thyself movement?
            The Cosmic Contribution Program is our affiliate astrology program
            designed for marketers, influencers, and advocates.
          </p>
        </div>
        {rewardsAndGrowing?.map((item, index) => (
          <div key={index} className="flex w-full flex-col">
            <Accordion
              key={index}
              containerClassName="w-full"
              title={
                <h4 className="font-philosopher text-lg">{`${index + 1}. ${
                  item.title
                }`}</h4>
              }
              defaultState={false}
            >
              <p className="text-base font-light transition-all">
                {item.content?.map((string) => (!string ? <br /> : string))}
              </p>
            </Accordion>
            {index + 1 !== rewardsAndGrowing?.length ? (
              <div className="mt-[17px] h-[1px] w-full bg-[#FFFFFF3D]"></div>
            ) : null}
          </div>
        ))}
      </div>
    </ScrollWrapper>
  );
};

export default FAQ;
