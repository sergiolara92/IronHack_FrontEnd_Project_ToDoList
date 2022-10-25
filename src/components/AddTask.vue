<template>

<div class="container">
    <form @submit.prevent="onSubmit">
        <h4>What's on your todo list?</h4>
        <input v-model="title" class="input " type="text" placeholder="title of your task">
        <br><br>
        <input v-model="description" class="input " type="text" placeholder="e.g. make an app">
        <br><br>
        <input type="submit" value="Add new task"  class="button is-link is-fullwidth">
    </form>
</div>
<br>


</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/auth'
import { newTask, getTasks } from "../api/index";
import { onMounted } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const title = ref('');
const description = ref('');
const authStore = useAuthStore();



const onSubmit = async () => {

        newTask({
        user_id: authStore.id,
        title: title.value,
        description: description.value
        });

    title.value = '';
    description.value = '';

        //TODO HACER QUE CUANDO AÑADE UNA TASK SE ACTUALICEN LAS PENDIENTES

};


// const response = await supabase.from('Task')
// .insert(task)
// console.log(response);


</script>
<style scoped>
</style>