import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: resolve => require(['@/pages/contribute/detail/home'], resolve),
        },{
            path: '/viewpoint',
            name: 'ViewPoint',
            component: resolve => require(['@/pages/contribute/detail/viewpoint'], resolve),
        },{
            path: '/contribution',
            name: 'Contribution',
            component: resolve => require(['@/pages/contribute/detail/contribution'], resolve),
        },{
            path: '/miniProduction',
            name: 'miniProduction',
            component: resolve => require(['@/pages/contribute/detail/miniProduction'], resolve),
        },{
            path: '/timeLine',
            name: 'timeLine',
            component: resolve => require(['@/pages/contribute/detail/timeLine'], resolve),
        },
  ],
});
