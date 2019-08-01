<template>
    <transition name="modal">
        <div :style="{position: location}" class="text-modal-mask">
            <div :style="{position: location}" class="modal-wrapper">
                <h3>{{textData.title}}</h3>
                <div class="text">
                    <p v-html="item" v-for="item in textData.value">{{item}}</p>
                </div>
                <div class="modal-btns one" v-if=" textData.btn.length == 1" >
                    <button class="oneBtn"  @click="$emit('oneBtnAction')">
                        {{textData.btn[0].text}}
                    </button>
                </div>
                <div class="modal-btns two" v-if=" textData.btn.length == 2" >
                    <button class="grayBtn"   @click="$emit('leftBtnAction')">
                        {{textData.btn[0].text}}
                    </button>
                    <button class="yellowBtn"  @click="$emit('rightBtnAction')">
                        {{textData.btn[1].text}}
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    data() {
        return {}
    },
    props: {
        textData: Object,
        location: {
            type: String,
            default: 'absolute'
        }
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
 @import '../../style/rem';

.text-modal-mask {
    position: absolute;
    z-index: 9998;
    top: 0;
    // left: 0;
    left: 50%;
    margin-left: -2.5rem;
    width: 5rem;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, .5);
    font-size: rem(14);
    // transition: opacity .3s ease;
    /*垂直居中*/
    .modal-wrapper {
        position: absolute;
        top: 50%;
        width: 4.2rem;
        left: 50%;
        margin-left: -2.1rem;
        background: #fff;
        transform: translateY(-50%);
        padding: rem(24) rem(24) rem(30);
        border-radius: rem(10);
        box-sizing: border-box;
    }
    h3 {
        font-size: rem(17);
        line-height: rem(20);
        color: #333333;
        font-family: PingFangSC-Medium;
        margin: rem(12) 0;
    }
    .text {
        margin: 8px 0 rem(20);
        font-size: rem(15);
        text-align: justify;
        color: #888888;
        height: rem(220);
        overflow-y: auto;
        p{
            line-height: rem(21);
            margin-bottom: rem(7);
        }
    }
    .oneBtn{
        width: rem(150);
        height: rem(45);
        border: 0;
        outline: 0;
        // background-image: linear-gradient( 90deg, #FFEC00 0%, #FECC00 100%);
        background-color: #ffdc00;
        border-radius: 60px;
        color: #424242;
        font-size: 15px;
        display: block;
        margin: 0 auto;
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
        // background-image: linear-gradient( 90deg, #FFEC00 0%, #FECC00 100%);
        background-color: #ffdc00;
        border-radius: rem(30);
        border:none;
        margin-left:rem(20);
        font-family: 'PingFangSC-Regular';
        font-size: rem(15);
        color: #333333;
        letter-spacing: 0;
        outline:none;
    }
}

</style>
