<template>

    <div class="section">
        <div class="container" style="width: 95vw">

            <h1 class="title">To Do Tasks</h1>
            <div class="columns is-multiline">
                <div v-for="i in toDoTasks.tasks" class="column is-12-mobile is-4-tablet is-3-desktop">
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

import { useTaskStore } from "../store";



const toDoTasks = useTaskStore();



onMounted(async () => {
    const taskArray = await getTasks();
    toDoTasks.tasks = await taskArray.filter(element => {
        if (!element.isDone) return true;
    });
    console.log('tareas pendientes', toDoTasks.tasks);

});
</script>


<style scoped>

</style>