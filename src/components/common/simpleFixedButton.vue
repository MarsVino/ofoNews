<!--
使用方法：
            <CommonBtn :isShowRule="isShowRule" :buttonText="buttonText" @handleBtn="handleBtn" @handleRule="handleRule"></CommonBtn>
            <script>
                import CommonBtn from '@/components/common/simpleFixedButton';
                components: {
                    CommonBtn,
                },
                data(){
                    return{
                        isShowRule: false,
                        buttonText: '购买月卡支持球队',
                    }
                },
            </script>
  -->

<template>
    <div class="bottom-btn-box">
        <template>
            <div class="btn-wrapper">
                <button class="btn" @click="$emit('handleBtn')">{{buttonText}}</button>
            </div>
            <p v-if="isShowRule" @click="$emit('handleRule')">{{ruleText}}</p>
        </template>
    </div>
</template>
<script>
    export default {
        name: 'commonBtn',
        props :['buttonText','isShowRule', 'ruleText'],
        // data() {
        //     return {
        //         isShowRule: true,
        //         buttonText: '购买月卡支持球队',
        //         ruleText: '活动详细规则',
        //     }
        // },
        // methods: {
        //     handleRule() {
        //     }
        // }
    }

</script>
<style lang="scss" scoped>
    @import '../../style/rem';
    .bottom-btn-box {
        width: 100%;
        position: fixed;
        box-sizing: border-box;
        bottom: 0;
        background: #fff;
        font-size: rem(15);
        padding: 0 rem(16) 0;
        // box-shadow: 0 -1px 5px 0 rgba(190, 190, 190, 0.15);
        // -webkit-box-shadow: 0 -1px 5px 0 rgba(190, 190, 190, 0.15);
        overflow: hidden;
        z-index: 2;
        .btn-wrapper {
            padding: rem(22) 0 rem(30);
            overflow: hidden;
            .btn {
                color: #333;
                font-size: rem(15);
                width: rem(300);
                height: rem(45);
                position: inherit;
                margin: 0 auto;
                display: block;
                background-image: linear-gradient( 90deg, #FFEC00 0%, #FECC00 100%);
                box-shadow: 0 rem(10) rem(20) 0 rgba(255, 221, 110, 0.60);
                border-radius: rem(50);
                border: 0;
                z-index: 1;
            }
        }
        p {
            text-align: center;
            display: inherit;
            margin-top: rem(-15);
            font-size: rem(14);
            color: #3DB2FF;
            z-index: 2;
        }
    }

</style>
