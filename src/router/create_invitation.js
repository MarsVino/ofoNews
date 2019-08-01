import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'create_invitation',
        component: resolve => require(['@/pages/create_invitation/home/index.vue'], resolve)
    }]
})
