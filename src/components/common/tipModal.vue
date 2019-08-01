<style lang="scss" scoped>

  @import '../../style/rem';
  *{
    margin: 0;
    padding: 0;
  }
  .modal-curtain{
    width:100%;
    height:100%;
    background: rgba(0,0,0,.5);
    position: fixed;
    top:0;
    left:0;
    z-index: 9999;
    .modal-item{
      // position: absolute;
      z-index: 9999;
      margin: auto;
      margin-top: rem(600);
      width:rem(1400);
      height:rem(1400);
      background: white;
      box-shadow: 0 rem(12) rem(14) 0 rgba(112,104,87,0.20);
      border-radius: rem(5);
      .modal-img{
        width:rem(600);
        margin: rem(0) auto rem(120);
        img{
          width:100%;
          position: relative;
          top:rem(80);
        }
      }
      .del-text{
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #333333;
        text-align: center;
      }
      .modal-btn{
        padding:0 rem(27.5);
        margin-top:rem(165);
        display: flex;
        overflow: hidden;
        .cancel{
          width:rem(520);
          height:rem(200);
          background: #FFFFFF;
          border: 1px solid #686666;
          border-radius: rem(100);
          margin: 0 auto;
          text-align: center;
          line-height: rem(200);
          font-family: PingFangSC-Regular;
          font-size: 15px;
          color: #333333;
          letter-spacing: 0;
        }
        .makesure{
          width:rem(520);
          height:rem(200);
          background: #FFDC00;
          border: 1px solid #FFDC00;
          border-radius: rem(100);
          margin: 0 auto;
          text-align: center;
          line-height: rem(200);
          font-family: PingFangSC-Regular;
          font-size: 15px;
          color: #333333;
          letter-spacing: 0;
        }
      }
    }
  }
</style>
<template>
    <div class="modal-curtain">
        <div class="modal-item">
            <div class="modal-img">
                <img src="../../assets/sharebike/window_attention.png" alt="">
            </div>
            <div class="del-text">{{modalDesc}}</div>
            <div class="modal-btn">
                <div class="cancel" @click="cancel">{{text1}}</div>
                <div class="makesure" @click="sure">{{text2}}</div>
            </div>
        </div>
    </div>
</template>
<script>

  export default {
    name: 'tipModal',
    props: ['modalDesc', 'text1', 'text2'],
    methods:{
        cancel(){
            this.$emit('cancel');
        },
        sure(){
            this.$emit('sure');
        }
    }
  }
</script>
