<template>
    <div class="card-status">
        <div class="status" v-for="(status, i) of statuses" :key="status.id" :i="i">
            <p>Статус {{i + 1}}</p>

            <select>
                <option v-for="option of typeOptions" :key="option.id" v-bind:value="option.value">
                    {{option.text}}
                </option>
            </select>
        </div>

        <button @click="addStatus">+ Добавить тип</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: '1',
            typeOptions: [
                { text: 'Активна', value: '1' },
                { text: 'Изготавливается', value: '2' }
            ],
            statuses: [
                {id: 1}
            ]
        }
    },
    methods: {
        addStatus() {
            const newStatus = {id: 2}
            this.statuses = this.statuses.push(newStatus)
        }
    }
}
</script>

<style scoped>
    .card-status {
        margin-top: 40px;
        font-size: 20px;
    }
    p {
        display: inline;
        margin-right: 235px;
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
    .status + .status {
        margin-top: 30px;
    }
</style>