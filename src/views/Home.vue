<template>

<!-- Si el usuario no esta autenticado debe mostrar un mensaje que le diga que debe autenticarse
    y un enlace a la pagina de login -->
    <div class="section ">
        <div class="container columns is-centered">

            <article v-if="!authStore.isAuth" class="message is-danger">
                <div class="message-body">
                    Debes iniciar sesion para utilizar la aplicacion
                    <router-link :to="{name: 'login'}">
                        Ir a Login
                    </router-link>
                </div>
            </article>
            <div v-else>
                <div class="title">Task App</div>
                <div class="cerrar">
                    <button @click="onClick()" class="button is-danger">Cerrar sesion</button>
                </div>
                <br>
                <br>
                <!-- Poner un formulario con un textarea que nos permita poner mensajes al enviar el formulario -->
                <div class="enlaces">

                    <ul>
                        <li><router-link :to="{name: 'alltasks'}">All Tasks</router-link></li>
                        <li><router-link :to="{name: 'todotasks'}">To Do Tasks</router-link></li>
                        <li><router-link :to="{name: 'completedtasks'}">Completed Tasks</router-link></li>
                    </ul>
                </div>
                <br>

                <AddTask />

                <div class="container">

                <router-view> </router-view>

                </div>
            </div>
        </div>



    </div>

</template>
<script setup>

import { logOut } from "../api/index";

import { useAuthStore } from '../store/index'
import AddTask from "../components/AddTask.vue";
import { onMounted } from "vue";


const authStore = useAuthStore();



const onClick = () => {
    logOut()
    authStore.logout();
    swal("BYE!", "Your session has been closed.", "info");

};



</script>
<style scoped>

body {
  background-color: darkgray;
}

.title{
    text-align: center;

}

.cerrar {
    display: flex;
    justify-content: center;
}

ul {
  list-style-type: none;
  text-align: center;
}

li {
  background-color: lightgray;
  border-radius: 10px;
  display: inline;
  margin-right: 10px;
}


a {
  color: black;
  padding: 0 8px;
  text-decoration: none;
}

li:hover {
  background-color: white;
}

</style>