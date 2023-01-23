import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:9000/clientes",
});


api.interceptors.request.use(

    (config) => {

        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJULkkuIEdlc3RvciIsInN1YiI6IjUwNWJhNDJlYTQ1NTUzNzYwNzkwMjk4NDc4ZDJmYmY0ZDA3OTFhMDIiLCJleHAiOjE2NzQwNDA4MjJ9.gLAe6zpobV1V2ew4Kx8G3NBqB1lBpvMw5ZAjn1korN0"

        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;