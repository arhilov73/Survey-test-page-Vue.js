<template>
    <div class="interview">
        <router-link to="/">Главная</router-link>
        <span>&#8594;</span>
        <router-link to="/">Опросы</router-link>
        <span>&#8594;</span>
        <router-link to="/interview">Добавить опрос</router-link>
        
        <ConditionsNav />

        <Condition 
            v-for="(condition, i) of conditions" 
            :condition="condition" 
            :i="i"
            :key="condition.id"  
            v-on:remove-condition="removeCondition"
        />

        <BtnAddCondition v-on:add-con="addCon" />
        
    </div>
</template>

<script>
import ConditionsNav from '@/components/Main/Conditions/ConditionsNav'
import BtnAddCondition from '@/components/Main/Conditions/BtnAddCondition'
import Condition from '@/components/Main/Conditions/Condition/Condition'
export default {
    props: ['conditions'],
    components: {
        ConditionsNav, BtnAddCondition, Condition
    },
    methods: {
        removeCondition(id) {
            this.$emit('remove-condition', id)
        },
        addCon(con) {
            this.conditions = this.conditions.push(con)
        }
    }
}
</script>

<style scoped>
    #main a{
        display: inline;
    }
</style>