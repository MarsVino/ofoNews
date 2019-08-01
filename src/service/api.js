import { fetch, get, axiosConfig, postApi } from './fetch';
import { energeapi, repairapi, queryUserComplaint, userComplaint, upload, cancelApi, verifyCode, getCaptcha, loginTo, couponShare, getShareCoupon, getUserEHmsg, contribute, activityList, qiyecardapi, qiyecardtimeapi, qiyecardunbundapi, wallet, orderInfo, getEnergy, getAdRed, getAds, redPacketInfo, transferToBalance, withdraw, userWithdrawAccount, getRepairMessageList, getRepairProcess, getCustomServiceHot, getCustomServiceMenu, getCustomServiceMsgList, getCustomServiceVote, getCustomServiceNote } from '../constant/url';
import * as URL from '../constant/url';

export default {
    energeapi(params) {
        return fetch(URL.energeapi, params, true);
    },
    energyJump(param){
        return fetch(URL.energyJump,param);
    },
    repairapi(params) {
        return fetch(URL.repairapi, params);
    },
    queryUserComplaint(params) {
        return fetch(URL.queryUserComplaint, params);
    },
    userComplaint(params) {
        return fetch(URL.userComplaint, params);
    },
    upload(params) {
        return fetch(URL.upload, params);
    },
    getActivityList(params) {
        return fetch(URL.activityList, params, true);
    },
    getOrderInfo(params) {
        return fetch(URL.orderInfo, params, true);
    },
    getOrderEnergy(params) {
        return fetch(URL.getEnergy, params, true);
    },
    getAdPacket(params) {
        return fetch(URL.getAdRed, params, true);
    },
    getAds(params) {
        return postApi(URL.getAds, params, true);
    },
    qiyecardapi(params) {
        return postApi(URL.qiyecardapi, params, true);
    },
    qiyecardtimeapi(params) {
        return postApi(URL.qiyecardtimeapi, params, true);
    },
    qiyecardunbundapi(params) {
        return postApi(URL.qiyecardunbundapi, params, true);
    },
    getCancelInfo(params) {
        return fetch(URL.cancelApi, params);
    },
    unfinished(params) {
        return fetch(URL.unfinished, params);
    },
    orderInfo(params) {
        return fetch(URL.orderInfo, params);
    },
    pricing(params) {
        return fetch(URL.pricing, params);
    },
    getWallet(params) {
        return fetch(URL.wallet, params, true);
    },
    feedback(params) {
        return fetch(URL.feedback, params);
    },
    feedbackList(params) {
        return fetch(URL.feedbackList, params);
    },
    orderInfo(params) {
        return fetch(URL.orderInfo, params);
    },
    config(params) {
        return fetch(URL.config, params);
    },
    getUserInfo(params) {
        return fetch(URL.user, params);
    },
    // 登陆
    // 验证图形 + 发送短信
    verifyCode(params) {
        return fetch(URL.verifyCode, params, true)
    },
    getCaptcha(params) {
        return fetch(URL.getCaptcha, params, true)
    },
    loginTo(params) {
        return fetch(URL.loginTo, params, true)
    },
    couponShare(params) {
        return fetch(URL.couponShare, params, true)
    },
    getShareCoupon(params) {
        return fetch(URL.getShareCoupon, params, true)
    },
    getUserEHmsg(params) {
        return fetch(URL.getUserEHmsg, params, true)
    },
    contribute(params) {
        return fetch(URL.contribute, params, true)
    },
    getRedPacketInfo(params) {
        return fetch(URL.redPacketInfo, params);
    },
    getTransferToBalance(params) {
        return fetch(URL.transferToBalance, params);
    },
    withdraw(params) {
        return fetch(URL.withdraw, params);
    },
    userWithdrawAccount(params) {
        return fetch(URL.userWithdrawAccount, params);
    },
    shareConfig(params) {
        return fetch(URL.shareConfig, params, true)
    },
    checkTel(params) {
        return postApi(URL.checkTel, params, false);
    },

    /**
     * ofo单车卡
     */
    getProductList(params) {
        return fetch(URL.productList, params, true)
    },
    /**
     * 查询用户拥有商品剩余量
     */
    remain(params) {
        return fetch(URL.remain, params)
    },
    /**
     * 微信支付
     * @param {*} params
     */
    wxPay(params) {
        return fetch(URL.wxPay, params);
    },
    /**
     * 支付宝支付
     * @param {*} params
     */
    aliPay(params) {
        return fetch(URL.aliPay, params);
    },
    /**
     * applePay
     * @param {*} params
     */
    applePay(params) {
        return fetch(URL.applePay, params);
    },
    shareConfig(params) {
        return fetch(URL.shareConfig, params, true)
    },
    /**
    /**
     * 支付宝端外支付
     * @param {*} params
     */
    aliPayWeb(params) {
        return fetch(URL.aliPayWeb, params);
    },
    /**
     * 支付宝端外支付
     * @param {*} params
     */
    unifiedOrder(params) {
        return fetch(URL.unifiedOrder, params);
    },
    /**
     * 支付宝端外支付
     * @param {*} params
     */
    unifiedOrderQuery(params) {
        return fetch(URL.unifiedOrderQuery, params);
    },
    /**
     * 骑行结束页评价弹窗
     */
    userComment(params) {
        return fetch(URL.userComment, params, true);
    },
    /**
     * 余额明细
     */
    balanceList(params) {
        return fetch(URL.balanceList, params);
    },
    /**
     * 红包明细
     */
    redPacketList(params) {
        return fetch(URL.redPacketList, params);
    },
    /**
     * 押金明细
     */
    bondList(params) {
        return fetch(URL.bondList, params);
    },
    /**
     * 获取短信验证码
     */
    getSMSCode(params) {
        return fetch(URL.activitySMSCode, params, true);
    },
    identification(params) {
        return fetch(URL.identification, params);
    },
    getRedirectURL(params) {
        return fetch(URL.getRedirectURL, params);
    },
    getZhiMaScore(params) {
        return fetch(URL.getZhiMaScore, params);
    },
    // 骑行结束月卡弹框
    getEndPage(params) {
        return fetch(URL.getEndPage, params);
    },
    // 领取月卡折扣券接口
    fetchMonthCardDiscountCoupon(params) {
        return fetch(URL.fetchMonthCardDiscountCoupon, params);
    },

    university(params) {
        return fetch(URL.university, params);
    },
    student(params) {
        return fetch(URL.student, params);
    },
    // 获取红包年卡信息
    getRedYearCardInfo(params) {
        return fetch(URL.redYearCardInfo, params);
    },
    // 通讯录
    getRedYearCardPhoneBookList(params) {
        return fetch(URL.redYearCardPhoneBookList, params);
    },
    // 发送邀请
    redYearCardPhoneBookInvite(params) {
        return fetch(URL.redYearCardPhoneBookInvite, params);
    },
    cmccStudent(params) {
        return fetch(URL.cmccStudent, params);
    },
    /**
     * 余额明细
     */
    balanceList(params) {
        return fetch(URL.balanceList, params);
    },
    /**
     * 红包明细
     */
    redYearCardRedPacketList(params) {
        return fetch(URL.redYearCardRedPacketList, params);
    },
    /**
     * 押金明细
     */
    bondList(params) {
        return fetch(URL.bondList, params);
    },
    reasonlist(params) {
        return fetch(URL.reasonlist, params);
    },
    withdrawApply(params) {
        return fetch(URL.withdrawApply, params);
    },
    cancelBondWithdraw(params) {
        return fetch(URL.cancelBondWithdraw, params);
    },
    addAlipayInfo(params) {
        return fetch(URL.addAlipayInfo, params);
    },
    bond2balance(params) {
        return fetch(URL.bond2balance, params);
    },
    judgeEnterpriseCyclingChart(params) {
        return fetch(URL.judgeEnterpriseCyclingChart, params);
    },
    /**
     * 获取自动续费方式
     */
    getPayContracts(params) {
        return fetch(URL.payContracts, params)
    },
    // 信用分
    creditScore(params) {
        return fetch(URL.creditScore, params);
    },
    creditHistory(params) {
        return fetch(URL.creditHistory, params);
    },
    // bondWithdraw(params){//退押金
    //     return fetch(URL.bondWithdraw,params)
    // },
    bondRefundDetail(params) { //退押金进度查询
        return fetch(URL.bondRefundDetail, params)
    },
    bondWithdrawType(params) { //押金类型判断
        return fetch(URL.bondWithdrawType, params)
    },
    /**
     * 获取世界杯月卡
     */
    getWorldCupCard(params) {
        return fetch(URL.worldCupCard, params);
    },
    newUserPurchaseConfig(params) { // 新用户充值配置
        return fetch(URL.newUserPurchaseConfig, params)
    },
    /**
     * 报修助手服务号
     */
    //报修助手服务号 /  获取消息列表
    getRepairMessageList(params) {
        return fetch(URL.getRepairMessageList, params)
    },
    //报修助手服务号 /  获取报修过程
    getRepairProcess(params) {
        return fetch(URL.getRepairProcess, params)
    },
    bonds(params) {
        return fetch(URL.bonds, params)
    },
    bondsV2(params) {
        return fetch(URL.bondsV2, params)
    },
    // 保险
    insuranceInfo(params) {
        return fetch(URL.insuranceInfo, params)
    },
    getInsuranceList(params) {
        return fetch(URL.insuranceList, params)
    },

    /**
     * 客服改版
     */
    // 热门问题
    getCustomServiceHot(params) {
        return fetch(URL.getCustomServiceHot, params)
    },
    // 菜单
    getCustomServiceMenu(params) {
        return fetch(URL.getCustomServiceMenu, params)
    },
    // 消息列表
    getCustomServiceMsgList(params) {
        return fetch(URL.getCustomServiceMsgList, params)
    },
    // 评价
    getCustomServiceVote(params) {
        return fetch(URL.getCustomServiceVote, params)
    },

    getStatus(params) {
        return fetch(URL.getStatus, params)
    },

    modifyAutoPayStatus(params) {
        return fetch(URL.modifyAutoPayStatus, params)
    },
    bonds(params) {
        return fetch(URL.bonds, params)
    },

    // 月卡购买状态查询接口
    checkOrderStatus(params) {
        return fetch(URL.checkOrderStatus, params, true)
    },
    //福车红包接口
    fucheRP(params){
        return fetch(URL.fucheRedPacket, params, true)
    },
    getFuCheInfo(params){
        return fetch(URL.fuCheInfo, params)
    }

}
