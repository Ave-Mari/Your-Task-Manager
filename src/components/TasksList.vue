<template>
    <section class="tasks-list">
        <h1>Your tasks to do: </h1>
        <ul>
            <li           
            v-for="task in tasksList" 
            :key="task.id"            
            >
            <span>{{ task.task }}</span>
            <button @click="deleteTask(task)">Delete task</button>
            
            </li>
        </ul>

    </section>
     

</template>

<script>
export default {
    name: "Tasks List",
    data() {
        return {
            tasksList: this.$store.state.tasksList
        }
    },
    methods: {
        deleteTask(task) {
            this.$store.commit("deleteTask", task.id)
        }
    }
}
</script>

<style>
    .tasks-list {
        display: flex;
        justify-content: center;
        padding-top: 33px;
        flex-direction: column;
        width: 350px;
        margin: 0 auto;
        text-align: center;
    }

    h1 {
        margin: 0;
    }
</style>