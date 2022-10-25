<template>

    <div class="section">
        <div class="container">

            <h1 class="title">To Do Tasks</h1>
            <div class="columns is-multiline">
                <div v-for="i in toDoTasks" class="column is-12-mobile is-6-tablet is-4-desktop">
                    <TaskCard :task="i" />
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

import { ref } from "vue";

import { onMounted } from "vue";

import { login, getTasks } from "../api/index";

import TaskCard from "../components/TaskCard.vue";

const toDoTasks = ref();


onMounted(async () => {
    const taskArray = await getTasks();
    toDoTasks.value = await taskArray.filter(element => {
        if (!element.isDone) return true;
    });
    console.log('tareas pendientes', await toDoTasks.value);

});
</script>


<style scoped>
</style>