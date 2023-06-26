import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../components/HomePage.vue";
import AddTask from "../components/AddTask.vue";
import TasksList from "../components/TasksList.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "Homepage",
            component: HomePage
        },
        {
            path: '/add-task',
            name: "Add Task",
            component: AddTask
        },
        {
            path: '/tasks-list',
            name: "Tasks List",
            component: TasksList
        },
    ]
})

export default router