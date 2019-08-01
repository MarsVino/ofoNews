<style lang="scss" scoped>

    @import '../../style/rem';
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
        align-items: center;
        justify-content: center;
        text-align: center;
        .modalBg {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, 0.37);
        }
        .modal-item{
            z-index: 10;
            width:rem(286);
            padding: rem(20);
            font-family: PingFangSC-Regular;
            font-size: rem(15);
            background: #fff;
            border: 1px solid #fff;
            box-shadow: 0 rem(12) rem(14) 0 rgba(112,104,87,0.20);
            border-radius: rem(7.5);
            .close{
                text-align: right;
                .img_close{
                    display: inline-block;
                    width: rem(23.5);
                    height: rem(23.5);
                    background-size: cover;
                    background-image: url("../../assets/contribute/close.png");
                }
            }
            .img{
                width: rem(112);
                height: rem(112);
            }
            .vote_result{
                font-family:PingFangSC-Medium;
                font-size: rem(24);
                color:rgba(136,136,136,1);
            }
            .result{
                margin: rem(30) 0;
                width: 100%;
                display: flex;
                justify-content: space-around;
                .greyBtn{
                    background:rgba(238,238,238,1);
                    color:rgba(136,136,136,1);
                }
                .yellowBtn{
                    color:rgba(51,51,51,1);
                    background:rgba(255,220,0,1);
                }
                .btn{
                    padding: rem(0) rem(30);
                    height:rem(45);
                    border-radius:rem(50);
                    border: 0;
                    font-size:rem(18);
                    font-family:PingFangSC-Regular;
                }
            }
        }
    }
</style>
<template>
    <div class="modal-curtain">
        <div class="modalBg" @click="close(false)"></div>
        <div class="modal-item">
            <div class="close">
                <span class="img_close" @click="close(false)">
                </span>
            </div>
            <div>
                <img class="img" src="../../assets/contribute/voteSuccess.png">
                <div class="vote_result">{{voteText}}</div>
            </div>
            <div class="result">
                <button class="greyBtn btn" @click="close(false)">{{closeText}}</button>
                <button class="yellowBtn btn" @click="close(true)">{{previewText}}</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'voteModal',
        props :['voteText', 'closeText', 'previewText'],
        data() {
            return {

            }
        },
        methods:{
            close(flag = false){
                this.$emit('close', flag)
            }
        }
    }
</script>
