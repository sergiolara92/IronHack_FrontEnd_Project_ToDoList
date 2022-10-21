<template>

<div class="container">
    <form @submit.prevent="onSubmit">
        <h4>What's on your todo list?</h4>
        <input v-model="title" class="input " type="text" placeholder="title of your task">
        <br><br>
        <input v-model="description" class="input " type="text" placeholder="e.g. make an app">
        <br><br>
        <input type="submit" value="Add todo"  class="button is-link is-fullwidth">
    </form>
</div>
<br>


</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/auth'
import { newTask } from "../api/index";
import { onMounted } from "vue";
import { login } from "../api"

const title = ref('');
const description = ref('');
const authStore = useAuthStore();



const onSubmit = async () => {

    const id = await login('sergioldm92@gmail.com', '12345678');
        newTask({
            user_id: id,
            title: title.value,
            description: description.value
        });

};


// const response = await supabase.from('Task')
// .insert(task)
// console.log(response);


</script>
<style scoped>
</style>