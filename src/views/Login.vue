<template>

    <div class="section">
        <div class="columns is-centered">
            <form @submit.prevent="onSubmit">
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left">
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                        </span>
                        <input v-model="email" class="input" type="email" placeholder="Email">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control has-icons-left">
                        <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                        </span>
                        <input v-model="password" class="input" type="password" placeholder="Password">
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <button class="button is-link is-fullwidth" type="submit">Log in</button>
                        <p>Don't have an account? <span style=" color: blue"> <router-link :to="{name: 'register'}">
                            Register </router-link></span></p>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script setup>


import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'
import { login } from "../api"

const router = useRouter();
const authStore = useAuthStore();
const name = ref('');
const email = ref('');
const password = ref('');


const onSubmit = async () => {
    console.log('formulario enviado', email.value, password.value)
    const userData = await login(email.value, password.value)
    if(userData) {

        authStore.login(userData);
        // Nos redirige al home
        router.push({ name: 'alltasks' })
    }else{
        alert('incorrect Email or password ')
    }
};


</script>
<style scoped>



</style>