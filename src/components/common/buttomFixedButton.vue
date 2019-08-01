  <!--
    @autor  yangtian
    @desc   吸底按钮

    @date   2018.5.7
    @example
            <FixedButton :buttonData="buttonData" :number="couponsMoney" @BtnAction= "buyCard" @leftBtnAction="leftBtnAction"></FixedButton>
            //按钮的点击事件为BtnAction，两个按钮时，左边灰色按钮的点击事件为leftBtnAction

            <script>
                import FixedButton from '@/components/common/buttomFixedButton';
                components: {
                    FixedButton,
                },
                data(){
                    return{
                        buttonData:{
                            'buttonText':'立即购买',//按钮文案,必传
                            'leftText':'总计',//文案,非必传,默认为‘总计’
                            'leftDesc': '', // 左下方描述信息
                            'leftSymbol':'￥',//符号,非必传,默认为‘￥’,
                            'bottomText':'点击立即购买，即表示您已经同意',//底部文案,非必传,不传不显示
                            'bottomLegal':'《月卡购买说明》',//底部xx说明，可点击，非必传
                            'type' : 'oneBtn','twoBtn'//是否单独按钮 非必传,
                            'leftBtnText':'左边灰色按钮的文案',//type为twoBtn时需要传
                            'hideLeftSymbol':false, //默认false,是否展示leftSymbol￥
                            'boxStyle':'notbg',//默认空，不要白色背景可设置为notbg,
                            'btnStyle': '' //非必传
                        }
                    }
                },
            </script>
  -->

<template>
    <div class="bottom-btn-box hasCoupons" :class="{'notbg':buttonData.boxStyle == 'notbg'}">
        <template v-if="buttonData.type == 'set' ">
           <slot></slot>
        </template>
        <template v-else-if="buttonData.type == 'oneBtn'">
            <div class="btn-wrapper">
                <button class="btn" @click="$emit('BtnAction')" :disabled="buttonData.disabled" v-html="buttonData.buttonText" :style="buttonData.btnStyle"></button>
            </div>
        </template>
        <template v-else-if="buttonData.type == 'twoBtn'">
            <div class="btn-wrapper two">
                <button class="gray-btn" :style="buttonData.leftBtnStyle"  @click="$emit('leftBtnAction')">{{buttonData.leftBtnText}}</button>
                <button class="btn" @click="$emit('BtnAction')" v-html="buttonData.buttonText"  :style="buttonData.btnStyle"></button>
            </div>
        </template>
        <template v-else>
            <div class="leftDesc" v-if="buttonData.leftDesc">
                <div class="inner">
                    <span class="mr10" v-html="buttonData.leftText ? buttonData.leftText :'总计'"></span>{{ buttonData.hideLeftSymbol ? '' : buttonData.leftSymbol ? buttonData.leftSymbol : '￥'}}<b v-if="number">{{number}}</b><s v-if="buttonData.origMoney">{{buttonData.origMoney}}</s>
                    <p><span class="desc" v-html="buttonData.leftDesc"></span></p>
                    <slot class="leftDesc" name="leftDesc"></slot>
                </div>
            </div>
            <p class="left" v-else>
                <span class="mr10" v-html="buttonData.leftText ? buttonData.leftText :'总计'"></span>{{ buttonData.hideLeftSymbol ? '' : buttonData.leftSymbol ? buttonData.leftSymbol : '￥'}}<b v-if="number" :key="number">{{number}}</b><s v-if="buttonData.origMoney">{{buttonData.origMoney}}</s>
            </p>
            <div class="touch-wrap"  @click="BtnAction ">
                    <touch-ripple class="button-ripple" :disabled="buttonData.disabled" :center-ripple="false" color="#000" :opacity="0.1" >
                        <button class="btn" :disabled="buttonData.disabled" v-html="buttonData.buttonText" :style="buttonData.btnStyle"></button>
                    </touch-ripple>
            </div>

            <div class="bottom-legal" v-if="buttonData.bottomText">
                <span>{{buttonData.bottomText}}</span>
                <span v-if="buttonData.bottomLegal" class="legal" @click="$emit('legalAction')">{{buttonData.bottomLegal}}</span>
            </div>
        </template>

    </div>
</template>
<script>
    import TouchRipple from '@/components/common/ripple/TouchRipple';
    export default {
        name: 'fixedButton',
        props :['buttonData','number'],
        components: {
            TouchRipple
        },
        methods: {
            BtnAction(){
                if(!this.$props.buttonData.disabled){
                    this.$emit('BtnAction')
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../style/rem';
    .bottom-btn-box{
        width: 100%;
        position: fixed;
        box-sizing: border-box;
        bottom: 0;
        background: #fff;
        font-size: rem(15);
        padding: 0 rem(16) 0;
        box-shadow: 0 -1px 5px 0 rgba(190, 190, 190, 0.15);
        -webkit-box-shadow: 0 -1px 5px 0 rgba(190, 190, 190, 0.15);
        overflow: hidden;
        z-index: 2;
        &.notbg{
            background: transparent;
            box-shadow: none;
            -webkit-box-shadow:none;
        }
        .touch-wrap{
            // width: rem(185);
            // height: rem(45);
            position: absolute;
            top: rem(16);
            right: rem(16);
            border-radius: rem(50);
            overflow: hidden;
        }
        .button-ripple{
            border-radius: rem(50);
        }
        .btn{
            font-size: rem(15);
            width: rem(185);
            height: rem(45);
            border: none;
            background:#FFDC00;
            border-radius: rem(50);
            outline: none;

            &:disabled{
                background-color: #DCDCDC;
                color: rgba(64,50,13,0.40);
                background-image: none;
                box-shadow: none;
            }
        }
        .left{
            float: left;
            line-height: rem(19);
            padding: rem(29) 0;
            min-height: rem(77);
            .mr10{
                padding-right: rem(10);
            }
            b{
                font-size: rem(18);
            }
            s{
                font-size: rem(15);
                color: #999;
                margin-left: 5px;
            }
        }
        .leftDesc {
            float: left;
            height: rem(77);
            display: table;
            .mr10{
                padding-right: rem(10);
            }
            b{
                font-size: rem(18);
            }
            s{
                font-size: rem(15);
                color: #999;
                margin-left: 5px;
            }
            .inner {
                display: table-cell;
                vertical-align: middle;
            }
        }
        .bottom-legal{
            clear: both;
            height: rem(12);
            font-size: 10px;
            line-height: rem(12);
            margin-bottom: rem(12);
            width: 100%;
            text-align: center;
            color: #999;
            font-family:sans-serif;
            .legal{
                color: #FFBC00;
            }
        }
        .btn-wrapper{
            padding:rem(12) 0 rem(20);
            overflow: hidden;
            .btn{
                width: rem(300);
                height: rem(45);
                position: inherit;
                margin:0 auto;
                display: block;
                border: none;
            }
            &.two{
                .btn{
                    width: 47%;
                    float: right;
                }
                .gray-btn{
                    border:#bbb solid 1px;
                    border-radius: rem(45);
                    height: rem(45);
                    line-height: rem(45);
                    background: #fff;
                    outline: 0;
                    font-size: rem(15);
                    text-align: center;
                    width: 47%;
                    color: #666;
                    float: left;
                }
            }
        }
    }
</style>
