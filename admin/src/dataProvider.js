import jsonServerProvider from "ra-data-json-server";

import { fetchUtils } from "react-admin";

const httpClient = (url, options = {}) => {
  console.log(options.headers);
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // add your own headers here
  options.headers.set("Access-Control-Expose-Headers", "X-Total-Count");
  return fetchUtils.fetchJson(url, options);
};

const apiUrl = "http://localhost:5050/api";
console.log(jsonServerProvider(apiUrl));
export const dataProvider = jsonServerProvider(apiUrl, httpClient);
