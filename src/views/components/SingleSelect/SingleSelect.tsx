import { MenuPlacement, MenuPosition } from "react-select";
import CreatableSelect from "react-select/creatable";

type propsTypes = {
  label?: string;
  data: {
    value: string;
    label: string;
  }[];
  selectedValue?: any;
  placeholder?: string;
  defaultValueNumber?: number;
  menuPlacement?: MenuPlacement;
  menuPosition?: MenuPosition;
  invalid?: boolean;
  invalidMessage?: string;
  disabled?: boolean;
  onChange: (selectedValue: any) => void;
  formatOptionLabel?: any;
  graySelectOption?: boolean;
};
const SingleSelect = (props: propsTypes) => {
  return (
    <div className="flex w-full flex-col">
      {props.label && (
        <p className="mb-1.5 select-none text-sm font-light text-white">
          {props.label}
        </p>
      )}
      <CreatableSelect
        options={props.data}
        isDisabled={props.disabled}
        isSearchable={false}
        placeholder={props.placeholder}
        onChange={(value: any) => props.onChange(value)}
        value={props.selectedValue?.value ? props.selectedValue : null}
        defaultValue={
          props.defaultValueNumber
            ? props.data[props.defaultValueNumber - 1]
            : ""
        }
        menuPlacement={props.menuPlacement}
        menuPosition={props.menuPosition ? props.menuPosition : "fixed"}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#F1F1F1",
            primary: "#477D53",
            neutral80: "white", // Selected Value Color
          },
        })}
        menuPortalTarget={document.body}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: 22,
            border: "none",
            "&:hover": "transparent",
            backgroundColor: "#0D101AB8",
            boxShadow: "none",
            height: 40,
          }),
          container: (baseStyles) => ({
            ...baseStyles,
            borderColor: "#1A1A1A",
            color: "#EE4B2B",
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            borderRadius: 10,
            padding: 4,
            backgroundColor: "#d5d5d5",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: 10,
            marginBottom: 0,
            cursor: "pointer",
            backgroundColor: state.isFocused ? "#0d101a" : "transparent",
            color: state.isFocused ? "#d5d5d5" : "#0d101a",
          }),
          indicatorSeparator: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "transparent",
            color: "transparent",
          }),
          placeholder: (baseStyles: any) => ({
            ...baseStyles,
            color: "#9D9D9D",
          }),
          menuPortal: (baseStyles) => ({
            ...baseStyles,
            zIndex: 51,
          }),
          menuList: (base) => ({
            ...base,
            scrollbarWidth: "thin",
          }),
        }}
      />
      {props.invalid && props.invalidMessage && (
        <p className="mt-1.5 text-sm font-light text-red-300">
          {props.invalidMessage}
        </p>
      )}
    </div>
  );
};

export default SingleSelect;
