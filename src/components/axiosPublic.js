import axios from "axios";



export const axiosPublic = axios.create({
    baseURL: "http://localhost:9000/auth",
    params: { '': ['', ''] },
    headers: {
        'Content-Type': 'application/json',
        key_auth: '3G5T8W7Y1K',
        SYSDBA: 'masterkey'
    },
})