<template>
    <section class="homepage">
        <h1>Homepage</h1>
        <p>Welcome to your personal task manager where you can <router-link class="homepage-link" to="/add-task">create</router-link> task and add it to <router-link class="homepage-link" to="/tasks-list">list</router-link></p>
      </section>
   
</template>

<script>
export default {
    name: "Homepage",
    data() {
        return {}
    }
}
</script>

<style>

    .homepage-link {
        
    }

    .homepage {
        background: #fff;
    }

    p {
        font-weight: 300;
    }
</style>