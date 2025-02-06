import { useEffect, useState } from "react";
import { MdInfoOutline } from "react-icons/md";
import Button from "../Button/Button";
import CreatePortal from "../CreatePortal/CreatePortal";
import Modal from "../Modal/Modal";
import { surveyValuesTypes } from "@appTypes/universal";

type propsTypes = {
  valueExist?: string;
  onChange: (value: string) => void;
};

const surveyValues: Array<surveyValuesTypes> = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

const SurveyInput = ({ valueExist, onChange }: propsTypes) => {
  const [value, setValue] = useState<surveyValuesTypes | undefined>();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    value && onChange(value);
  }, [value]);

  useEffect(() => {
    if (valueExist) {
      if (
        valueExist === "Beginner" ||
        valueExist === "Intermediate" ||
        valueExist === "Advanced"
      ) {
        setValue(valueExist);
      }
    }
  }, [valueExist]);

  return (
    <div className="-mb-2 flex w-full flex-col items-center justify-center gap-6 w888:flex-col w888:gap-3">
      {surveyValues.map((surveyLevel) => {
        return (
          <div
            key={surveyLevel}
            className={`w-full rounded-2xl bg-dark-blue py-3 pl-3 text-left text-base font-light hover:cursor-pointer hover:opacity-75 ${
              surveyLevel === value
                ? "border border-[#ffffff39] text-gold"
                : "border border-transparent text-white"
            } w888:w-full w888:py-2.5 w888:text-sm`}
            onClick={() => setValue(surveyLevel)}
          >
            {surveyLevel === "Advanced"
              ? "Expert Level"
              : surveyLevel === "Intermediate"
                ? "Moderate Astrology"
                : surveyLevel === "Beginner"
                  ? "Simple Daily Language"
                  : ""}
          </div>
        );
      })}
      <Button
        type="main"
        className="!text-gold w888:text-sm"
        text="Detailed Explanation"
        CustomIco={
          <MdInfoOutline className="h-auto w-[19px] text-gold w888:w-[17px]" />
        }
        onClick={() => setModal(true)}
      />
      {modal && (
        <CreatePortal root="modal">
          <Modal close={() => setModal(false)} className=" ">
            <div className="mx-3 flex h-fit max-w-[620px] flex-col gap-4 rounded-xl bg-dark-blue px-8 py-[26px] w888:px-4 w888:py-[16px]">
              <div className="flex flex-col gap-1.5 text-white">
                <h2 className="text-lg text-gold">Simple Daily Language</h2>
                <p className="font-light w888:text-sm">
                  Just give me straightforward, easy-to-understand answers
                  without the astrology jargon.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 text-white">
                <h2 className="text-lg text-gold">Moderate Astrology</h2>
                <p className="font-light w888:text-sm">
                  I'd prefer a balanced mix of astrological terms and everyday
                  language for clarity.
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-white">
                <h2 className="text-lg text-gold">Expert Level</h2>
                <p className="font-light w888:text-sm">
                  I want in-depth, technical answers using astrology terminology
                  as if I were an astrology expert.
                </p>
              </div>
            </div>
          </Modal>
        </CreatePortal>
      )}
    </div>
  );
};

export default SurveyInput;
