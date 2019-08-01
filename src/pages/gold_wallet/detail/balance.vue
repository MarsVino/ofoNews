<template>
    <div class="goldWallet-alipay">
        <div class="dataOperate">
            <div class="text">转入余额</div>
            <div class="inputBox">
                <span>¥</span>
                <input v-model="useMoney" type="tel" @focus="changeInit"
                       :class="useMoney == 0? 'initInput':''">
                <label @click="_all" class="allMoney">全部转入</label>
            </div>
            <div v-if="parseInt(useMoney) > parseInt(useAlipay)" class="text_over">超过可转入总金额</div>
            <div v-else class="text">可提现金额¥{{useAlipay}}</div>
        </div>
        <div class="alipaySubmit" @click="showModal">
            确认转入用车余额
        </div>
        <div v-if="popModal" class="outer-wrapper">
            <div class="wrapperBox">
                <div class="noiceText">
                    <p>您的现金奖励将转入赠送余额中，<br>可用于支付骑行费用，不可提现，<br>确认转入？</p>
                    <div class="noticeBtn">
                        <label @click="hidePop(2)" class="sure">确定</label>
                        <label @click="hidePop(0)" class="cancel">取消</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Loading from '../../../components/common/loadModal.vue';
    import api  from '../../../service/gold_wallet';
    import utils from '../../../util/utils';

    export default {
  name: 'balance',

  components:{
      Loading,
  },

  data(){
    return{
        isShowLoading: false,
        useAlipay: 0,           //可使用金额
        cid: '',                //cid
        tel: '',                //支付宝账号
        rate: 1,                //金币/人民币 汇率
        useMoney: 0,            //输入提现金额
        balance: 0,

        accountStatus: '添加',  // 账号状态
        popModal: false,         //弹窗
        popType: 1,             //弹窗类型
    }
  },

  computed:{

  },

  created() {
      const _balanceParams = this.$route.params.balanceParams;
      console.log('参数', _balanceParams);
      if(_balanceParams){
          this.useAlipay = _balanceParams.total;
          this.cid = _balanceParams.cid;
          this.rate = _balanceParams.rate;
          this.balance = _balanceParams.balance;
      }
  },

  mounted(){
      window.ofoResponseProxy('setTitle',['转入用车余额']);
  },

  methods:{
      // 全部转入
      _all () {
          this.useMoney = this.useAlipay
      },

      // 关闭弹窗
      hidePop (type) {
          this.popModal = false
          if (type === 2) {
              // 埋点：确认转入余额
              let _info ={
                  'event_classify':'kankan_v2',
                  'event_page':'CashWithdrawPage',
                  'event_name': 'ToAccountBalanceConfirm',
                  'event_id':'',
                  'event_type':'click',
                  'event_info':{},
              }
              window.saTrackCompat.clickExt('CashWithdrawPage', 'ToAccountBalanceConfirm', _info);
              if (this.useMoney > 0) {
                  const _txnId = utils.generateUUID();
                  // 保留2位小数金额
                  const _money = this.pointLastTwo(Number(this.useMoney));
                  if(_txnId) {
                      // 向上取整金币
                      let outgo = utils.caculateOutgo(_money, this.rate);
                      console.log('金币数量', outgo, this.balance)
                      if(outgo > this.balance){
                          outgo = this.balance
                      }
                      const params = {
                          txnId: _txnId,
                          cid: this.cid,
                          type: "wallet",
                          outgo: -outgo,
                          walletDetail: {
                              money: _money,
                          }
                      }

                      this.CoinOutgo(params);
                  } else {
                      console.log('txnId不存在')
                  }
              } else {
                  window.tip('转入金额必须大于0');
              }
          }
      },

      // 余额截取小数点后两位，不四舍五入
      pointLastTwo (num) {
          let _num = 0;
          try {
              _num = parseFloat(num.toFixed(3).substring(0,num.toString().lastIndexOf('.')+3));
              return _num;
          } catch (e) {
              console.log('=====>余额取整Error:'+e.message)
          }
      },

      // 显示弹窗
      showModal() {
          if(this.useMoney > this.useAlipay) {
               window.tip('提现金额不能大于可使用金额')
          } else{
              this.popModal = true;
          }
      },

      // 兑换金币
      CoinOutgo (params) {
          this.isShowLoading = true;
          api.goldConvert(params)
              .then(data => {
                  this.isShowLoading = false;
                  if(data.errorCode == 200){
                      const _params = {
                          cid: this.cid,
                          requestId: utils.generateUUID()
                      };
                      this.getGoldDetail(_params);
                  } else if (data.errorCode == 40003) {
                      window.tip('接口异常')
                  } else if (data.errorCode == 40004) {
                      window.tip('账户风控')
                  } else if (data.errorCode == 20001) {
                      window.tip('用户不存在')
                  } else{
                      this.handleError(data.errorCode);
                      console.log("OutGoRequest data.msg=================");
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

      // 更新金币balance
      getGoldDetail(params) {
          this.isShowLoading = true;
          api.getGoldDetail(params)
              .then(data => {
                  this.isShowLoading = false;
                  if(data.errorCode == 200){
                      const _params = JSON.parse(window.localStorage.getItem('goldParams'));
                      _params.balance = data.values.balance;
                      window.localStorage.setItem('goldParams', JSON.stringify(_params));
                      this.$router.back();
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

      // focus事件
      changeInit() {
          if(this.useMoney == 0){
              this.useMoney = '';
          }
      },
  }

}
</script>

<style lang="scss">
    @import "../../../style/variable.scss";
    @import "../../../style/rem.scss";
    @import "../../../style/mixin_text.scss";
    html{
        font-size: 20vw;
        overflow: visible;
        background: #fff;
    }
    .goldWallet-alipay{
        height:100%;
        background-color: #fff;
        font-size: rem(12);
        margin: 0 rem(20);
        overflow: hidden;
        .dataOperate{
            padding: rem(20) 0;
            margin-bottom: rem(50);
            border-bottom: 1px solid #f5f5f5;
            .text{
                font-family:PingFangSC-Thin;
                color: #5E636E;
                line-height: rem(18);
                letter-spacing: 1px;
            }
            .text_over{
                color: #D0021B
            }
            .inputBox{
                margin: rem(18) 0;
                display: flex;
                align-items: center;
                font-size: rem(30);
                font-weight:bold;
                span{
                    font-family:PingFangSC-Semibold;
                }
                input{
                    font-family:PingFangSC-Semibold;
                    flex: 1;
                    font-size: rem(30);
                    border: none;
                    width: rem(100);
                }
                .allMoney{
                    float: right;
                    font-weight: 400;
                    color: #1AA1E6;
                    font-size: rem(14);
                }
                .initInput{
                    color: lightgray;
                }
            }
        }
        .alipaySubmit{
            letter-spacing: 1px;
            text-align: center;
            height: 35px;
            line-height: 35px;
            margin: 0 auto;
            width:rem(242);
            background:rgba(254,220,0,1);
            border-radius:rem(18);
        }
        .outer-wrapper{
            position:fixed;
            top:0;
            left:0;
            background: rgba( 0, 0, 0, 0.4);
            z-index:20;
            width:100%;
            height:100%;
            //display:table;
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            .wrapperBox{
                width: 85%;
                background-color: #fff;
                border-radius: rem(8);
                .noiceText{
                    border-radius: rem(8);
                    padding: rem(30) rem(30);
                    display: block;
                    p{
                        font-size: rem(15);
                        font-family:PingFangSC-Regular;
                        letter-spacing: rem(1);
                        font-weight:bold;
                        color:rgba(94,99,110,1);
                        line-height: rem(30);
                    }
                    .noticeBtn{
                        margin-top: rem(30);
                        display: flex;
                        justify-content: space-between;
                        label{
                            width: 47%;
                            height: rem(30);
                            line-height: rem(30);
                            text-align: center;
                            border-radius: rem(15);
                        }
                        .sure{
                            background:rgba(254,220,0,1);
                        }
                        .cancel{
                            background:rgba(223,223,223,1);
                        }
                    }
                }
            }
        }
        input{
            -webkit-appearance: none;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            box-shadow: none;
            outline: none;
            padding: 0;
        }
    }
</style>
