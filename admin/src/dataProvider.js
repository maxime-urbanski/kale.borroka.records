import jsonServerProvider from "ra-data-json-server";

import { fetchUtils } from "react-admin";

const httpClient = (url, options = {}) => {
  console.log("options =>", options);
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // add your own headers here
  options.headers.set("X-Total-Count", "100");
  return fetchUtils.fetchJson(url, options);
};

const apiUrl = "http://localhost:5050/api";
console.log("res =>", jsonServerProvider(apiUrl));
export const dataProvider = jsonServerProvider(apiUrl, httpClient);
