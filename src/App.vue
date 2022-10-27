<template>

  <router-view></router-view>


</template>
<script setup>

import { onMounted } from "vue";

import { createClient } from '@supabase/supabase-js'

import { login, newTask } from "./api/index";

import {useAuthStore} from './store/auth'

const authStore = useAuthStore()

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

console.log(process.env.NODE_ENV);

console.log('router:', import.meta.env.BASE_URL);

console.log(supabase);

// const registro = async () => {

//   const result = await supabase.auth.signUp({
//     email: 'sergioldm92@gmail.com',
//     password: '12345678'
//   });

//   console.log(result);

// };

// const login = async () => {
//   const response = await supabase.auth.signInWithPassword({
//     email: 'sergioldm92@gmail.com',
//     password: '12345678'
//   });
//   console.log(response);
//   // nuevoTask(response.data.user.id); //llamarlo en otro lado
//   //getTasks();
//   //updateTask();
//   deleteTask();
// };

// const nuevoTask = async (id) => {
//   const response = await supabase.from('Task')
//   .insert({
//     user_id: id,
//     title: 'titulo',
//     description: 'descripcion del task'
//   })
//   console.log(response);
// };

// const getTasks = async () => {
//   const response = await supabase
//   .from('Task')
//   .select('*') //* ttrae todas las columnas
//   .order('id', {ascending: false});
//   console.log(response);
// };

// const updateTask = async () => {
//   const response = await supabase
//   .from('Task')
//   .update({ //valor que se va a modificar: 'nuevo valor'
//     title: 'Titulo modificado',
//     description: 'descripcion modificada'
//   })
//   .eq('id', '5'); //columna de referencia, valor que coincide del cual queremos modificar el contenido

//   console.log(response);
// };

// const deleteTask = async () => {
//   const response = await supabase
//   .from('Task')
//   .delete()
//   .eq('id', '7'); //columna, valor (borrara toda la fila que coincida con la columna id que tenga valor 7)

//   console.log(response);
// };

// const logOut = async () => {
//   const response = await supabase.auth.signOut();
// }

// onMounted(async () => {
//   const id = await login('sergioldm92@gmail.com', '12345678');
//   newTask({
//     user_id: id,
//     title: 'Titulo',
//     description: 'Descripcion de otro task'
//   });
  

// });

</script>
<style scoped>



</style>