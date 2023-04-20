import axios from 'axios';


const api = axios.create({ 
    baseURL: 'http://localhost:9000'
});


api.interceptors.request.use((request) => {
        
    const token =  localStorage.getItem('token');
           
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }
    
    return request;
});

api.interceptors.response.use((response) => {
  
    return response;

}, async (error) => {
    
    const originalRequest = error.config;
    
    if (error?.response?.status === 401 && 
        !originalRequest?.__isRetryRequest
    ){

        originalRequest.retry = true;
        
        const refreshToken = localStorage.getItem("refreshToken");

        
        if(!refreshToken) {

            localStorage.clear();

            return (window.location.href = "/");
        }
        
        const response = await refresh(refreshToken);

        const data = {
            // accessToken = response.token;
            // refreshToken = response.refreshToken;
        };
       
        localStorage.setItem(JSON.stringify(data), "refreshToken");
   
        return api(originalRequest);
    }
   
    return Promise.reject(error);
});



export default api;