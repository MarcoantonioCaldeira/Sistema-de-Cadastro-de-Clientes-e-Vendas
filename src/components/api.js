import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:9000",
});


api.interceptors.request.use(

    (config) => {

        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJULkkuIEdlc3RvciIsInN1YiI6IjUwNWJhNDJlYTQ1NTUzNzYwNzkwMjk4NDc4ZDJmYmY0ZDA3OTFhMDIiLCJleHAiOjE2NzQ2NDQzODh9.0Q7yj1wkvGhlslq7j5qLa3CWaqJJaLBFRsKyA4g4otI"

        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;