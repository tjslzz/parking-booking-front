<template>
<div id="app">
    <div>
        <router-link to="/boss">我是老板</router-link> |
        <router-link to="/user">我是客户</router-link>
    </div>
    <router-view />
</div>
</template>

<script>
export default {
    mounted: function () {
        this.axios.get("http://localhost:8888/boss").then((response) => {
            this.$store.commit('set', response.data)
        });
    }
}
</script>

<style>
</style>
