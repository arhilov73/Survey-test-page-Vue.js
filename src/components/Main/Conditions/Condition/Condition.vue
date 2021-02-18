<template>
    <div id="condition">
        <h2 id="condition-header">Условие {{i+1}}</h2>
        <select v-model="selected">
            <option v-for="option of options" :key="option.id" v-bind:value="option.value">
                {{option.text}}
            </option>
        </select>

        <AgeCondition v-if="selected === '2'" />
        <CardType v-if="selected === '3'"/>
        <CardStatus v-if="selected === '4'"/>

        <button class="remove-condition" v-on:click="$emit('remove-condition', condition.id)">
            Удалить условие
        </button>
    </div>
</template>

<script>
import AgeCondition from '@/components/Main/Conditions/Condition/AgeCondition'
import CardType from '@/components/Main/Conditions/Condition/CardType'
import CardStatus from '@/components/Main/Conditions/Condition/CardStatus'
export default {
    props: ['condition', 'i'],
    data() {
        return {
            selected: '1',
            options: [
                { id: 1, text: 'Выберите условие', value: '1' },
                { id: 2, text: 'Возраст респондента', value: '2' },
                { id: 3, text: 'Тип карты лояльности', value: '3' },
                { id: 4, text: 'Статус карты лояльности', value: '4' }
            ]
        } 
    },
    components: {
        AgeCondition, CardType, CardStatus
    },
}
</script>

<style scoped>
    #condition {
        padding: 30px;
        padding-bottom: 100px;
        background: rgb(255, 247, 247);
        position: relative;
    }
    #condition-header {
        float: left;
        font-size: 24px;
    }
    select {
        height: 40px;
        width: 60%;
        margin-left: 200px;
        font-size: 20px;
        border-color: #ccc;
        border-radius: 5px;
    }
    option {
        height: 40px;
        font-size: 20px
    }
    .remove-condition {
        position: absolute;
        bottom: 20px;
        right: 20px;
        height: 35px;
        width: 150px;
        background: white;
        color: red;
        border-color: red;
        border-radius: 4px;

    }
</style>