<style lang="scss" scoped>
@import '../../../style/variable.scss';
@import '../../../style/rem.scss';
@import '../../../style/mixin_text.scss';
html {
  font-size: 20vw;
}
.container {
    width: 100%;
    height: 100%;
    .home_content {
        overflow-x: hidden;
        background: #ffffff;
        font-family: PingFangSC;
        position: relative;
        top: rem(-66);
        background: url('../../../assets/gold/background.png') no-repeat;
        background-size: cover;
        padding: 0 rem(20);
        .inner-item{
            width: 100%;
            .special_font{
                color: #D34E4C;
                font-family:PingFangSC-Regular;
                font-size: rem(15);
            }
            .totalAmount {
                text-align: center;
                padding-top: rem(150);
                font-size: rem(14);
                font-family:PingFangSC-Light;
                .allGold{
                    height: rem(55);
                    .amountNo{
                        font-size: rem(48);
                        color: #d34e4c;
                        font-weight:bold;
                    }
                    .units{
                        font-size: rem(18.5);
                        color: #d34e4c;
                    }
                }
                .totalContent{
                    color: #888888;
                }
                .toBill{
                    color:#3985F7;
                    text-decoration: underline;
                }
                .convert_btn{
                    background-color: #d34e4c;
                    font-family:PingFangSC-Thin;
                    color: #FFFFFF;
                    height: rem(36.5);
                    width: rem(176);
                    border-radius: rem(17.5);
                    font-size: rem(15);
                    margin-top: rem(15);
                    border: 0;
                }
            }
            .goldAmount{
                display: flex;
                margin-top: rem(45);
                background-color:#FFFFFF;
                width: rem(334);
                height: rem(90);
                border-radius: rem(10);
                .sub{
                    font-size: rem(12);
                    color: #888888;
                    ._font{
                        color: #D34E4C;
                        font-size: rem(30);
                    }
                }
                .subAmount{
                    width: 50%;
                    margin: rem(15) 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                }
                ._left{
                    border-right: 1px solid #DCDCDC;
                }
            }
            .strategyImage{
                font-size: 0;
                margin-top: rem(26);
                padding-left: rem(8);
                .strategyImg{
                    width: rem(177);
                }
            }
            .strategy{
                position: relative;
                font-size: rem(15) ;
                padding: 0 rem(27);
                font-family:FZLTXHK--GBK1-0;
                ._content{
                    display: flex;
                    ._left{
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        width: rem(140);
                        letter-spacing: rem(2.5);
                    }
                    ._right{
                        .read{
                            width: rem(128.5);
                            height: rem(91.5);
                        }
                    }
                }
                .number{
                    display: inline-block;
                    text-align: center;
                    line-height: rem(19);
                    font-family: PingFangSC-Semibold;
                    color: #FFFFFF;
                    width: rem(19);
                    height: rem(19);
                    border-radius: 50%;
                    background-color: #FFF094;
                    margin: 0 rem(5) 0 rem(5);
                }
                .sub_title{
                    color: #888888;
                    font-family:PingFangSC-Regular;
                    letter-spacing: rem(2.5);
                }
                .sub_btn{
                    background-color: #FEDC00;
                    width: rem(242.5);
                    height: rem(35.5);
                    border-radius: rem(18);
                    font-size: rem(14);
                    font-family:PingFangSC-Thin;
                    letter-spacing: rem(2.5);
                    border: 0;
                }
                ._btn{
                    margin-top: rem(35);
                    text-align: center;
                }
                .read_font{
                    font-size: rem(12);
                    color: #888888;
                    margin-left: rem(24);
                    font-family:PingFangSC-Thin;
                }
                .part_one{
                    height: rem(245);
                    min-width: rem(155);
                    margin-top: rem(18);
                    overflow: hidden;
                    .sign_flex{
                        display: flex;
                        justify-content: space-evenly;
                        align-items: center;
                        flex-wrap: wrap;
                        .sign{
                            flex: 0 1 23%;
                            /*margin-right: rem(6);*/
                            /*width: rem(64);*/
                            height: rem(100);
                            /*float: left;*/
                            font-size: rem(8.5);
                            .sign_days{
                                font-family: FZLTXHK--GBK1-0;
                                font-size: rem(12);
                                margin: 0 0 rem(2.5) 0;
                                text-align: center;
                            }
                            .sign_background{
                                height: rem(60);
                                /*width: rem(64);*/
                                background: no-repeat;
                                background-size: cover;
                            }
                            .sign_background_cover{
                                opacity: 0.8;
                                height: rem(60);
                                /*width: rem(64);*/
                                position: relative;
                                top: rem(-60);
                                background: url("../../../assets/gold/signed.png") no-repeat;
                                background-size: cover;
                            }
                            .sign_gold{
                                background: url("../../../assets/gold/sign_gold.png") no-repeat;
                                background-size: cover;
                                width: rem(33);
                                height: rem(29);
                                position: relative;
                                top:rem(11);
                                left: rem(20);
                            }
                            .sign_font{
                                font-size: rem(12);
                                position: relative;
                                text-align: center;
                            }
                        }

                    }
                    .sign_title{
                        margin-bottom: rem(20);
                    }



                    .sign:last-child{
                        /*width: rem(135);*/
                        flex: 0 1 48%;
                        .sign_background{
                            /*width: rem(135);*/
                        }
                        .sign_background_cover{
                            opacity: 0.8;
                            /*width: rem(135);*/
                            background: url("../../../assets/gold/signed_last.png") no-repeat;
                            background-size: cover;
                        }
                        .sign_gold{
                            background: url("../../../assets/gold/sign_gold_last.png") no-repeat;
                            background-size: cover;
                            width: rem(100);
                            height: rem(39);
                            left: rem(15);
                        }
                        .sign_font{
                            margin-top: 0;
                            padding-top: rem(2);
                        }
                    }
                }
                .part_two{
                    margin-top: rem(30);
                    height: rem(190);
                }
                .part_three{
                    margin-top: rem(30);
                    height: rem(200);
                    .three_content{
                        display: flex;
                        ._left{
                            .invite{
                                width: rem(124);
                                height: rem(98);
                            }
                        }
                        ._right{
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                        }
                    }
                    .three_btn{
                        margin-top: rem(20);
                        text-align: center;
                    }
                }
                .part_four{
                    margin-top: rem(10);
                    padding-bottom: rem(50);
                    .four_btn{
                        margin-top: rem(20);
                        text-align: center;
                        .sub_btn{
                            // background-color: #DFDFDF;
                            background-color: #FEDC00;
                        }
                    }
                    .reward{
                        width: rem(128.5);
                        height: rem(93.5);
                    }
                }
            }
        }
    }
}
</style>

