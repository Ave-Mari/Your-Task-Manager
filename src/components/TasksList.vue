<template>
    <section class="tasks-list">
        <h1>Your tasks to do: </h1>
        <ul>
            <li           
            v-for="task in tasksList" 
            :key="task.id"            
            >
            <span>{{ task.task }}</span>
            <button @click="deleteTask(task)" class="delete-btn">Delete task</button>
            
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
        width: 420px;
        margin: 0 auto;
        text-align: center;
    }

    h1 {
        margin: 0;
    }

    ul {
        list-style: none;
        padding-left: 0px;
        margin-top: 0px;
    }

    li {
        margin: 7px;
        background: #fff;
        border-radius: 12px;
        display: flex;
        justify-content: space-between;
        padding-left: 13px;
        align-items: center;
    }

    span {
        list-style: none;
        font-weight: 300;
        font-size: 19px;
    }

    .delete-btn {
        padding: 8px 12px;
        border-radius: 12px;
    }
</style>