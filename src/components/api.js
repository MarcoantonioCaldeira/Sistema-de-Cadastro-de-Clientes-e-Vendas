import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:9000"
});


api.interceptors.request.use(
    (config) => {

        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJULkkuIEdlc3RvciIsInN1YiI6IjUwNWJhNDJlYTQ1NTUzNzYwNzkwMjk4NDc4ZDJmYmY0ZDA3OTFhMDIiLCJleHAiOjE2NzU5NDE1NjN9.PTTNF9e_-gHNuQX-CdDmBa0fpNOPFJK62kZbl9Mqajg"

        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },

)



export default api;