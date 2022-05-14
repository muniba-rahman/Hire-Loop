import axios from "axios";
import { useSelector } from "react-redux";
import { DEV_URL } from "../constants/api_constants";

export function GetApiRequestHeader(customHeader = {}) {
  return {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: 0,
    ...customHeader,
  };
}

const instance = axios.create({
  baseURL: DEV_URL,
  timeout: 1000,
  headers: GetApiRequestHeader(),
});

export function get(url, params) {
  console.log("get param ===>", params);
  return instance.get(url, params);
}

export function post(url, body, params) {
  console.log("post param ===>", params);
  return instance.post(url, body, params);
}

instance.interceptors.request.use(async (config) => {
  return config;
});

instance.interceptors.response.use(
  function (response) {
    //console api response here
    return response;
  },
  function (error) {
    //console api response error here
    return Promise.reject(error);
  }
);
