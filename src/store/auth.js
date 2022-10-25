import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => {

        return {
            //nos indicara si el usuario está autenticado
            isAuth: false,
            //guardaremos el id de supabase que nos dará al hacer el login
            id: undefined
        }
    },

    actions: {
        login(id){
         this.isAuth = true;
         this.id = id;
        },
 
        logout(){
         this.isAuth = false;
         this.id = '';
        }
    },
    
    persist: {
        enabled: true,
        strategies: [
          {
            key: "user",
            storage: localStorage,
          },
        ],
      },
});