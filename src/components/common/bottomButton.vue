<template>
   <div class="bottomButton">
        <div class="buttonWrapper">
            <div class="button" @click="confirm">{{context}}</div>
        </div>
   </div>
</template>

<script>
export default {
    name: 'bottomButton',
    props: ['context'],
    methods: {
        confirm() {
            this.$emit('confirm');
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../../style/rem.scss';
@import '../../style/variable.scss';
@import '../../style/mixin_text.scss';

.bottomButton{
    position: relative;
    width: 100%;
    height: rem(400);
    .buttonWrapper{
        position: fixed;
        bottom: rem(0);
        left: 50%;
        transform: translateX(-50%);
        height: rem(400);
        width: 100%;
        display:flex;
        background: #ffffff;
        justify-content: center;
        align-items: center;
        .button{
            width: rem(1400);
            height: rem(180);
            line-height: rem(180);
            background-image: linear-gradient(90deg, #FFEC00, #FECC00);
            box-shadow: 0 10px 20px 0 rgba(255,221,110,0.60);
            font-size: 15px;
            color: $text-black-color;
            text-align: center;
        }
    }
}

</style>
