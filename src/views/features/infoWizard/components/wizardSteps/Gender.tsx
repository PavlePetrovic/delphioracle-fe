import GenderInput from "@components/GenderInput/GenderInput";

type propsTypes = {
  onChange: (value: string) => void;
  value: string;
};

const Gender = ({ onChange, value }: propsTypes) => {
  return (
    <GenderInput
      onChange={(value) => {
        onChange(value);
      }}
      valueExist={value}
    />
  );
};

export default Gender;
