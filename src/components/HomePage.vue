<template>
    <section class="homepage">
        <p>Welcome to your personal task manager where you can <router-link class="homepage-link" to="/add-task">create task</router-link> and add it to <router-link class="homepage-link" to="/tasks-list">list</router-link></p>
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
        padding: 10px 16px;
        border-radius: 33px;
        width: 439px;
        margin: 12px auto 0 auto;
    }

    p {
        font-weight: 300;
    }
</style>