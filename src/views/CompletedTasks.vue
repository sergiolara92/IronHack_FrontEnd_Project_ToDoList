<template>

    <div class="section">
        <div class="container">

            <h1 class="title">Completed Tasks</h1>
            <div class="columns is-multiline">
                <div v-for="i in completedTasks" class="column is-12-mobile is-6-tablet is-4-desktop">
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


const completedTasks = ref();




onMounted(async () => {
    const taskArray = await getTasks();
    completedTasks.value = await taskArray.filter(element => element.isDone
    );
    console.log('tareas acabadas', await completedTasks.value);

});

</script>

<style scoped>
</style>