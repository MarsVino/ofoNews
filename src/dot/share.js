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
 * 邀请好友埋点
 */
const shareCoupon = {
    dot_share_receive(){//分享落地首页
        olog('view', 'sharefriends_view_00002', 'share_receive');
    },
    dot_share_result(){//领取券结果页
        olog('view', 'sharefriends_view_00002', 'share_result');
    },
    dot_share_rules(){//分享落地首页—活动详细规则页
        olog('view', 'sharefriends_view_00002', 'share_rules');
    },
    dot_share_result_rules(){//领券结果页-活动规则页
        olog('view', 'sharefriends_view_00002', 'share_result_rules');
    },
    dot_click_share_receive(){//分享落地页—点击‘立即领取’button
        olog('click', 'sharefriends_click_00002', 'share_receive');
    },
    dot_click_share_rules(){//分享落地页—点击“活动规则-活动规则页
        olog('click', 'sharefriends_click_00002', 'share_rules');
    },
    dot_click_share_result_rules(){//领券结果页—活动详细规则页
        olog('click', 'sharefriends_click_00002', 'share_result_rules');
    },
    dot_click_share_result_use(){//领券结果页—点击‘立即用车’
        olog('click', 'sharefriends_click_00002', 'share_result_use');
    },
    dot_click_share_result_share(){//领券结果页—点击‘分享好友’
        olog('click', 'sharefriends_click_00002', 'share_result_share');
    },
    dot_click_share_result_allcoupon(){//查看券列表点击
        olog('click', 'sharefriends_click_00002', 'share_result_allcoupon');
    },
    dot_click_share_result_change(){//修改手机号点击
        olog('click', 'sharefriends_click_00002', 'share_result_change');
    },
};

export default shareCoupon;
