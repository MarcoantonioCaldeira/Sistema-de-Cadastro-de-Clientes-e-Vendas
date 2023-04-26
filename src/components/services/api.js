import axios from 'axios';



const api = axios.create({ 
    baseURL: 'http://localhost:9000'
});



api.interceptors.request.use(

  config => {
    var token = localStorage.getItem('access_token');

    if (token != '') {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }

);

api.interceptors.response.use(

  response => {

    return response;

  },
  
  error => {

    var originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true;
      
      var refreshToken = localStorage.getItem('refresh_token');

      return api.get('/auth',{headers:{
        key_auth: '3G5T8W7Y1K',
      }
      } ,{ refresh_token: refreshToken })

        .then(response => {

          var { access_token } = response.data;
          localStorage.setItem('access_token', access_token);
          originalRequest.headers['Authorization'] = `Bearer ${access_token}`;
          
          return api(originalRequest);

        }).catch(error => {
          return Promise.reject(error);
        });
    }
    return Promise.reject(error);
  }
);


export default api;
   