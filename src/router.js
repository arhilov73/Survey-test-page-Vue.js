import Vue from 'vue'
import Router from 'vue-router'
import NewInterview from '@/view/NewInterview'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: NewInterview
        },
        {
            path: '/interview',
            component: () => import('./view/InterviewConditions.vue')
        }
    ]
})