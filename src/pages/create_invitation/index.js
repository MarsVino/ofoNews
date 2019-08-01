// The Vue build version to load with the `import` command
import router from '@/router/create_invitation'
import Index from './index.vue'
import utils from '../../util/utils'

//在页头添加VConsole提示代码
if (utils.getEnv() == 'development') {
    const vConsole = new VConsole();
}

//配置修改标题的钩子
Vue.directive('title', {
    inserted: function (el, binding) {
        document.title = el.dataset.title
    }
})

/**
 * 初始化vue对象
 */
new Vue({
    el: '#app',         //根节点元素
    router,             //路由信息
    // store,              //使用store存储管理数据
    template: '<Index/>', //模版信息
    components: { Index } //组件信息
})
