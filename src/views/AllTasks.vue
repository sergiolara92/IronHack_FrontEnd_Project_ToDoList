<template>

    <div class="section">
        <div class="container" style="width: 95vw">

            <h1 class="title">All Tasks</h1>
            <div class="columns is-multiline">
                <div v-for="i in tasks.tasks" class="column is-12-mobile is-4-tablet is-3-desktop">
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



const tasks = useTaskStore();




onMounted(async () => {
    const taskArray = await getTasks();
    tasks.tasks = taskArray;
});


</script>

<style scoped>



</style>