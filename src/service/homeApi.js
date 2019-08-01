import {
    fetch,
    graphqlApi,
    postJsonApi,
    postApi,
} from './fetch';
import { getGold , goldVerityCode, graphqlHost, goldVerityWxCode} from '../constant/url';

const newsList = ({refresh_type, page_index = 1}) => `{
  kankan_list(refresh_type: ${refresh_type}, page_index:${page_index}) {
   news_list {
      id
      author
      is_vedio
      pics {
        is_vedio
        url
        width
        height
        ptype
      }
      publish_time
      source
      tags {
        id
        name
      }
      title
      text
      thumbs_num
      share_num
      detail_url
      is_thumbs_up
      is_top
      content_type
      cell_style
      label
      ad {
        adId
        adSource
        adType
        backupTargetUrl
        brand
        clickUrl
        desc {
          backupTargetUrl
          color
          img_url
          targetUrl
          text
        }
        entrance_text {
          backupTargetUrl
          color
          img_url
          targetUrl
          text
        }
        expireTime
        showUrl
        targetUrl
      }
    }
    count
    top_msg
  }
}`;
const topicList = ({topic, page_index = 1}) => `{
  topic_kankan_list (topic: "${topic}", page_index:${page_index}) {
   topic {
       topic_image
   }
   news {
      count
      top_msg
      news_list {
          id
          author
          is_vedio
          pics {
            is_vedio
            url
            width
            height
            ptype
          }
          publish_time
          source
          tags {
            id
            name
          }
          videos {
            url
            size
            quality
          }
          text
          thumbs_num
          share_num
          detail_url
          is_thumbs_up
          is_top
          content_type
          cell_style
          ad {
            adId
            adSource
            adType
            backupTargetUrl
            brand
            clickUrl
            desc {
              backupTargetUrl
              color
              img_url
              targetUrl
              text
            }
            entrance_text {
              backupTargetUrl
              color
              img_url
              targetUrl
              text
            }
            expireTime
            showUrl
            targetUrl
          }      
      }
    }
  }
}`;



export default {
    verityWxCode(params) {
        return postApi(goldVerityWxCode, params, true);
    },
    verityCode(params) {
        return postApi(goldVerityCode, params, true);
    },
    getGold(params) {
        return postApi(getGold, params, true);
    },
    newsList(params){
        console.log('获取资讯接口');
        return graphqlApi( graphqlHost + '?cid=986a569d61d1e6aba9f46d3b891ee9b7&source=5', newsList(params), false);
    },
    topicList(params){
        console.log('获取资讯接口');
        return graphqlApi( 'https://kankan-dev.api.ofo.com/graphql' + '?cid=986a569d61d1e6aba9f46d3b891ee9b7&source=5', topicList(params), false);
    },
}
