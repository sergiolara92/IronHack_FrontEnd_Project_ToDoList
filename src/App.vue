<template>

  <h1>TASK APP</h1>

  <ul>
    <li>
      <router-link :to="{name: 'home'}">HOME</router-link>      
    </li>
    <li>
      <router-link :to="{name: 'login'}">LOGIN</router-link>
    </li>
  </ul>

  <router-view></router-view>


</template>
<script setup>

console.log(process.env.NODE_ENV);

console.log(import.meta.env.BASE_URL);

</script>
<style scoped>
</style>