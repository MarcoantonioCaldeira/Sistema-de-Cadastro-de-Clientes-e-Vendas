import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:9000",
});


options.interceptors.request.use((request) => {

    if (token) {

        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
});

const options = {
    method: 'GET',
    url: 'http://localhost:9000/auth',
    params: { '': ['', ''] },
    headers: {
        'Content-Type': 'application/json',
        key_auth: '3G5T8W7Y1K',
        SYSDBA: 'masterkey'
    }
};


export default api;