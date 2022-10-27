<template>

<div v-if="!task.isDone" class="card">
  <header class="card-header" v-if="!editar">
    <p class="card-header-title ">
      {{ task.title }}
    </p>
  </header>
  <header class="card-header" v-else>
    <input v-model="task.title" class="input " type="text" placeholder="title of your task">
  </header>
    <div class="card-content" >
      <div class="content" v-if="!editar">
        <div>{{ task.description }}</div>
      </div>
      <div class="content" v-else>
        <input v-model="task.description" class="input " type="text" placeholder="e.g. make an app">
      </div>
      <div class="card-footer botones">
        <button v-if="!editar" @click="done(task.id)" class="button is-ghost p-0 "><i class="fa-regular fa-circle-check"></i></button>
        <button v-if="!editar" @click="editar = true" class="button is-ghost p-0 "><i class="fa-regular fa-pen-to-square"></i></button>
        <button v-if="!editar" @click="clickDelete(task.id)" class="button is-ghost "><i class="fa-solid fa-trash"></i></button>
        <button v-if="editar" @click="editar = false" class="button is-ghost " style="text-align: center"><i class="fa-solid fa-xmark"></i></button>
        <button v-if="editar" @click="update(task.id, task)" class="button is-ghost " style="text-align: center"><i class="fa-solid fa-floppy-disk"></i></button>
      </div>
    </div>
  </div>

  <div v-if="task.isDone" class="card doneCard">
    <header class="card-header" v-if="!editar">
    <p class="card-header-title isDone">
      {{ task.title }}
    </p>
  </header>
  <header class="card-header isDone" v-else>
    <input v-model="task.title" class="input " type="text" placeholder="title of your task">
  </header>
    <div class="card-content " >
      <div class="content isDone" v-if="!editar">
        <div>{{ task.description }}</div>
      </div>
      <div class="content" v-else>
        <input v-model="task.description" class="input " type="text" placeholder="e.g. make an app">
      </div>
      <div class="card-footer botones">
        <button v-if="!editar" @click="undone(task.id)" class="button is-ghost p-0"><i class="fa-solid fa-rotate-left"></i></button>
        <button v-if="!editar" @click="editar = true" class="button is-ghost p-0 "><i class="fa-regular fa-pen-to-square"></i></button>
        <button v-if="!editar" @click="clickDelete(task.id)" class="button is-ghost "><i class="fa-solid fa-trash"></i></button>
        <button v-if="editar" @click="editar = false" class="button is-ghost " style="text-align: center"><i class="fa-solid fa-xmark"></i></button>
        <button v-if="editar" @click="update(task.id, task)" class="button is-ghost " style="text-align: center"><i class="fa-solid fa-floppy-disk"></i></button>
      </div>
    </div>
  </div>



</template>


<script setup>
import { ref } from 'vue';
import { deleteTask, markUndone, markDone, updateTask, getTasks } from "../api/index";
import { defineProps } from "vue";
import swal from 'sweetalert';


import { useTaskStore } from "../store";



const tasksFiltered = useTaskStore();


const editar = ref(false);



// Definimos los props que vamos a recibir en el componente
const props = defineProps(

  {task: Object}

);

const clickDelete = (async (taskId) => {
    await deleteTask(taskId);
    window.location.reload(true);
});

const undone = (async (taskId) => {
    await markUndone(taskId);
    window.location.reload(true);

});

const done = (async (taskId) => {
    await markDone(taskId);
    window.location.reload(true);


});



const update = async (taskId, task) => {
  if(task.title == '' && task.description == '') return swal("ERROR", "Can't save an empty task. Please fill at least one field.", "warning");
  await updateTask(taskId, task);
  window.location.reload(true);
};

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
}

.botones button {
  font-size: 20px;

}


.isDone {
  background-color: lightgray;
  text-decoration: line-through;
}



.botones button:hover{
  transform: scale(1.5); 
  text-decoration: none;
  transition: 0.3s;
  
}




.doneCard {
  background-color: lightgray;
}
</style>
