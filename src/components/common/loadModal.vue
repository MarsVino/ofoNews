<template>
	<!--
    使用方法：
    <LoadModal v-if="load"></LoadModal>
    <script>
        import LoadModal from '@/components/common/loadModal.vue';
        export default {
            data(){
                return{
                    loadModalData:{
                        'text':'支付中...',//不可超过6个字符，否则样式自定义
                        'isMark' : true //是否需要黑色遮罩
                    }
                }
            },
            components: {
                LoadModal
            }
        }
    </script>
    loadModalData也可以不传，会有默认的文案和样式。默认不带遮罩。
    -->
    <div class="loading-box">
        <div class="loading-mark" v-if="loadModalData && loadModalData.isMark"></div>
        <div class="loading-tip">
            <div class="load-wrap">
                <div class="loading-img"></div>
            </div>
            <div class="loading-text" v-html="loadModalData && loadModalData.text ? loadModalData.text : '加载中...'"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'loadModal',
        props:['loadModalData'],
    }
</script>
<style lang="scss" scoped>

    @import '../../style/rem';
	.loading-box{
        width: 5rem;
        height: 100%;
        position: fixed;
        z-index: 100;
        top:0;
        left: 50%;
        margin-left: -2.5rem;
        font-size: rem(15);
        background-color: rgba(0, 0, 0, .6);
        .loading-mark {
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            position: absolute;
            top: 0;
            left: 0;
            z-index: 90;
        }
        .loading-tip {
            background: #fff;
            width: rem(90);
            height: rem(90);
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            text-align: center;
            font-size: rem(14);
            border-radius: rem(10);
            z-index: 99;
            box-sizing: content-box;
        }
        .load-wrap {
            margin: 0 auto;
            width: rem(42);
            height: rem(42);
            border-radius: 50%;
            position: relative;
            margin-top: rem(16);
        }
        .loading-text {
            color: rgb(136,136,136);
            line-height: rem(34);
            font-size: rem(12);
        }
        .loading-img{
            width: rem(35);
            height: rem(35);
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            background-repeat: no-repeat;
            background-position: center;
            background-size: rem(35);
            background-image: url('../../assets/common/ofo_loading.gif');
        }
    }
</style>
