<template>

    <div class="section">
        <div class="columns is-centered">
            <form @submit.prevent="onSubmit">
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input v-model="email" class="input" type="email" placeholder="Email">
                    </div>
                </div>
                <div class="field">
                    <label class="label ">Password</label>
                    <div class="control ">
                        <input v-model="password" class="input" type="password" placeholder="Password">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button class="button is-success is-fullwidth" type="submit">Register</button>
                        <p>I already have an account. <span style=" color: blue"> <router-link :to="{name: 'login'}">
                            Log In </router-link></span></p>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>
<script setup>
import { ref } from 'vue';
import { createClient } from '@supabase/supabase-js'
import {registro} from '../api'
import { useRouter } from 'vue-router'

const router = useRouter();
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
const email = ref('');
const password = ref('');

const onSubmit = async () => {
    const nuevoUsuario = await registro(email.value, password.value);
    if(nuevoUsuario != false){
        router.push({ name: 'login' })
    }else{
        alert('Something went wrong. Try again')
    }
}


</script>
<style scoped>
</style>
