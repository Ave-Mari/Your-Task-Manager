<template>
    <section class="add-task">
        <input type="text" v-model="task" placeholder="Type your task here">
        <button v-if="task != ''" @click="addTaskToList(task)">Add task</button>
        <button disabled v-else>Add task</button>
    </section>
</template>

<script>
export default {
    name: "Add Task",
    data() {
        return {
            task: ''
        }
    },
    methods: {
        addTaskToList(task) {
            this.$store.commit("addTask", task);
            this.task = '';

        }
    }
}
</script>

<style>
    .add-task {
        display: flex;
        justify-content: center;
        padding-top: 33px;
    }

    input {
        width: 209px;
        padding: 9px 10px 9px 11px;
        margin-right: 9px;
        border-radius: 10px;
    }
    
    button {
        color: #fff;
        background: #ff4a9f;
        border: none;
        padding-left: 12px;
        padding-right: 12px;
        border-radius: 9px;
        cursor: pointer;
    }

    button:hover {
        background: #d1357e;
    }

    button:disabled {
        background: #a96c88;
        cursor: not-allowed;
    }
</style>

