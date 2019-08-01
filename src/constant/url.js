import Utils from '../util/utils';
let env = Utils.getEnv();
//定义Host变量
let activityHost = '//activity.api.ofo.com',
    orderHost = '//order.api.ofo.com',
    sanHost = '//san.ofo.so',
    userHost = '//user.api.ofo.com',
    qatestHost = '//qatest.api.ofo.com',
    qamasterHost = '//qamaster.api.ofo.com',
    B2BHost = '//b2b.api.ofo.com',
    baseHost = '//base.api.ofo.com',
    configHost = '//san.ofo.so',
    productHost = '//product.api.ofo.com',
    depositHost = '//deposit.api.ofo.com',
    depositHostName = '//deposit.api.ofo.com'; //免密支付自动续费
let adsHost = 'https://ma.ofo.com';
let newsHost = '//news.api.ofo.com';
let kankanHost = 'https://ma.ofo.com';
let graphqlHost = 'https://kankan.api.ofo.com/graphql';
let upLoadHost = 'https://ads.api.ofo.com/uploadFiles';

let focusHost = 'https://kankan-dev.api.ofo.com/graphql?cid=5ae9edc2c9a929ace39b9724d93b3d1c';



// kankanHost = 'https://adunion.ofo.com';
// graphqlHost = 'https://kankan-test.api.ofo.com/graphql';

console.log('当前环境（env）为：' + env);

if (env == 'production') {
    console.log('当前环境（env）为：' + env);
} else if (env == 'testing') {
    activityHost = qamasterHost;
    orderHost = qamasterHost;
    sanHost = qamasterHost;
    userHost = qamasterHost;
    B2BHost = qamasterHost;
    baseHost = qamasterHost;
    configHost = qamasterHost;
    productHost = qamasterHost;
    depositHost = qamasterHost;
    newsHost = '//qamaster.news.api.ofo.com';
    adsHost = 'https://ma.ofo.com';
    depositHostName = qamasterHost; //免密支付自动续费
    kankanHost = 'https://adunion.ofo.com';
    graphqlHost = 'https://kankan-test.api.ofo.com/graphql';
    upLoadHost = 'https://ads-dev.api.ofo.com/uploadFiles'

} else {
    activityHost = qatestHost;
    orderHost = qatestHost;
    sanHost = qatestHost;
    userHost = qatestHost;
    B2BHost = qatestHost;
    baseHost = qatestHost;
    configHost = qatestHost;
    productHost = qatestHost;
    depositHost = qatestHost;
    //adsHost = 'https://review.ofo.com';
    adsHost = 'https://adunion.ofo.com';
    newsHost = '//qamaster.news.api.ofo.com';
    depositHostName = qatestHost; //免密支付自动续费
    kankanHost = 'https://adunion.ofo.com';
    graphqlHost = 'https://kankan-test.api.ofo.com/graphql';
    upLoadHost = 'https://ads-dev.api.ofo.com/uploadFiles';
}

export const energeapi = activityHost + '/activity/energyBar/statement'; //积分商城能量明细
export const repairapi = orderHost + '/ofo/Api/order/repairStatusDetail'; //报修优化
export const queryUserComplaint = orderHost + '/ofo/Api/repair/queryUserComplaint'; //报修申诉结果
export const userComplaint = orderHost + '/ofo/Api/repair/userComplaint'; //报修申诉
export const upload = sanHost + '/ofo/Api/util/images/upload'; //上传图片
export const activityList = orderHost + '/ofo/Api/endPage/activityList'; //报修申诉


export const qiyecardapi = B2BHost + '/businessCard/getEnterpriseInfo'; //企业年卡--名称&背景图
export const qiyecardtimeapi = B2BHost + '/businessCard/info'; //企业年卡--有效时间
export const qiyecardunbundapi = B2BHost + '/businessCard/unbind'; //企业年卡--解绑

export const cancelApi = userHost + '/ofo/Api/user/cancelPreCheck'; //查询是否可以注销
export const inviteInfo = activityHost + '/activity/inviteUser/inviteConfig'; //邀请详细
export const invitePhoneList = activityHost + '/activity/inviteUser/unregistedList'; //获取用户手机号列表
export const invite = activityHost + '/ofo/Api/aff'; //接受邀请接口

export const getEnergy = activityHost + '/ofo/Api/activity/cyclingboard/getOrderEnergy'; //骑行结束页--能量排行
export const orderInfo = orderHost + '/ofo/Api/v5/orderInfo'; //骑行结束页--获取行程详情
export const getAds = adsHost + '/ads/getAd'; //骑行结束页--获取广告列表
export const getAdRed = userHost + '/ofo/Api/activity/ad/red'; //骑行结束页--获取广告列表

export const wallet = userHost + '/ofo/Api/v4/info/wallet'; //钱包信息

