

<template>
    <!--Hey! This is the original version
of Simple CSS Waves-->

<div class="header">

<!--Content before waves-->
<div class="inner-header flex">

    <div class="section">
        <div class="columns is-centered">
            <form @submit.prevent="onSubmit">
                <div class="field">
                    <div class="control has-icons-left">
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                        </span>
                        <input v-model="email" class="input" type="email" placeholder="Email">
                    </div>
                </div>
                <div class="field">
                    <div class="control has-icons-left has-icons-right">

                        <span v-if="!mostrar" @click="mostrar = true" class="icon is-small is-right is-clickable">
                            <i v-if="!mostrar" class="fa-solid fa-eye"></i>
                        </span>

                        <span v-if="mostrar" @click="mostrar = false" class="icon is-small is-right is-clickable">
                            <i v-if="mostrar" class="fa-solid fa-eye-slash"></i>
                         </span>

                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                        <input v-if="!mostrar" v-model="password" class="input" type="password" placeholder="Password">
                        <input v-if="mostrar" v-model="password" class="input" type="text" placeholder="Password">

                    </div>
                </div>
                <div class="field">
                    <div class="control has-icons-left has-icons-right">

                        <span v-if="!mostrar" @click="mostrar = true" class="icon is-small is-right is-clickable">
                            <i v-if="!mostrar" class="fa-solid fa-eye"></i>
                        </span>

                        <span v-if="mostrar" @click="mostrar = false" class="icon is-small is-right is-clickable">
                            <i v-if="mostrar" class="fa-solid fa-eye-slash"></i>
                        </span>

                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                        <input v-if="!mostrar" v-model="confirm" class="input" type="password" placeholder="Confirm password">
                        <input v-if="mostrar" v-model="confirm" class="input" type="text" placeholder="Confirm password">
                    </div>
                </div>
                <div class="field">
                    <div class="control ">
                        <button class="button is-success is-fullwidth" type="submit">Register</button>
                        <p>I already have an account. 
                                <router-link :to="{name: 'login'}" style="color: white">
                                    Log In 
                                </router-link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>

</div>

<!--Waves Container-->
<div>
<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g class="parallax">
<use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>
<!--Waves end-->

</div>
<!--Header ends-->

<!--Content starts-->
<div class="content flex">
    <p>By. Sergio Lara </p>
</div>
<!--Content ends-->
</template>
<script setup>
import { ref } from 'vue';
import { createClient } from '@supabase/supabase-js'
import {registro} from '../api'
import { useRouter } from 'vue-router';
import swal from 'sweetalert';

const router = useRouter();
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
const email = ref('');
const password = ref('');
const confirm = ref('');
const mostrar = ref(false);

const onSubmit = async () => {
    if (email.value == '') return swal("ERROR", "Please provide an email.", "warning");
    if (password.value == '') return swal("ERROR", "Password field must be filled.", "warning");
    if (confirm.value == '')  return swal("ERROR", "Please confirm your password.", "warning");
    if (confirm.value != password.value) return swal("ERROR", "Password must be the same in both fields.", "warning");
    if (confirm.value.length < 6 || password.value.length < 6) return swal("ERROR", "Password must be at least 6 characters long.", "warning");

    const nuevoUsuario = await registro(email.value, password.value);
    if(nuevoUsuario != false){
        swal("THANK YOU!", "Registration completed succesfully!", "success");
        router.push({ name: 'login' })
    }else{
      swal("ERROR", "Something went wrong. Try again.", "warning");
    }
    
};


</script>
<style scoped>


body {
  margin:0;
}

h1 {
  font-family: 'Lato', sans-serif;
  font-weight:300;
  letter-spacing: 2px;
  font-size:48px;
}
p {
  letter-spacing: 1px;
  font-size:14px;
  color: #000;
  font-weight: bold;
}

.header {
  position:relative;
  text-align:center;
  background: linear-gradient(60deg, rgb(60, 39, 141) 0%, rgb(0, 116, 193) 100%);
  color:white;
}
.logo {
  width:50px;
  fill:white;
  padding-right:15px;
  display:inline-block;
  vertical-align: middle;
}

.inner-header {
  height:65vh;
  width:100%;
  margin: 0;
  padding: 0;
}

.flex { /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}

.content {
  position:relative;
  height:20vh;
  text-align:center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  .content {
    height:30vh;
  }
  h1 {
    font-size:24px;
  }
}

</style>
