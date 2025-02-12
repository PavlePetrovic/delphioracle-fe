// ** Redux Imports
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// ** Axios Imports
import { http } from "@common/api/http";

export const getLocations = createAsyncThunk(
  "company/getLocations",
  async ({ value }: { value: string }) => {
    try {
      let url = `https://api.radar.io/v1/search/autocomplete?query=${value}&limit=6`;

      let options = {
        headers: {
          Authorization: `${import.meta.env.VITE_API_RADAR_SECRED_CODE}`,
          Accept: "application/json",
        },
      };

      const response = await http.get(url, options);

      return response.data.addresses;
    } catch (err: any) {
      return err.response.data;
    }
  },
);

export const getTimezone = createAsyncThunk(
  "company/getTimezone",
  async ({ lon, lat }: { lon: string; lat: string }) => {
    try {
      const config = {
        method: "get",
        headers: {},
      };

      const response = await axios.get(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${import.meta.env.VITE_API_GEOAPIFY_SECRED_CODE}`,
        config,
      );

      return response.data;
    } catch (err: any) {
      return err.response.data;
    }
  },
);
