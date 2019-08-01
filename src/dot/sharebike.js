
function olog(type, eventName, eventInfo) { // 埋点兼容

    var from = window.OFO_ENV.query().from;
    if (type === 'view') {
        if (from) {
            window.saTrackCompat.view(eventName, eventInfo + '_' + from)
            window.ofoTrack.pageShow(eventName, { View: eventInfo + '_' + from })
        }
        else {
            window.saTrackCompat.view(eventName, eventInfo)
            window.ofoTrack.pageShow(eventName, { View: eventInfo })
        }
    } else {
        if (from) {
            window.saTrackCompat.click(eventName, eventInfo + '_' + from)
            window.ofoTrack.controlClick(eventName, { Click: eventInfo + '_' + from })
        }
        else {
            window.saTrackCompat.click(eventName, eventInfo)
            window.ofoTrack.controlClick(eventName, { Click: eventInfo })
        }
    }
}

/**
 * 一元打卡打点mixin
 */
const shareBikeDotMixin = {
    methods: {
        dot_enterPage() {// 进入活动页
            olog('view', 'ShareBike_view_180305', 'index');
        },
        dot_clickJoin() {// 点击【加入我们】按钮
            olog('click', 'ShareBike_click_180305', 'join')
        }
    }
};

export default shareBikeDotMixin;
