<template>
    <div class="container">
        <nav>
            <img :src="ofoLogo" alt="">
            <p>
                ofo小黄车app <br/>
                刷段子、聊八卦、上ofo看看
            </p>
            <button class="btn btn-yellow" @click="openApp">打开</button>
        </nav>
        <main class="main">
            <div class="m-head">
                <button @click="goAdList">更多任务等你来完成</button>
                <span @click="ruleModal = true">奖励规则></span>
            </div>
            <h3 class="m-title">{{ad_info.advertiser}}任务卡</h3>
            <div class="content">
                <h3>任务悬赏人：<img :src="ad_info.logo" alt=""></h3>
                <div class="banner">
                    <img :src="ad_info.img_url" alt="" srcset="">
                    <p>任务奖励：{{taskTypeMap(ad_info.task_type)}}</p>
                </div>
                <div class="desc-bar">
                    <ul class="desc">
                        <li v-for="(ls, i) in ad_info.task_explanation">
                            {{`${i+1}. ${ls}`}}
                        </li>
                    </ul>
                    <button class="btn btn-yellow" @click="toTaskUrl">
                        立即前往赚取{{taskTypeMap(ad_info.task_type)}}
                    </button>
                </div>
            </div>
            <div class="m-foot">
                <div class="f-title">
                    <span class="line"></span>
                    <span class="text">完成任务后，金币会转入绑定的手机号码</span>
                    <span class="line"></span>
                </div>
                <div class="f-content">
                    <span class="ipt-phone">手机号码&nbsp;&nbsp;&nbsp;&nbsp;{{tel_num}}</span>
                    <button class="btn btn-yellow" @click="editPhone">更换手机号码</button>
                </div>
                <!-- <button class="btn btn-yellow">马上兑换现金</button> -->
            </div>
        </main>
        <rule
            :visible="ruleModal"
            @close="ruleModal = false"
            @click-overlay="ruleModal = false"></rule>
        <popue
            :visible="phoneModal"
            :close-hide="closeIcon"
            @close="phoneModal = false">
            <div slot="wrap" class="phone-modal-wrap">
                <main class="modal-main">
                    <input class="phone-ipt"
                        v-model="tel_num"
                        type="tel" pattern="\d*" placeholder="建议填写ofo注册的手机号码">
                    <div class="code-bar">
                        <input type="number"
                            v-model="tel_code" placeholder="输入验证码" pattern="\d*">
                        <button class="btn"
                            :class="{'disabled':vDisabled}"
                            :disabled="vDisabled"
                            @click="getVerityCode">{{timeText}}</button>
                    </div>
                </main>
                <footer>
                    <button class="btn btn-yellow" @click="goMerchant">进入任务页面</button>
                </footer>
            </div>
        </popue>
        <loading v-if="isShowLoading"></loading>
    </div>
</template>

