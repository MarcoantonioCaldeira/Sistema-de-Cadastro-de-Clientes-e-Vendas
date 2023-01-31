import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:9000",
});



const instance = axios.create({
    baseURL: "http://localhost:9000/auth",
    params: { '': ['', ''] },
    headers: {
        'Content-Type': 'application/json',
        key_auth: '3G5T8W7Y1K',
        SYSDBA: 'masterkey'
    }
})

instance.interceptors.request.use((request) => {

    const token = localStorage.getItem("Authorization");

    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;

});