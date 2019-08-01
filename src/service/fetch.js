import axios from 'axios';
import util from '@/util/utils';
import * as URL from '../constant/url';

// 参数对象
let _param = {};

// 请求拦截器
axios.interceptors.request.use(function (conf) {
    // 在发送请求之前做些什么
    return conf;
}, function (err) {
    // 对请求错误做些什么
    window.saTrackCompat.click('ofoError', 'requestError', {
        msg: err.message,
        url: err.config.url
    });
    return Promise.reject(err);
});

// 响应拦截器
axios.interceptors.response.use(function (res) {
    // 对响应数据做点什么
    return res;
}, function (err) {
    // 对响应错误做点什么
    window.saTrackCompat.click('ofoError', 'responseError', {
        msg: err.message,
        url: err.config.url
    });
    return Promise.reject(err);
});

// 获取经纬度
let lnglat = {};
const lngLatUrlList = [URL.wxPay, URL.aliPay, URL.aliPayWeb, URL.withdrawApply];
util.getLocation(true, function (lat, lng) {
    lnglat = {
        lat,
        lng
    }
});

/**
 * 统一请求接口
 * @param {*} url 请求的接口路径
 * @param {*} params 请求的参数，参数格式以json对象形式
 * @param {*} flag  true：不需要token和source参数， false：默认需要token和source参数
 */
export function fetch(url, params, flag) {
    let formData = new FormData();
    if (!flag) {
        if (params) {
            if (!params['token']) {
                formData.append('token', _param['token']);
            }
            if (!params['source-version']) {
                formData.append('source-version', window.OFO_ENV.ofoAppSourceVersion);
            }
            if (!params['source']) {
                formData.append('source', _param['source']);
            }
        } else {
            formData.append('token', _param['token']);
            formData.append('source', _param['source']);
            formData.append('source-version', window.OFO_ENV.ofoAppSourceVersion);
        }
    }

    lngLatUrlList.forEach(v => {
        if (url == v) {
            params = Object.assign(params, lnglat);
        }
    });

    console.log(
        'request ================== sta',
        '\n',
        'request lnglat =>', lnglat,
        '\n',
        'request body   =>', params,
        '\n',
        'request token  =>', _param['token'],
        '\n',
        'request source =>', _param['source'],
        '\n',
        'request url    =>', url,
        '\n',
        'request ================== end'
    );

    for (let key in params) {
        formData.append(key, params[key]);
    }

    console.log('请求路径', url)
    return new Promise((resolve, reject) => {
        axios.post(url, formData)
            .then(res => {
                resolve(res.data);
            }, err => {
                reject(err);
            })
            .catch((err) => {
                reject(err)
            });
    });
}

// 封装axios的post请求
export function postApi(url, params, appendToken = true, needHead = true) {
    return new Promise((resolve, reject) => {
        if (appendToken) {
            let token = util.getToken();
            if (token != '') {
                params['token'] = token;
            }
        }

        axios({
            method: 'post',
            url,
            headers: needHead ? { 'Content-type': 'application/x-www-form-urlencoded' } : {},
            data: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        });
    });
}

// 封装axios的post请求
export function postJsonApi(url, params, appendToken = true) {
    return new Promise((resolve, reject) => {
        if (appendToken) {
            let token = util.getToken();
            if (token != '') {
                params['token'] = token;
            }
        }

        axios({
            method: 'post',
            url,
            headers: { 'Content-type': 'application/json' },
            data: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        });
    });
}

export function graphqlApi(url, query) {
    console.log('graphql参数', query);
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url,
            headers: { 'Accept': 'application/json' },
            params:{query:query}
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        });
    });
}

export function axiosConfig(config) {
    axios.defaults.timeout = 60000;

    _param['token'] = config['token'];
    _param['source'] = config['source'];

    // axios.defaults.baseURL = "//" + config['base_url'];
}
