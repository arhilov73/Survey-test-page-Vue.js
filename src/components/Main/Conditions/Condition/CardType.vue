<template>
    <div class="card-type">
        <div class="type" v-for="(type, i) of types" :key="type.id" :i="i">
            <p>Тип {{i+1}}</p>

            <select>
                <option v-for="option of typeOptions" :key="option.id" v-bind:value="option.value">
                    {{option.text}}
                </option>
            </select>
        </div>
        
        <button @click="addType">+ Добавить тип</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: '1',
            typeOptions: [
                { text: 'Ordinary', value: '1' },
                { text: 'Silvery', value: '2' },
                { text: 'Gold', value: '3' },
                { text: 'Platinum', value: '4' }
            ],
            types: [
                {id: 1}
            ]
        }
    },
    methods: {
        addType() {
            const newType = {id: 2}
            this.types = this.types.push(newType)
        }
    }
}
</script>

<style scoped>
    .card-type {
        margin-top: 40px;
        font-size: 20px;
    }
    p {
        display: inline;
        margin-right: 260px;
    }
    select {
        height: 40px;
        width: 600px;
        font-size: 20px;
        border-color: #ccc;
        border-radius: 5px;
    }
    option {
        height: 40px;
        font-size: 20px
    }
    button {
        position: absolute;
        bottom: 20px;
        left: 320px;

        height: 35px;
        width: 120px;

        background: white;
        color: green;
        border-color: green;
        border-radius: 4px;
    }
    .type + .type {
        margin-top: 30px;
    }
</style>