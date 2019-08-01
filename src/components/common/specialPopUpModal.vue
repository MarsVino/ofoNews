special  <!--
    @autor  yangtian
    @desc   1. 页面弹窗，四种类型：成功、失败、错误、其他

    @date   2018.3.32
    @example
           <popupModal v-if="showModal" @close="showModal=false" :modalData="modalData" @oneBtnAction="action">
            //只有一个按钮时，事件名称为‘oneBtnAction’
            //两个按钮，左边按钮事件名称为‘leftBtnAction’，右边按钮事件名称为‘rightBtnAction’
            <script>
                import popupModal from '../../components/common/popupModal'
                import icon from '@/assets/common/window_success.png';
                components: {
                    popupModal,
                },
                data(){
                    return{
                        showModal : false, //弹窗是否展示
                        modalData:{
                            type:'other', //type有四种：‘fail’,'success','error','other'
                            windowImg:icon, //弹窗icon，type为‘other’时必传，其他type不需要传
                            title:"标题标题标题标题",//标题
                            text:'文案文案文案文案',//文本
                            btn:[
                                {
                                    'text':' 取消'
                                },
                                {
                                    'text':'我知道了'
                                }
                            ], //按钮传一个，或者两个
                            showClose : true //是否显示右上角关闭按钮
                        }
                    }
                },
            </script>
  -->

<template>
    <transition name="modal">
        <div class="modal-mask" @touchmove="touchmove">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <span class="modal-close" @click="$emit('close')" v-if="modalData.showClose"></span>
                    <div class="modal-img">
                        <img  v-if="modalData.type == 'fail'"
                                src="../../assets/common/window_attention.png" alt="">
                        <img  v-else-if="modalData.type == 'error'"
                                src="../../assets/common/window_error.png" alt="">
                        <img  v-else-if="modalData.type == 'success'"
                                src="../../assets/common/window_success.png" alt="">
                        <img  v-else-if="modalData.type == 'other'"
                                :src="modalData.windowImg"  alt="">
                        <h1 class="modal-title" v-html="modalData.title"></h1>
                        <p class="modal-text" v-html="modalData.text"></p>
                    </div>
                    <div class="iconimg"><img  v-if="modalData.iconImg"
                                :src="modalData.iconImg" alt=""></div>
                    <p class="modal-bottomText" v-html="modalData.bottomText"></p>
                    <!-- <div class="modal-btns one" v-if=" modalData.btn.length == 0" >
                    </div>
                    <div class="modal-btns one" v-if=" modalData.btn.length == 1" >
                        <button class="oneBtn"  @click="$emit('oneBtnAction')">
                            {{modalData.btn[0].text}}
                        </button>
                    </div>
                    <div class="modal-btns two" v-if=" modalData.btn.length == 2" >
                        <button class="grayBtn"   @click="$emit('leftBtnAction')">
                            {{modalData.btn[0].text}}
                        </button>
                        <button class="yellowBtn"  @click="$emit('rightBtnAction')">
                            {{modalData.btn[1].text}}
                        </button>
                    </div> -->
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'specialPopUpModal',
        props :['modalData'],
        methods:{
            touchmove(e){
                e.preventDefault()
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../style/rem';
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 50%;
        margin-left: -2.5rem;
        width: 5rem;
        // width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

  /*垂直居中*/
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        background: #FFFFFF;
        box-shadow: 0 25px 28px 0 rgba(112,104,87,0.20);
        border-radius: rem(6);
        width: 82%;
        margin: 0 auto;
        padding: 0 0 rem(30) 0;
        background-color: #fff;
        transition: all .3s ease;
        text-align: center;
        position: relative;
        font-size: rem(15);
    }
    .modal-close{
        width: rem(50);
        height: rem(50);
        position: absolute;
        top:0;
        right:0;
        background: url('../../assets/common/close-rank.png') no-repeat center;
        background-size: rem(15) rem(15);
        z-index: 3
    }
    .modal-img{
        position: relative;
        margin-bottom: rem(-30);
        // width:rem(110);
        // margin: 0 auto rem(20);
        img{
            width:100%;
            display: block;
        }
    }
    .modal-title{
        position: absolute;
        left: 0;
        right: 0;
        top:rem(30);
        font-family: PingFangSC-Regular;
        font-size: rem(30);
        line-height: rem(27);
        color: #fff;
        font-weight: normal;
        padding: 0 rem(15);
    }
    .modal-text{
        position: absolute;
        left: 0;
        right: 0;
        top:rem(78);
        // margin-top:rem(12);
        font-family: 'PingFangSC-Regular';
        font-size: rem(14);
        line-height: rem(22);
        color: #fff;
        padding: 0 rem(15);
    }
    .modal-bottomText{
        font-family: 'PingFangSC-Regular';
        font-size: rem(14);
        padding: rem(12) 0 0 0;
    }
    .modal-btns{
        margin-top: rem(30);
    }
    .oneBtn{
        width: rem(150);
        height: rem(45);
        border: 0;
        outline: 0;
        background-image: linear-gradient( 90deg, #FFEC00 0%, #FECC00 100%);
        border-radius: 60px;
        color: #424242;
        font-size: 15px;
    }
    .grayBtn{
        width:rem(120);
        height:rem(45);
        border: 1px solid #DADADA;
        border-radius: rem(30);
        background: #ffffff;
        font-family: 'PingFangSC-Regular';
        font-size: rem(15);
        color: #666666;
        letter-spacing: 0;
        outline:none;
    }
    .yellowBtn{
        width:rem(120);
        height:rem(45);
        background: #FFDC00;
        border-radius: rem(30);
        border:none;
        margin-left:rem(20);
        font-family: 'PingFangSC-Regular';
        font-size: rem(15);
        color: #333333;
        letter-spacing: 0;
        outline:none;
    }
    .iconimg{
        width: 100%;
        height: rem(166);
        position: relative;
        img{
            width: rem(166);
            height: rem(166);
        }
    }
</style>
