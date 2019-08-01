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
    <div class="Loading__Backdrop">
        <div class="Loading__Circle">
            <div class="Circle"><i class="Circle_i"></i></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'loading',
        props:['dataComponent', "ischecked"],
    }
</script>
<style scoped>
	@keyframes rotate {
        0%{ transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .Loading__Backdrop{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .Loadong_Circle{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }
    .Circle{
        width: 30px;
        height: 30px;
        margin: 0 auto;
        border-radius: 100px;
        border: 4px solid #fbe400;
        box-sizing: border-box;
        border-top-color: rgba(51,51,51,0);
        animation: rotate .8s infinite linear;
    }
    .Circle_i{
        font-style: normal;
    }
</style>
