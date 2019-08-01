/**
 * mutation-types类型
 */
// import * as types from '../mutation-types';
// import API from '@/service/photo';

/**
* 用统一的函数处理并分发mutation-types。
* @param type
* @returns {function({dispatch: *}, ...[*]): *}
*/
// function makeAction(type) {
//     return ({ dispatch }, ...args) => dispatch(type, ...args)
// }

/**
* state
*/
const state = {
    result: 0, // 接口返回数据对象
}

/**
* mutations
*/
const mutations = {
   setResult(state, values) {
       state.result = values;
   },
}
/**
* getters
*/
const getters = {

}

/**
* actions
*/
const actions = {

}

export default {
    state,
    mutations
}
