import {
    postJsonApi,
} from './fetch';
import { goldAdd , goldConvert, getGoldDetail, getGoldConfig} from '../constant/url';

export default {
    // 增加金币
    goldAdd(params) {
        console.log('准备请求goldAdd');
        return postJsonApi(goldAdd, params, true);
    },

    // 兑换金币
    goldConvert(params) {
        console.log('准备请求goldConvert');
        return postJsonApi(goldConvert, params, true);
    },

    // 查询金币详情
    getGoldDetail(params) {
        console.log('准备请求getGoldDetail');
        return postJsonApi(getGoldDetail, params, true);
    },

    // 获取金币配置
    getGoldConfig(params) {
        console.log('准备请求getGoldConfig');
        return postJsonApi(getGoldConfig, params, true);
    },
}
