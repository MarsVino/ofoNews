import {
    graphqlApi,
    postJsonApi,
} from './fetch';
import {graphqlHost} from '../constant/url';

// 投稿资讯信息detail
const Contribution = ({cid, contribution_id}) => `{
  contribution_detail(cid:"${cid}", contribution_id: "${contribution_id}") {
    author_head
    author_nick
    images{
      url
      is_vedio
      width
      height
      ptype
    }
    reward_coins
    post_time
    text
    title
    topic_pic
    total_people
    total_count
    question
    text_coins
    my_choice
    my_comment_flag
    choice_info {
      count
      viewpoint
    }
    choice_type
    }
}`;

// 时间线
const TimeLine = ({cid, contribution_id}) => `{
  contribution_detail(cid:"${cid}", contribution_id: "${contribution_id}") {
    text
    title
    time_line_type
    time_line {
      content
      event_type
      post_time
      time_type
    }
    topic_pic
  }
}`;

// 投票
const Vote = ({cid, contribution_id, choice}) => `mutation{
  vote(cid:"${cid}", contribution_id: "${contribution_id}", choice: "${choice}") {
    choice_info {
      count
      viewpoint
    }
    total_people
    total_count
    }

}`;

const comments_op = ({cid, comment_id, op_type}) => `mutation{
  comments_op(cid:"${cid}", comment_id: "${comment_id}", op_type: ${op_type})
}`;

const contribute_comments = ({flag, contribution_id, cid, pageno, pagenum}) => `{
  contribution_comments(cid:"${cid}", contribution_id: "${contribution_id}", flag: ${flag}, pageno: ${pageno}, pagenum: ${pagenum}) {
        flag
        list {
            comment_type
            cid
            content
            created_at
            id
            my_thumbs_up
            thumbs_num
            user_head
            vote_choice
        }
        total
  }

}`;


// 发表观点
const ViewPoint = ({cid, contribution_id, comments}) => `mutation{

  post_contribution_comments(cid:"${cid}", contribution_id: "${contribution_id}", comments: "${comments}") {
        result
        coins
        comment_id
  }
}`;

// 投稿
const  PostContribution= ({cid, title, text, pic}) => `mutation{

  post_contribution(
    cid:"${cid}", 
    title: "${title}", 
    text: "${text}"
    ${pic.length == 0 ? '' : `,pic: "${pic.join(',')}"`}
    )

}`;

const delete_comment = ({cid, comment_id, op_type}) => `mutation{
  comments_op(
    cid:"${cid}", 
    comment_id: "${comment_id}", 
    op_type: ${op_type}
    )
}`;


export default {

    // 投稿资讯信息
    contribute(params){
        return graphqlApi(graphqlHost, Contribution(params), false);
    },

    // 时间线
    timeLine(params){
        return graphqlApi(graphqlHost, TimeLine(params), false);
    },

    // 投稿
    vote(params){
        let host = graphqlHost
        console.log(host);
        return graphqlApi(host, Vote(params), false);
    },

    // 发表观点
    viewPoint(params){
        let host = graphqlHost
        console.log(host);
        return graphqlApi(host, ViewPoint(params), false);
    },

    // 投稿
    postContribution(params){
        let host = graphqlHost
        console.log(host);
        console.log(params)
        return graphqlApi(host, PostContribution(params), false);
    },

    // 投稿评论操作
    comments_op(params){
        let host = graphqlHost
        console.log(host);
        return graphqlApi(host, comments_op(params), false);
    },

    // 投稿评论
    contribute_comments(params){
        let host = graphqlHost
        return graphqlApi(host, contribute_comments(params), false);
    },

    delete_comment(params) {
        let host = graphqlHost
        return graphqlApi(host, delete_comment(params), false);
    }
}
