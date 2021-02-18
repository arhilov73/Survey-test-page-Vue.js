<template>
    <div id="aside">
        <router-link to="/" class="home"></router-link>
        <AsideNav />
    </div>
</template>

<script>
import AsideNav from '@/components/Aside/AsideNav'
export default {
    components: {
        AsideNav
    }
}
</script>

<style scoped>
    #aside {
        width: 200px;
        height: 100%;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #ccc;
    }
    .home {
        width: 50px;
        height: 50px;
        background: red;
        border-radius: 50%;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 50px;
    }
</style>