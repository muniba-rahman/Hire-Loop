import axios from "axios";
import { useSelector } from "react-redux";
import { DEV_URL } from "../constants/api_constants";

export function GetApiRequestHeader(customHeader = {}) {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: 0,
    ...customHeader,
  };
}

const instance = axios.create({
  baseURL: DEV_URL,
  timeout: 6000,
  headers: GetApiRequestHeader(),
});

export function get(url, params) {
  return instance.get(url, params);
}

export function post(url, body, params) {
  return instance.post(url, body, params || {});
}

instance.interceptors.request.use(async (config) => {
  return config;
});

instance.interceptors.response.use(
  function (response) {
    console.log("axios intercepted response ====>", response);
    //console api response here
    return response;
  },
  function (error) {
    //console api response error here
    console.log("axios intercepted error ====>", error);
    return Promise.reject(error);
  }
);
