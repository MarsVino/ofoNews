import Utils from '../util/utils'
const env = Utils.getEnv();

import { postJsonApi, postApi } from './fetch'
import { getAd, getSingleAd} from '../constant/url'

let verityCodeHost = 'https://greencard-dev.api.ofo.com'; // 任务墙验证码接口
if (env == 'production') {
    console.log('当前环境（env）为：' + env);
} else if (env == 'testing') {
    verityCodeHost = 'https://greencard-dev.api.ofo.com'; // 任务墙验证码接口
} else {
    verityCodeHost = 'https://greencard.api.ofo.com'; // 任务墙验证码接口
}

let sendSms = verityCodeHost + '/sendSms'
let verifySms = verityCodeHost + '/verifySms'

export default{
    // 获取广告列表
    getAd (params) {
        console.log('任务墙：开始请求GetAd');
        return postJsonApi(getAd, params, false);
    },
    // 获取广告详情
    getSingleAd (params) {
        console.log('任务墙：开始请求GetSingleAd');
        return postJsonApi(getSingleAd, params, false);
    },

    // 获取手机号验证码
    getSMSCode(params) {
        return postApi(sendSms, params, true);
    },

    // 验证验证码
    verifySms(params) {
        return postApi(verifySms, params, true, true);
    }
}
