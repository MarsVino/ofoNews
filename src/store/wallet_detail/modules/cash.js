import { INVITE_INFORMATION } from '../mutation-types';
import API from '@/service/api'
const state = {
    loaded: true, // 请求加载完毕
    pageSize: 100,
    currentList: 'balance', // 当前列表
    createdLoad: true, // 第一次渲染
    doRefresh: false,// 刷新数据
    // 余额
    balanceListTotalNum: 0,
    balanceList: [],
    balancePage: 1,
    balanceFinish: false,
    // 红包
    redPacketListTotalNum: 0,
    redPacketList: [],
    redPacketPage: 1,
    redPacketFinish: false,
    // 押金
    bondListTotalNum: 0,
    bondList: [],
    bondPage: 1,
    bondFinish: false,
}
/**
 * mutations
 */
const mutations = {
    getBalanceListValue(state, value) {
        state.loaded = true;
        state.balanceListTotalNum = value.totalNumber;
        state.doRefresh = value.doRefresh;
        if (state.doRefresh) {
            state.balancePage = 1;
            state.balanceList = [];
        }
        state.balanceList = state.balanceList.concat(value.changeList);
        if (state.balanceListTotalNum < state.pageSize) {
            state.balanceFinish = true;
            return false;
        }
        state.balancePage += 1;
    },
    getRedPacketListValue(state, value) {
        state.loaded = true;
        state.redPacketListTotalNum = value.totalNumber;
        state.doRefresh = value.doRefresh;
        if (state.doRefresh) {
            state.redPacketPage = 1;
            state.redPacketList = [];
        }
        state.redPacketList = state.redPacketList.concat(value.changeList);
        if (state.redPacketListTotalNum < state.pageSize) {
            state.redPacketFinish = true;
            return false;
        }
        state.redPacketPage += 1;
    },
    getBondListValue(state, value) {
        state.loaded = true;
        state.bondListTotalNum = value.totalNumber;
        state.doRefresh = value.doRefresh;
        if (state.doRefresh) {
            state.bondPage = 1;
            state.bondList = [];
        }
        state.bondList = state.bondList.concat(value.changeList);
        if (state.bondListTotalNum < state.pageSize) {
            state.bondFinish = true;
            return false;
        }
        state.bondPage += 1;
    },
    showLoading(state, value) {
        state.loaded = false;
    },
    changeCurrentList(state, value) {
        state.currentList = value;
    },
    createdLoaded(state, value){
        state.createdLoad = false;
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
    getBalanceList({commit}, params){
        commit('createdLoaded');
        API.balanceList({page: state.balancePage, pageSize: state.pageSize})
            .then(data => {
                if (data.errorCode == 200) {
                    commit('getBalanceListValue',data.values);
                } else {
                    window.tip(data.msg)
                }
            })
            .catch(e => {
                console.log(1111111111,e)
            })
    },
    getRedPacketList({commit}, params){
        commit('createdLoaded');
        let url = location.href;
        let apiUrl;
        if(url.includes('isPacket')){
            apiUrl = API.redYearCardRedPacketList({page: state.redPacketPage, pageSize: state.pageSize})
        }else{
            apiUrl = API.redPacketList({page: state.redPacketPage, pageSize: state.pageSize})
        }
        apiUrl
            .then(data => {
                if (data.errorCode == 200) {
                    commit('getRedPacketListValue',data.values);
                } else {
                    window.tip(data.msg)
                } 
            })
            .catch(e => {
                console.log(222222222,e)
            })
    },
    getBondList({commit}, params){
        commit('createdLoaded');
        API.bondList({page: state.bondPage, pageSize: state.pageSize})
            .then(data => {
                if (data.errorCode == 200) {
                    commit('getBondListValue',data.values);
                } else {
                    window.tip(data.msg)
                }
            },e => {
                console.log(33333333,e)
            })
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}
