<style lang="scss" scoped>
    @import '../../../style/rem.scss';
    @import '../../../style/reset.scss';
    @import '../../../style/normalize.scss';
    *{
        margin: 0;
        padding: 0;
    }
    .my-packet {
        position: relative;
        height: 100vh;
        .my-packet-header {
            font-family: PingFangSC;
            color: #ffffff;
            width: rem(375);
            height: rem(220);
            background: url(../../../assets/gold/bg_convert.png) no-repeat top;
            background-size: 100%;
            margin-bottom: rem(40);
            .head-content {
                height: rem(170);
                .money {
                    text-align: center;
                    font-family: PingFangSC-Semibold;
                    font-size: rem(58);
                    padding-top: rem(40);
                    .gold_unit{
                        font-size: rem(27);
                    }
                    .gold_content{
                        position: relative;
                        top: rem(-6);
                        font-family: PingFangSC-Regular;
                        font-size: rem(18);
                    }
                }
            }
            .head-rule{
                height: rem(50);
                line-height: rem(50);
                background:rgba(255,255,255,0.28);
                color: #FFFFFF;
                box-shadow:6px 5px 47px 10px rgba(3,0,0,0.33);
                .rule-convert{
                    padding-left: rem(14);
                    font-size: rem(14);
                    color: #FFFFFF;
                    text-shadow:50px 5px 5px 5px rgba(3,0,0,0.32);
                }
            }

        }
        .buttons {
            font-family: PingFangSC-Thin;
            letter-spacing: rem(2);
            font-size: rem(15);
            text-align: center;
            &>div {
                width: rem(300);
                height: rem(45);
                line-height: rem(45);
                margin: 0 auto rem(25) auto;
                border-radius: rem(50);
            }
            .first-button {
                background-color: #DFDFDF;
            }
            .second-button {
                background-color: #FEDC00;
            }
        }
        .rule-question {
            font-family: PingFangSC-Light;
            width: rem(300);
            font-size: rem(14);
            color: #5E636E;
            margin: 0 auto;
            text-align: center;
            .rule-name{
                font-family: PingFangSC-Medium;
                text-align: center;
                margin-bottom: rem(10);
            }
            p{
                text-align: left;
            }
        }
        .footer {
            font-family: PingFangSC;
            width: rem(343);
            height: rem(64);
            border-radius: rem(10);
            box-shadow: 0 rem(4) rem(10) 0 rgba(0, 0, 0, 0.1);
            position: absolute;
            bottom: rem(16);
            left: 50%;
            transform: translateX(-50%);
            .title {
                position: absolute;
                left: rem(30);
            }
            .first-title {
                font-size: rem(15);
                color: #333333;
                top: rem(12);
            }
            .second-title {
                font-size: rem(12);
                color: #999999;
                bottom: rem(12);
            }

        }
    }
</style>
<template>
    <div class="my-packet">
        <loadModal v-if="isShowLoading"></loadModal>
        <div class="my-packet-header">
            <div class="head-content">
                <div class="money">
                    <span>{{balance}}</span><span class="gold_unit">金币</span>
                    <div class="gold_content">约可兑换{{money}}元</div>
                </div>
            </div>
            <div class="head-rule">
                <p class="rule-convert">{{rate}}个金币=1元现金，可能有所波动</p>
            </div>
        </div>
        <div class="buttons">
            <div :class="isAllowDraw?'second-button':'first-button'" @click="handlewidthDraw">提现到支付宝</div>
            <div class="second-button" @click="handleLeft">转入用车余额</div>
        </div>
        <div class="rule-question">
            <p class="rule-name">兑换规则</p>
            <p><span>1.金币与现金的兑换比可能随运营收益有所波动。</span></p>
            <p><span>2.现金收益可随时转入用车余额，用来支付骑行费用，不可提现。</span></p>
            <p><span>3.现金收益满10元可转入红包收入，红包收入可提现到支付宝余额中。</span></p>
            <p><span>4.每个用户每天获取金币数量上限为88888个。</span></p>

        </div>
    </div>
</template>
<script>
    import api from '../../../service/gold_wallet'
    import popupModal from '@/components/common/popupModal'
    import loadModal from '@/components/common/loadModal'
    import utils from '../../../util/utils';
    import CommonAPI from '../../../service/common'

    export default {
        name: 'gold_wallet',
        components: {
            popupModal,
            loadModal,
        },
        data() {
            return {
                isShowLoading: false,
                balance: 0,             // 余额
                money: 0,
                rate: 1,                // 汇率
                cid: '',                // cid
                isAllowDraw: false,     // 判断是否满足提现要求
            }
        },
        methods: {
            // 取2位小数 后面省略
            formatDecimal(num, decimal=2) {
                num = num.toString()
                let index = num.indexOf('.')
                if (index !== -1) {
                    num = num.substring(0, decimal + index + 1)
                } else {
                    num = num.substring(0)
                }
                return parseFloat(num).toFixed(decimal)
            },
            // 跳转到alipay
            handlewidthDraw() { //提现操作 弹窗出现

                if(this.isAllowDraw) {

                    // 埋点：点击转入支付宝收入
                    this._points('ToRedPocket');

                    const _outgoParams = {
                        total: this.$options.methods.formatDecimal(this.balance/this.rate),
                        rate: this.rate,
                        balance: this.balance
                    }
                    this.$router.push({name: 'AliPay', params: {outgoParams: _outgoParams}});
                }
            },

            // 跳转到balance
            handleLeft() {
                // 埋点：点击转入用车余额
                this._points('ToAccountBalance');

                const _balanceParams = {
                    total: this.$options.methods.formatDecimal(this.balance/this.rate),
                    cid: this.cid,
                    rate: this.rate,
                    balance: this.balance
                }
                this.$router.push({name: 'Balance', params: { balanceParams: _balanceParams}})
            },

            // 埋点
            _points(e_name) {
                let _info ={
                    'event_classify':'kankan_v2',
                    'event_page':'CashWithdrawPage',
                    'event_name': e_name,
                    'event_id':'',
                    'event_type':'click',
                    'event_info':{},
                }
                window.saTrackCompat.clickExt('CashWithdrawPage', e_name, _info);
            },

        },
        mounted() {
            window.ofoResponseProxy('setTitle',['金币兑换']);
        },

        created() {
            localStorage.removeItem('moneyParams');

            // convert页面传参
            const _convertParams = this.$route.params.convertParams;
            if (_convertParams) {
                this.cid = _convertParams.cid;
                this.balance = _convertParams.balance;
                this.rate = _convertParams.rate;
                this.money = this.formatDecimal(this.balance/this.rate);
                if(this.balance >= this.rate * 10){
                    this.isAllowDraw = true;
                }
            } else {
                const _params = JSON.parse(window.localStorage.getItem('goldParams'));
                this.cid = _params.cid;
                this.balance = _params.balance;
                this.rate = _params.rate;
                this.money = this.formatDecimal(this.balance/this.rate);
                if(this.balance >= this.rate * 10){
                    this.isAllowDraw = true;
                }
            }
        }
    }
</script>
