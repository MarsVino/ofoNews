<style lang="scss" scoped>
    @import "../../../style/variable.scss";
    @import "../../../style/rem.scss";
    @import "../../../style/mixin_text.scss";
    html{
        font-size: 20vw;
    }
    .container{
        width:100%;
        height:100%;
        .content{
            background: #ffffff;
            width: 100%;
            .content-inner {
                width: 100%;
                height: 100%;
                font-family: PingFangSC;
                .inner-item {
                    text-align: center;
                    width: 100%;
                    .wrapper{
                        background: linear-gradient(-45deg,rgba(255,91,91,1),rgba(246,115,52,1));
                    }
                }
                .inner-detail{
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    color: #5E636E;
                    font-size: rem(14);
                    font-family: PingFangSC-Medium;
                    margin-bottom: rem(100);
                    .inner_title{
                        height: rem(37.5);
                        line-height: rem(37.5);
                    }
                    ._detail{
                        width: rem(336);
                        height: 100%;
                        box-shadow: 0 0 15px 1px rgba(3,0,0,0.08);
                        margin: 0 auto;
                        .single_detail{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            margin: 0 auto;
                            padding: 0 rem(15);
                            width: rem(265);
                            height: rem(47);
                            border-bottom: rem(1.5) solid #D2D2D2;
                            .reward_content{
                                text-align: left;
                                .reward_time{
                                    color:#888888;
                                    font-family: PingFangSC-Light;
                                    font-size: rem(10);
                                }
                            }
                            .reward_amount{
                                color: #FC644C;
                                font-size: rem(18);
                                font-family: PingFang SC;
                                .amount_unit{
                                    font-size: rem(12);
                                }
                            }
                            .reward_amount_minus{
                                color: #5E636E;
                                font-size: rem(18);
                                font-family: PingFang SC;
                                .amount_unit{
                                    font-size: rem(12);
                                }
                            }
                        }
                        .single_detail:last-child{
                            margin-bottom: rem(30);
                        }
                    }
                }
            }
        }
    }

</style>