export const feedback = baseHost + '/api/v3/report/feedback'; //意见反馈提交
export const feedbackList = baseHost + '/api/v3/report/feedback/list'; //意见反馈查询

export const config = configHost + '/ofo/Api/config'; //获取用户信息
export const checkTel = B2BHost + '/outter/cpa/checkTel'; //商业化校验手机号
export const unfinished = orderHost + '/ofo/Api/v2/unfinished';
export const pricing = orderHost + '/ofo/Api/pricing/info'; //获取计费规则
export const user = userHost + '/ofo/Api/v4/info/user'; //获取用户信息

export const verifyCode = sanHost + '/ofo/Api/v2/getVerifyCode'; // 验证图形 + 发送短信
export const getCaptcha = sanHost + '/ofo/Api/v2/getCaptcha'; // 发送图形
export const loginTo = sanHost + '/ofo/Api/login' // 验证短信 + 登录

export const couponShare = activityHost + '/activity/couponShare/config';
export const getShareCoupon = activityHost + '/activity/couponShare/getShareCoupon';
export const getUserEHmsg = activityHost + '/ofo/Api/activity/earthHour/getUserEHmsg'; //地球一小时详情
export const contribute = activityHost + '/ofo/Api/activity/earthHour/contribute' //地球一小时

export const redPacketInfo = userHost + '/redPacketInfo'; //红包信息
// export const transferToBalance = '//activity.api.ofo.com' + '/ofo/Api/activity/redPacketBicycle/transferToBalance';
export const transferToBalance = sanHost + '/ofo/Api/activity/redPacketBicycle/transferToBalance';
export const withdraw = depositHost + '/ofo/Api/redPacket/withdraw'; //提现
export const userWithdrawAccount = userHost + '/cash/userWithdrawAccount'; //判断是否有路径

// 支付
export const applePay = sanHost + '/ofo/Api/v3/payment'; //余额支付也用这个地址
export const wxPay = sanHost + '/ofo/Api/wechat/app/deposit';
export const aliPay = sanHost + '/ofo/Api/alipayDeposit';
export const aliPayWeb = sanHost + '/ofo/Api/alipayWebDeposit'; //端外支付宝支付
export const unifiedOrder = depositHost + '/cash/unifiedOrder'; // 云闪付、翼支付
export const unifiedOrderQuery = depositHost + '/cash/unifiedOrder/query'; //支付状态查询

// 单车卡
export const productList = productHost + '/ofo/Api/v1/product/productList'; // 单车卡
export const getEndPage = activityHost + '/activity/getEndPage'; // 骑行结束页月卡弹框
export const fetchMonthCardDiscountCoupon = activityHost + '/activity/monthCard/fetchMonthCardDiscountCoupon'; // 领取月卡折扣券接口
export const remain = productHost + '/v2/product/info/remain'; // 查询用户拥有商品剩余量

export const shareConfig = activityHost + '/activity/couponShare/config';
export const userComment = orderHost + '/ofo/Api/order/userComment'; //骑行结束页评价

// 资金明细
export const balanceList = userHost + '/cash/balance/changeList'; //余额明细
export const redPacketList = userHost + '/cash/redPacket/changeList'; //红包明细
export const redYearCardRedPacketList = userHost + '/cash/redYearCard/redPacket/changeList'
export const bondList = userHost + '/cash/bond/changeList'; //押金明细
export const activitySMSCode = userHost + '/ofo/Api/auth/activitySMSCode'; //获取短信验证码
// 押金认证
export const bonds = baseHost + '/cash/bonds';
export const bondsV2 = baseHost + '/cash/v2/bonds'; //  红包年卡免压
export const identification = userHost + '/ofo/Api/identification';
export const getRedirectURL = userHost + '/ofo/Api/zhima/getRedirectURL';
export const getZhiMaScore = userHost + '/ofo/Api/zhima/getZhiMaScore';
export const university = sanHost + '/ofo/Api/university'; // 获取学校列表
export const student = sanHost + '/ofo/Api/auth/images/upload'; // 学生认证
export const redYearCardInfo = activityHost + '/redYearCard/info'; // 红包年卡信息
export const redYearCardPhoneBookList = activityHost + '/redYearCard/phoneBook/list' // 通讯录
export const redYearCardPhoneBookInvite = activityHost + '/redYearCard/phoneBook/invite'; // 发送邀请
export const cmccStudent = sanHost + '/ofo/Api/auth/student/identification'; // 中国移动学生认证

//新闻详情
//newsHost = "http://10.200.19.89:2500";
export const newsList = newsHost + '/v1/kankanList'; // 新闻列表
export const newsDetail = newsHost + '/v1/newsDetail'; // 新闻详情
export const getAttitude = newsHost + '/v1/getAttitude'; // 获取顶踩结果
export const setAttitude = newsHost + '/v1/setAttitude'; // 获取顶踩结果

