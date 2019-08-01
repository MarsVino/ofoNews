<template>
    <div class="homeIndex-container" ref="betterScroll">
        <div>
            <div v-show="newsLoading" class="topLoading" v-text="refreshText"></div>
            <div class="downloadApp">
                <div class="ofo">
                    <label class="icon"></label>
                </div>
                <div class="text">
                    <label class="app">ofo<span>APP</span></label>
                    <label class="describe">骑时更轻松</label>
                </div>
                <div @click="openApp" class="open">打开</div>
            </div>
            <a :href="item.detail_url"  class="newsList" v-for="(item,index) in dataList">
                <div class="content">
                    <div v-show="item.label" class="isType" v-text="item.label"></div>
                    <p class="title">{{item.title}}</p>
                    <a class="article" v-show="item.text" v-html="item.text"></a>
                    <div v-if="item.is_vedio">
                        <div class="mediavideo" v-lazy:background-image="item.pics[0].url">
                            <div class="playBtn"></div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="media" v-if="item.pics && item.pics.length > 0">
                            <div v-if="item.pics.length == 1" class="pictureBox">
                                <div class="pictureOne" :style="{backgroundImage: 'url(' + item.pics[0].url + ')'}" @click="handleClick(item.pics[0])">
                                </div>
                            </div>
                            <ul v-else-if="item.pics.length == 5 || item.pics.length == 8" class="pictureBox">
                                <li class="pictureTwo" v-for="(pic,ind) in item.pics" v-if="ind < 2">
                                    <div class="bgImg" v-lazy:background-image="pic.url" @click="handleClick(item, pic)"></div>
                                </li>
                                <li class="pictureThree" v-for="(pic,ind) in item.pics" v-if="ind > 1">
                                    <div class="bgImg" v-lazy:background-image="pic.url" @click="handleClick(item, pic)"></div>
                                </li>
                            </ul>
                            <ul v-else-if="item.pics.length % 3 == 0" class="pictureBox">
                                <li class="pictureThree" v-for="(pic,ind) in item.pics">
                                    <div class="bgImg" v-lazy:background-image="pic.url"  @click="handleClick(item, pic)"></div>
                                </li>
                            </ul>
                            <ul v-else class="pictureBox">
                                <li class="pictureTwo" v-for="(pic,ind) in item.pics" v-if="ind < 4">
                                    <div class="bgImg"v-lazy:background-image="pic.url" @click="handleClick(item, pic)"></div>
                                </li>
                                <li class="pictureThree" v-for="(pic,ind) in item.pics" v-if="ind > 3">
                                    <div class="bgImg"v-lazy:background-image="pic.url" @click="handleClick(item, pic)"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="footer">
                        <label class="isTop" v-show="item.is_top">置顶</label>
                        <label class="isSource">
                            {{item.author}}
                        </label>
                    </div>
                </div>
            </a>
            <!-- loading部分 -->
            <!--<loading v-if="isShowLoading"></loading>-->
            <!-- 图组查看大图部分 -->
        </div>
        <div v-if="isPopup" class="outer-wrapper" @click="isPopup=false">
            <div class="inner-wrapper">
                <img class="inner-img" ref="bigimg" :src="bigImg.url" />
            </div>
        </div>
    </div>
</template>

<script>
import API from '@/service/homeApi';
import BScroll from 'better-scroll'
import Utils from '../../../util/utils';
import refresh from '../static/refresh.png';

export default {
  name: 'gold_wallet',

  components:{
      BScroll
  },

  data(){
    return{
        refreshPic: refresh,
        token: window.getOfoToken(),
        dataList: [],
        refreshText: '',
        newsLoading: false,
        isPopup: false,
        curPage: 1,
        cid: '',
        curType: 'bottom_refresh',
        envLink: 'http://kankan.ofo.com/news/index.html#/?id=',
        envLinkend: '',
        topicType: '',
    }
  },

  computed:{

  },

  created() {
      if (Utils.getEnv() != 'production') {
          this.envLink = 'https://freego.ofo.com/kankan/news/index.html#/?id='
      }
      this.topicType = this.$route.query.topic || '教育'
      window.ofoResponseProxy('setTitle',['主题']);
      this.getDataList()
  },

  mounted(){
      this.$nextTick(() => {
          this._initScroll()
      })
  },

  methods:{
    _initScroll () {
          if (!this.scroll) {
              let betterScroll = this.$refs.betterScroll
              this.scroll = new BScroll(betterScroll, {
                  click: true,
                  probeType: 3
              })
              this.scroll.on('touchEnd', (pos) => {
                  // 滚动到底部
                  let clientHeight = betterScroll.clientHeight //可见高度
                  let scrollHeight = betterScroll.scrollHeight //滚动高度
                  let scrollTop = scrollHeight - clientHeight
                  if (Math.abs(pos.y) >= scrollTop + 50) {
                      //到底了
                      this.curPage++
                      this.getDataList()
                      this.delayInitScroll()
                  }
              })
          } else {
              this.scroll.refresh()
          }
    },
    delayInitScroll () {
      this.$nextTick(() => {
          this._initScroll()
      })
    },
    /*
    * 打开App
    * */
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
        window.location = 'ofolink://ofo.com/tab-kankan'
        //如果没安装app, 则去下载
        setTimeout(function(){
            window.location = '//common.ofo.so/app/'
        },2000)
    },
    /**
     * 获取新闻详情页内容
     */
    getDataList(){
        let dthat = this
        let params = {
            page_index: this.curPage,
            topic: this.topicType
        }
       API.topicList(params)
       .then(data => {
           let news = data.data.topic_kankan_list.news
           dthat.refreshText = news.top_msg
           dthat.dataList = dthat.dataList.concat(news.news_list)
           dthat.newsLoading = true
           dthat.delayInitScroll()
           setTimeout(()=>{
               dthat.newsLoading = false
               dthat.delayInitScroll()
           }, 3000)
           console.log(data.data.kankan_list)
        },err =>{
            this.isShowLoading = false;
           dthat._initScroll()
            window.tip(err.msg || '请求失败');
        }).catch((e) => {
            this.isShowLoading = false;
           dthat._initScroll()
            window.tip('网络繁忙，请您稍后再试');
        })
    },
    linkDetail (id) {
        window.location
    },
    /**
     * 埋点信息
     */
    getNewsView(){
        window.saTrackCompat.viewExt('newspage_view', 'newspage_news_id:'+ this.values.detail.newsId +',article_type:'+this.values.detail.articleType);     //神策展现埋点方式
        ofoTrack.pageShow('newspage_view', {        //ofo自己展现埋点方式
            View: 'newspage_news_id:'+ this.values.detail.newsId +',article_type:'+this.values.detail.articleType
        });
        window.saTrackCompat.viewExt('newspage_view', 'newspage', {event_classify:"kankan", event_page:"NewsPage", event_name:"NewsPageView", event_id:"", event_type:"view", event_info:{news_id: this.values.detail.newsId, article_type: this.values.detail.articleType}});
    },

    /**
     * 处理点击图片展示大图
     * 再次点击后会关闭
    */
    handleClick(item, pic){
/*        if(!this.isPopup){
            this.bigImg = item;
        }
        this.isPopup = !this.isPopup;*/

        //window.location.href =  this.envLink + item.id + '@ abc'
    }

  }

}
</script>

