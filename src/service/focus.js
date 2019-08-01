import {
    graphqlApi,
    postJsonApi,
} from './fetch';
import {focusHost, graphqlHost} from '../constant/url';

const comments_op = ({id, type}) => `mutation{
  op(id: "${id}", type: ${type})
}`;


const myTopic = ({cid,session,page_index}) => `{
   my_topic(cid:"${cid}", session:"${session}", page_index:${page_index}) {
        session
        news_list {
            news{
                count
                news_list{
                    id
                    source
                    publish_time
                    label
                    text
                    detail_url
                    is_thumbs_up
                    pics{
                        height
                        is_vedio
                        ptype
                        url
                        width
                    }
                    thumbs_num
                    share_num
                    }
                }
        }
        topic_list {
            raw_topic
            topic_image
            total_count
        }
  }

}`;


export default {

    // 关注主题信息
    myTopic(params){
        let host = focusHost
        console.log(host);
        return graphqlApi(host, myTopic(params), false);
    },

    // 点赞
    comments_op(params){
        let host = focusHost
        console.log(host);
        return graphqlApi(host, comments_op(params), false);
    },

}
