<template>
    <section>
        <h1>Your tasks to do: </h1>

        <ul>
            <li
            v-for="task in tasksList" :key="task.id"            
            >
            {{ task.task }}
            </li>
        </ul>

    </section>
     

</template>

<script>
export default {
    name: "Tasks List",
    data() {
        return {
            tasks: this.$store.state.tasksList
        }
    },
    
}
</script>