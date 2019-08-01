import Vuex from 'vuex';
Vue.use(Vuex);

// 导入各个模块的初始状态和 mutations
import foregift_withdraw from './modules/foregift_withdraw';

//创建store对象
export default new Vuex.Store({
    // 组合各个模块
    modules: {
        foregift_withdraw,
    },
    //strict: debug,
    //moddlewares: debug ? [createLogger()] : []
})