<template>
    <div class="container">
        <div class="content">
            <div class="content-inner">
                <div class="inner-item">
                    <ve-line height="270px" class="wrapper" :extend = "extend"
                             :title="chartTitle" :data="chartData" :legend-visible="false"></ve-line>
                </div>
                <div class="inner-detail">
                    <div class="inner_title">明细</div>
                    <div class="_detail">
                        <div v-for="(item, index) in rewardItems" class="single_detail">
                            <div class="reward_content">
                                <div class="reward_type">{{item.type}}</div>
                                <div class="reward_time">{{item.timestamp}}</div>
                            </div>
                            <div>
                                <div :class="typeof item.amount === 'string'?'reward_amount':'reward_amount_minus'">
                                    <span>{{item.amount == 0 ? '当日奖励已达上限' : item.amount}}</span><span v-show="item.amount != 0" class="amount_unit">金币</span>
                                </div>
                            </div>
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
    import VeLine from 'v-charts/lib/line.common'
    import "echarts/lib/component/title"
    import api  from '../../../service/gold_wallet'
    import Loading from '../../../components/common/loadModal.vue';
    import utils from '../../../util/utils';
    import CommonAPI from '../../../service/common'

    const incomeType = {
        read:	"阅读奖励",
        signin: "每日签到",
        invitation: "邀请好友",
        newcomer: "被邀请",
        sharing: "好友分成",
        task:"完成任务",
        interaction: "活动奖励",
    }
    const outgoType = {
        cash: "提现",
        wallet: "兑换用车余额",
    }

    export default {
        name: 'gold_wallet',

        components:{
            VeLine,
            Loading,
        },

        data(){
            this.extend = {
                yAxis: {
                    splitNumber: 1,
                    axisLabel: {
                        color: '#ffffff',
                        fontSize: 'rem(11.5)',
                        fontFamily: 'PingFangSC-Light',
                        fontWeight: '300',
                    }
                },
                xAxis: {
                    axisLabel: {
                        color: '#ffffff',
                        fontSize: 'rem(11.5)',
                        fontFamily: 'PingFangSC-Light',
                        fontWeight: '300',
                    },
                    axisTick: {
                        show: false,
                    }
                },
                series: {
                    itemStyle: {
                        borderColor: '#ffffff'
                    },
                    lineStyle: {
                        color: "#ffffff",
                    },
                    areaStyle: {
                        color: '#ffffff',
                        origin: 'start',
                        opacity: 0.05,
                    },
                    smooth: false,
                    symbol: 'emptyCircle',
                    symbolSize: 6,
                },
            }
            this.chartTitle={
                left: '35%',
                top: '6%',
                text: '过去7日金币账单',
                textStyle: {
                    color: 'rgba(255,255,255,1)',
                    fontFamily: 'PingFangSC-Medium',
                    fontSize: 14,
                }
            }
            return {
                isShowLoading: false,
                rewardItems: [],
                chartData: {
                    columns: ['日期', '金币账单'],
                    columnRuleColor: '#ffffff',
                    rows: []
                },
                value: {
                    dailySummaries:[],
                }
            }
        },

        computed:{

        },

        created() {
            const _requestId = utils.generateUUID();

            const _billParams = this.$route.params.billParams;
            if (_billParams) {
                this.cid = _billParams.cid;

                const _params = {
                    requestId: _requestId,
                    cid: this.cid,
                    needDailySummaries: true,
                    needTransactions: true,
                }
                this.getGoldDetail(_params)
            } else {
                console.log('cid 获取失败')
            }

            // 真实日期
            this.chartData.rows = this.getLastDay(7);
        },

        mounted(){
            window.ofoResponseProxy('setTitle',['金币账单']);
        },

        methods: {

            getLastDay(day) {
                const today = new Date();
                let chartData = [];

                // 获取前七天的日期
                for(let i=day-1;i>=0;i--){
                    try {
                        chartData.push({日期:utils.formatTime(new Date(today.getTime() - (i * 24 * 60 * 60 * 1000)), ".", 7), 金币账单: 0});
                    }catch (e) {
                        console.log(e.message)
                    }
                }
                console.log(chartData)
                return chartData;
            },

            getGoldDetail(params) {
                this.isShowLoading = true;
                api.getGoldDetail(params)
                    .then(data => {
                        this.isShowLoading = false;
                        if(data.errorCode == 200){
                            console.log(data);
                            this.values = data.values;
                            const _dailySummaries = data.values.dailySummaries;
                            const _rewardItems = data.values.transactions;
                            if(_dailySummaries) {
                                // 表格数据
                                if(_dailySummaries.length > 0){
                                    this.chartData.rows.forEach((v) => {
                                        _dailySummaries.forEach((j) => {
                                            if(v.日期.replace('.','') == j.date.toString().substr(-4))
                                                v.金币账单 = j.income > 0 ? j.income : j.outgo
                                        })
                                    })
                                    console.log(this.chartData)
                                }
                            }
                            if (_rewardItems) {
                                // 明细数据
                                if(_rewardItems.length > 0) {
                                    _rewardItems.forEach((v) => {
                                        if(v.amount > 0) {
                                            v.amount = '+'+v.amount;
                                            v.type = incomeType[v.type];
                                        } else{
                                            v.type = outgoType[v.type];
                                        };
                                        v.timestamp = utils.formatTime(new Date(v.timestamp * 1000), "-", 3);
                                    })
                                    // 倒序
                                    this.rewardItems = _rewardItems.reverse();
                                }
                            }
                        }else{
                            this.handleError(data.errorCode);
                            console.log("GetCoinBillRequest data.msg=================");
                            console.log(data.msg);
                        }
                        // this.getNewsView();
                    },err =>{
                        this.isShowLoading = false;
                        window.tip(err.msg || '请求失败');
                        // this.getNewsView();
                    }).catch((e) => {
                    this.isShowLoading = false;
                    window.tip('网络繁忙，请您稍后再试');
                })
            }
        }

    }
</script>
