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
                    <label class="label ">Password</label>
                    <div class="control has-icons-left">
                        <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                        </span>
                        <input v-model="password" class="input" type="password" placeholder="Password">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Confirm password</label>
                    <div class="control has-icons-left">
                        <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                        </span>
                        <input v-model="confirm" class="input" type="password" placeholder="Repeat password">
                    </div>
                </div>
                <div class="field">
                    <div class="control ">
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
const confirm = ref('');

const onSubmit = async () => {
    if (email.value == '') return alert('Please provide an email');
    if (password.value == '') return alert('Password field must be filled');
    if (confirm.value == '') return alert('Please confirm your password');
    if (confirm.value != password.value) return alert('Password must be the same in both fields');
    if (confirm.value.length < 6 || password.value.length < 6) return alert('Password must be at least 6 characters long');

    const nuevoUsuario = await registro(email.value, password.value);
    if(nuevoUsuario != false){
        router.push({ name: 'login' })
    }else{
        alert('Something went wrong. Try again')
    }
    
};


</script>
<style scoped>
</style>
