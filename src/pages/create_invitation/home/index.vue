<template>
    <div>
        <!-- swiper -->
        <swiper :options="swiperOption" class="my-swiper" v-if="items.length > 0" ref="mySwiper">
            <swiper-slide v-for="(item, index) in items" :key="index">
                <div class="slide">
                    <div class="img-wrapper">
                        <img class="pic" :src="item.img" alt="">
                    </div>
                    <div class="pic-desc">
                        <div class="title">{{item.summary}}</div>
                        <div class="desc">{{item.title}}</div>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div v-bind:style="{background: '#f6f7f8'}" class="second-block">
            <button class="btn-active" v-on:click="share">
                <span class="btn-text">分享我的邀请卡</span>
            </button>
        </div>
        <div class="third-block">
            <div class="invite-title">邀请记录</div>
            <div class="invite-result">已成功邀请<span v-bind:style="{color: '#ff8371'}">{{friends.length}}</span>名小伙伴，获赠
                <span
                    v-bind:style="{color: '#ff8371'}">{{coinNum}}个</span>金币</div>
            <div v-if="friends.length > 0">
                <div v-for="(item, index) in friends" :key="index" class="record">
                    <div  class="record-left">
                        <img class="header" :src="item.wxHeadImg">
                        <span>{{item.wxName}}</span>
                    </div>
                    <span>{{formatDate(item.timestamp)}}</span>
                </div>
            </div>
        </div>
        <div class="separator"></div>
        <div>
            <div class="rule-title">活动细则</div>
            <div class="rule-desc">
                <p>1. 分享您的专属邀请卡到微信，好友可通过识别二维码进入活动页领取888个金币，好友领取后，您也可同时获得同等金币奖励；</p>
                <p>2. 好友领取您分享的金币奖励后，30天内在ofo小黄车客户端看新闻赚取的金币数量，都会按照10%的数量奖励给您；</p>
                <p>3. 每个好友仅可领取一次。</p>
            </div>
        </div>
        <!-- loading部分 -->
        <loading v-if="uploading"></loading>
        <!-- 要生成图片DOM -->
        <div class="dialog-img" ref="image">
            <div class="top-img-wrapper">
                <img  v-if="activeIndex !== -1" class="top-img"
                      :src="items[activeIndex].img" crossOrigin='anonymous' />
            </div>
            <div class="dialog-img-second"  v-if="activeIndex !== -1">
                <div>{{items[activeIndex].summary}}</div>
                <div>{{items[activeIndex].title}}</div>
            </div>
            <div class="logo-wrapper">
                <div class="logo-left">
                    <div class="qrcode-wrapper">
                        <qrcode :value="qrcodeUrl" size="105" level="L"></qrcode>
                    </div>
                    <div>
                        <div class="logo-title">看新闻赚金币</div>
                        <div class="logo-title">长按扫码立即领取</div>
                        <div>
                            <span class="txt-bg">888金币</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img class="logo" src="~/assets/create_invitation/logo.png" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import API from '../../../service/create_invitation'
    import Loading from '../../../components/common/loadModal'
    import {get} from 'lodash'
    import CommonAPI from '../../../service/common'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import html2canvas from 'html2canvas';
    import qrcode from 'qrcode.vue';
    import util from '../../../util/utils'
    import 'swiper/dist/css/swiper.css';

    export default {
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    onSlideChangeEnd: (s) => {
                        console.log('触发事件了', s.activeIndex);
                        this.activeIndex = s.activeIndex;
                        console.log("*******",this.activeIndex);
                    }
                },
                qrcodeUrl: 'http://www.ofo.com',
                shareImg: false,
                activeIndex: -1,
                items: [],
                friends:[],
                generateImg: '', // 生成的图片
                cid:'',
                uploading: false,
            }
        },
        components:{
            swiper,
            swiperSlide,
            qrcode,
            Loading
        },
        computed:{
            coinNum: function(){
                const len = this.friends.length;
                if(len == 0){
                    return 0;
                }
                let count = 0;
                this.friends.map((friend)=>{
                    count += friend.coinIncome;
                });
                return count;
            },
            imageChangeFlag: function(){
                const {qrcodeUrl, activeIndex} = this
                return {
                    qrcodeUrl,
                    activeIndex
                }
            }
        },
        watch:{
            imageChangeFlag: function(val){
                console.log('检测到图片需要重新生成', val)
                this.generateImage()
            }
        },
        created(){
            this.getInviteMaterial();
        },
        mounted(){
            // console.log(this.formatDate(new Date(1541046490*1000)))
        },
        methods:{
            // 设置二维码链接
            commonUrl () {
                let redirect_uri = `http://freego.ofo.com/kankan/gold_wallet/index.html?cid=${this.cid}#/gold`;
                let rs =
                    `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8a36e65f1cecc632&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=code&scope=snsapi_userinfo&state=STATE`;
                if (util.getEnv() == 'production') {
                    redirect_uri = `https://kankan.ofo.com/gold_wallet/index.html?cid=${this.cid}#/gold`;
                    rs =
                        `https://freego.ofo.com/kankan/getwxCode.html?appid=wx8a36e65f1cecc632&scope=snsapi_userinfo&state=STATE&redirect_uri=${encodeURIComponent(redirect_uri)}`;

                }
                console.log('跳转页面', redirect_uri);
                this.qrcodeUrl = rs
            },
            callback(swiper){
                console.log(swiper.activeIndex);
            },
            formatDate(timestamp){
                // return moment(timestamp * 1000).format('YYYY.MM.DD HH:mm');
                return util.formatTime(new Date(timestamp * 1000), '.', 5);
            },
            getFriendList(){
                CommonAPI.getInfo().then( data => {
                    console.log('APP 用户信息', data)
                    if(data.errorCode == 200){
                        const {cid} = data.values.info;
                        console.log('>>>cid', cid);
                        this.cid = cid;
                        const params = {
                            cid,
                            requestId: util.generateUUID()
                        };
                        this.commonUrl()
                        API.inviteFriendList(params).then(data => {
                            if(data.errorCode == 200){
                                this.friends = get(data,'values.descendants',[]);
                                console.log('邀请列表', data);
                            }
                            console.log('获取到数据', data)
                        }, err => { window.tip('网络异常，请稍后再试');});

                    }
                })
            },
            getInviteMaterial() {
                const params = {
                    version: '1.0',
                    reqTime: (new Date()).valueOf(),
                    requestId: util.generateUUID()
                };
                API.inviteMaterial(params).then(data => {
                    if(data.errorCode == 200){
                        this.items = data.values.data;
                        this.activeIndex = 0;
                    }
                    this.getFriendList();
                    console.log('获取到数据', data)
                }, err => {
                    window.tip('网络异常，请稍后再试');
                    this.getFriendList();
                });
            },
            //生成图片
            generateImage(){
                html2canvas(this.$refs.image, {
                    logging: false,
                    useCORS: true,
                }).then(canvas => {
                    let ctx = canvas.getContext('2d');
                    // 【重要】关闭抗锯齿
                    ctx.mozImageSmoothingEnabled = false;
                    ctx.webkitImageSmoothingEnabled = false;
                    ctx.msImageSmoothingEnabled = false;
                    ctx.imageSmoothingEnabled = false;
                    this.generateImg = canvas.toDataURL("image/png");
                    //console.log('图片base64编码', this.generateImg);
                    if (!this.generateImg) {
                        console.log('分享图片生成失败');
                        this.shareImg = false
                    }else{
                        console.log('分享图片生成成功');
                        this.shareImg = true
                    }
                })
            },
            share() {
                let that = this;
                if (this.uploading) { return; } // 没有上传完不允许继续点击


                // 如果图片还没生成好，先生成图片
                if(!this.shareImg){
                    window.tip('网络异常，请稍后再试')
                    return
                }

                let str = 'base64,';
                let len = this.generateImg.indexOf(str) + str.length;

                this.uploading = true;
                console.time('uploadtime')
                API.uploadImg(this.generateImg.slice(len)).then(img => {
                    console.timeEnd('uploadtime')
                    that.uploading = false;
                    if (!img) { window.tip('网络开小差，再试一次'); return; }
                    console.log('图片生成啦',img);
                    console.time('openShare')
                    window.ofoCommonShare.showShare({
                        title: '这是会赚钱的看看',
                        types: [0, 1], // {0: wxFriend, 1: wxCircle, 2: qqFriend, 3: qqZone}
                        desc: '邀请好友得丰厚金币',
                        imgURL: img.replace('http://','https://'),
                        shareURL: img.replace('http://','https://'),
                        shareType: 1, // {0: shareWeb, 1: shareImage}
                    }, {
                        appCb(res) {
                            console.timeEnd('openShare')
                            if (res.value.status == 1) {
                                console.log('分享成功')
                            }
                        }
                    });
                }).catch(err => {
                    window.tip('网络开小差，再试一次');
                    that.uploading = false;
                })

                // 埋点：点击分享我的邀请卡
                let _info ={
                    'event_classify':'kankan_v2',
                    'event_page':'ShareCardPage',
                    'event_name': 'ShareCardClick',
                    'event_id':'',
                    'event_type':'click',
                    'event_info':{},
                }
                window.saTrackCompat.clickExt('ShareCardPage', 'ShareCardClick', _info);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../style/rem.scss';
    @import '../../../style/reset.scss';
    @import '../../../style/normalize.scss';
    .btn-wrapper {
        width: rem(242);
        height: rem(35);
        border: none;
        outline: none;
        font-size: 15px;
        color: #333333;
        margin: 10px auto 20px;
        display: block;
        background: #c2c2c2;
        box-shadow: 0 10px 15px 0 rgba(129, 129, 129, 0.2);
        border-radius: 50px;
    }

    .btn-text {
        font-family: PingFangSC-Regular;
        font-size: 15px;
        color: #333333;
        letter-spacing: 0;
    }

    .btn-active {
        width: rem(242);
        height: rem(35);
        border: none;
        outline: none;
        font-size: 15px;
        color: #333333;
        margin: 0 auto;
        display: block;
        border-radius: 50px;
        background: #FFDC00;
    }

    .btn-wrapper .btn-text {
        opacity: 0.6;
    }

    .btn-active .btn-text {
        opacity: 1;
    }
    .slide{
        width: 100%;
        height: rem(421);
    }
    .my-swiper{
        box-shadow: 0 0 rem(7.5) rem(0.5) rgba(3,0,0,0.08);
    }
    .img-wrapper{
        font-size: 0;
    }
    .pic{
        width: rem(375);
        height: rem(617/2);
    }
    .pic-desc{
        padding-left: rem(20);
    }
    .title{
        font-size: rem(18);
        margin-top: rem(21);
        margin-bottom: rem(6);
    }
    .desc{
        font-size: rem(14);
    }
    .invite-title, .rule-title{
        text-align: center;
        font-size: rem(14);
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(94,99,110,1);
        margin: rem(19) auto rem(17)
    }
    .invite-result{
        text-align: center;
        font-size:rem(14);
        font-family:PingFangSC-Light;
        font-weight:300;
        color: #5E636E;
        margin-bottom: rem(3);
    }
    .header{
        width: rem(40);
        height: rem(40);
        margin-right: rem(10);
    }
    .record{
        padding-left: rem(20);
        padding-right: rem(20);
        padding-top: rem(5);
        padding-bottom: rem(5);
        display: flex;
        align-items: center;
        justify-content: space-between;
        span{
            font-size:rem(12);
            font-family:PingFangSC-Light;
            font-weight:300;
            color:#5E636E;
        }
        .record-left{
            display: flex;
            align-items: center;
        }
    }
    .second-block{
        padding: rem(20) 0;
    }
    .separator{
        background: #f6f7f8;
        height: rem(5);
    }
    .third-block{
        padding-bottom: rem(15);
    }
    .rule-desc{
        padding-left: rem(44);
        padding-right: rem(44);
        padding-bottom: rem(15);
        font-size:rem(14);
        font-family:PingFangSC-Light;
        font-weight:300;
        color: #5E636E;
        line-height: rem(30);
        text-align: justify;
    }
    /** 生成的图片，单位使用px  **/
    .dialog-img {
        position: absolute;
        left: -9999px;
        width: 562.5px;
        padding:22px 22px 0px;
        background: white;
    }
    .top-img{
        width: 100%;
    }
    .logo-wrapper{
        background: #f4d317;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 21px;
        padding-right: 21px;
        padding-top: 19px;
        padding-bottom: 19px;
        margin-top: 53px;
    }
    .logo{
        width: 147px;
        height: 31px;
    }
    .logo-title{
        color: #3D3A3A;
        font-size: 19px;
        font-weight: 400;
    }
    .logo-left{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .qrcode-wrapper{
        margin-right: 12px;
    }
    .txt-bg{
        background: #3D3A3A;
        color: white;
        font-size: 33px;
        font-weight: 400;
        padding: 1px 10px;
        border-radius: 9px;
        margin-top: 3px;
    }
    .top-img-wrapper{
        margin-bottom: 48px;
    }
    .dialog-img-second div{
        font-weight: 400;
        font-size: 27px;
        color: black;
    }
</style>
