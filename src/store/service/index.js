import Vuex from 'vuex';
Vue.use(Vuex);

// 导入各个模块的初始状态和 mutations
import service from './modules/service';

//创建store对象
export default new Vuex.Store({
    // 组合各个模块
    modules: {
        service
    },
    //strict: debug,
    //moddlewares: debug ? [createLogger()] : []
})
