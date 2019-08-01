import {
    fetch,
    graphqlApi,
    postJsonApi,
    postApi,
} from './fetch';
import {graphqlHost} from '../constant/url';

const detail = ({id}) => `{
  news_detail(id:"${id}") {
   summary {
      id
      label
      author
      avatar_url
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
    newsDetail(params){
        let host = graphqlHost
        if(params.cid){
            host = graphqlHost + '?cid=' + params.cid
        }else{
            host = graphqlHost + '?cid=123'
        }
        console.log(host);
        return graphqlApi(host, detail(params), false);
    }
}
