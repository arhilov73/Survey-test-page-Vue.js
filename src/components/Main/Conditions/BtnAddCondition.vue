<template>
    <div id="btn-add-condition" @click="addCon">
        <p id="btn-add-condition-text"><strong>+</strong><br>Нажмите, чтобы добавить новое условие выборки. <br>Все условия связываются между собой логическим условием "И"</p>
    </div>
</template>

<script>
var n = 0;
export default {
    methods: {
        addCon() {
            n++;
            if (n) {
                var con = { id: n }
                this.$emit('add-con', con)
            }
        }
    }
}
</script>

<style scoped>
    #btn-add-condition {
        width: 93%;
        height: 150px;
        margin: auto;
        margin-top: 50px;
        border: 1px solid rgb(228, 224, 224);
        border-radius: 10px;
        text-align: center;
        padding-top: 20px;
        cursor: pointer;
    }
    #btn-add-condition-text {
        text-align: center;
        font-size: 22px;
        color: rgb(3, 151, 3);
    }
    #btn-add-condition:hover {
        background: rgb(190, 252, 190);
    }
    strong {
        font-size: 45px;
    }
</style>