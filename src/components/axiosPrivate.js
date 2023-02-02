import axios from "axios";

import { memoizedRefreshToken } from "./refreshToken";

axios.defaults.baseURL = "http://localhost:9000/auth";

axios.interceptors.request.use(
    async (config) => {
        const session = JSON.parse(localStorage.getItem("session"));

        if (session?.accessToken) {
            config.headers = {
                'Content-Type': 'application/json',
                key_auth: '3G5T8W7Y1K',
                SYSDBA: 'masterkey',
                authorization: `Bearer ${session?.accessToken}`,
            };
        }

        return config;
    },
    (error) => Promise.reject(error)
);

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const config = error?.config;

        if (error?.response?.status === 401 && !config?.sent) {
            config.sent = true;

            const result = await memoizedRefreshToken();

            if (result?.accessToken) {
                config.headers = {
                    'Content-Type': 'application/json',
                    key_auth: '3G5T8W7Y1K',
                    SYSDBA: 'masterkey',
                    authorization: `Bearer ${result?.accessToken}`,
                };
            }

            return axios(config);
        }
        return Promise.reject(error);
    }
);

export const axiosPrivate = axios;
