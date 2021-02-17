import jsonServerProvider from "ra-data-json-server";
import { fetchUtils } from "react-admin";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // add your own headers here
  options.headers.set("X-Total-Count", "100");
  return fetchUtils.fetchJson(url, options);
};

const apiUrl = "http://localhost:5050/api";
export const dataProvider = jsonServerProvider(apiUrl, httpClient);
