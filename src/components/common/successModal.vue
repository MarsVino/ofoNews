<template>
	<!--
    使用方法：
     <successModal v-if="showSucc" :successModalData="successModalData"  @yellowBtnAction="goHome" @grayBtnAction="myCard" ></successModal>
    <script>
        import successModal from '@/components/common/successModal';
        
        export default {
            components: {
                successModal
            },
            data() {
                return {    
                    successModalData:{
                        'text':'恭喜你<br/>成功购买5元次卡享30次畅骑',
                        'minText':'小字号，灰色字体'
                        'yellowBtn':'立即用车',
                        'grayBtn':'查看我的卡'
                    }
                }
            }
        }
    </script>
    -->
    <div class="success_modal">
        <img class="success_img" src="../../assets/common/window_success.png" alt="" />
        <p class="success_text" v-html="successModalData.text"></p>
        <p class="min_text" v-html="successModalData.minText" v-show="successModalData.minText"></p>
        <button v-if="successModalData.yellowBtn" class="yellow_btn" @click="$emit('yellowBtnAction')">{{successModalData.yellowBtn}}</button>
        <button v-if="successModalData.grayBtn" class="gray_btn" @click="$emit('grayBtnAction')">{{successModalData.grayBtn}}</button>
    </div>
</template>
<script>
    export default {
        name: 'successModal',
        props:['successModalData']
    }
</script>
<style lang="scss" scoped>
@import '../../style/rem.scss';
.success_modal{
    width: 100%;
    height: 100%;
    background: #fff;
    text-align: center;
    overflow: hidden;
    font-size: rem(15);
    position: absolute;
    top:0;
    z-index: 10;
    .success_img{
        width: rem(110);
        height: rem(110);
        display: block;
        margin: rem(40) auto rem(25);
    }
    .success_text{
        font-size: rem(19);
        color: #333;
        line-height: rem(28);
        width: 100%;
        padding: 0 rem(22);
        box-sizing: border-box;
        margin: rem(16) 0;
    }
    button{
        border:0;
        outline: 0;
        font-size: rem(15);
        width: rem(300);
        height: rem(45);
        border: none;
        border-radius: rem(45);
        margin-top:rem(30);
        font-family: 'PingFangSC-Regular';
    }
    .yellow_btn{
        background-image: linear-gradient( 90deg, #FFEC00 0%, #FECC00 100%);
        box-shadow: 0 rem(10) rem(20) 0 rgba(255,221,110,0.60);
    }
    .gray_btn{
        border: 1px solid #DADADA;
        background: #ffffff;
    }
    .min_text{
        color: #888;
        padding: 0 rem(12);
        text-align: center;
        font-size: rem(14);
        line-height: rem(22);
        font-family:PingFangSC-Regular;
        margin: rem(16) 0 0;
    }
}
</style>
