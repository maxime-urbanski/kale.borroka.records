import jsonServerProvider from "ra-data-json-server";
import { fetchUtils } from "react-admin";

const httpClient = (url, options = {}) => {
  console.log(url);
  if (!options.headers) {
    options.headers =  new Headers({ Accept: "application/json" });
  }
  const token  =  JSON.parse(localStorage.getItem('auth'));
   options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const apiUrl = "http://localhost:5050/api";
export const dataProvider = jsonServerProvider(apiUrl, httpClient);

const test = dataProvider.getList('articles', {
  pagination: { page: 1, perPage: 5 },
  sort: { field: 'title', order: 'ASC' },
  filter: { author_id: 12 }}).then(response => console.log(response.data.items));

