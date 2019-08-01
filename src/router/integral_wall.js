import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/integral_wall/detail'
import Detail from '@/pages/integral_wall/detail/details'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/detail',
            component: Detail
        }
    ]
})
