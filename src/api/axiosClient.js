import axios from "axios";
import queryString from "query-string";
import Config from "../configuration";

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosClient = axios.create({
  baseURL: Config.apiConfig.endPoint,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  if (
    sessionStorage.getItem(Config.storageKey.auth) &&
    !config.headers.Authorization
  ) {
    const auth = {
      ...JSON.parse(sessionStorage.getItem(Config.storageKey.auth)),
    };
    if (auth.token) {
      config.headers.Authorization = `Bearer ${auth.token}`;
    }
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
