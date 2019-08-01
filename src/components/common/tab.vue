<template>
    <!--
    使用方法：
    <tab :datalist='title' v-on:chooseNav="navSelect"></tab>
    <script>
        import tab from '../../components/common/tab'
        export default {
            components: {
                tab
            },
            methods: {
                getUserKnow() {
                    console.log(222)
                }
            }
        }
    </script>
    tab组件需要传入参数： datalist: tab内容（数组）    v-on:chooseNav 方法，回传选中的tab内容
    -->
    <div class="items">
        <div v-for="(item, index) in datalist" 
            :class="[index === activeIndex ? 'item active' : 'item']"
            @click="goToFatherContent(item, index)"
        >
            <span>{{ item }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'icon',
        data() {
            return {
              activeIndex: 0
            }
        },
        props:{
            datalist: {
                type: Array,
                required: true
            }
        },
        methods: {
            goToFatherContent(item, index) {
                if(index !== this.activeIndex){
                    this.activeIndex = index
                    this.$emit('chooseNav', item);
                }
            }
        },
    }
</script>

<style scoped>
    .items{
        display: flex;
        flex-wrap:warp;
        justify-content:center;
        overflow: hidden;
        height: 57px;
        background: #fff;
        border: 1px solid #EAEAEA;
    }
    .item{
        width: 33.33%;
        color: #888888;
        text-align: center;
        align-self: flex-end;
        padding-bottom: 1px;
    }
    .active{
        font-size: 24px;
        color: #333333;
    }
    .active span{
        border-bottom: 1px solid #FFDC00;
    }
</style>
