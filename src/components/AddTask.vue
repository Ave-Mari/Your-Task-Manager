<template>
    <section>
        <input type="text" v-model="task" placeholder="Type your task here">
        <button v-if="task != ''" @click="addTaskToList(newTask)">Add task</button>
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
        addTaskToList(newTask) {
            this.$store.commit("addTask", newTask);
            this.task = '';

        }
    }
}
</script>

<style>
    section {
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

