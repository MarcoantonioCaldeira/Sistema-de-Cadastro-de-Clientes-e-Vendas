import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:9000/clientes",
});

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJULkkuIEdlc3RvciIsInN1YiI6IjUwNWJhNDJlYTQ1NTUzNzYwNzkwMjk4NDc4ZDJmYmY0ZDA3OTFhMDIiLCJleHAiOjE2NzM2MjQ5NTR9.44kYMUD43HRhO72zJnr3lAibYQNV4tpNyEdK4D3ER8U"

api.interceptors.request.use(

    (config) => {
        config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;