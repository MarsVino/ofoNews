<template>
    <transition name="modal">
        <div class="modal-mask" v-show="visible" @click="overlay">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="close" v-show="closeHide" @click="$emit('close')">
                        <img :src="close_icon" alt="">
                    </div>
                    <slot name="wrap"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'integral_wall',
        data () {
            return {
                close_icon: require('../../../assets/common/close-o.png')
            }
        },
        props: {
            // 是否显示关闭按钮
            closeHide: {
                type: Boolean,
                default: true
            },
            // 是否显示模态框
            visible: {
                type: Boolean,
                default: false
            },
            // 点击蒙层是否消失
            closeOnClickOverlay: {
                type: Boolean,
                default: true
            }
        },
        watch: {
            visible () {
                // console.log(`是否显示：${this.visible}`)
            }
        },
        methods: {
            overlay () {
                this.$emit('click-overlay')
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../style/rem.scss";

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .8);
        display: table;
        transition: opacity .3s ease;
    }

    /*垂直居中*/
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container{
        position: relative;
        margin: 0 auto;
        width: rem(324);
        .close{
            position: absolute;
            top: rem(8);
            right: rem(18);
            width: rem(27);
            height: rem(27);
            img{
                width: 100%;
            }
        }
    }
    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
</style>
