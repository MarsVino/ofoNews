import { WALLETINFO, REASONLIST, WITHDRAW, BONDTOBALANCE } from '../mutation-types';
import API from '@/service/api'
let depostiArr = ['freeBondRedYearCard','redYearCardCoupon','cmbCredit'];
let deopsitItem;
const state = {
    walletInfo: {
        delayWithdraw:{
            dailyBindCardErrors:''
        }
    },
    reasonList: [],
    withdrawInfo: {},
    bond2balanceSuccess: false,
    bondwithdrawEnabled: 1,  //0：直接提示不可退 1：可退，直接退  2：不可退，展示小额平账页面
    realBalance: 0,
    loadingShow: false,
    withdrawType: {},
    fuCheInfo:{
        carno: 'xxxx',
        time: 'xxxx:xx:xx'
    }
}
/**
 * mutations
 */
const mutations = {
    [WALLETINFO](state, info) {
        state.walletInfo = info;
        state.bondwithdrawEnabled = info.bondwithdrawEnabled;
        state.realBalance = info.realBalance;
    },
    [REASONLIST](state, info) {
        state.reasonList = info;
    },
    [WITHDRAW](state, info) {
        state.withdrawInfo = info;
    },
    [BONDTOBALANCE](state, info) {
        state.bond2balanceSuccess = true;
    },
    withdrawType(state,info) {
        state.withdrawType = info
    },
    shiftFlow(state) {
        deopsitItem = state.walletInfo.pageFlow[0]
        state.walletInfo.pageFlow = state.walletInfo.pageFlow.filter(i =>  depostiArr.indexOf(i.pageName) == -1);
    },
    changeFuCheInfo(state,info){
        state.fuCheInfo = info
    },
    unShiftFlow(){
        state.walletInfo.pageFlow.unshift(deopsitItem)
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
    getWallet({commit},cb){
        let infoData = {
            "token": window.getOfoToken(),
            "source-version": window.OFO_ENV.ofoAppSourceVersion,
            "source": window.OFO_ENV.sourceForApi
        };
        API.getWallet(infoData)
        .then(data => {
            if(data.errorCode == 200) {
                console.log(WALLETINFO)
                commit(WALLETINFO, data.values.info);
                cb && cb(data);
            }else{
                window.tip(data.msg)
            }
        },e => {
            window.tip('网络繁忙，请稍后再试');
        })
    },
    getReasonlist({commit},cb){
        API.reasonlist()
        .then(data => {
            if(data.errorCode == 200) {
                commit(REASONLIST, data.values.info);
            }else{
                window.tip(data.msg)
            }
        },e => {
            window.tip('网络繁忙，请稍后再试');
        })
    },
    withdraw({commit, state},option){
        if ((state.bondwithdrawEnabled == 0 || state.bondwithdrawEnabled == 2) && state.realBalance < 0) {
            let res = {
                errorCode: 0,
                msg: `你的充值余额为${state.realBalance}元, 充值余额为负的用户不能退押金`,
            }
            commit(WITHDRAW, res);
            option.callback && option.callback(res);
            return false;
        }
        console.log(option,111);
        let params = option.params ? option.params : {};
        let callback = option.callback ? option.callback : null;
        API.withdrawApply(params)
        .then(res => {
            commit(WITHDRAW, res);
            callback && callback(res);
        },e => {
            window.tip('网络繁忙，请稍后再试');
        })
    },
    bond2balance({commit,state},cb){
        state.loadingShow = true;
        API.bond2balance()
        .then(res => {
            state.loadingShow = false;
            if (res.errorCode == 200) {
                commit(BONDTOBALANCE);
                cb && cb();
            } else {
                window.tip(res.msg);
            }
        },e => {
            state.loadingShow = false;
            window.tip('网络繁忙，请稍后再试');
        })
    },
    getWithdrawType({commit},params){
        state.loadingShow = true;
        API.bondWithdrawType().then(data => {
            if(data.errorCode == 200){
                commit('withdrawType',data.values)
                state.loadingShow = false;
            }
        },err=>{
            state.loadingShow = false;
            window.tip('网络繁忙，请您稍后再试')
        })
    },
    changeFlowType({commit}){//退押金免押去除弹窗字段
        commit('shiftFlow')
    },
    cancelFlowType({commit}){//退押金免押添加弹窗字段
        commit('unShiftFlow')
    },
    getFuChe({commit}){
        state.loadingShow = true;
        API.getFuCheInfo().then(data => {
            if(data.errorCode == 200){
                commit('changeFuCheInfo',data.values)
                state.loadingShow = false;
            }
        },err=>{
            state.loadingShow = false;
            window.tip('网络繁忙，请您稍后再试')
        })
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}
