<template>
    <div class="goldWallet-aliAccount">
        <div class="inputBox">
            <span>姓名</span>
            <input v-model="aliName" type="text">
        </div>
        <div class="inputBox">
            <span>支付宝账号</span>
            <input v-model="aliTel" type="text">
        </div>
        <div class="alipaySubmit">
            <label @click="toAlipay">立即绑定</label>
        </div>
    </div>
</template>

<script>

export default {
  name: 'alipay',

  components:{
  },

  data(){
    return{
        aliName: '',
        aliTel: '',
        useAlipay: '',
        useMoney: '',
        rate: '',
        balance: 0,
    }
  },

  computed:{

  },

  created() {
      window.ofoResponseProxy('setTitle',['修改支付宝账号']);

      const _aliParams = this.$route.params.aliParams;
      if(_aliParams){
          this.useAlipay = _aliParams.useAlipay;
          this.useMoney = _aliParams.useMoney;
          this.rate = _aliParams.rate;
          this.aliTel = _aliParams.tel;
          this.aliName = _aliParams.aliName;
          this.balance = _aliParams.balance;
      }
  },

  mounted(){

  },

  methods:{
      toAlipay () {
          if(this.aliName && this.aliTel){
              const _params = {
                  aliName: this.aliName,
                  aliTel: this.aliTel,
                  useAlipay: this.useAlipay,
                  useMoney: this.useMoney,
                  rate: this.rate,
                  balance: this.balance,
              }
              this.$router.push({name: 'AliPay', params:{ account_params: _params}})
          } else if(!this.aliName) {
              window.tip('姓名不能为空');
          } else if(!this.aliTel) {
              window.tip('支付宝账号不能为空');
          }

      }
  }

}
</script>

<style lang="scss" scoped>
    @import "../../../style/variable.scss";
    @import "../../../style/rem.scss";
    @import "../../../style/mixin_text.scss";
    html{
        font-size: 20vw;
        overflow: visible;
        background: #fff;
    }
    .goldWallet-aliAccount{
        height:100%;
        background-color: #fff;
        font-size: rem(12);
        margin: 0 rem(20);
        overflow: hidden;
        .inputBox{
            padding: rem(25) 0;
            display: flex;
            font-size:rem(16);
            font-family:PingFangSC-Thin;
            color:rgba(94,99,110,1);
            align-items: center;
            height: rem(18);
            line-height:rem(18);
            border-bottom: 1px solid #f5f5f5;
            input{
                padding-left: rem(10);
                height: rem(25);
                flex: 1;
                border: none;
                width: rem(100);
                font-size: rem(16);
            }
        }
        .alipaySubmit{
            padding-top: rem(50);
            label{
                display: block;
                letter-spacing: 1px;
                text-align: center;
                height: 35px;
                line-height: 35px;
                margin: 0 auto;
                width:rem(242);
                background:rgba(254,220,0,1);
                border-radius:rem(18);
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