// 退押金
export const reasonlist = sanHost + '/ofo/Api/cash/bondWithdraw/reasonlist'; //退押金原因列表
export const withdrawApply = sanHost + '/ofo/Api/withdraw/apply'; //退押金
export const cancelBondWithdraw = userHost + '/ofo/Api/cash/cancelBondWithdraw'; //送余额bondWithdrawType
export const addAlipayInfo = userHost + '/ofo/Api/puser/addAlipayInfo'; //送余额
export const bond2balance = depositHost + '/cash/bond/bond2balance'; //押金转余额
// export const bondWithdraw = 'http://10.200.48.155:9306' + '/bondWithdraw'; //退押金
export const bondRefundDetail = depositHost + '/bondRefundDetail'; //退押金进度查询
export const bondWithdrawType = depositHost + '/bondWithdrawType' //退押金状态

// 企业排行榜
export const judgeEnterpriseCyclingChart = activityHost + '/ofo/Api//activity/enterpriseCyclingChart/judgeEnterpriseCyclingChart';


// 信用分
export const creditScore = userHost + '/api/v3/credit/score'; //押金转余额
export const creditHistory = userHost + '/api/v3/credit/history'; //押金转余额
//自动续费
export const payContracts = depositHostName + '/cash/contracts'; // 单车卡common/contracts


//  报修助手服务号
export const getRepairMessageList = orderHost + '/ofo/Api/repair/getRepairMessageList'; //报修助手服务号 /  获取消息列表
export const getRepairProcess = orderHost + '/ofo/Api/repair/getRepairProcess'; //报修助手服务号 /  获取报修过程
export const worldCupCard = activityHost + '/ofo/Api/activity/worldCupMonthCard';
// export const worldCupCard = 'https://www.easy-mock.com/mock/5affc2dfc20d695226bef9a7/example/'

//  新用户特惠实验
export const newUserPurchaseConfig = activityHost + '/activity/oneYuanBenefit/goods'; //获取新用户充值配置

// 保险
export const insuranceInfo = depositHostName + '/insurance/web/info'; // 零售页面
export const insuranceList = depositHostName + '/insurance/web/list' //用户购买历史列表

//  客服
export const getCustomServiceHot = userHost + '/customService/hot' // 热门问题
export const getCustomServiceMenu = userHost + '/customService/menu' // 菜单
export const getCustomServiceMsgList = userHost + '/customService/msgList' // 消息列表
export const getCustomServiceVote = userHost + '/customService/vote' // 评价


// 设置自动支付
export const getStatus = activityHost + '/ofo/Api/activity/170501MayDayStatus';
export const modifyAutoPayStatus = userHost + '/ofo/Api/puser/modifyAutoPayStatus'; //押金转余额

//月卡购买状态查询接口
export const checkOrderStatus = productHost + '/v2/product/info/checkOrderStatus';

//福车红包查询接口
export const fucheRedPacket = orderHost + '/ofo/Api/order/fuCheRedPacket';

//查询最后失联车信息
export const fuCheInfo = orderHost + '/ofo/Api/order/getFuCheInfo';
export const energyJump = activityHost + '/ofo/Api/activity/energyBar/duibaLogin';

//新看看
export const inviteMaterial = kankanHost + '/ads/getSharePageMtrls';
export const inviteFriendList = kankanHost + '/richman/GetFriend';
export const uploadReportImg = kankanHost + '/img_server/upload';// 上传图片

// 燕琴接口
export const getGold = kankanHost + '/WeChatService/GetCoin';
export const goldVerityCode = kankanHost + '/WeChatService/Vrify';
export const goldVerityWxCode = kankanHost + '/WeChatService/Code';


//资讯相关接口 彭恺提供
export {
    graphqlHost,
    upLoadHost,
    focusHost,
};

//金币接口
export const goldAdd = kankanHost + '/richman/CoinIncome'; //增加金币
export const goldConvert = kankanHost + '/richman/CoinOutgo';  //金币兑换/提现
export const getGoldDetail = kankanHost + '/richman/GetCoinBill'; //查询金币详情
export const getGoldConfig = kankanHost + '/richman/GetConfig'; //查询金币配置

// export const goldConvert = kankanHost + '/richmanmock/CoinOutgo';  //金币兑换/提现
// export const getGoldDetail = kankanHost + '/richmanmock/GetCoinBill'; //查询金币详情
// export const getGoldConfig = kankanHost + '/richmanmock/GetConfig'; //查询金币配置
// export const goldAdd = kankanHost + '/richmanmock/CoinIncome'; //增加金币 test

// 任务墙接口
export const getAd = adsHost + '/new_task/GetAd'; // 获取广告列表
export const getSingleAd = adsHost + '/new_task/GetSingleAd'; // 获取某一条广告





