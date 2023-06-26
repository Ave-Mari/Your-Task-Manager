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

