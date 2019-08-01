import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: resolve => require(['@/pages/news/detail/detail.vue'], resolve)
    }]
})
