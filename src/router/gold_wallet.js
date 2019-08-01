import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: resolve => require(['@/pages/gold_wallet/detail/home'], resolve),
        },{
            path: '/bill',
            name: 'Bill',
            component: resolve => require(['@/pages/gold_wallet/detail/bill'], resolve),
        },{
            path: '/convert',
            name: 'Convert',
            component: resolve => require(['@/pages/gold_wallet/detail/convert'], resolve),
        },{
            path: '/alipay',
            name: 'AliPay',
            component: resolve => require(['@/pages/gold_wallet/detail/alipay'], resolve),
        },{
            path: '/balance',
            name: 'Balance',
            component: resolve => require(['@/pages/gold_wallet/detail/balance'], resolve),
        },{
            path: '/aliaccount',
            name: 'AliAccount',
            component: resolve => require(['@/pages/gold_wallet/detail/aliaccount'], resolve),
        },{
            path: '/index',
            name: 'Detail',
            component: resolve => require(['@/pages/gold_wallet/detail/index'], resolve),
        },{
            path: '/gold',
            name: 'Gold',
            component: resolve => require(['@/pages/gold_wallet/detail/gold'], resolve),
        },{
            path: '/video',
            name: 'Video',
            component: resolve => require(['@/pages/gold_wallet/detail/h5video'], resolve),
        },{
            path: '/news',
            name: 'News',
            component: resolve => require(['@/pages/gold_wallet/detail/news'], resolve),
        },{
            path: '/topic',
            name: 'Topic',
            component: resolve => require(['@/pages/gold_wallet/detail/topiclist'], resolve),
        }
  ],
});
