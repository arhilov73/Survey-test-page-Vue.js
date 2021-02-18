<template>
    <div class="age-condition">
        <div class="range" v-for="(range, i) of ranges" :key="range.id" :i="i">
            <p >Диапазон {{i + 1}}</p>

            <span>
                от
                <input type="nunber" class="age-input">
                до
                <input type="nunber" class="age-input">
            </span>
        </div>
        

        <button @click="addRange">+ Добавить диапазон</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ranges: [{id: 1}]
        }
    },
    methods: {
        addRange() {
            const newRange = {id: 2}
            this.ranges = this.ranges.push(newRange)
        }  
    }
}
</script>

<style scoped>
    .age-condition {
        margin-top: 40px;
        font-size: 20px;
    }
    p {
        display: inline;
        margin-right: 220px;
    }
    .age-input {
        height: 35px;
        width: 100px; 
        font-size: 20px;
        text-align: center;
    }
    button {
        position: absolute;
        bottom: 20px;
        left: 320px;

        height: 35px;
        width: 150px;

        background: white;
        color: green;
        border-color: green;
        border-radius: 4px;
    }
    .range + .range {
        margin-top: 30px;
    }
</style>