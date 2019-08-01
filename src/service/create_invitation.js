import {
    fetch,
    graphqlApi,
    postJsonApi,
    postApi,
} from './fetch';
import { inviteMaterial , inviteFriendList, graphqlHost, uploadReportImg} from '../constant/url';

const detail = ({id}) => `{
  news_detail(id:"${id}") {
   summary {
      id
      author
      is_vedio
      pics {
        is_vedio
        url
      }
      publish_time
      source
      tags {
        id
        name
      }
      text
      thumbs_num
      title
      share_num
      is_top
      cell_style
      content_type
      detail_url
    }
    recommend {
      id
      is_vedio
      pics {
        is_vedio
        url
      }
      source
      title
    }
  }
}`;

export default {
    inviteFriendList(params) {
        return postJsonApi(inviteFriendList, params, false);
    },
    inviteMaterial(params) {
        return postJsonApi(inviteMaterial, params, false);
    },
    newsDetail(params){
        return graphqlApi(graphqlHost, detail(params), false);
    },
    uploadImg(base64){
        let _retryMax = 2;
        let _retryNum = 1;

        return new Promise((resolve, reject) => {
            (function upload() {
                let errorMsg = '';

                let retry = () => {
                    if (_retryNum < _retryMax) {
                        _retryNum++;
                        upload();
                    } else {
                        reject(errorMsg);
                    }
                }

                postApi(uploadReportImg,
                    {image01: base64}
                ,false, false).then(res => {
                    console.log('>>>>>>>', res);
                    if (res.errorCode === 200) {
                        resolve(res.url);
                    } else {
                        errorMsg = res.msg;
                        retry();
                    }
                }).catch(() => {
                    errorMsg = '网络异常，请稍后重试';
                    retry();
                })
            })()
        })
    }
}
