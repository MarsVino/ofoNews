<style lang="scss" scoped>
    @import '../../../style/variable.scss';
    @import '../../../style/rem.scss';
    @import '../../../style/mixin_text.scss';
    html {
        font-size: 20vw;
    }
    .contribute-home {
        height: 100%;
        .container {
            width: 100%;
            background-color: #fff;
            .content {
                font-size: rem(12);
                font-family:PingFangSC-Light;
                text-align: left;
                padding: rem(21) rem(20) 0;
                .bottom{
                    margin-top: rem(10);
                    /*position: fixed;*/
                    /*bottom: rem(15);*/
                    .btn{
                        .submit{
                            margin: rem(50) 0;
                            width:rem(335);
                            height:rem(45);
                            background:rgba(255,220,0,1);
                            border-radius:rem(50);
                            font-size:rem(18);
                            font-family:PingFangSC-Regular;
                            border: 0;
                        }
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="contribute-home">
        <div class="container">
            <div class="content">
                <div class="bottom">
                    <div class="btn">
                        <button @click="submit" class="submit">打开小程序</button>
                        <button @click="openApp" class="submit">打开App</button>
                    </div>
                </div>
            </div>
            <!-- loading部分 -->
            <loading v-if="showLoading"></loading>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'contribute',

        components: {
        },

        data() {
            return {
            };
        },

        computed: {},

        created() {
        },

        mounted() {
            console.log('一加载好就跳小程序');
            ofoBridge.callHandler('jumpWXMiniProgram', {'path':'pages/customerService/index?name=butterfly','userName':
                'gh_7e595a992075'})
        },

        methods: {
            submit() {
                ofoBridge.callHandler('jumpWXMiniProgram', {'path':'pages/customerService/index?name=butterfly','userName': 'gh_7e595a992075'})
                console.log('打开小程序')
            },
            openApp () {
                let url = encodeURIComponent(window.location.href)
                console.log(url)
                window.location = `ofolink://ofo.com/web?url=${url}&title=话题讨论`
                //如果没安装app, 则去下载
                setTimeout(function(){
                    window.location = '//common.ofo.so/app/'
                },2000)
            }
        },
    }
</script>
