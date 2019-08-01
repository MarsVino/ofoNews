<style lang="scss" scoped>
    @import '../../../style/variable.scss';
    @import '../../../style/rem.scss';
    @import '../../../style/mixin_text.scss';
    html {
        font-size: 20vw;
    }
    .focusBetter{
        height: 100%;
        position: absolute;
        top:0;
        bottom:0;
        right:0;
        left: 0;
    }
    .focus-home {
        background-color: #F2F2F2;
        width: 100%;
        overflow: hidden;
        font-size:rem(18);
        @include medium-text;
        .theme {
            background-color: #fff;
            padding: rem(15) 0 rem(10);
            .theme_title {
                padding-left: rem(20);
            }
            .theme_list {
                display: flex;
                text-align: center;
                padding: rem(20) 0 0 rem(10);
                overflow-x: auto;
                .theme_box {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 20%;
                    flex: none;
                    .theme_img {
                        border: rem(1) solid rgba(74,144,226,1);
                        width: rem(45);
                        height: rem(45);
                        border-radius: 50%;
                        margin-bottom: rem(5);
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    label {
                        font-size:rem(12);
                        font-family:PingFangSC-Light;
                        margin-top: rem(6);
                    }
                }
            }
        }
        .informationFlow{
            background-color: #fff;
            padding: rem(17) rem(20) rem(20);
            margin-top: rem(10);
            .title{
                display: flex;
                font-size: rem(12);
                padding-bottom: rem(16);
                .topic{
                    color:rgba(74,144,226,1);
                    padding: 0 rem(4);
                    border-radius:rem(12.5);
                    border:1px solid rgba(74,144,226,1);
                    text-align: center;
                    span{
                        line-height:rem(25);
                    }
                }
                .time {
                    font-size: rem(12);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(136,136,136,1);
                    padding-right: rem(20);
                }
            }
            .zan {
                display: flex;
                margin-right: rem(12.5);
                font-size: rem(11);
                .commonZan {
                    background-repeat: no-repeat;
                    background-image: url("../../../assets/contribute/dissupport.png");
                    background-size: cover;
                    width: rem(17);
                    height: rem(15);
                    margin-right: rem(5);
                }
                .agreeZan{
                    background-image: url("../../../assets/contribute/greenZan.png");
                }
                .agreeNum{
                    span{
                        color: #38A0DC;
                    }

                }
                .commonNum{
                    display: inline-block;
                    color:rgba(136,136,136,1);
                    height:rem(17);
                    font-size:rem(12);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    line-height:rem(17);
                }
            }
            .information_jike {
                display: flex;
                overflow-x: auto;
                .informationFlow_jike {
                    border: 1px dashed black;
                    margin-right: rem(15);
                    .content {
                        width: rem(290);
                        .content_img{
                            height: rem(150);
                            width: 100%;
                        }
                        .content_desc{
                            padding: rem(10) rem(15) 0;
                            font-size:rem(13);

                            overflow: hidden;
                            display: -webkit-box;
                            text-overflow: ellipsis;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                        }
                    }
                    .content_footer{
                        font-size:rem(10);
                        padding: rem(15) rem(15) rem(10);
                        font-family:PingFangSC-Light;
                        font-weight:300;
                        color:rgba(136,136,136,1);
                        display: flex;
                        label{
                            flex: 1 0 auto;
                        }
                        .share {
                            display: flex;
                            font-size: rem(11);
                            .commonShare {
                                background-repeat: no-repeat;
                                background-image: url("../../../assets/focus/share.png");
                                background-size: cover;
                                width: rem(15);
                                height: rem(15);
                                margin-right: rem(5);
                            }
                        }
                    }
                }
            }
            .information_zixun {
                .informationFlow_zixun {
                    margin-bottom: rem(10);
                    border-bottom:rem(1) solid rgba(221,221,221,1);
                    .content{
                        display: flex;
                        .content_zixun{
                            width: rem(210);
                            padding-right: rem(20);
                            .content_desc{
                                font-size:rem(18);
                                overflow: hidden;
                                display: -webkit-box;
                                text-overflow: ellipsis;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;

                            }
                        }
                        .img_zixun{
                            img{
                                width: rem(120);
                                height: rem(75);
                            }
                        }
                    }
                    .content_footer{
                        font-size:rem(10);
                        padding: rem(30) 0 rem(20);
                        font-family:PingFangSC-Light;
                        font-weight:300;
                        color:rgba(136,136,136,1);
                        display: flex;
                        label{
                            flex: 1 0 auto;
                        }
                        .share {
                            display: flex;
                            font-size: rem(11);
                            .commonShare {
                                background-repeat: no-repeat;
                                background-image: url("../../../assets/focus/share.png");
                                background-size: cover;
                                width: rem(15);
                                height: rem(15);
                                margin-right: rem(5);
                            }
                        }
                    }
                }
            }
        }
    }

</style>

<template>
    <div class="focus-home focusBetter" ref="betterScroll">
        <div>
            <div class="theme">
                <label class="theme_title">已关注主题列表</label>
                <div class="theme_list">
                    <div class="theme_box" @click="test" v-for="(item, index) in my_topic_list">
                        <div class="theme_img">
                            <img :src="item.topic_image"  alt="">
                        </div>
                        <label>{{item.raw_topic.length > 5?  `${item.raw_topic.substr(0,5)}...`: item.raw_topic}}</label>
                    </div>
                </div>
            </div>
            <div v-for="(item, index) in my_news_list">
                <div class="informationFlow" v-if="item.news.news_list.length > 0">
                    <div v-if="item.news.news_list[0].source === '即刻'">
                        <div class="title">
                            <div class="topic">
                                <span>{{item.news.news_list[0].label}}</span>
                            </div>
                            <label style="flex:1"></label>
                            <label class="time">{{item.news.news_list[0].publish_time}}</label>
                        </div>
                        <div class="information_jike">
                            <div class="informationFlow_jike" v-for="(sub_item, sub_index) in item.news.news_list">
                                <div class="content" @click="toLink(sub_item.detail_url)">
                                    <img class="content_img" :src="sub_item.pics[0].url" alt="">
                                    <!--<div class="content_desc">{{sub_item.text.length > 30? `${sub_item.text.substr(0,30)}...`: sub_item.text}}</div>-->
                                    <div class="content_desc">{{sub_item.text}}</div>
                                </div>
                                <div class="content_footer">
                                    <label>{{sub_item.source}}</label>
                                    <div class="zan" @click="commonAgree(index,sub_index)">
                                        <div :class="{agreeZan: sub_item.is_thumbs_up}" class="commonZan">
                                        </div>
                                        <div class="commonNum" :class="{agreeNum: sub_item.is_thumbs_up}">
                                            <span>{{sub_item.thumbs_num ? sub_item.thumbs_num: '赞'}}</span>
                                        </div>
                                    </div>
                                    <div class="share">
                                        <div class="commonShare"></div>
                                        {{sub_item.share_num ? sub_item.share_num: '分享'}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="item.news.news_list[0].source === '一点资讯'">
                        <div class="title">
                            <div class="topic">
                                <span>{{item.news.news_list[0].label}}</span>
                            </div>
                            <label style="flex:1"></label>
                            <label class="time">{{item.news.news_list[0].publish_time}}</label>
                        </div>
                        <div class="information_zixun">
                            <div class="informationFlow_zixun" v-for="(sub_item, sub_index) in item.news.news_list">
                                <div class="content" @click="toLink(sub_item.detail_url)">
                                    <div class="content_zixun">
                                        <div class="content_desc">{{sub_item.text}}</div>
                                    </div>
                                    <div class="img_zixun">
                                        <img class="content_img" :src="sub_item.pics[0].url" alt="">
                                    </div>
                                </div>
                                <div class="content_footer">
                                    <label>{{sub_item.source}}</label>
                                    <div class="zan" @click="commonAgree(index,sub_index)">
                                        <div :class="{agreeZan: sub_item.is_thumbs_up}" class="commonZan">
                                        </div>
                                        <div class="commonNum" :class="{agreeNum: sub_item.is_thumbs_up}">
                                            <span>{{sub_item.thumbs_num ? sub_item.thumbs_num: '赞'}}</span>
                                        </div>
                                    </div>
                                    <div class="share">
                                        <div class="commonShare"></div>
                                        {{sub_item.share_num ? sub_item.share_num: '分享'}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import api  from '../../../service/focus';
    import Loading from '../../../components/common/loadModal.vue';
    import utils from '../../../util/utils';
    import BScroll from 'better-scroll'
    import CommonAPI from '../../../service/common'


    export default {
        name: 'focus',

        components: {
            Loading,
            BScroll,
        },

        data() {
            return {
                cid: '5ae9edc2c9a929ace39b9724d93b3d1c',
                session: '',
                pageno: 1,
                my_topic_list: [],
                my_news_list: [],
            }
        },

        computed: {},

        created() {
            this.getTopic();
        },

        mounted() {
            window.ofoResponseProxy('setTitle',['我关注的主题']);
            this.$nextTick(() => {
                this._initScroll();
            })
        },

        methods: {
            test() {

                // window.location = 'ofolink://ofo.com/businessMap?topic=xx&source=xx&readBonusEntryCount=10&minValidReadTimePerEntry=10'
            },

            getCid () {
                CommonAPI.getInfo()
                    .then( data => {
                        if(data.errorCode == 200) {
                            const {cid} = data.values.info;
                            this.cid = cid;
                            this.intial()
                        } else {
                            console.log(data.msg);
                        }
                    }, err => {
                        window.tip(err.msg || '请求失败');
                    }).catch((e) => {
                    window.tip('网络繁忙，请您稍后再试');

                })
            },
            // 页面滑动
            _initScroll () {
                if (!this.scroll) {
                    let betterScroll = this.$refs.betterScroll;
                    this.scroll = new BScroll(betterScroll, {
                        eventPassthrough: 'horizental',
                        click: true,
                        probeType: 3,
                    })

                    this.scroll.on('touchEnd', (pos) => {
                        // 滚动到底部
                        let clientHeight = betterScroll.clientHeight //可见高度
                        let scrollHeight = betterScroll.scrollHeight //滚动高度
                        let scrollTop = scrollHeight - clientHeight
                        console.log(clientHeight, scrollHeight, Math.abs(pos.y))
                        if (Math.abs(pos.y) >= scrollTop + 50) {
                            // if (this.apiIng || !this.apiRequest) {
                            //     console.log('不符合接口条件：', this.apiIng || !this.apiRequest)
                            //     return
                            // }
                            this.pageno++
                            this.getTopic()
                        }
                    })
                } else {
                    this.scroll.refresh()
                }
            },

            delayInitScroll () {
                this.$nextTick(() => {
                    this._initScroll()
                })
            },

            // 打开App
            openApp () {
                let url = encodeURIComponent(window.location.href + '&outIn=1')
                console.log(url)
                window.location = `ofolink://ofo.com/web?url=${url}&title=投稿`
                //如果没安装app, 则去下载
                setTimeout(function(){
                    window.location = '//common.ofo.so/app/'
                },2000)
            },
            // 链接
            toLink (url) {
               window.location = url;
            },

            // 图片预览
            preview(index) {
                if (this.isApp) {
                    this.previewInApp(index)
                    return
                }
                this.$imagePreview({
                    images: this.imgList,
                    index: index,
                    defaultOpt: {
                        galleryPIDs: true
                    }
                })
            },
            previewInApp(index){
                switch(window.OFO_ENV.currentEnv){
                    case window.OFO_ENV.ENV.INSIDE_NEW_IOS_APP:
                    case window.OFO_ENV.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP:
                        const link =
                            `ofolink://ofo.com/imagebrowser?${this.getPicsParam()}&currentPage=${index}`;
                        window.ofoBridge .callHandler('router', {url: link},  (response) => {
                            console.log('客服端返回', response);
                        });
                        break;
                    case window.OFO_ENV.ENV.INSIDE_NEW_ANDROID_APP:
                    case window.OFO_ENV.ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP:
                        const v = [
                            {url:'https://ma.ofo.com/adp/files/f255171cf41f5f319af90dcc1c0357df/maimai_exp_0604.png',is_vedio:false},
                            {url:'https://ma.ofo.com/adImage/ofo_cpt/360jietiao/rf_banner_20.png',is_vedio:false}
                        ];
                        window.ofoBridge.router('imagebrowser',{
                            imagePaths: this.getPicsParam(false),
                            index:index
                        });
                }
            },

            // 某一评论点赞
            commonAgree (index,subIndex) {
                const news_detail = this.my_news_list[index].news.news_list[subIndex];
                if (news_detail.apiReq) {
                    return
                }
                this.my_news_list[index].news.news_list[subIndex].apiReq = true
                if (news_detail.is_thumbs_up) {
                    news_detail.thumbs_num--
                } else {
                    news_detail.thumbs_num++
                }
                news_detail.is_thumbs_up = !news_detail.is_thumbs_up
                console.log(news_detail)
                let params = {
                    id: news_detail.id,
                    type: news_detail.is_thumbs_up ? 'thumbs_up': 'cancel_thumbs_up'
                }
                api.comments_op(params).then(data => {
                    news_detail.apiReq = false
                    console.log(data)
                }, err => {
                    news_detail.apiReq = false
                    if (news_detail.is_thumbs_up) {
                        news_detail.thumbs_num--
                    } else {
                        news_detail.thumbs_num++
                    }
                    news_detail.is_thumbs_up = !news_detail.is_thumbs_up
                    window.tip(err.msg || '网络繁忙，请您稍后再试');
                }).catch((e) => {
                    news_detail.apiReq = false
                    if (news_detail.is_thumbs_up) {
                        news_detail.thumbs_num--
                    } else {
                        news_detail.thumbs_num++
                    }
                    news_detail.is_thumbs_up = !news_detail.is_thumbs_up
                    window.tip('网络繁忙，请您稍后再试')
                })
            },

            // 评论列表
            getComment () {
                let params = {
                    contribution_id: this.newsId,
                    cid: this.cid,
                    flag: this.flag,
                    pageno: this.commentPage,
                    pagenum: this.commentNum,
                }
                api.contribute_comments(params).then(data=>{
                    this.apiIng = false
                    console.log('contribute_comments',data)
                    let dataP = data.data.contribution_comments
                    this.flag = dataP.flag
                    this.totalCountComment = dataP.total;
                    if (this.commentPage == 1 && dataP.list[0]) {
                        this.hotComment = dataP.list[0].comment_type == 'hot'
                        console.log('this.hotComment', this.hotComment)
                    }
                    this.commentData = this.commentData.concat(dataP.list)
                    if (dataP.list.length < 20) {
                        this.apiRequest = false
                    }
                    // this.$nextTick(() => {
                    //     this._initScroll()
                    // })
                }, err => {
                    this.apiIng = false
                    window.tip(err.msg || '网络繁忙，请您稍后再试');
                }).catch((e) => {
                    this.apiIng = false
                    window.tip('网络繁忙，请您稍后再试')
                })
                // this.$nextTick(() => {
                //     this._initScroll()
                // })
            },

            // 获取关注详情
            getTopic () {
                const params = {
                    cid: this.cid,
                    session: this.session,
                    page_index: this.pageno
                }
                this.isShowLoading = true;
                api.myTopic(params)
                    .then( data => {
                        if(data.errors) {
                            window.tip(data.errors[0].message)
                        } else {
                            console.log(data);
                            data = data.data.my_topic;
                            if (data) {
                                //TODO
                                this.my_topic_list = data.topic_list.slice(0,20);
                                this.session = data.session;
                                this.my_news_list = this.my_news_list.concat(data.news_list);
                            }
                        }
                        this.$nextTick(() => {
                            this._initScroll()
                        })
                    }, err => {
                        this.isShowLoading = false;
                        window.tip(err.msg || '网络繁忙，请您稍后再试');
                    }).catch((e) => {
                    window.tip('网络繁忙，请您稍后再试');

                })
                this.$nextTick(() => {
                    this._initScroll()
                })
            },

        },
    }
</script>
