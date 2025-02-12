import { useEffect, useState } from "react";
import Autosuggest, {
  ChangeEvent,
  SuggestionsFetchRequestedParams,
} from "react-autosuggest";
import { useAppDispatch, useAppSelector } from "@redux/reduxTypes";
import { getLocations } from "@features/infoWizard/reducer/userData.actions";
import { useDebounce } from "@common/hooks/useDebounce";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { renderString } from "@/common/helpers/functions.helpers";

type Item = {
  city: string;
  id: number;
  confidence: string;
  country: string;
  countryCode: string;
  countryFlag: string;
  county: string;
  distance: number;
  formattedAddress: string;
  geometry: any;
  latitude: number;
  layer: string;
  longitude: number;
  placeLabel: string;
  state: string;
  stateCode: string;
  label: string;
};

type propsTypes = {
  label: string;
  valueExist?: string;
  placeholder: string;
  onChange: (value: { value: string; valueObject: Item | undefined }) => void;
};

const AutoSuggestLocation = ({
  label,
  valueExist,
  placeholder,
  onChange,
}: propsTypes) => {
  const dispatch = useAppDispatch();

  const [items, setItems] = useState<Item[] | []>([]);
  const [value, setValue] = useState("");
  const [valueObject, setValueObject] = useState<Item>();
  const [isValueSelected, setIsValueSelected] = useState(false);

  const isMobile = useAppSelector((state) => state.global.isMobile);
  const locValues = useAppSelector((state) => state.infoWizard.locValues);

  const searchDebouncer = useDebounce(value, 500);

  const formatAddress = (
    city: string,
    county?: string,
    state?: string,
    country?: string,
  ) => {
    return `${renderString(city) + ","} ${renderString(county) + ","} ${renderString(state) + ","} ${renderString(country)}`;
  };

  const getSuggestions = (item: string) => {
    return item.length === 0
      ? []
      : items.filter((itemAr) => {
          return itemAr?.formattedAddress?.slice(0, item.length) === item;
        });
  };

  const getSuggestionValue = (suggestion: Item) =>
    formatAddress(
      suggestion?.city,
      suggestion?.county,
      suggestion?.state,
      suggestion?.country,
    );

  const renderSuggestion = (suggestion: Item) => (
    <div className="flex items-center gap-2">
      <span>{suggestion?.countryFlag}</span>
      <div className="-mb-[2px] h-[10px] w-[1px] bg-[#e0efff3f]"></div>
      <span>
        {formatAddress(
          suggestion?.city,
          suggestion?.county,
          suggestion?.state,
          suggestion?.country,
        )}
      </span>
    </div>
  );

  const onSuggestionsFetchRequested = ({
    value,
  }: SuggestionsFetchRequestedParams) => {
    setItems(getSuggestions(value));
  };

  const inputProps = {
    placeholder: placeholder,
    value,
    onChange: (
      event: React.FormEvent<HTMLElement>,
      { newValue }: ChangeEvent,
    ) => {
      setValue(newValue);

      const getValueObject = items.find(
        (item: Item) =>
          formatAddress(
            item?.city,
            item?.county,
            item?.state,
            item?.country,
          ) === newValue,
      );

      setValueObject(getValueObject);
      setIsValueSelected(false);
    },
    type: "search",
  };

  useEffect(() => {
    !isValueSelected &&
      searchDebouncer &&
      dispatch(getLocations({ value: searchDebouncer }));
  }, [searchDebouncer]);

  useEffect(() => {
    if (locValues?.values?.length) {
      const customItems =
        locValues.values &&
        locValues.values.map((loc: Item, index: number) => {
          return {
            ...loc,
            id: index,
          };
        });

      setItems(customItems?.filter((item: Item) => item?.city));
    }
  }, [locValues.values]);

  useEffect(() => {
    onChange({
      value: value,
      valueObject: valueObject,
    });
  }, [value, valueObject]);

  useEffect(() => {
    valueExist && setValue(valueExist);
  }, [valueExist]);

  const onSuggestionsSelected = () => {
    setIsValueSelected(true);
  };

  function shouldRenderSuggestions(item: string) {
    return item.trim().length > 2;
  }

  return (
    <div className="relative z-50 flex w-full flex-col">
      <p className="text-dark-gray mb-1.5 select-none text-sm font-light text-white">
        {label}
      </p>
      <Autosuggest
        suggestions={items}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        shouldRenderSuggestions={shouldRenderSuggestions}
        onSuggestionsClearRequested={() => null}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={onSuggestionsSelected}
        focusInputOnSuggestionClick={!isMobile}
        inputProps={inputProps}
        theme={{
          container: {
            position: "relative",
          },
          containerOpen: {},
          input: {
            position: "relative",
            backgroundColor: "#0D101AB8",
            padding: "8px",
            paddingLeft: "12px",
            borderRadius: "99px",
            color: "#ffffff",
            width: "100%",
            fontSize: isMobile ? "14px" : "16px",
          },
          inputOpen: {
            // backgroundColor: "red",
          },
          inputFocused: {
            outline: "none",
          },
          suggestionsContainer: {
            zIndex: "999",
          },
          suggestionsContainerOpen: {
            position: "absolute",
            zIndex: "999",
            top: "48px",
            left: "0",
            color: "#ffffff",
            // #e0efff1f
            backgroundColor: "#1E252E",
            borderRadius: "18px",
            padding: "5px",
            width: "100%",
            animation: "fadeIn ease 0.3s",
            animationIterationCount: "1",
            animationFillMode: "forwards",
            border: "1px solid #e0efff1f",
            height: isMobile ? "140px" : "200px",
            overflow: "scroll",
          },
          suggestionsList: {
            zIndex: "999",
          },
          suggestion: {
            paddingBlock: "7px",
            paddingInline: "10px",
            fontWeight: "300",
            fontSize: isMobile ? "14px" : "16px",
          },
          suggestionFirst: {},
          suggestionHighlighted: {
            backgroundColor: "#e0efff1f",
            color: "#EBD9AD",
            cursor: "pointer",
            borderRadius: "22px",
            transition: "0.15s",
          },
          sectionContainer: {},
          sectionContainerFirst: {},
          sectionTitle: "",
        }}
      />
      {locValues?.loading && (
        <div className="absolute right-[10px] top-[18px] animate-spin">
          <AiOutlineLoading3Quarters className="text-[#d5d5d5]" />
        </div>
      )}
      <p className="mt-2 w-full text-center text-xs font-light text-[#e0efff5c]">
        To move forward, please choose a country from the drop-down menu.
      </p>
    </div>
  );
};

export default AutoSuggestLocation;
