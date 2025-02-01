import SurveyInput from "@components/SurveyInput/SurveyInput";

type propsTypes = {
  onChange: (value: string) => void;
  value: string;
};

const Survey = ({ onChange, value }: propsTypes) => {
  return (
    <SurveyInput
      onChange={(value) => {
        onChange(value);
      }}
      valueExist={value}
    />
  );
};

export default Survey;
