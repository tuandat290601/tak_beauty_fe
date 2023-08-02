import axios from 'axios';
import queryString from 'query-string';
import Config from 'configuration';

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosFormData = axios.create({
    baseURL: Config.apiConfig.endPoint,
    headers: {
        'content-type': 'multipart/form-data'
    },
    paramsSerializer: (params) => queryString.stringify(params)
});

axiosFormData.interceptors.request.use(async (config) => {
    if (sessionStorage.getItem(Config.storageKey.auth)) {
        const auth = {...JSON.parse(sessionStorage.getItem(Config.storageKey.auth))};
        if (auth.token) {
            config.headers.Authorization = `Bearer ${auth.token}`;
        }
    }
    return config;
});

axiosFormData.interceptors.response.use(
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

export default axiosFormData;
