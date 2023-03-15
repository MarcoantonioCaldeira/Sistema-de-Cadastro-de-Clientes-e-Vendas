import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:9000/auth',
});

api.interceptors.request.use(

    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(

    (response) => {
        return response;
    },

    (error) => {

        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            !originalRequest._retry &&
            localStorage.getItem('refreshToken')
        ) {
            originalRequest._retry = true;
            return api
                .post('/refresh-token', {
                    refreshToken: localStorage.getItem('refreshToken'),
                })
                .then((response) => {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('refreshToken', response.data.refreshToken);
                    api.defaults.headers.common[
                        'Authorization'
                    ] = `Bearer ${response.data.token}`;
                    return api(originalRequest);
                });
        }
        return Promise.reject(error);
    }

);

export default api;


