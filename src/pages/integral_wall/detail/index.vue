<template>
	<div class="container">
		<header>
			<span class="r-title" @click="showHideRule">奖励规则 ></span>
			<swiper :options="swiperOption" ref="mySwiper">
				<!-- slides 334-->
				<swiper-slide class="" v-for="(logo, i) in logos" :key="i">
                    <div class="logo-bar" v-for="item in logo" :key="item.id">
                        <div class="img-bar" @click="anchorLink(item)">
                            <img :src="item.img" alt="">
                        </div>
                        <span>{{item.name}}</span>
                    </div>
                </swiper-slide>
				<!-- Optional controls -->
				<div class="swiper-pagination" slot="pagination" v-show="logos.length > 1"></div>
			</swiper>
		</header>
        <!-- <div class="gold-bar">
            今日获得任务奖励 ：<span>44556</span> 金币
        </div> -->
        <section class="main">
            <div class="banner-bar" v-for="item in ad_info" :key="item.plan_id">
                <div :id="item.plan_id" class="banner" @click="showDesc(item)">
                    <img :src="item.img_url" alt="" srcset="">
                    <p :class="{p2: item.finished}" v-if="item.plan_id">
                        任务奖励：ofo {{taskTypeMap(item.task_type)}}
                        <img src="../static/arrow.png" alt="" srcset="">
                    </p>
                </div>
                <transition name="slide-down">
                    <div class="desc-bar" v-if="item.show_desc">
                        <img :src="item.logo" alt="" srcset="">
                        <h3>{{item.advertiser}}任务卡</h3>
                        <ul class="desc">
                            <li v-for="(ls, i) in item.task_explanation" :key="i">
                                {{`${i+1}. ${ls}`}}
                            </li>
                        </ul>
                        <button v-if="item.finished && item.share_allowed" @click="openShare(item)">
                            邀请好友一起领取ofo {{taskTypeMap(item.task_type)}}
                        </button>
                        <button v-else @click="goDetail(item)" >
                            立即前往赚取{{taskTypeMap(item.task_type)}}
                        </button>
                    </div>
                </transition>
            </div>
        </section>
        <!-- 奖励规则 -->
        <rule :visible="showModal" @close="showModal = false" @click-overlay="showModal = false"></rule>
        <loading v-if="showLoading"></loading>
	</div>
</template>

