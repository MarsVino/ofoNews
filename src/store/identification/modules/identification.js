import { 
    IDENTIFICATION,
    AUTH_INFO,
    GET_SCHOOL_LIST,
    NEW_USER_PURCHASE_CONFIG,
    BOND_INFO,
    SET_CONTACTS,
    HIDE_CAONTACTS
} from '../mutation-types';
import API from '@/service/api'
import bondGroupList from './bondGroupList.js'
import util from '@/util/utils';
import router from '@/router/identification';

const state = {
    identificationInfo: null,
    curPayment: null, // 交押金payment
    originalPrice: null, // 交押金金额
    payFreeBond: null,   //1符合充值免押条件，0不符合条件
    payFreeBondMoney: null,  //充值免押需要的金额
    extPayment: null,  //合并支付payment
    extPaymoney: null,  //合并支付金额
    payFreeProduct: null, //1符合月卡免押条件，0不符合条件
    payFreeProductMoney: null, //月卡免押条件money
    extPay: null,//展示合并支付（1展示0隐藏）
    payFreeProductDay: null, //月卡天数
    authInfo: {},
    authStatus: 0,
    schoolList: [],
    isDepositSaleActive: false, // 是否有押金抵扣券
    depositSaleSum: 0, // 押金抵扣券金额
    isShowCoupon: false, // 是否展示购买优惠券
    goods: [{}],// 优惠券信息
    tips: '', // 押金赠送文案
    isTimeLimit: false, // 押金限时专享
    goodsValues: {}, // 优惠券信息
    isShowBond:true,
    redYearCard: {},      //红包年卡免压
    phoneList: [],          // 通讯录
    isShowContacts: false   // 无联系人
}
/**
 * mutations
 */
const mutations = {
    [IDENTIFICATION](state, info) {
        // let bondGroup = info.bondGroup && info.bondGroup.toLocaleUpperCase();
        state.isDepositSaleActive = (info.DepositTicket && info.DepositTicket.active) || false;
        state.depositSaleSum = (info.DepositTicket && info.DepositTicket.discount) || 0;
        state.payFreeBond = info.payFreeBond;
        state.payFreeBondMoney = info.payFreeBondMoney;
        state.payFreeProductMoney = info.payFreeProductMoney;
        state.extPayment = info.extPayment;
        state.extPaymoney = info.extPaymoney;
        state.extPay = info.extPay;
        state.payFreeProduct = info.payFreeProduct;
        state.payFreeProductDay = info.payFreeProductDay;
        state.identificationInfo = info;
        state.authInfo = info.authInfo.info
        state.authStatus = info.authInfo.status
    },
    [AUTH_INFO](state, authInfo){
        state.authInfo = authInfo
    },
    [GET_SCHOOL_LIST](state, list){
        state.schoolList = list
    },
    [NEW_USER_PURCHASE_CONFIG](state, value){
        state.isShowCoupon = value.isShow;
        state.goods = value.goods || [];
        state.goodsValues = value;
    },
    hideCoupon(){
        state.isShowCoupon = false;
    },
    [BOND_INFO](state, info){
        console.log('bondinfo',info)
        let values = info.v1;
        let v2 = info.v2;
        console.log('bondInfoV2', values, v2);
        if(v2.redYearCard) {
            console.log('V2=======>',v2.redYearCard)
            state.redYearCard = v2.redYearCard[0];
        }
        if(values.length > 0){
            state.curPayment = values[0].payment;
            state.originalPrice = values[0].val;
            state.tips = values[0].tips;
            state.isTimeLimit = values[0].isTimeLimit;
            if (state.isDepositSaleActive) {
                state.originalPrice = state.originalPrice - state.depositSaleSum;
            }
        }else{
            state.isShowBond = false;
            if(!state.payFreeBond){//前端兜底策略，很糙
                state.isShowBond = true;
                state.originalPrice = 99;
                state.curPayment = 300;
            }
        }
    },
    [SET_CONTACTS](state, phoneList) {
        state.phoneList = phoneList.filter(v => !v.isBuyCard);
        if (state.phoneList.length == 0) {
            state.isShowContacts = true;
        } else {
            router.push('/phoneBook');
        }
    },
    [HIDE_CAONTACTS](state) {
        state.isShowContacts = false;
    },
}
/**
 * getters
 */
const getters = {
    curPayment: state => {

    },
}
/**
 * actions
 */

const actions = {
    getIdentificationInfo({commit},cb){
        util.getLocation(true, (lat, lng) => {
            API.identification({lat:lat, lng:lng})
            .then(data => {
                if(data.errorCode == 200) {
                    commit(IDENTIFICATION, data.values.info);
                    cb && cb();
                }else{
                    window.tip(data.msg)
                }
            },e => {
                window.tip('网络繁忙，请稍后再试');
            });
        });
    },
    setAuthInfo({commit},authInfo){
        commit(AUTH_INFO, authInfo)
    },
    getSchoolList({commit},authInfo){
        API.university()
            .then(data => {
                if (data.errorCode == 200) {
                    commit(GET_SCHOOL_LIST,data.values.info)
                } else {
                    window.tip(data.msg)
                }
            }).catch(err => {
                window.tip('网络请求超时。请在稳定的网络连接下重试。');
            })
    },
    newUserPurchaseConfig({commit},cb){
        util.getLocation(true, (lat, lng) => {
            API.newUserPurchaseConfig({lat:lat, lng:lng})
            .then(data => {
                cb && cb();
                if (data.errorCode == 200) {
                    commit(NEW_USER_PURCHASE_CONFIG, data.values)
                } else {
                    window.tip(data.msg)
                }
            }).catch(err => {
                cb && cb();
                window.tip('网络请求超时。请在稳定的网络连接下重试。');
            })
        })
    },
    getBondInfo({commit}){
        util.getLocation(true, (lat, lng) => {
            let p1 = API.bonds({lat:lat, lng:lng});
            let p2 = API.bondsV2({source:1, lat:lat, lng:lng});
            Promise.all([p1, p2])
                .then(([data1, data2]) => {
                    if(data1.errorCode == 200 && data2.errorCode == 200) {
                        console.log("=========bondInfo",data1,data2)
                        commit(BOND_INFO, {
                            'v1': data1.values,
                            'v2': data2.values
                        })
                    }else if(data1.errorCode != 200){
                        window.tip(data1.msg)
                    }else {
                        window.tip(data2.msg)
                    }

                },e => {
                    window.tip('网络繁忙，请稍后再试');
                })
        });
    },
    getContacts(context, params) {
        console.log('params', params)
        API.getRedYearCardPhoneBookList(params).then(res => {
            if (res.errorCode == 200) {
                console.log('通讯录', res.values)
                context.commit('setContacts', res.values);
            }
        });
    },
}
export default {
    state,
    actions,
    mutations,
    getters
}
