import TextInput from "@components/TextInput/TextInput";

type propsTypes = {
  onChange: (value: string) => void;
  value: string;
};

const Name = ({ onChange, value }: propsTypes) => {
  return (
    <TextInput
      label=""
      value={value}
      onChange={(e) => {
        e.preventDefault();
        onChange(e.target.value);
      }}
      placeholder={"John"}
      disabled={false}
    />
  );
};

export default Name;
