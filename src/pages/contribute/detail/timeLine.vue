<style lang="scss" scoped>
    @import '../../../style/variable.scss';
    @import '../../../style/rem.scss';
    @import '../../../style/mixin_text.scss';
    html {
        font-size: 20vw;
    }
    .timeLine-home {
        background-color: #F2F2F2;
        width: 100%;
        overflow: hidden;
        .container {
            font-size: 0;
            background-color: #fff;
            width: 100%;
            font-size: 0;
            .topic_img {
                height: rem(215);
                margin: rem(6) 0;
                font-size: 0;
                overflow: hidden;
                border-left: none;
                border-right: none;
                position: relative;
                .timeLine_title{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    font-size: rem(24);
                    background-color: rgba(0,0,0,0.3);
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height: rem(34);
                    padding: rem(2) rem(22) rem(10) rem(22);
                }
                .img_bg {
                    min-height: 100%;
                    width: 100%;
                }
            }
            .content {
                background-color: #fff;
                font-size: 0;
                padding: rem(25) rem(22);
                .content_words{
                    font-size: rem(15);
                    font-family: PingFangSC;
                    text-align: left;
                    line-height: rem(23);
                }
            }

        }
    }
</style>

<template>
    <div class="timeLine-home">
        <div class="container">
            <div class="topic_img">
                <img class="img_bg" :src="dataDetail.topic_pic">
                <div class="timeLine_title">{{dataDetail.title}}</div>
            </div>
            <div class="content">
                <div class="content_words" v-html="dataDetail.text.replace(/\n/ig, '<br/>')"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import api  from '../../../service/contribute';
    import utils from '../../../util/utils';

    export default {
        name: 'contribute',

        components: {
        },

        data() {
            return {
                dataDetail: {},
                cid: '',
                newId: '',
            }
        },

        computed: {},

        created() {
            this.cid = '1'
            this.newsId = '1EBy22rAmQ3HwoO8ffhsKzCYV9o'
            this.intial()
        },

        mounted() {
        },
        methods: {
            intial () {
                const params1 = {
                    contribution_id: this.newsId,
                    cid: this.cid
                }
                this.gettimeLineDetail(params1);
            },

            // 图片预览
            preview(index) {
                if (this.isApp) {
                    this.previewInApp(index)
                    return
                }
                this.$imagePreview({
                    images: this.imgList,
                    index: index,
                    defaultOpt: {
                        galleryPIDs: true
                    }
                })
            },
            previewInApp(index){
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
            getPicsParam(isIphone = true){
                const pics = this.dataDetail.images;
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

            // 时间处理
            operateTime (_publishTime) {
                let _year = utils.formatTime(new Date(), '', 1);
                let dateTime = _publishTime.substr(0,10)
                // 同年
                if ( _publishTime.substr(0, 4) === _year) {
                    const _today = utils.formatTime(new Date(), '-', 3);
                    // 同日
                    if (_publishTime.substr(0, 10) === _today) {
                        dateTime =  _publishTime.substr(11,5)
                    } else{
                        dateTime =  _publishTime.substr(5,5)
                    }

                }
                return dateTime
            },

            // 获取投稿咨询详情
            gettimeLineDetail (params) {
                api.timeLine(params)
                    .then( data => {
                        console.log(data)
                        if(data.errors) {
                            window.tip(data.errors[0].message)
                        } else {
                            console.log(data.data.contribution_detail)
                            this.dataDetail = data.data.contribution_detail
                        }
                    }, err => {
                        window.tip(err.msg || '网络繁忙，请您稍后再试');
                    }).catch((e) => {
                    window.tip('网络繁忙，请您稍后再试');

                })
            },
        },
    }
</script>
