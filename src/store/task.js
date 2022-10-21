import { defineStore } from "pinia";

export const useTaskStore = defineStore('task', {
    state: () => {

        return {
            //guardaremos los task que nos de supabase
            tasks: []
        }
    },
    actions: {
        setTask() {
            //TODO guardar las task que nos de supabase
        },

        updateTask(id, task) {
            //TODO modificar el estado de la task
            //encontrar el indice de la task y modificar el contenido
        },

        deleteTask (id){
            //TODO modificar el estado borrando esa task
            //encontramos el indice de ese id y eliminamos ese indice del array
        },

        addTask (task) {
            //TODO modificar estado de task haciendo un push de la task
            // Comprobar que tenemos el id al insertar el registro, en caso de no tenerlo tendriamos que hacer el getTask
        }

    }
});