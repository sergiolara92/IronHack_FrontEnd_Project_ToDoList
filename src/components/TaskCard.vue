<template>

  <div v-if="!task.isDone" class="card">
    <div class="card-content">
      <div class="content">
        <div class="card-title">{{ task.title }}</div>
        <div>{{ task.description }}</div>
      </div>
      <div class="botones">
        <button @click="markDone()" class="button is-ghost p-0"><i class="fa-solid fa-check"></i></button>
        <button @click="editTask()" class="button is-ghost p-0"><i class="fa-regular fa-pen-to-square"></i></button>
        <button @click="deleteTask()" class="button is-ghost "><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  </div>

  <div v-if="task.isDone" class="card isDone">
    <div class="card-content">
      <div class="content">
        <div class="card-title">{{ task.title }}</div>
        <div>{{ task.description }}</div>
      </div>
      <div class="botones">
        <button @click="markUndone()" class="button is-ghost p-0"><i class="fa-solid fa-rotate-left"></i></button>
        <button @click="editTask()" class="button is-ghost p-0"><i class="fa-regular fa-pen-to-square"></i></button>
        <button @click="deleteTask()" class="button is-ghost "><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  </div>

</template>


<script setup>


import { defineProps } from "vue";
// Definimos los props que vamos a recibir en el componente
const props = defineProps(

  {task: Object}

);


</script>




<style scoped>
.card {
  display: flex;
  flex-direction: column;
}
.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.card-title {
  font-weight: bold;
  font-size: 1.2rem;
}

.botones {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: green;
}

.isDone {
  background-color: lightgray;
  text-decoration: line-through;
}

.botones button:hover{
  transform: scale(2); 
}
</style>
