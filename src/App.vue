<script setup>
import addTask from './components/AddTask.vue'
import TasksList from './components/AddTask.vue'


</script>

<template>
  <main>
    <addTask /> 
    <TasksList />
  </main>


</template>

<style>
    main {
      margin: 0;
          background: rgb(145,47,211);
          background: linear-gradient(90deg, rgba(145,47,211,1) 0%, rgba(29,253,171,1) 50%, rgba(1,21,192,1) 100%); 
    }

    h1 {
      margin: 0;
    }
</style>
