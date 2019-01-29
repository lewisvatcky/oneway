import axios from "axios";

const DOMAIN = "https://digitalapi.auspost.com.au";
const API_KEY = process.env.API_KEY;

const api = axios.create({
  baseURL: DOMAIN,
  timeout: 1000,
  headers: { "AUTH-KEY": API_KEY }
});

const _GetAvailableServices = async (
  fromPostcode,
  toPostcode,
  width,
  height,
  length,
  weight
) => {
  return await api.get("/postage/parcel/domestic/service.json", {
    params: {
      from_postcode: fromPostcode,
      to_postcode: toPostcode,
      width,
      height,
      length,
      weight
    }
  });
};

export const GetEstimate = (
  fromPostcode,
  toPostcode,
  width,
  height,
  length,
  weight
) => {
  return _GetAvailableServices(
    fromPostcode,
    toPostcode,
    width,
    height,
    length,
    weight
  );
};
