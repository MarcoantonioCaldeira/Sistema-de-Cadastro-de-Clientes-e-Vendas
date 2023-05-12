import axios from 'axios';



const api_2 = axios.create({ 
    baseURL: 'http://localhost:9000'
});

api_2.interceptors.request.use(

    config => {
      
      var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJULkkuIEdlc3RvciIsInN1YiI6IjhiOGM0NzNjZTA2YjA1Yzc1Y2UyMWUwY2RiNDJkOTQyZjFkNGE1NDkiLCJleHAiOjE2ODM5ODA3NTV9.qMPoIH4wq3bB3mX6BTldLdrVg1DPpooJOjdlZpr7ZOg";
  
      if (token != '') {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  
  );

  export default api_2;