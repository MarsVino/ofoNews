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
                font-size: rem(15);
                font-family:PingFangSC-Light;
                text-align: left;
                padding: 0 rem(20);
                .top{
                    display: flex;
                    align-items: center;
                    margin: rem(10) 0;
                    .icon{
                        margin-right: rem(8);
                        width:rem(12.5);
                        height:rem(13.5);
                        background:rgba(255,204,0,1);
                        border-radius: 50%;
                    }
                }
                .middle{
                    margin-bottom: rem(6);
                    .question{
                        font-size:rem(18);
                        font-family:PingFangSC-Medium;
                        margin-bottom: rem(6);
                    }
                    .point{
                        color:rgba(136,136,136,1);
                    }
                }
                .bottom{
                    .btn{
                        margin-top: rem(20);
                        text-align: right;
                    }
                }
                .publishBtn{
                    padding: 0 rem(25);
                    display: inline-block;
                    height: rem(35);
                    margin: rem(20) auto rem(19);
                    line-height: rem(35);
                    text-align: center;
                    background:rgba(255,220,0,1);
                    border-radius:rem(50);
                    font-size: rem(15);
                    font-family:PingFangSC-Regular;
                    float: right;
                }
            }
        }
    }
</style>

<template>
    <div class="contribute-home">
        <div class="container">
            <div class="content">
                <div class="top">
                    <div class="icon"></div>
                    话题讨论
                </div>
                <div class="middle">
                    <div class="question">{{data ? data.title: ''}}</div>
                    <div class="point" v-if="data.single">您的观点为：{{data? data.choice: ''}}</div>
                </div>
                <div class="bottom">
                    <textArea :maxLength="200" :changeMax="180" :placeHolder="'文明友善、有理有据的观点，才更能说服别人，并有机会获得大量金币哦~'" @content="desciption"></textArea>
                </div>
            </div>
        </div>
        <popCoins v-if="coinsShow" :coinsText="commentCoins || 88"></popCoins>
    </div>
</template>

<script>
    import api  from '../../../service/contribute';
    import Loading from '../../../components/common/loadModal.vue';
    import textArea from '../../../components/common/textArea'
    import popCoins from '../../../components/common/popCoins.vue';
    import _ from 'lodash'
    import utils from '../../../util/utils';

    export default {
        name: 'contribute',

        components: {
            Loading,
            textArea,
            popCoins,
        },

        data() {
            return {
                remnant: 0,
                comments: '',
                coinsShow: false,
                desc: '',
                data:null,
                commentCoins: 0,
                timer:null,
            };
        },

        computed: {},

        created() {
            console.log(this.$route.query.homeParams)
            const _query = this.$route.query.homeParams;
            if (_query) {
                this.data = _query;
                console.log(this.data)
            } else{
                console.log('传参error')
            }
        },

        mounted() {
            window.ofoResponseProxy('setTitle',['话题讨论']);
            let dthat = this
            dthat.setRightBtn()
        },

        methods: {
            setRightBtn(){
                console.log("调用右上角设置viewPoint")
                let that = this;
                ofoBridge.setRightItem({
                    text: '发表', // 文案
                    method: function () {
                        if (that.timer) {
                            return
                        }
                        that.timer = true
                        setTimeout(()=>{
                            that.timer = false
                        }, 5000)
                        if (that.desc.length <= 0) {
                            window.tip('未输入评论内容');
                            return
                        }
                        if (typeof that.desc === 'object') {
                            that.desc = that.desc[0].replace(/\n/g, '<br/>')
                        } else if(typeof that.desc === 'string') {
                            that.desc = that.desc.replace(/\n/g, '<br/>')
                        }
                        const params = {
                            // cid: '000',
                            // contribution_id: '111',
                            cid: that.data.cid,
                            contribution_id: that.data.contribution_id,
                            comments: that.desc
                        }
                        console.log(params)
                        that.isShowLoading = true;
                        api.viewPoint(params)
                            .then( data => {
                                if(data.errors) {
                                    window.tip(data.errors[0].message)
                                } else {
                                    that.isShowLoading = false;
                                    let dataObj = data.data.post_contribution_comments
                                    if(dataObj.result) {
                                        let trackInfo ={
                                            'event_classify':'kankan_v2',
                                            'event_page':'CommentPage',
                                            'event_name': 'CommentConfirm',
                                            'event_id':'',
                                            'event_type':'click',
                                            'event_info':{
                                                news_id: that.$route.query.homeParams.contribution_id,
                                                comment_id: dataObj.comment_id,
                                                Vote_id: that.$route.query.homeParams.commentId,
                                                time: utils.formatTime(new Date(), "-", 6)
                                            },
                                        }
                                        console.log(trackInfo)
                                        window.saTrackCompat.clickExt('CommentPage', 'CommentConfirm', trackInfo);

                                        window.tip('观点发表成功');
                                        this.commentCoins = data.data.post_contribution_comments.coins;
                                        console.log(this.commentCoins)
                                        if(data.data.post_contribution_comments.coins > 0) {
                                            that.coinsShow = true
                                        }
                                        let dthat = that;
                                        setTimeout(function(){
                                            dthat.$router.go(-1)
                                        },2000)
                                    }
                                }
                            }, err => {
                                that.isShowLoading = false;
                                window.tip(err.msg || '网络繁忙，请您稍后再试');
                            }).catch((e) => {
                            window.tip('网络繁忙，请您稍后再试');

                        })
                        this.timer = null;
                    }
                });
            },

            desciption (...desc) {
                this.desc = desc;
            },

            publish() {
                if (this.desc.length <= 0) {
                    window.tip('未输入评论内容');
                    return
                }
                if (typeof this.desc === 'object') {
                    this.desc = this.desc[0].replace(/\n/g, '<br/>')
                } else if(typeof this.desc === 'string') {
                    this.desc = this.desc.replace(/\n/g, '<br/>')
                }
                const params = {
                    cid: this.data.cid,
                    contribution_id: this.data.contribution_id,
                    comments: this.desc
                }
                console.log(params)
                // this.isShowLoading = true;
                // api.viewPoint(params)
                //     .then( data => {
                //         if(data.errors) {
                //             window.tip(data.errors[0].message)
                //         } else {
                //             if(data.data.post_contribution_comments) {
                //                 window.tip('观点发表成功');
                //                 let dthat = this
                //                 setTimeout(function(){
                //                     dthat.$router.go(-1)
                //                 },1000)
                //             }
                //         }
                //     }, err => {
                //         this.isShowLoading = false;
                //         window.tip(err.msg || '请求失败');
                //     }).catch((e) => {
                //     window.tip('网络繁忙，请您稍后再试');
                //
                // })
            }
        },
    }
</script>