<style lang="scss">
    @import "../../../style/variable";
    @import "../../../style/rem";
    @import "../../../style/mixin_text";
    html{
        font-size: 20vw;
        overflow: visible;
        background: #F2F2F2;
    }
    a{
        text-decoration: none;
    }
    .homeIndex-container{
        position: absolute;
        font-size: rem(12);
        top:0;
        bottom:0;
        right:0;
        left: 0;
        width: 100%;
        background-color: #F2F2F2;
        padding-top: 5px;
        overflow: hidden;
        .downloadApp{
            display: flex;
            align-items: center;
            margin: rem(5) 0;
            background-color: #fff;
            padding: rem(8) rem(12.5);
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
                    background-image: url("../static/ofo.png");
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
        .topLoading{
            text-align: center;
            font-size: rem(16);
            background-color: rgba(0,0,0,0.65);
            color: #fff;
            padding: rem(15);
            width: 100%;
            position: absolute;
        }
        .topRefresh{
            text-align: center;
            padding: rem(15);
            img{
                width: rem(20);
                height: rem(20);
                //transform: rotate(4deg);
                animation: refreshAni 0.7s linear infinite;
            }
        }
        .newsList{
            background: #fff;
            padding: rem(10) rem(15);
            margin-bottom: rem(5);
            display: block;
            text-decoration: none;
            .content{
                font-size: rem(14);
                width: 100%;
            }
            .isType{
                display: inline-block;
                font-size: rem(10);
                padding: rem(2) rem(12);
                border: 1px solid #4A90E2;
                color: #4A90E2;
                border-radius: rem(15);
                margin-bottom: rem(10);
            }
            .title{
                margin: 0;
                line-height: rem(25);
                font-size: rem(18);
                font-weight: 700;
                margin-bottom: rem(8);
            }
            .article{
                margin-bottom: rem(8);
                color:rgba(0,0,0,0.76);
                text-decoration: none;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                overflow: hidden;
            }
            .mediavideo{
                width: 100%;
                height: 48vw;
                overflow: hidden;
                width: 100%;
                background-repeat: no-repeat;
                background-size: cover;
                .playBtn{
                    position: relative;
                    top: 50%;
                    left: 50%;
                    height: rem(48);
                    width: rem(48);
                    margin-top: rem(-24);
                    margin-left: rem(-24);
                    background-size: cover;
                    background-image: url("../static/playVideo.png");
                }
            }
            .media{
                margin-bottom: rem(8);
                .pictureBox{
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    justify-content: space-between;
                    .pictureOne{
                        width: 100%;
                        height: 43vw;
                        overflow: hidden;
                        width: 100%;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center center;
                    }
                    .pictureThree{
                        list-style: none;
                        width: 32.4%;
                        margin-bottom: rem(5);
                    }
                    .pictureTwo{
                        list-style: none;
                        width: 49%;
                        margin-bottom: rem(8);
                    }
                    .bgImg{
                        width: 100%;
                        padding-bottom: 100%;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center center;
                    }
                }
            }
            .line{
                border-bottom: 1px solid #ddd;
                margin-bottom: rem(8);
            }
            .footer{
                font-size: rem(10);
                label{
                    margin-right: rem(8);
                }
                .isTop{
                    color: #D0021B;
                }
                .isSource{
                    color: #ddd;
                }
            }
        }
        .outer-wrapper{
            position:fixed;
            top:0;
            left:0;
            background:rgba(0,0,0,1);
            z-index:1000;
            width:100%;
            min-height:100%;
            //display:table;
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            overflow: auto;
            .inner-wrapper{
                width: 100%;
                display: block;
            }
            .inner-img{
                resize:both;
                width: 100%;
                display: block;
            }
        }
    }
    @keyframes refreshAni
    {
        from {
            transform:rotate(-56deg);
        }
        to {
            transform:rotate(124deg);
        }
    }

</style>
