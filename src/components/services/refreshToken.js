import mem from "mem";

import { api } from './api';

const refreshTokenFn = async () => {
    const session = JSON.parse(localStorage.getItem("session"));
  
    try{
      const response = await api.get("http://localhost:9000/auth", { 
        refreshToken: session?.refreshToken,
        params: {'': ''},
        headers: {
            "Content-Type": "application/json",
            key_auth: '3G5T8W7Y1K', 
            //Authorization: 'Bearer '
        },
      });

      const { session } = response.data;

      localStorage.setItem("session", JSON.stringify(session));
  
      return session;

    }catch (error){

        console.log("Erro ao se conectar");
    }
};

  
const maxAge = 1000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
    maxAge,
});



