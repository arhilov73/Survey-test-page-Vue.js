<template>
    <div id="interview-nav">
        <router-link to="/interview" class="interview-nav-item"
            v-for="navItem of navbar"
            :key="navItem.id"
            v-bind:class="{active: navItem.active}"
        >
            {{navItem.text}}
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navbar: [
                {id: 1, text: "Параметры", active: false},
                {id: 2, text: "Вопросы", active: false},
                {id: 3, text: "Логика", active: false},
                {id: 4, text: "Условия", active: true},
                {id: 5, text: "Респонденты", active: false}
            ]
        }
    }
}
</script>

<style scoped>
    #interview-nav {
        width: 100%;
        height: 70px;
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid lawngreen;
    }
    .interview-nav-item {
        width: 248px;
        text-align: center;
        line-height: 70px;
        color: rgb(3, 151, 3);
        font-size: 24px;
    }
    #interview-nav .active {
        font-weight: bold;
        color: black;
        border-bottom: 3px solid lawngreen;
    }
</style>