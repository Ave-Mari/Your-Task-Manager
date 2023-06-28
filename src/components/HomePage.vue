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
        color: rgb(165, 12, 81);
    }

    .homepage {
        background: #fff;
        margin-top: 12px;
        padding-top: 10px;
        padding-bottom: 17px;
        border: 33px;
    }

    p {
        font-weight: 300;
    }
</style>