<!--
    用法：
    <LoadFail :loadFailData="loadFailData" @reload="reload"></LoadFail>

    <script>
        import img from '../../../assets/common/share.png';
        import LoadFail from '@/components/common/loadFail.vue';
        export default {
            data(){
                return{
                    loadFailData:{
                        'img':img,
                        'text':'标题内容',
                        'btn':'按钮内容'
                    }
                }
            },
            components: {
                LoadFail
            },
            methods: {
                reload(content) {
                    
                }
            }
        }
    </script>
    loadFailData不传也可以，会有默认的文案和图片，图片宽度固定rem(240)。
    
    -->
<template>
    <div class="loadFail">
        <img :src="loadFailData && loadFailData.img ? loadFailData.img : img" />
        <p class="text" v-html="loadFailData && loadFailData.text ? loadFailData.text : '网络失联了'"></p>
        <button class="reload" @click="reload" v-html="loadFailData && loadFailData.btn ? loadFailData.btn : '重新加载'"></button>
    </div>
</template>
<script>
    import img from '../../assets/common/loadfail.png';
    export default {
        name: 'loadFail',
        props :['loadFailData'],
        data() {
            return {
                img : img
            }
        },
        methods:{
            reload(){
                this.$emit('reload')
            }
        }
    }
</script>
<style lang="scss" scoped>

@import '../../style/rem';
*{
    margin: 0;
    padding: 0;
}
.loadFail{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #f6f6f6;
    text-align: center;
    z-index: 100;
    font-size: rem(15);
    img{
        width: rem(240);
        display: block;
        margin: rem(30) auto;
    }
    .text{
        width: 100%;
        color: #888;
        font-size: rem(15);
        padding: 0 rem(22);
        line-height: rem(30);
        box-sizing: border-box;
    }
    .reload{
        width: rem(150);
        height: rem(45);
        border-radius: rem(25);
        border:#dadada solid 1px;
        background: #f6f6f6;
        margin-top: rem(25);
        color: #666;
        font-size: rem(15);
        outline: 0;
    }
}
</style>