<script>
    import api from '@/service/integral_wall'
    import CommonAPI from '../../../service/common'
    import utils from '../../../util/utils'
    import {chunk} from 'lodash'
	import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import rule from './rule'
    import Loading from '@/components/common/loadModal.vue';

	export default {
        name: 'integral_wall',
		components: {
			swiper,
            swiperSlide,
            rule,
            Loading
		},
		data () {
			return {
                showModal: false,
                showLoading: false,
                finished: false,
                logos: [],
                daily_coin: 44556,
                ad_info: [
                    {
                        advertiser: '',
                        plan_id: '',
                        img_url: require('../../gold_wallet/static/pic_loading.png'),
                        logo: '',
                        task_explanation: [],
                        award_coin: '',
                        task_type: '',
                        target_url: '',
                        finished: false,
                        show_desc: false,
                        share_allowed: true
                    },
                    // {
                    //     advertiser: '360借条',
                    //     plan_id: 'test_taskwall_1116',
                    //     img_url: require('../static/banner.png'),
                    //     logo: require('../static/360logo.png'),
                    //     task_explanation: [
                    //         "下载360借条；在360借条首页输入ofo注册手机号码，点击我要借钱，进入信用认证流程",
                    //         "填写完成信用资料后，等待360借条授信评估即可",
                    //         "认证评估将收到短信通知（审核结果以360借条评估为准），收到通知后ofo金币钱包即会获得任务奖励。"
                    //     ],
                    //     award_coin: '',
                    //     task_type: 'monthlyCard',
                    //     target_url: 'https://www.360.cn/',
                    //     finished: false,
                    //     show_desc: false,
                    //     share_allowed: true
                    // }
                ],
                swiperOption: {
                    pagination: ".swiper-pagination"
                },
                request: {
                    request_id: '',
                    cid: '',
                    os: '',
                    tel_num: '',
                    geo: {
                        latitude: 0,
                        longitude: 0
                    }
                }
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
            },
            isLikelyInApp () {
                return window.OFO_ENV.isLikelyInApp
            }
        },
        created () {
            // 获取requestId
            this.request.request_id  = utils.generateUUID();

            // 获取经纬度
            utils.getLocation(true, (lat, lng) => {
                console.log('任务墙：经纬度获取：', lat, lng)
                this.request.geo = {
                    latitude: lat,
                    longitude: lng
                }
            })

            // 获取设备
            console.log('获取设备：', navigator.platform);
            this.request.os = navigator.platform == 'iPhone'? 'ios' : 'android';

            // 获取手机号
            if (this.$route.query.tel_num) {
                this.request.tel_num = this.$route.query.tel_num
                this.getAd();
            }

            // 获取cid
            console.log('获取cid：', this.$route)
            if (this.isLikelyInApp) {
                if (typeof this.$route.query.cid == 'undefined' || this.$route.query.cid == '') {
                    this.getCid();
                }
            }
        },
		mounted() {
            console.log('进入任务墙')
            window.ofoResponseProxy('setTitle',['今日任务']);
            this.swiper.slideTo(0, 1000, false)
            this.logReport('view', 'AdList', 'ChannelView');

            if (typeof this.$route.query.cid !== 'undefined' && this.$route.query.cid !== '') {
                this.request.cid = this.$route.query.cid;
                this.getAd();
            }

            console.log('是否端内：', this.isLikelyInApp)
        },
        methods: {
            getCid () {
                this.showLoading = true;
                CommonAPI.getInfo().then( data => {
                    console.log('APP 用户信息', data)
                    this.showLoading = false;
                    if(data.errorCode == 200) {
                        const {cid} = data.values.info;
                        this.request.cid = cid;
                        console.log('cid获取成功：', cid);
                        this.getAd();
                    } else {
                        window.tip(data.msg);
                    }
                }, err => {
                    this.showLoading = false;
                    window.tip(err.msg || '请求失败');
                }).catch((e) => {
                    this.showLoading = false;
                    window.tip('网络繁忙，请您稍后再试');
                })
            },
            getAd () {
                this.showLoading = true;
                console.log('getAd请求参数', this.request)
                api.getAd(this.request).then(data => {
                    this.showLoading = false;
                    if (data.error_code == 200) {
                        if (data.values) {
                            let adInfo = data.values.ad_info
                            if (adInfo.length > 0) {
                                adInfo.forEach(item => {
                                    item.show_desc = false
                                })
                                this.ad_info = adInfo;
                                this.logReport('view', 'AdList', 'AdBannerView');

                                // 提取logo信息
                                let logos = []
                                adInfo.forEach(item => {
                                    let obj = {
                                        id: item.plan_id,
                                        name: item.advertiser,
                                        img: item.logo
                                    }
                                    logos.push(obj)
                                });

                                this.logos = chunk(logos, 6);
                            }
                        }
                    } else {
                        window.tip(data.msg);
                    }
                }).catch(e => {
                    this.showLoading = false;
                    console.log('getAD 错误：')
                    console.log(e)
                    window.tip('网络繁忙，请您稍后再试');
                })
            },
            taskTypeMap (val) {
                let str = val.toString();
                switch (str) {
                    case 'bonus':
                        return '余额';
                        break;
                    case 'coin':
                        return '金币';
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
            showDesc (data) {
                data.show_desc = !data.show_desc;
                if (data.show_desc) {
                    this.logReport('click', 'AdList', 'AdBannerClick', {
                        adbanner_id: data.plan_id
                    });
                }
            },
            anchorLink (data) {
                location.hash = `#${data.id}`;
                this.ad_info.forEach(item => {
                    if (item.plan_id === data.id) {
                        item.show_desc = true
                    }
                })
            },
            goDetail (data) {
                // if (window.OFO_ENV.isLikelyInApp) {
                console.log('落地页：', data)
                if (data.target_url !== '') {
                    this.logReport('click', 'AdList', 'AdStatementClick', {
                        adbutton_id: data.plan_id
                    });
                    window.location.href = data.target_url;
                }
                // } else {
                //     this.$router.push({
                //         path: 'detail',
                //         query: {
                //             plan_id: data.plan_id
                //         }
                //     })
                // }
            },
            openShare (item) {
                window.ofoCommonShare.showShare({
                    title: 'ofo月卡免费领，最后5000张',
                    types: [0, 1], // {0: wxFriend, 1: wxCircle, 2: qqFriend, 3: qqZone, 4: 微博}
                    desc: '做任务，领周卡、月卡或者季卡',
                    imgURL: 'https://freego.ofo.com/kankan/share-icon.jpg',
                    shareURL: 'https://freego.ofo.com/kankan/integral_wall/index.html#/detail?plan_id='+ item.plan_id,
                    // shareURL: 'http://192.168.120.1:8081/integral_wall/index.html#/detail?plan_id='+ item.plan_id,
                    shareType: 0, // {0: shareWeb, 1: shareImage}
                }, {
                    appCb(res) {
                        if (res.value.status == 1) {
                            console.log('分享成功')
                        }
                    }
                });
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
            },
            showHideRule (e) {
                e.preventDefault();
                this.showModal = true;
                console.log(this.showModal);
            }
        }
	}
</script>

<style lang="scss">
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
		header{
            @include font-common(10);
            width: 100%;
			height: rem(231);
			background: url('../../../assets/integral_wall/head-bg.jpg') no-repeat;
			background-size: 100% 100%;
            overflow: hidden;
			.r-title{
				color: #fff;
                font-size: rem(10);
                position: absolute;
                top: rem(8);
                right: rem(21);
                z-index: 10;
            }
            .swiper-container{
                width: rem(334);
                // padding-top: rem(52);
                margin-top: rem(52);
                .swiper-slide{
                    display: flex;
                    flex-wrap: wrap;
                }
                .logo-bar{
                    width: rem(78);
                    text-align: center;
                    margin-left: rem(25);
                    .img-bar{
                        width: 100%;
                        height: rem(50);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: rem(7);
                        background: #fff;
                        border-radius: rem(5);
                        img{
                            width: 100%;
                            max-height: rem(50);
                        }
                    }
                    span{
                        line-height: rem(20);
                    }
                }
                .swiper-pagination{
                    position: relative;
                    bottom: rem(2)
                }
                .swiper-pagination-bullet-active{
                    background: #000;
                    opacity: 0.7;
                }
            }
        }
        .gold-bar{
            width: rem(330);
            height: rem(33);
            line-height: rem(33);
            margin: rem(-4) 0 rem(8) rem(23);
            background: url('../../../assets/integral_wall/gold-bg.png') no-repeat;
            background-size: 100% 100%;
            text-align: center;
            @include font-common(13, 'FZLTZHK--GBK1-0');
            span{
                font-size: rem(16);
                color: #CF3341;
            }
        }
        .main{
            width: 100%;
            padding:0 rem(23);
            padding-bottom: rem(50);
            .banner-bar{
                margin-bottom: rem(10);
            }
            .banner{
                width: 100%;
                height: rem(158);
                position: relative;
                img{
                    width: 100%;
                    height: rem(158);
                    border-radius: rem(8);
                }
                p{
                    width: 100%;
                    height: rem(23);
                    padding: 0 rem(18);
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
                .p2{
                    height: 100%;
                    border-radius: rem(8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    @include font-common(13)
                }
            }
            .desc-bar{
                position: relative;
                z-index: 0;
                // height: 100px;
                width: rem(315);
                margin-left: rem(8);
                padding: rem(10) rem(20);
                background:rgba(255,254,240,1);
                box-shadow:0px 2px 9px 0px rgba(206,203,163,0.4) inset;
                border-radius:0px 0px rem(5) rem(5);
                text-align: center;
                // will-change: height;
                // transition: height 0.3s ease-in-out;
                img{
                    position: absolute;
                    top: rem(12);
                    left: rem(21);
                    // width: rem(75);
                    height: rem(14);
                }
                h3{
                    text-align: center;
                }
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
                    // background: linear-gradient(rgba(255,239,56,0.73),rgba(217,101,35,0.73));
                    background: #FFDA01;
                    border: none;
                    border-radius: rem(12);
                    @include font-common(11);
                }
            }
        }
    }
</style>
