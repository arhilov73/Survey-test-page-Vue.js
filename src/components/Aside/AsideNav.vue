<template>
    <div id="nav">
        <router-link to="/" class="nav-item nav-active">Опросы</router-link>
        <router-link to="/" class="nav-item">Пользователи</router-link>
        <router-link to="/" class="nav-item">Черные списки</router-link>
        <router-link to="/" class="nav-item">Колл-центр</router-link>
    </div>
</template>

<style scoped>
    .nav-item {
        width: 150px;
        height: 100px;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        margin: auto;
        margin-top: 10px;
        padding-top: 30%;
        border: 1px solid rgb(228, 224, 224);
        border-radius: 3%;
    }
    .nav-item:hover {
        color: green;
        border-color: green;
    }
    .nav-active {
        background: rgb(228, 224, 224);
        font-weight: 600;
    }
</style>