<template>
    <div class="interview">
        <router-link to="/">Главная</router-link>
        <span>&#8594;</span>
        <router-link to="/">Опросы</router-link>

        <router-link to='/interview'><button id="add-interview">Добавить опрос</button></router-link>

    </div>
</template>

<style scoped>
    #main a{
        display: inline;
    }
    #add-interview {
        display: block;
        width: 250px;
        height: 70px;
        margin: auto;
        margin-top: 150px;
        font-size: 20px;
        border: none;
        border-radius: 3%;
        cursor: pointer;
        background: rgb(170, 247, 170);
    }
</style>