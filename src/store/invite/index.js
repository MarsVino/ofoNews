import Vuex from 'vuex';
Vue.use(Vuex);

// 导入各个模块的初始状态和 mutations
import invite from './modules/invite';

//创建store对象
export default new Vuex.Store({
    // 组合各个模块
    modules: {
        invite
    },
    //strict: debug,
    //moddlewares: debug ? [createLogger()] : []
})
