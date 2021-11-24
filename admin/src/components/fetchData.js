import axios from "axios";

const apiUrl = process.env.REACT_APP_BACK_URL;
const token = localStorage.getItem('auth');

export const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: 'application/json',
    Authorization: token ? `Bearer ${token}` : '',
  },
});
