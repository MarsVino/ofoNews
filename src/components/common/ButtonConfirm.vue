    <!--
    用法：
    <ButtonConfirm data-component="确定" v-on:btnClick="btnHandle" isActive="1"></ButtonConfirm>

    <script>
        import ButtonConfirm from '../../components/ButtonConfirm'
        export default {
            components: {
                ButtonConfirm
            },
            methods: {
                btnHandle(content) {
                    console.log(content)
                }
            }
        }
    </script>

    ButtonConfirm组件需要传入三个参数： data-component: 标签内容    v-on:btnClick： 方法    isActive： 是否活动状态
    -->

<template>
    <button v-bind:class="[isActive==1 ? 'btn-active' : 'btn-wrapper']" @click="getUserInfo(dataComponent, isActive)" :disabled="isActive == 2">
        <span class="btn-text">{{dataComponent}}</span>
    </button>
</template>

<script>
export default {
    name: "ButtonConfirm",
    props: ["dataComponent", "isActive"],
    methods: {
        getUserInfo(content, isActive) {
            if (isActive) {
                console.log("isActive");
                this.$emit("btnClick", content);
            } else {
                console.log("disabled");
            }
        }
    }
};
</script>

<style scoped lang="scss">
@import "../../style/rem.scss";
@import "../../style/reset.scss";
@import "../../style/normalize.scss";
.btn-wrapper {
    width: rem(300);
    height: rem(45);
    border: none;
    outline: none;
    font-size: 15px;
    color: #333333;
    margin: 0 auto 20px;
    display: block;
    background: #c2c2c2;
    box-shadow: 0 10px 15px 0 rgba(129, 129, 129, 0.2);
    border-radius: 50px;
}

.btn-text {
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #333333;
    letter-spacing: 0;
}

.btn-active {
    width: rem(300);
    height: rem(45);
    border: none;
    outline: none;
    font-size: 15px;
    color: #333333;
    margin: 0 auto 20px;
    display: block;
    border-radius: 50px;
    background: #FFDC00;
}

.btn-wrapper .btn-text {
    opacity: 0.6;
}

.btn-active .btn-text {
    opacity: 1;
}
</style>
