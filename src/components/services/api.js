import axios from "axios";

const api = axios.create({
 baseURL: "http://localhost:9000",
});



let token = null;


export const setToken = newToken => {

  token = newToken;
}

export const getToken = async () => {

  if (!token) {

    await refreshToken(); 
    
  }
  
  return token;

};

const refreshToken = async () => {
  try {
    const response = await api.get('/auth',{
      headers: {
          key_auth: '3G5T8W7Y1K',
      }
    }); // Rota para obter novo token

    const newToken = response.data.token;
    setToken(newToken);

  } catch (error) {

    console.error('Erro ao obter novo token', error);
  }
};




export default api;

