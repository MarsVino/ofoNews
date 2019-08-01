<template>
    <div class="modal-curtain" @click="close">
        <div class="modal-item" @click.prevent.stop="" >
            <img class="close" @click="close" src="../../assets/contribute/close.png" />
            <div class="info">
                <span class="infoText">{{infoText}}</span>
            </div>
            <button class="btn" @click="close">{{btnText}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SubmitTips',
        props: {
            imgSrc: {
                type: String
            },
            infoText: {
                type: String,
                default: "您发表的内容不适宜展示，请修改后再发表"
            },
            btnText:  {
                type: String,
                default: "我知道了"
            }
        },
        data: function () {
            return {}
        },
        methods:{
            close(){
                console.log('close')
                this.$emit('close')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/rem.scss';
    *{
        margin: 0;
        padding: 0;
    }
    .modal-curtain{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 100%;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: rgba(0, 0, 0, 0.37);
        .modal-item{
            position: relative;
            height: rem(310);
            width: rem(316);
            box-sizing: border-box; // 不会因为padding撑大
            padding: 0 rem(29);
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: PingFangSC-Regular;
            font-size: rem(15);
            background: #fff;
            border: 1px solid #fff;
            box-shadow: 0 rem(12) rem(14) 0 rgba(112,104,87,0.20);
            border-radius: rem(7.5);
            .close{
                position: absolute;
                top: rem(20);
                right: rem(20);
                display: inline-block;
                width: rem(24);
                height: rem(24);
            }
            .info {
                margin-top: rem(93);
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: rem(100);
                .infoText{
                    font-family:PingFangSC-Medium;
                    font-size: rem(24);
                    color:rgba(136,136,136,1);
                }
            }
            .btn{
                margin-top: rem(29);
                width:rem(178);
                height:rem(45);
                background:rgba(255,220,0,1);
                border-radius:rem(50);
                border: 0;
                font-size:rem(18);
                font-family:PingFangSC-Regular;
                color:rgba(51,51,51,1);
            }
        }
    }
</style>
