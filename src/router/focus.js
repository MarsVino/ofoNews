import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: resolve => require(['@/pages/focus/detail/home'], resolve),
        },
  ],
});
