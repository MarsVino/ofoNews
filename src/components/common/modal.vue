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
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:9999;
        .modal-item{
            position: absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
            margin: auto;
            width:rem(315);
            height:rem(284);
            background: white;
            box-shadow: 0 rem(12) rem(14) 0 rgba(112,104,87,0.20);
            border-radius: rem(5);
            .modal-img{
                width:110px;
                margin: rem(30) auto rem(20);
                img{
                    width:100%;
                }
            }
            .del-text{
                font-family: PingFangSC-Regular;
                font-size: rem(19);
                color: #333333;
                line-height: rem(19);
                text-align: center;
            }
            .modal-btn{
                width:100%;
                padding:0 rem(27.5);
                margin-top:rem(30);
                overflow: hidden;
                .enter{
                    width:rem(120);
                    height:rem(45);
                    background: #FFDC00;
                    border-radius: rem(30);
                    margin: 0 auto;
                    text-align: center;
                    line-height: rem(45);
                    font-family: PingFangSC-Regular;
                    font-size: rem(15);
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
                <img src="../../assets/common/window_attention.png" alt="">
            </div>
            <div class="del-text">{{modalText}}</div>
            <div class="modal-btn">
                <div class="enter" @click="enter">{{btnText}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'modal',
        props :['modalText','btnText'],
        data() {
            return {

            }
        },
        methods:{
            enter(){
                this.$emit('enter')
            }
        }
    }
</script>
