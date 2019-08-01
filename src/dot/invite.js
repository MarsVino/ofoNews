function olog(type, eventName, eventInfo) { // 埋点兼容
  if (type === 'view') {
    window.saTrackCompat.view(eventName, eventInfo)
    window.ofoTrack.pageShow(eventName, { View: eventInfo})
  } else {
    window.saTrackCompat.click(eventName, eventInfo)
    window.ofoTrack.controlClick(eventName, { Click: eventInfo})
  }
}
/**
 * 端内，分ios和android
 */
var source = window.OFO_ENV.sourceForApi == 1 || window.OFO_ENV.sourceForApi == 2;
/**
 * 邀请好友埋点
 */
const inviteDotMixin = {
    dot_invite_homepage(){//端内邀请页
      if(source){
        olog('view', 'invitefriends_view_00001', 'invite_homepage');
      }else{
        olog('view', 'invitefriends_view_00002', 'wechat_invite_homepage');
      }
    },
    dot_invite_rules(){//活动详情页
      if(source){
        olog('view', 'invitefriends_view_00001', 'invite_rules');
      }else{
        olog('view', 'invitefriends_view_00002', 'wechat_invite_rules');
      }
    },
    dot_invite_friends(){//通讯录列表页
      olog('view', 'invitefriends_view_00001', 'invite_friends');
    },
    dot_invite_homepage_share(){//首页分享控件
      olog('view', 'invitefriends_view_00001', 'invite_homepage_share');
    },
    dot_invite_friends_share(){//通讯录分享控件
      olog('view', 'invitefriends_view_00001', 'invite_friends_share');
    },
    dot_invite_nofriends(){//无好友时弹窗
      olog('view', 'invitefriends_view_00001', 'invite_nofriends');
    },
    dot_invite_button_click(){//端内点击分享
      if(source){
        olog('click', 'invitefriends_click_00001', 'invite_button');
      }else{
        olog('click', 'invitefriends_click_00002', 'wechat_invite_button');
      }
    },
    dot_invite_friends_click(){//点击查看通讯录
      olog('click', 'invitefriends_click_00001', 'invite_friends');
    },
    dot_invite_rules_click(){//点击查看规则
      if(source){
        olog('click', 'invitefriends_click_00001', 'invite_rules');
      }else{
        olog('click', 'invitefriends_click_00002', 'receive_rules');
      }
    },
    dot_invite_friends_share_click(){//通讯录点击分享
      olog('click', 'invitefriends_click_00001', 'invite_friends_share');
    },
    dot_receive_homepage(){//端外接受邀请页
      olog('view', 'invitefriends_view_00002', 'receive_homepage');
    },
    dot_wechat_invite_rules(){//端外邀请首页进入活动规则页
      olog('view', 'invitefriends_view_00002', 'wechat_invite_rules');
    },
    dot_receive_button(){//接受邀请
      olog('click', 'invitefriends_view_00002', 'receive_button');
    },
    dot_receive_rules_click(){//接受邀请页点击活动规则
      olog('view', 'invitefriends_view_00002', 'receive_rules');
    }
    
};

export default inviteDotMixin;
