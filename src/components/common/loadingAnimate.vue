<template>
	<!--
    使用方法：
    <loading></loading>
    <script>
        import loading from '../../components/common/loading'
        export default {
            components: {
                loading
            }
        }
    </script>
    -->
    <div class="Loading__Backdroper">
        <div class="Circle">
            <div class=" dian" :class="[isAnimate ? 'one_loading' : '']"></div>
            <div class=" dian" :class="[isAnimate ? 'two_loading' : '']"></div>
            <div class=" dian" :class="[isAnimate ? 'three_loading' : '']"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'loading',
        data(){
            return{
                isAnimate: true
            }
        },
        mounted(){
            setInterval(() => {
                this.isAnimate = !this.isAnimate
            },700)
        }
    }
</script>
<style lang="scss" scoped>
	@import '../../style/rem.scss';
    .Loading__Backdroper{
        width: 100%;
        padding:  rem(20) 0;
        .Circle{
        width: rem(30);
        margin: 0 auto;
        display: flex;
    }
    .dian{
        position: relative;
        width: rem(5);
        height: rem(5);
        background: #FFDC00;
        border-radius: 50%;
        margin-right: rem(5);
        top: 0;        
    }
    .one_loading{
        animation: one 0.3s ;
    }
    .two_loading{
        animation: one 0.3s  0.2s;
    }
    .three_loading{
        animation: one 0.3s  0.4s;
    }
    }
    
    @keyframes one {
        0%{
            top: 0;
        }
        50%{
            top: -10px;
        }
        100%{
            top: 0;
        }
    }
</style>
