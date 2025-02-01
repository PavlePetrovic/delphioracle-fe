import { ReactNode } from "react";
import Button from "@components/Button/Button";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

const GetUserInfoWizardBox = ({
  header,
  label,
  input,
  preview,
  collapseGaps,
  disableNextButton,
  onClickBack,
  onClickNext,
}: {
  header: string;
  label: string;
  input: ReactNode;
  preview?: ReactNode;
  collapseGaps?: boolean;
  disableNextButton?: boolean;
  onClickBack?: () => void;
  onClickNext: () => void;
}) => {
  return (
    <div className="w888:py-4 w888:px-4 flex flex-col items-center gap-4 p-6">
      {header && (
        <h2 className="font-philosopher w888:text-lg text-center text-3xl leading-8 text-white">
          {header}
        </h2>
      )}
      {label && (
        <p className="w888:text-sm text-center text-lg font-extralight text-white">
          {label}
        </p>
      )}
      {!preview ? <div className="mt-4 w-full">{input}</div> : preview}
      <div
        className={`flex w-full items-center gap-2 ${
          collapseGaps ? "mt-1" : "mt-3"
        }`}
      >
        {onClickBack && (
          <Button
            type="main"
            text=""
            onClick={onClickBack}
            CustomIco={<SlArrowLeft />}
            className="w888:py-[7.5px] py-2.5"
          />
        )}
        <Button
          type="main"
          text="Continue"
          onClick={onClickNext}
          className="ml-auto"
          CustomIco={<SlArrowRight />}
          disable={disableNextButton}
        />
      </div>
    </div>
  );
};

export default GetUserInfoWizardBox;
