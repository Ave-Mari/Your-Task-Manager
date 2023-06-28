<template>
    <section class="tasks-list">
        <h1>Your tasks to do: </h1>
        <ul>
            <li           
            v-for="task in tasksList" 
            :key="task.id"            
            >
            <span
            v-if="!task.editing"
            >
            {{ task.task }}
            </span>
            <input
            type="text"
            class="edit-task"
            v-model="task.task"
            placeholder="Edit your task"
            v-else
            >
            <button @click="editTask(task)" class="edit-btn">
                {{ task.editing ? "Save Task" : "Edit task" }}               
            </button>
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
        },
        editTask(task) {
            if (task.editing) {
                this.saveTask(task)
            } else {
                task.editing = true;
                task.task = task.task
            }
        },
        saveTask(task) {
            task.task = task.task;
            task.editing = false;
            this.$store.commit("updateTask", task)
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
        padding: 11px 9px;
    }

    span {
        width: 56%;
        list-style: none;
        font-weight: 300;
        font-size: 19px;
    }

    .delete-btn {
        padding: 8px 12px;
        border-radius: 12px;
    }
    .edit-task {
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #000;        
        width: 47%;
    }

    .edit-task[placeholder] {
        font-weight: 300;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
    }
    .edit-btn {
        padding: 8px 12px;
        border-radius: 12px;
        background-color: rgb(76, 86, 201);
    }
    .edit-btn:hover {
        background-color: rgb(50, 58, 147);
    }
</style>