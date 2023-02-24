import axios from "axios";

const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
        key_auth: '3G5T8W7Y1K',
        SYSDBA: 'masterkey'
    },
    baseURL: process.env.API_URL,
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const access_token = localStorage.getItem("access_token");
        if (error.response.status === 401 && access_token) {
            const response = await refreshToken(error);
            return response;
        }
        return Promise.reject(error);
    }
);