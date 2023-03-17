import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:9000/',
});


api.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);



const refreshToken = localStorage.getItem('refreshToken');

api.get('/auth', {
    headers: {
        Authorization: `Bearer ${refreshToken}`,
        'Content-Type': 'application/json',
        key_auth: '3G5T8W7Y1K',
        SYSDBA: 'masterkey'
    }
}).then(response => {
    const newAccessToken = response.data.access_token;
    const newRefreshToken = response.data.refresh_token;

    localStorage.setItem('accessToken', newAccessToken);
    localStorage.setItem('refreshToken', newRefreshToken);

    return newAccessToken;
});


api.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            return getRefreshToken().then(newToken => {
                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                return axios(originalRequest);
            });
        }

        return Promise.reject(error);
    }
);