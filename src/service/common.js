import { fetch} from './fetch';
import * as URL from '../constant/url';
export default {
    /**
     * 获取用户信息
     * @param {*} params
     */
    getInfo(params) {
        return fetch(URL.user, params);
    }
}
