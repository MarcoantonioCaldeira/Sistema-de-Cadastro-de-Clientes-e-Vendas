import axios from 'axios';



const api = axios.create({ 
    baseURL: 'http://localhost:9000'
});

axios.interceptors.request.use(function(config){

  config.headers.common.Authorization = 'Token';

  return config;

}, function (error){

    console.log(error);

    return Promise.reject(error);
});



   


export default api;