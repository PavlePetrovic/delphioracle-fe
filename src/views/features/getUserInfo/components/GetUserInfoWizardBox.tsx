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
    <div className="flex flex-col items-center gap-4 rounded-xl p-6 w888:px-4 w888:py-4">
      {header && (
        <h2 className="text-center font-philosopher text-3xl leading-8 text-white w888:text-lg">
          {header}
        </h2>
      )}
      {label && (
        <p className="text-center text-lg font-extralight text-white w888:text-sm">
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
            className="py-2.5 w888:py-[7.5px]"
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
