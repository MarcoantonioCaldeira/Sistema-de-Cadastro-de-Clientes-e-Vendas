import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:9000"
});


const instance = axios.create({
    method: 'GET',
    baseURL: "http://localhost:9000/auth",
    params: { '': ['', ''] },
    headers: {
        'Content-Type': 'application/json',
        key_auth: '3G5T8W7Y1K',
        SYSDBA: 'masterkey'
    }
});

axios.request(instance).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});

instance.interceptors.response.use((config) => {
    const token = window.localStorage.getItem('jwt');
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config
}, error => {

    return Promise.reject(error);

})



export default api;