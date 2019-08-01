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
import moment from 'moment';

const state = {
    vote: {},
    bottomData: [],
    mainData: [],
    subQ: [],
    hot: [],
    timeRange: moment().format('HH:mm'),
}

/**
* mutations
*/
const mutations = {
   addRecord(state, values) {
        state.vote[values.faqId] = values.vote;
   },
   getMainData(state,values) {
        state.mainData = values;
   },
   getBottomData(state,values) {
        state.bottomData = values;
   },
   getSubQ(state,values) {
        state.subQ = values;
   },
   getHot(state,values) {
        state.hot = values;
   },
   getTime(state,values) {
        state.timeRange = values;
   }
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
