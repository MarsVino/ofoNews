// The Vue build version to load with the `import` command
import router from '@/router/contribute'
import Contribute from './contribute'
import utils from '../../util/utils'
import VueLazyload from 'vue-lazyload'
import pic_loading from '../../assets/static/pic_loading.png'
import pic_fail from '../../assets/static/pic_fail.png'


import Vue from 'vue'

import VueImageSwipe from 'vue-image-swipe'

import 'vue-image-swipe/dist/vue-image-swipe.css'

Vue.use(VueImageSwipe)


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

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: pic_fail,
    loading: pic_loading,
    attempt: 1
})

/**
 * 初始化vue对象
 */
new Vue({
  el: '#app',         //根节点元素
  router,             //路由信息
  // store,              //使用store存储管理数据
  template: '<Contribute/>', //模版信息
  components: { Contribute } //组件信息
})
