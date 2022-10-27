<template>

<div class="container " style="width: 100vw">
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
import { useTaskStore } from "../store";
import swal from 'sweetalert';

const router = useRouter();
const title = ref('');
const description = ref('');
const authStore = useAuthStore();





const tasks = useTaskStore();



const onSubmit = async () => {

    if(title.value == '' && description.value == '') return swal("ERROR", "Can't save an empty task. Please fill at least one field.", "error");

    await newTask({
    user_id: authStore.id,
    title: title.value,
    description: description.value
    });

    title.value = '';
    description.value = '';

    const taskArray = await getTasks();

    swal("OK!", "Task added to the list.", "success");

    if (router.hasRoute('todotasks')){
        const toDoTasks = await taskArray.filter(element => {
        if (!element.isDone) return true;
    });
    return tasks.tasks = toDoTasks;
    } 
    
    else {
        return tasks.tasks = taskArray;
    }

};


// const response = await supabase.from('Task')
// .insert(task)
// console.log(response);


</script>
<style scoped>
</style>