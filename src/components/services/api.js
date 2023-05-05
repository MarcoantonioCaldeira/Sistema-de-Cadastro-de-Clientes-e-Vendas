import axios from 'axios';



const api = axios.create({ 
    baseURL: 'http://localhost:9000',
    withCredentials: true, // importante para manter as credenciais (cookies) entre requisições
    headers: {
      'Content-Type': 'application/json',
    },
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
  
  async error => {

    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true;
      
      const refreshToken = localStorage.getItem('refresh_token');

      try {
            const response = await api.get('/auth', {
                headers: {
                    key_auth: '3G5T8W7Y1K',
                }
            }, { refresh_token: refreshToken });
            const { access_token } = response.data;
            localStorage.setItem('access_token', access_token);
            originalRequest.headers['Authorization'] = `Bearer ${access_token}`;
            return await api(originalRequest);
        } catch (error_1) {
            return await Promise.reject(error_1);
        }
    }
    return Promise.reject(error);
  }
);


export default api;
   