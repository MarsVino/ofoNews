<style lang="scss" scoped>
    @import '../../style/rem';
    *{
        margin: 0;
        padding: 0;
    }
    .popCoins {
        position: fixed;
        height: 100%;
        width: 100%;
        bottom: 0;
        left: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        .coinsPic{
            position: relative;
            left: rem(32);
            animation: coinsRotate 2s linear;
            height: rem(67);
            width: rem(67);
            background-size: 100%;
            background-repeat: no-repeat;
            background-image: url("../../assets/contribute/coinsPic.png");
        }
        .coinsText{
            position: relative;
            left: rem(-38);
            top: rem(-80);
            font-size: rem(32);
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(252,55,0,1);
            animation: coinsTranslate 2s linear;
        }
    }
    @keyframes coinsRotate
    {
        0% {transform:rotateY(0deg);}
        50% {transform:rotateY(180deg);}
        100% {transform:rotateY(360deg);}
    }
    @keyframes coinsTranslate
    {
        0% {transform: translateY(rem(20));
            top: 0;
        }
        100% {
            transform: translateY(rem(-80));
            top: 0;
        }
    }
</style>
<template>
    <div class="popCoins">
        <div class="coinsPic"></div>
        <div class="coinsText">+ {{coinsText}}</div>
    </div>
</template>
<script>
    export default {
        name: 'popCoins',
        props :['coinsText'],
        data() {
            return {

            }
        },
        methods:{
            close(){
                this.$emit('close')
            }
        }
    }
</script>
