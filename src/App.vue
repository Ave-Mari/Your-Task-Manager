<script setup>
import addTask from './components/AddTask.vue'
import TasksList from './components/TasksList.vue'
import HomePage from './components/HomePage.vue'
import './main.css';

import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <main>
    <section>
      <nav>
      <RouterLink to="/">Homepage</RouterLink>
      <RouterLink to="/add-task">Add task</RouterLink>
      <RouterLink to="/tasks-list">Tasks List</RouterLink>
    </nav>
    </section>
   
    <RouterView />
    <!-- <addTask /> 
    <TasksList />
    <HomePage /> -->
  </main>


</template>

<style>

.nav {

}
    
</style>
