<template>
    <div id="main">
        <input type="search" id="search" placeholder="Поиск по системе">
        <AddInterview />
    </div>
</template>

<script>
import AddInterview from '@/components/Main/AddInterview'
import Interview from '@/components/Main/Interview'
export default {
    data() {
        return {
            conditions: []
        }
    },
    components: {
        AddInterview, Interview
    },
    methods: {
    removeCondition(id) {
        this.conditions = this.conditions.filter(t => t.id !== id)
    }
  }
}
</script>

<style scoped>
    #main {
        width: 1240px;
        padding: 30px;
    }
    #search {
        width: 400px;
        height: 30px;
        padding: 7px;
        margin-bottom: 30px;
    }
    #main a{
        display: inline;
    }
</style>