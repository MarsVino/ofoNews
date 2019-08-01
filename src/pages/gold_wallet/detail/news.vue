<style lang="scss" scoped>
    @import '../../../style/rem.scss';
    @import '../../../style/reset.scss';
    @import '../../../style/normalize.scss';
    .downloadApp{
        display: flex;
        align-items: center;
        background-color: #fff;
        padding: rem(8) rem(12.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        border-bottom: rem(6) solid #f2f2f2;
        .ofo{
            width: rem(50);
            height:rem(50);
            background:linear-gradient(138deg,rgba(255,236,0,1) 0%,rgba(254,204,0,1) 100%);
            border-radius: rem(9);
            text-align: center;
            .icon{
                display: inline-block;
                width: rem(40);
                height: rem(20);
                background-image: url("../../../assets/common/ofo.png");
                background-size: cover;
                position: relative;
                top: rem(12);
            }
        }
        .text{
            flex: 1;
            padding-left: rem(10);
            .app{
                display: block;
                width: 100%;
                height:rem(21);
                font-size:rem(15);
                font-family:PingFangSC-Light;
                color:rgba(136,136,136,1);
                line-height:rem(21);
                span{
                    display: inline-block;
                    font-weight: 700;
                    margin-left: rem(2);
                }
            }
            .describe{
                display: block;
                width: 100%;
                height:rem(21);
                font-size:rem(15);
                font-family:PingFangSC-Light;
                color:rgba(136,136,136,1);
                line-height:rem(21);
            }
        }
        .open{
            text-align: center;
            line-height: rem(30);
            width:rem(75);
            height:rem(30);
            background:rgba(255,220,0,1);
            border-radius:rem(15);
        }
    }
    .news{
        background: white;
        padding: rem(18) rem(20) 0px rem(20);
    }

    .news--out{
        padding-top: rem(84);
    }

    .author-info{
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #888888;
        font-size: rem(10);
        font-weight: 300;
        margin-bottom: rem(10);
        .author-header{
            width: rem(22.5);
            height: rem(22.5);
            margin-right: rem(10);
        }
        .author-name{
            margin-right: rem(10);
        }
    }
    .news-content{
        font-size:rem(17);
        font-family:PingFangSC-Light;
        font-weight:300;
        color:black;
        line-height:rem(30);
        text-align: justify;
        margin-bottom: rem(20);
    }

    .news-pics{
        padding-bottom: rem(22.5);
    }

    .command{
        background: white;
        margin-top: rem(10);
        padding: rem(18) rem(20) rem(10) rem(20);
        .title{
            font-size:rem(18);
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:black;
            margin-bottom: rem(20);
        }
        .item{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            img{
                width: rem(100);
                height: rem(75);
            }
            .left{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-right: rem(10);
                .name{
                    font-size:rem(18);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:black;
                    line-height:rem(25);
                }
                .source{
                    font-size:rem(12);
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:#888888;
                }
            }
        }
    }
    .separator{
        height: rem(1);
        background: #DDDDDD;
        margin:rem(10) auto;
    }
    .article-img{
        width: 100%;
    }
</style>

<template>
    <div class="container">
        <div class="downloadApp" v-if="outOfApp">
            <div class="ofo">
                <label class="icon"></label>
            </div>
            <div class="text">
                <label class="app">ofo<span>APP</span></label>
                <label class="describe">骑时更轻松</label>
            </div>
            <div @click="openApp" class="open">打开</div>
        </div>
        <div class="news" v-bind:class="{ 'news--out': outOfApp }" v-if="detail.id">
            <div class="author-info">
                <img v-if="detail.avatar_url" class="author-header" :src="detail.avatar_url"/>
                <span v-if="detail.author" class="author-name">{{detail.author}}</span>
                <span>{{publishTime}}</span>
            </div>
            <div class="news-content">{{detail.text}}</div>
            <div class="news-pics" v-if="detail.pics.length > 0">
                <span v-for="(pic,index) in detail.pics" :key="index" v-on:click="preview(index)">
                   <img class="article-img" :src="pic.url"/>
                </span>
            </div>
        </div>
        <!--
        <div class="command" v-if="showCommend">
            <div class="title">为你推荐</div>
            <div v-for="(item, index) in recommend" :key="index">
                <div class="item" v-on:click="goto(item.id)">
                    <div class="left">
                        <div class="name">{{item.title}}</div>
                        <div class="source">{{item.source}}</div>
                    </div>
                    <div>
                        <img :src="getRecommendPic(item.pics)"/>
                    </div>
                </div>
                <div v-if="index < recommend.length - 1 " class="separator"></div>
            </div>
        </div>
        -->
    </div>
</template>

<script>
    import API from '../../../service/news'
    import {get} from 'lodash'
    import demoPic from '../../../assets/gold/read.png'
    import utils from '../../../util/utils'
    export default{
        name: 'my_news',
        data(){
            return {
                detail:{},
                recommend:[
                ],
                outOfApp: window.OFO_ENV.currentEnv == window.OFO_ENV.ENV.UNKNOWN
            }
        },
        computed:{
            showCommend: function(){
                return this.recommend.length > 0 && !window.OFO_ENV.isLikelyInApp
            },
            publishTime: function(){
                return utils._formatTime(this.detail.publish_time)
            }
        },
        methods: {
            getRecommendPic(pics) {
                if (pics.length > 0) {
                    return pics[0].url;
                }
                return demoPic;
            },
            //推荐资讯跳转
            goto(id) {
                window.ofoCommonRouter({
                    title: '',
                    type: 'bridge',
                    location: window.location.origin + `/news/index.html#/?id=${id}`,
                });
            },
            getPicsParam(isIphone = true){
                const {pics} = this.detail;
                if(isIphone){
                    const rs = pics.map((pic,index)=>{
                        let picUrl = pic.url.trim('%3E')
                        picUrl = picUrl.trim('>')
                        console.log('图片地址', picUrl)
                        return `imageUrls=${encodeURIComponent(picUrl)}`;
                    });
                    return rs.join('&');
                }else{
                    const rs = pics.map((pic,index)=>{
                        return {url: pic.url, is_vedio: false}
                    });
                    return JSON.stringify(rs);
                }
            },
            preview(index){
                switch(window.OFO_ENV.currentEnv){
                    case window.OFO_ENV.ENV.INSIDE_NEW_IOS_APP:
                    case window.OFO_ENV.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP:
                        const link =
                            `ofolink://ofo.com/imagebrowser?${this.getPicsParam()}&currentPage=${index}`;
                        window.ofoBridge .callHandler('router', {url: link},  (response) => {
                            console.log('客服端返回', response);
                        });
                        break;
                    case window.OFO_ENV.ENV.INSIDE_NEW_ANDROID_APP:
                    case window.OFO_ENV.ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP:
                        const v = [
                             {url:'https://ma.ofo.com/adp/files/f255171cf41f5f319af90dcc1c0357df/maimai_exp_0604.png',is_vedio:false},
                             {url:'https://ma.ofo.com/adImage/ofo_cpt/360jietiao/rf_banner_20.png',is_vedio:false}
                            ];
                        window.ofoBridge.router('imagebrowser',{
                            imagePaths: this.getPicsParam(false),
                            index:index
                        });
                }
            },
            openApp() {
                // 埋点：点击打开ofo小黄车客户端
                let _info ={
                    'event_classify':'kankan_v2',
                    'event_page':'ShareCardPage',
                    'event_name': 'BacktoApp',
                    'event_id':'',
                    'event_type':'click',
                    'event_info':{},
                }
                window.saTrackCompat.clickExt('ShareNewsPage', 'BacktoApp', _info);

                let url = encodeURIComponent(window.location.href)
                if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
                    // ios手机上要编码两次
                    url = encodeURIComponent(encodeURIComponent(window.location.href))
                }
                let label =  this.detail.label
                if(label.length > 8){
                    label = label.substr(0,8) + '...'
                }
                const title = encodeURIComponent(label)
                window.location = `ofolink://ofo.com/web?url=${url}&title=${title}`
                //如果没安装app, 则去下载
                setTimeout(function(){
                    window.location = '//common.ofo.so/app/'
                },2000)
            },
        },
        created(){
            console.log('当前网址', window.location.href)
            let p = utils.getHashParam('id')
            if(typeof p == 'undefined' || p == ''){
                window.tip('参数缺失')
                return
            }
            p = p.split('@')
            let id = ''
            let cid = ''
            if(p.length > 1){
              id = p[0]
              cid = p[1]
            }
            if(id){
                API.newsDetail({
                    id,
                    cid
                }).then(data => {
                    if(data.errors){
                        window.tip(data.errors[0].message)
                    }else{
                        this.detail = data.data.news_detail.summary;
                        this.recommend = get(data, 'data.news_detail.recommend', []);
                        let {label} =  this.detail;
                        if(label.length > 8){
                            label = label.substr(0,8) + '...'
                        }
                        console.log('设置标题', label)
                        window.ofoBridge.setTitle(label);
                        console.log('>>>>>获取到详情', data);
                    }
                },err =>{
                    window.tip('获取资讯详情失败')
                });
            }else{
                window.tip('资讯id参数缺失')
            }

        }
    }
</script>
