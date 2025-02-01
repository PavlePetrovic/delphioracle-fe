import { useAppDispatch } from "../../../../../redux/reduxTypes";
import AutoSuggestLocation from "@components/AutoSuggestLocation/AutoSuggestLocation";
import { getTimezone } from "../../reducer/userData.actions";

export type locationType = {
  city: string;
  lon: string;
  lat: string;
};

type propsTypes = {
  onChange: (value: any) => void;
  value?: string;
};

const City = ({ onChange, value }: propsTypes) => {
  const dispatch = useAppDispatch();
  return (
    <AutoSuggestLocation
      label={""}
      valueExist={value}
      placeholder={"Type name of city where you born..."}
      onChange={(e) => {
        let dataObj = {
          city: e.valueObject?.city ? e.valueObject?.city : "",
          lon: e.valueObject?.longitude ? e.valueObject?.longitude : 0,
          lat: e.valueObject?.latitude ? e.valueObject?.latitude : 0,
          timezone: "",
          timezone_value: "",
        };

        e.valueObject?.city
          ? dispatch(
              getTimezone({
                lon: `${dataObj.lon}`,
                lat: `${dataObj.lat}`,
              }),
            ).then((response) => {
              if (response.payload?.features?.length) {
                if (
                  response.payload?.features[0]?.properties?.timezone?.name !==
                  "Etc/GMT"
                ) {
                  dataObj = {
                    ...dataObj,
                    timezone:
                      response.payload?.features[0]?.properties?.timezone
                        ?.offset_STD,
                    timezone_value:
                      response.payload?.features[0]?.properties?.timezone?.name,
                  };
                  onChange(dataObj);
                }
              }
            })
          : onChange({
              city: "",
              lon: 0,
              lat: 0,
              timezone: "",
              timezone_value: "",
            });
      }}
    />
  );
};

export default City;
