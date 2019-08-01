// The Vue build version to load with the `import` command
import router from '@/router/gold_wallet'
import Gold_wallet from './gold_wallet'
import utils from '../../util/utils'
import VueLazyload from 'vue-lazyload'
import pic_loading from './static/pic_loading.png'
import pic_fail from './static/pic_fail.png'
import VueVideoPlayer from 'vue-video-player'
// require videojs styl

//在页头添加VConsole提示代码
if (utils.getEnv() == 'development') {
  const vConsole = new VConsole();
}

Vue.use(VueVideoPlayer,  {
  options: global,
  events: global
})

// require('videojs-contrib-hls/dist/videojs-contrib-hls');
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: pic_fail,
    loading: pic_loading,
    attempt: 1
})


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
  template: '<Gold_wallet/>', //模版信息
  components: { Gold_wallet } //组件信息
})
