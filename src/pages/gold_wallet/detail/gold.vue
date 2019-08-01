<template>
    <div class="homeGold-container">
        <div class="headPicture">
            <img :src="headTop" />
        </div>
        <div class="content">
            <div class="goldNum">
                你的好友送你
                <label>
                    <span>
                        888
                    </span>
                </label>
                个金币
            </div>
            <div class="goldNum">
                可直接兑换现金哦！
            </div>
            <div class="phone">
                <input type="tel" pattern="\d*" v-model="telNum" placeholder="输入ofo注册手机号码"/>
            </div>
            <div class="verify">
                <input v-model="telCode" placeholder="输入验证码" type="tel" pattern="\d*" class="code"/>
                <div :class="timeNum < 60 ? 'defaultColor': ''" class="codeBtn" @click="_getVerityCode">{{timeText}}</div>
            </div>
            <div class="submit" @click="submitGold">
                立即领取
            </div>
        </div>
        <div class="company">
            <img :src="company" />
        </div>
    </div>

</template>

<script>
    import API from '@/service/homeApi';
    import headTop from '../static/goldTop.png';
    import company from '../static/company.png';
    import Utils from '../../../util/utils';
    import Loading from '../../../components/common/loadModal.vue';
    import _ from 'lodash'

    export default {
        name: 'gold_wallet',

        components:{
            Loading
        },

        data(){
            return{
                cid: '',
                headTop: headTop,
                company: company,
                token : '',
                telNum: '',     // 手机号码
                telCode: '', // 手机验证码
                wxCode: '',     // 微信code
                timeNum: 60,    // 获取验证码倒计时
                getCoin: false, // 金币是否被领取过
                timeBtn: 0,
                timeText: '获取验证码',
                pageUser: false, //code是否可用
                downTime: '',   // 倒计时
                UUID: '',       //唯一请求ID
                os: 0,          //  手机类型，0=ios， 1=android
            }
        },

        computed:{

        },

        created() {
            let code = Utils.getHashParams().code
            let cid = Utils.getHashParams().cid
            let urlParams
            if (!code) {
                urlParams = this.getHashParams()
                code = urlParams.code
                cid = urlParams.cid
            }
            if (!cid) {
                urlParams = window.location.href.split('cid=')[1]
                cid = urlParams.split('&')[0]
                console.log('cid再次获取：', urlParams + '-cid: ' + cid)
            }
            console.log('cid = ', cid)
            this.cid = cid
            this.wxCode = code
            this.UUID = Utils.generateUUID()
            this.os = navigator.platform == 'iPhone'? 0 : 1
            window.ofoResponseProxy('setTitle',['领取金币']);
            clearInterval(this.downTime)
            this.downTime = null
            this.verityWXCode()
        },
        mounted(){
        },
        destroyed () {
            clearInterval(this.downTime)
            this.downTime = null
        },
        methods:{
            _getVerityCode:_.throttle(function(){
                this.getVerityCode();
            },2000),

            verityWXCode () {
                let param = {
                    request_id: this.UUID,
                    code: this.wxCode
                }
                API.verityWxCode(param)
                    .then(data => {
                        console.log('weixin',data)
                        if (data.error_code != 200) {
                            this.pageUser = false
                            window.tip('链接失效，请稍后重试')
                        } else {
                            this.pageUser = true
                            this.token = data.value.token
                        }
                    },err =>{
                        window.tip('网络错误，请稍后再试')
                    });
            },

            getVerityCode () {
                this.telCode = '';

                if (this.timeNum < 60) {
                    window.tip('已发送验证码，稍后再试')
                    return
                }
                if (this.getCoin) {
                    window.tip('专属金币已被领取，请重新访问页面')
                    return
                }
                if (!Utils.phonePattern(this.telNum)) {
                    window.tip('请输入正确的手机号码')
                    return
                }
                let params = {
                    token: this.token,
                    request_id: this.UUID,
                    user: {
                        tel_num: this.telNum
                    }
                }
                console.log('获取手机验证码：', params)
                API.verityCode(params)
                    .then(data => {
                        console.log('验证码',data)
                        if (data.error_code == 0) {
                            window.tip(data.error_msg)
                        } else if (data.error_code == 40029) {
                            window.tip('链接失效, 请退出页面重新访问')
                        } else {
                            window.tip('发送成功')
                            this.countDown()
                        }
                    },err =>{
                        window.tip('网络错误，请稍后再试')
                    });
            },

            submitGold () {
                // 埋点：识别二维码后的页面，点击立即领取
                let click_info ={
                    'event_classify':'kankan_v2',
                    'event_page':'GetRewardPage',
                    'event_name': 'GetRewardClick',
                    'event_id':'',
                    'event_type':'click',
                    'event_info':{},
                }
                let view_info ={
                    'event_classify':'kankan_v2',
                    'event_page':'GetRewardPage',
                    'event_name': 'GetRewardClick',
                    'event_id':'',
                    'event_type':'view',
                    'event_info':{},
                }
                console.log('window.saTrackCompat.clickExt', Boolean(window.saTrackCompat.clickExt))
                // window.ofoTrack.controlClick('GetRewardClick', { Click: click_info});
                window.saTrackCompat.clickExt('GetRewardPage', 'GetRewardClick', click_info);

                // window.saTrackCompat.clickExt('GetRewardPage', 'GetRewardClick', click_info);
                window.saTrackCompat.viewExt('GetRewardPage', 'GetRewardClick', view_info);


                if (this.getCoin) {
                    window.tip('专属金币已被领取，请重新访问页面')
                    return
                }
                if (!Utils.phonePattern(this.telNum)) {
                    window.tip('请输入正确的手机号码')
                    return
                }
                console.log(this.telCode)
                if ((this.telCode + '').length < 3) {
                    window.tip('请输入验证码')
                    return
                }
                console.log(this.telNum + '')
                let param = {
                    token: this.token,
                    request_id: this.UUID,
                    user:{
                        tel_num: this.telNum
                    },
                    friend_cid: this.cid,//'7dd5c035213468871298cf35f84cb8ad',
                    identify: this.telCode
                }
                API.getGold(param).then(data => {
                    console.log(data)
                    console.log('金币',data)
                    if (data.error_code == 200) {
                        window.tip('领取成功,即将跳转到首页')
                        this.getCoin = true
                        setTimeout( ()=>{
                            this.$router.push({path: 'index'})
                        }, 3000)
                    } else if (data.error_code == 30006) {
                        window.tip('您还不是ofo小黄车认证用户哦，请先前往ofo小黄车客户端，完成认证后参与活动')
                    } else if (data.error_code == 30003) {
                        window.tip('验证码错误')
                    }else if (data.error_code == 30007) {
                        window.tip('您不能领取自己分享的金币哦')
                    } else {
                        window.tip(data.error_msg)
                    }
                },err =>{
                    window.tip('网络错误，请稍后再试')
                });
            },

            countDown () {
                this.timeBtn++;
                this.downTime = setInterval(()=> {
                    this.timeText = this.timeNum + 's'
                    this.timeNum = this.timeNum - 1
                    console.log(this.timeNum)
                    if (this.timeNum == -1) {
                        this.timeText = '获取验证码'
                        this.timeNum = 60
                        clearInterval(this.downTime)
                        this.downTime = null
                    }
                }, 1000)
            },

            getHashParams: function() {
                let url = window.location.href
                let params = {};
                if (url.split('?')[1]) {
                    let arr = url.split('?')[1].split('&');
                    for (let i = 0, len = arr.length; i < len; i++) {
                        let data = arr[i].split('=');
                        if (data.length === 2) {
                            params[data[0]] = data[1];
                        }
                    }
                }
                console.log(params)
                return params;
            },
        }

    }