<template>
    <div class="container">
       <div class="home_content">
           <div class="inner-item">
               <!--<button @click="ToContribute" style="margin-top: 10px">ToContribute</button>-->
               <div class="totalAmount">
                   <div class="allGold">
                       <span class="amountNo">{{values.balance? values.balance : 0}}</span>
                       <span class="units">个</span>
                   </div>
                   <div>
                       <span class="totalContent">当前可用金币</span>
                       <span>
                           <a class="toBill" @click="toBill">账单</a>
                       </span>
                   </div>
                   <div>
                       <button @click="toConvert" class="convert_btn">兑换现金</button>
                   </div>
               </div>
               <div class="goldAmount">
                   <div class="subAmount _left">
                       <div class="sub">
                           <div>
                               <span class="_font">{{income_yesterday}}</span>
                               <span class="special_font">个</span>
                           </div>
                           <span>昨日金币数</span>
                       </div>
                   </div>
                   <div class="subAmount">
                       <div class="sub">
                           <div>
                               <span class="_font">{{income_today}}</span>
                               <span class="special_font">个</span>
                           </div>
                           <span>今日金币数</span>
                       </div>
                   </div>
               </div>
               <div class="strategyImage">
                   <img class="strategyImg" src="../../../assets/gold/strategy.png" alt="">
               </div>
               <div class="strategy">
                   <div class="part_one">
                       <div class="sign_title">
                           <span class="number">1</span>
                           <span class="sub_title">打卡签到领取金币</span>
                       </div>
                       <div class="sign_flex">
                               <div class="sign" v-for="(item, index) in signItems">
                                   <p class="sign_days">第{{numMatch[index + 1]}}天</p>
                                   <div :class="item.class"
                                        :style="{backgroundImage: item.backgroundImg}"
                                        @click.prevent="!isSigned && item.isToday? signForGold(index+1): ''">
                                       <div class="sign_gold"></div>
                                       <p class="sign_font">{{item.gold_account}}金币</p>
                                   </div>
                                   <div :class="item.isCover? 'sign_background_cover': ''"></div>
                               </div>
                       </div>
                   </div>
                   <div class="part_two">
                       <div class="_content">
                           <div class="_left">
                               <span class="number">2</span>
                               <span class="sub_title">阅读趣味内容</span>
                               <div>
                                   <span class="read_font">随时随地</span>
                                   <br>
                                   <span class="read_font">获取金币奖励</span>
                               </div>
                           </div>
                           <div class="_right">
                               <img class="read" src="../../../assets/gold/read.png" alt="">
                           </div>
                       </div>
                       <div class="_btn">
                           <button class="sub_btn" @click="testToRouter">开始阅读吧</button>
                       </div>
                   </div>
                   <div class="part_three">
                       <div class="three_content">
                           <div class="_left">
                               <img class="invite" src="../../../assets/gold/invite.png" alt="">
                           </div>
                           <div class="_right">
                               <span class="number">3</span>
                               <span class="sub_title">邀请好友</span>
                               <div style="margin-top: 20px">
                                       <span class="read_font">一次性奖励
                                           <span class="special_font">888</span>
                                           金币</span>
                                   <br>
                                   <span class="read_font">另有
                                           <span class="special_font">30天</span>
                                           金币分成</span>
                               </div>
                           </div>
                       </div>
                       <div class="three_btn">
                           <button class="sub_btn" @click="toInvite">分享我的邀请卡</button>
                           <!--<router-link :to="{name: 'create_invitation'}">tessste</router-link>-->
                       </div>
                   </div>
                   <div class="part_four">
                       <div class="_content">
                           <div class="_left">
                               <span class="number">4</span>
                               <span class="sub_title">领取悬赏任务</span>
                               <div>
                                   <span class="read_font">轻松赚金币</span>
                               </div>
                           </div>
                           <div class="four_right">
                               <img class="reward" src="../../../assets/gold/reward.png" alt="">
                           </div>
                       </div>
                       <div class="four_btn">
                           <!-- <button class="sub_btn" disabled>查看今日悬赏任务</button> -->
                           <button class="sub_btn" @click="toTask">查看今日悬赏任务</button>
                       </div>
                   </div>
               </div>
           </div>
           <!-- loading部分 -->
           <loading v-if="isShowLoading"></loading>
       </div>
    </div>
