<template>
    <!--
    使用方法：
    <icon data-component="联通专属送流量" v-on:chooseicon="iconSelect"></icon>
    <script>
        import icon from '../../components/icon'
        export default {
            components: {
                icon
            },
              methods: {
                iconSelect(content) {
                  console.log(content)
                }
              }
        }
    </script>
    icon组件需要传入三个参数： data-component: 标签内容    v-on:chooseicon： 方法    ischecked： 选中状态
    -->
    <div 
        v-bind:class="[ischecked ==1 ? 'font checked' : 'font border']" v-bind:style="dataStyle"
        @click="goToFatherContent(dataComponent, dataType)">{{dataComponent}}{{dataUnit}}
    </div>
</template>

<script>
    export default {
        name: 'icon',
        props:['dataComponent', "dataUnit", "ischecked", 'dataStyle', 'dataType'],
        methods: {
            goToFatherContent(content, dataType) {
                this.$emit('chooseicon', content, dataType);
            }
        },
    }
</script>

<style scoped>
    .font{
        margin: 0px;
        padding: 0px;
        width: 164px;
        height: 60px;
        text-align: center;
        font-size: 16px;
        line-height: 60px;
        border-radius: 10px;
        overflow: hidden;
        display: inline-block;
        box-sizing: border-box;
    }
    .checked{
        background-color: #FFDC00;
        border: solid 1px #FFDC00;
    }
    .border{
        border: solid 1px #E0E0E0;
    }
</style>