</script>

<style lang="scss">
    @import "../../../style/variable";
    @import "../../../style/rem";
    @import "../../../style/mixin_text";
    html{
        font-size: 20vw;
        overflow: visible;
        background: #fff;
    }
    .homeGold-container{
        width:100%;
        padding-bottom: rem(90);
        background-color: #fff;
    }
    .headPicture{
        font-size: rem(0);
        width: 100%;
        img{
            width: 100%;
        }
    }
    .content{
        text-align: left;
        background-color: #fff;
        font-size:rem(18);
        width: rem(250);
        margin: 0 auto;
        .goldNum{
            text-align: center;
            letter-spacing: rem(1);
            height: rem(38);
            line-height: rem(48);
            font-family:PingFangSC-Semibold;
            font-weight:600;
            color:rgba(64,64,64,1);
            label{
                color: #D10D00;
                margin: 0;
                span{
                    font-size: rem(30);
                }
            }
        }
        input{
            -webkit-appearance: none; /* 方法2 */
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            box-shadow: none;
            text-align: center;
            border: 1px solid #eee;
            height: 26px;
            outline: none;
        }
        input:focus{
            border: 1px solid #eee;
        }
        .phone{
            margin-top: rem(15);
            input{
                width: rem(250);
                margin-bottom: rem(10);
            }
        }
        .verify{
            margin-top: rem(10);
            margin-bottom: rem(25);
            .code{
                width: rem(120);
            }
            .defaultColor{
                background-color: rgba(0,0,0,0.25)!important;
            }
            .codeBtn{
                text-align: center;
                float: right;
                width: rem(65);
                font-size: rem(12);
                padding: rem(2) rem(14);
                height: rem(22);
                position: relative;
                top: rem(2);
                line-height: rem(22);
                background:rgba(253,217,49,1);
                border-radius:rem(13);
            }
        }
        .submit{
            letter-spacing: 1px;
            text-align: center;
            line-height:rem(30);
            font-size:rem(14);
            background:rgba(253,217,49,1);
            border-radius:rem(25);
        }
    }
    .company{
        font-size: 0;
        background-color: #F6F6F5;
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        img{
            width: rem(106);
            padding: rem(23) 0;
        }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
</style>