</template>

<script>
    import api  from '../../../service/gold_wallet';
    import Loading from '../../../components/common/loadModal.vue';
    import utils from '../../../util/utils';
    import CommonAPI from '../../../service/common';

    export default {
        name: 'gold_wallet',

        components: {
            Loading,
        },

        data() {
            return {
                numMatch : {
                    1: "一",
                    2: "二",
                    3: "三",
                    4: "四",
                    5: "五",
                    6: "六",
                    7: "七",
                },
                isShowLoading: false,
                isSigned: false,
                cid: '',
                today: 0,
                yesterday: 0,
                requestId: '',
                signItems: [],
                income_yesterday: 0,
                income_today: 0,
                values: {}
            };
        },

        computed: {},

        created() {
            let env = utils.getEnv();
            console.log(env)
            // 获取当天日期和昨日日期
            this.today = parseInt(utils.formatTime(new Date(), "", 3));
            this.yesterday = parseInt(utils.formatTime(new Date(new Date() - 24*60*60*1000), "", 3));
            console.log('=========>'+this.yesterday)

            // 获取requestId
            this.isShowLoading = true;
            this.requestId = utils.generateUUID();
            if(this.requestId){
                this.isShowLoading = false;
            }

            // 获取cid
            this.getCid();

            // signItems初始化
            const _signItems = [];
            let i =0;
            while(i<7){
                if(i===6){
                    _signItems.push({
                        backgroundImg: 'url(' + require('../../../assets/gold/sign_last.png') + ')',
                        isCover: false,
                        gold_account: 0,
                    })
                } else {
                    _signItems.push({
                        backgroundImg: 'url(' + require('../../../assets/gold/sign.png') + ')',
                        isCover: false,
                        gold_account: 0,
                        isToday: false,
                    })
                }
                i++;
            }
            this.signItems = _signItems;

            new Date()

        },

        mounted() {
            window.ofoResponseProxy('setTitle',['金币钱包']);
        },

        methods: {
            ToContribute () {
                window.location = window.location.origin + '/contribute/index.html';
            },

            // 发送detail,config请求
            initData (params1, params2) {
                this.getGoldDetail(params1)
                this.getGoldConfig(params2)
            },

            // 获取cid
            getCid () {
                this.isShowLoading = true;
                CommonAPI.getInfo()
                    .then( data => {
                        console.log('APP 用户信息', data)
                        if(data.errorCode == 200) {
                            const {cid} = data.values.info;
                            this.cid = cid;
                            console.log('>>>cid', cid);

                            const _params1 = {
                                requestId: this.requestId,
                                cid: cid,
                                needDailySummaries: true,
                            };

                            const _params2 = {
                                requestId: this.requestId,
                                cid: this.cid,
                            };

                            console.log(_params1)

                            this.initData(_params1, _params2);
                        } else {
                            this.handleError(data.errorCode);
                            console.log("GetInfoRequest data.msg=================");
                            console.log(data.msg);
                        }
                    }, err => {
                        this.isShowLoading = false;
                        window.tip(err.msg || '请求失败');
                    }).catch((e) => {
                    this.isShowLoading = false;
                    window.tip('网络繁忙，请您稍后再试');

                })
            },

            // 获取金币详情
            getGoldDetail(params) {
                this.isShowLoading = true;
                api.getGoldDetail(params)
                    .then(data => {
                        this.isShowLoading = false;
                        if(data.errorCode == 200){
                            this.values = data.values;
                            const _dailySummaries = this.values.dailySummaries;
                            if(_dailySummaries){
                                _dailySummaries.forEach((v) => {
                                    if(v.date === this.yesterday) {
                                        this.income_yesterday = v.income
                                    }
                                    if(v.date === this.today) {
                                        this.income_today = v.income
                                    }
                                })
                            }
                        }else{
                            this.handleError(data.errorCode);
                            console.log("GetCoinBillRequest data.msg=================");
                            console.log(data.msg);
                        }
                    },err =>{
                        this.isShowLoading = false;
                        window.tip(err.msg || '请求失败');
                    }).catch((e) => {
                    this.isShowLoading = false;
                    window.tip('网络繁忙，请您稍后再试');
                })
            },

            // 获取金币配置信息
            getGoldConfig(params) {
                this.isShowLoading = true;

                api.getGoldConfig(params)
                    .then(data => {
                        this.isShowLoading = false;
                        if (data.errorCode == 200) {
                            console.log(data);
                            const _values = data.values;
                            if(_values.hasSignedToday){
                                this.isSigned = true;
                            }
                            this.signItems.map( (item, index) => {
                                item.gold_account = _values.signinBonus[index];
                                item.class = 'sign_background';
                                // 前6天
                                if (index < 6){
                                    // before
                                   item.backgroundImg = 'url(' + require('../../../assets/gold/sign.png') + ')';
                                   // today
                                    if (index === _values.hadSignedDays) {
                                        // 未签到
                                        if (!this.isSigned){
                                            item.backgroundImg = 'url(' + require('../../../assets/gold/signing.png') + ')';
                                            item.isToday = true;
                                       } else {
                                           item.isCover = true;
                                       }
                                   } else if(index < _values.hadSignedDays) {
                                        item.isCover = true;
                                   }
                                } else if (index === 6) {
                                    // before
                                    item.backgroundImg = 'url(' + require('../../../assets/gold/sign_last.png') + ')';
                                    // today
                                    if (index === _values.hadSignedDays) {
                                        // 未签到
                                        if (!this.isSigned){
                                            item.isToday = true;
                                            item.backgroundImg = 'url(' + require('../../../assets/gold/signing_last.png') + ')'
                                        } else {
                                            item.isCover = true;
                                        }
                                    } else if(index < _values.hadSignedDays) {
                                        item.isCover = true;
                                    }
                                }
                            })
                            console.log(this.signItems)

                        } else {
                            this.handleError(data.errorCode);
                            console.log("GetCoinConfigRequest data.msg=================");
                            console.log(data.msg);
                        }
                    }, err => {
                        this.isShowLoading = false;
                        window.tip(err.msg || '请求失败');
                    }).catch((e) => {
                    this.isShowLoading = false;
                    window.tip('网络繁忙，请您稍后再试');
                })
            },

            // 增加金币 签到
            signForGold(day) {
                this.isShowLoading = true;

                // 埋点：点击签到
                this._points('SignClick');

                const _params = {
                    txnId: this.requestId,
                    cid: this.cid,
                    type: 'signin',
                    signinDetail: {
                        day: day
                    },
                }

                api.goldAdd(_params)
                    .then(data => {
                        this.isShowLoading = false;
                        if(data.errorCode == 200){
                            console.log(data);
                            window.tip('领取成功');
                            const cid = this.cid;
                            const _params1 = {
                                requestId: this.requestId,
                                cid: cid,
                                needDailySummaries: true,
                            };

                            const _params2 = {
                                requestId: this.requestId,
                                cid: cid,
                                needTransactions: true,
                                incomeType: "signin",
                                outgoType: "none",
                                startDate: this.today,
                                endDate: this.today,
                            };

                            this.initData(_params1, _params2);
                        }else{
                            this.handleError(data.errorCode);
                            console.log("goldAdd data.msg=================");
                            console.log(data.msg);
                        }
                    },err =>{
                        this.isShowLoading = false;
                        window.tip(err.msg || '请求失败');
                    }).catch((e) => {
                    this.isShowLoading = false;
                    windowC.tip('网络繁忙，请您稍后再试');
                })
            },

            // 跳转到兑换页面
            toConvert () {
                // 埋点：点击兑换现金
                this._points('CashWithdrawClick');

                const _convertParams = {
                    cid: this.cid,
                    balance: this.values.balance,
                    rate: parseInt(this.values.exchangeRate)
                }

                // 存储参数
                window.localStorage.setItem('goldParams', JSON.stringify(_convertParams));
                this.$router.push({name: 'Convert', params : {convertParams: _convertParams}})
            },

            // 跳转到账单
            toBill () {
                // 埋点：点击兑换现金
                this._points('AccountDetailClick');

                const _billParams = {
                    cid: this.cid,
                }
                this.$router.push({name: 'Bill', params: {billParams: _billParams}})
            },

            // 跳转到看看主页
            testToRouter() {
                // 埋点：点击开始阅读吧
                this._points('BacktoNewsClick');

                if(window.OFO_ENV.sourceForApi == 1){
                    // if(window.OFO_ENV.ofoAppVersionGte('3.4.0',16471)){
                    //     ofoBridge.router('tab-discovery');
                    // }
                    ofoBridge.router('tab-discovery');
                }else{
                    ofoBridge.router('home?tabIndex=1');
                }

            },

            // 跳转到邀请页
            toInvite() {
                // 埋点：点击进入好友分享
                this._points('InviteFriendClick');

                if(window.location.host == 'freego.ofo.com'){ // 测试环境
                    window.location = window.location.origin + '/kankan/create_invitation/index.html';
                }else{
                    window.location = window.location.origin + '/create_invitation/index.html';
                }
            },

            // 埋点
            _points(e_name) {
                let _info ={
                    'event_classify':'kankan_v2',
                    'event_page':'GoldWalletPage',
                    'event_name': e_name,
                    'event_id':'',
                    'event_type':'click',
                    'event_info':{},
                }
                window.saTrackCompat.clickExt('GoldWalletPage', e_name, _info);
            },

            // 悬赏任务
            toTask () {
                //埋点：点击查看悬赏任务
                this._points('TaskCheckClick');

                if(window.location.host == 'freego.ofo.com'){ // 测试环境
                    window.location = window.location.origin + '/kankan/integral_wall/index.html';
                }else{
                    window.location = window.location.origin + '/integral_wall/index.html';
                }
            }
        },
    }
</script>