<script>
    import api from '@/service/integral_wall'
    import utils from '../../../util/utils'
    import rule from './rule'
    import popue from './popup'
    import Loading from '@/components/common/loadModal.vue';
    import hexSha1 from 'js-sha1'
    import _ from 'lodash'

    const APPSECET = '79f687feeb8b63a3f67ce4a44dd9af5a'

    export default {
        name: 'integral_wall',
        components: {
            rule,
            popue,
            Loading
		},
        data () {
            return {
                ruleModal: false,
                phoneModal: true,
                isShowLoading: false,
                vDisabled: false,
                closeIcon: false,
                ofoLogo: require('../../../assets/common/ofo-icon.png'),
                timeText: '获取验证码',
                request_id: '',
                plan_id: '',
                tel_num: '',
                tel_code: '',
                timeBtn: '',
                time_num: 60, // 获取验证码倒计时
                downTime: '',
                ad_info: {
                    advertiser: '',
                    finished: false,
                    img_url: require('../../gold_wallet/static/pic_loading.png'),
                    logo: '',
                    plan_id: '',
                    target_url: '',
                    task_explanation: [],
                    task_type: ''
                }
            }
        },
        computed: {
            isLikelyInApp () {
                return window.OFO_ENV.isLikelyInApp
            }
        },
        created () {
            // 获取requestId
            this.isShowLoading = true;
            this.request_id = utils.generateUUID();
            if(this.request_id){
                this.isShowLoading = false;
            }

            // 获取plan_id
            this.plan_id = this.$route.query.plan_id;

            clearInterval(this.downTime)
            this.downTime = null
        },
        mounted () {
            window.ofoResponseProxy('setTitle',['今日任务']);
            // this.getAdDetail()
        },
        methods: {
            getAdDetail () {
                let params = {
                    request_id: this.request_id,
                    plan_id: this.plan_id,
                    tel_num: this.tel_num
                }
                api.getSingleAd(params).then(data => {
                    console.log(data)
                    if (data.values) {
                        let adInfo = data.values.ad_info
                        this.logReport('view', 'AdList', 'AdBannerView');
                        if (adInfo.length > 0) {
                            this.ad_info = adInfo[0]
                        }
                    }
                }).catch(e => {
                    window.tip('网络繁忙，请您稍后再试');
                })
            },
            getVerityCode () {
                this.tel_Code = '';

                if (this.time_num < 60) {
                    window.tip('已发送验证码，稍后再试')
                    return
                }
                if (!utils.phonePattern(this.tel_num)) {
                    window.tip('请输入正确的手机号码')
                    return
                }
                let params = {
                    phone: this.tel_num,
                    signature: hexSha1(`${APPSECET}phone${this.tel_num}${APPSECET}`).toUpperCase()
                }
                console.log('获取手机验证码：', params)
                api.getSMSCode(params)
                    .then(data => {
                        console.log('验证码',data)
                        if (data.error_code == 0) {
                            window.tip(data.error_msg)
                        } else {
                            window.tip('发送成功')
                            this.vDisabled = true
                            this.countDown()
                        }
                    }, err =>{
                        window.tip('网络错误，请稍后再试')
                    });
            },
            sendCard () {
                if (!utils.phonePattern(this.tel_num)) {
                    window.tip('请输入正确的手机号码')
                    return
                }
                if (this.tel_code == '') {
                    window.tip('请输入验证码')
                    return
                }
                const params = {
                    phone: this.tel_num,
                    verify_code: this.tel_code,
                    signature: hexSha1(`${APPSECET}phone${this.tel_num}verify_code${this.tel_code}${APPSECET}`).toUpperCase()
                }
                api.verifySms(params).then((res) => {
                    console.log(res)
                    if (res.code == 200) {
                        this.phoneModal = false;

                        this.getAdDetail()
                        this.logReport('view', 'AdList', 'ChannelView');

                        clearInterval(this.downTime)
                        this.downTime = null
                        this.timeText = '获取验证码'
                        this.time_num = 60
                        this.tel_code = ''
                    } else {
                        window.tip(res.msg)
                    }
                })
            },
            countDown () {
                this.timeBtn++;
                this.downTime = setInterval(()=> {
                    this.timeText = this.time_num + 's'
                    this.time_num = this.time_num - 1
                    // console.log(this.time_num)
                    if (this.time_num == -1) {
                        this.timeText = '获取验证码'
                        this.vDisabled = false
                        this.time_num = 60
                        clearInterval(this.downTime)
                        this.downTime = null
                    }
                }, 1000)
            },
            goMerchant () {
                this.sendCard()
            },
            editPhone () {
                this.phoneModal = true;
                this.closeIcon = true;
                this.vDisabled = false;
            },
            openApp () {
                let url = encodeURIComponent(window.location.href)
                if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
                    // ios手机上要编码两次
                    url = encodeURIComponent(encodeURIComponent(window.location.href))
                }
                // let label =  this.detail.label
                // if(label.length > 8){
                //     label = label.substr(0,8) + '...'
                // }
                // const title = encodeURIComponent(label)
                window.location = `ofolink://ofo.com/web?url=${url}`
                //如果没安装app, 则去下载
                setTimeout(function(){
                    window.location = '//common.ofo.so/app/'
                },2000)
            },
            taskTypeMap (val) {
                let str = val.toString();
                switch (str) {
                    case 'bonus':
                        return 'bonus';
                        break;
                    case 'coin':
                        return 'coin';
                        break;
                    case 'weekCard':
                        return '周卡';
                        break;
                    case 'monthlyCard':
                        return '月卡';
                        break;
                    case 'quarterCard':
                        return '季卡';
                        break;
                    case 'halfYearCard':
                        return '半年卡';
                        break;
                    case 'yearCard':
                        return '年卡';
                        break;
                    default:
                        return str;
                }
            },
            goAdList () {
                this.$router.push({
                    path: '/',
                    query: {
                        tel_num: this.tel_num
                    }
                })
            },
            toTaskUrl () {
                if (this.ad_info.target_url !== "") {
                    this.logReport('click', 'AdList', 'AdStatementClick', {
                        adbutton_id: this.ad_info.plan_id
                    });
                    window.location.href = this.ad_info.target_url
                }
            },
            logReport (type, eventPage, eventName, eventInfo = {}) {
                let info = {
                    'event_classify': this.isLikelyInApp ? 'AdMission' : 'AdMissionWeChat',
                    'event_page': eventPage,
                    'event_name': eventName,
                    'event_id':'',
                    'event_type': type,
                    'event_info': eventInfo
                }
                if (type == 'click') {
                    window.saTrackCompat.clickExt(info.event_page, info.event_name, info)
                } else {
                    window.saTrackCompat.viewExt(info.event_page, info.event_name, info)
                }
            }
        },
        destroyed () {
            clearInterval(this.downTime)
            this.downTime = null
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../style/variable.scss";
	@import "../../../style/rem.scss";
    @import "../../../style/mixin_text.scss";

    @mixin font-common($s, $f: 'FZLTXHK--GBK1-0', $w: 400) {
        font: {
            size: rem($s);
            family: $f;
            weight: $w;
        }
    }

    html{
		font-size: 20vw;
		overflow: visible;
		background: #fff;
	}
	.container{
		width: 100%;
		height: 100%;
        nav{
            position: sticky;
            top: 0;
            left: 0;
            z-index: 100;
            display: flex;
            align-items: center;
            padding: rem(16) rem(22);
            background: #fff;
            box-shadow: 1px 0px 5px rgba($color: #000000, $alpha: 0.2);
            img{
                width: rem(27);
                height: rem(27);
            }
            p{
                margin-left: rem(13);
                @include font-common(10, 'FZLTZHK--GBK1-0');
            }
            button{
                margin-left: auto;
                width: rem(52);
                height: rem(23);
                @include font-common(13);
            }
        }
        .main{
            background: url('../../../assets/integral_wall/detail-bg.png') no-repeat;
            background-size: 100% auto;
            padding:0 rem(22);
            margin-bottom: rem(20);
            .m-head{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: rem(18) 0;
                button{
                    width: rem(145);
                    height: rem(23);
                    background: none;
                    color: #FFE100;
                    border: 1px solid rgba(255,228,3,1);
                    border-radius: rem(11);
                    @include font-common(12);
                }
                span{
                    color: #fff;
                    @include font-common(12);
                }
            }
            .m-title{
                text-align: center;
                color:rgba(90,42,13,1);
                @include font-common(16, 'FZLTZHK--GBK1-0');
                line-height: 2em;
            }
            .content{
                h3{
                    text-align: center;
                    color: #4E240B;
                    @include font-common(16, 'FZLTZHK--GBK1-0');
                    line-height: 3em;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        // width: rem(104);
                        height: rem(20);
                    }
                }
                .banner{
                    width: rem(330);
                    height: rem(158);
                    position: relative;
                    img{
                        width: rem(330);
                        height: rem(158);
                        border-radius: rem(8);
                    }
                    p{
                        width: 100%;
                        height: rem(23);
                        text-align: center;
                        line-height: 2em;
                        position: absolute;
                        bottom: 0;
                        background:rgba(0,0,0,0.5);
                        color: #fff;
                        border-radius: 0 0 rem(8) rem(8);
                        @include font-common(11);
                        img{
                            position: absolute;
                            bottom: rem(9);
                            right: rem(10);
                            width: rem(10);
                            height: rem(5);
                        }
                    }
                }
                .desc-bar{
                    position: relative;
                    z-index: 0;
                    // margin-top: rem(-3);
                    width: rem(315);
                    margin-left: rem(8);
                    padding: rem(10) rem(20);
                    background:rgba(255,254,240,1);
                    box-shadow:0px 2px 9px 0px rgba(206,203,163,0.4) inset;
                    border-radius:0px 0px rem(5) rem(5);
                    text-align: center;
                    ul{
                        padding: rem(10) 0;
                        text-align: left;
                        li{
                            line-height: rem(20);
                            color: #000;
                            @include font-common(10);
                        }
                    }
                    button{
                        width: rem(153);
                        height: rem(24);
                        @include font-common(11);
                    }
                }
            }
            .m-foot{
                width: rem(315);
                height: rem(100);
                background:rgba(181,181,181,0.2);
                border-radius: rem(8);
                margin-left: rem(8);
                margin-top: rem(17);
                text-align: center;
                padding: rem(22);
                .f-title{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .text{
                        @include font-common(10);
                        color: #000;
                    }
                    .line{
                        width: rem(35);
                        height: 1px;
                        background: #707070;
                    }
                }
                .f-content{
                    display: flex;
                    justify-content: space-between;
                    padding: rem(16) 0;
                    .ipt-phone{
                        width: rem(174);
                        height: rem(24);
                        line-height: rem(24);
                        background: rgba(181,181,181, 0.5);
                        color:rgba(0,0,0, 0.6);
                        @include font-common(11);
                    }
                    button{
                        width: rem(91);
                        height: rem(22);
                        @include font-common(10);
                    }
                }
                button{
                    width: rem(153);
                    height: rem(25);
                    @include font-common(10);
                }
            }
        }
    }
    .btn{
        border: none;
        border-radius: rem(11);
        background:rgba(181,181,181, 0.5);
    }
    .btn-yellow{
        background: $yellow-color;
        color: $text-black-color;
    }
    .disabled{
        opacity: 0.6;
    }
    .phone-modal-wrap{
        background: url('../../../assets/integral_wall/phone-bg.png') no-repeat;
        background-size: cover;
        width: rem(270);
        height: rem(266);
        margin-left: rem(25);
        .modal-main{
            width: 100%;
            height: rem(80);
            padding: rem(100) rem(37);
            input{
                border: none;
                height: rem(31);
                padding: 0 rem(20);
                @include font-common(12);
            }
            .phone-ipt{
                width: rem(198);
                margin-bottom: rem(13);
            }
            .code-bar{
                display: flex;
                justify-content: space-between;
                align-items: center;
                input{
                    width: rem(112);
                }
                button{
                    background: #fff;
                    width: rem(77);
                    height: rem(23);
                    color: #000;
                    @include font-common(12);
                }
            }
        }
        footer{
            margin-top: rem(20);
            text-align: center;
            button{
                width: rem(105);
                height: rem(27);
                @include font-common(12);
            }
        }
    }
</style>
