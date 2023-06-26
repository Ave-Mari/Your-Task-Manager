<script setup>
import addTask from './components/AddTask.vue'
import TasksList from './components/TasksList.vue'
import HomePage from './components/HomePage.vue'
import './main.css';

import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <main>
    <header>
      <nav>
      <router-link class="router-link" to="/">Homepage</router-link>
      <router-link class="router-link" to="/add-task">Add task</router-link>
      <router-link class="router-link" to="/tasks-list">Tasks List</router-link>
    </nav>
    </header>
    <RouterView />
    <!-- <addTask /> 
    <TasksList />
    <HomePage /> -->
  </main>


</template>

<style>

header {
    width: 530px;
    background: #12624b;
    padding: 18px 22px;
    display: flex;
    justify-content: center;
}

nav {
    width: 70%;
    display: flex;
    justify-content: space-between;
}
.router-link {
    font-size: 18px;
    color: #fff;
    text-decoration: none;
}

.router-link:hover {
  color: #ff4a9f;
}

    
</style>
