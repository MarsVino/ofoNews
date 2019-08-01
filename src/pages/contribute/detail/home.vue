<style lang="scss" scoped>
    @import '../../../style/variable.scss';
    @import '../../../style/rem.scss';
    @import '../../../style/mixin_text.scss';
    html {
        font-size: 20vw;
    }
    .contributeBetter{
        height: 100%;
        position: absolute;
        top:0;
        bottom:0;
        right:0;
        left: 0;
    }
    .contribute-home {
        background-color: #F2F2F2;
        width: 100%;
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
                position: relative;
                .icon{
                    position: absolute;
                    display: inline-block;
                    width: rem(40);
                    height: rem(20);
                    background-image: url("../../../assets/common/ofo.png");
                    background-size: cover;
                    top: rem(14);
                    left: rem(6);
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
                font-size: rem(15);
                text-align: center;
                line-height: rem(30);
                width:rem(75);
                height:rem(30);
                background:rgba(255,220,0,1);
                border-radius:rem(15);
            }
        }
        .container {
            font-size: 0;
            background-color: #fff;
            width: 100%;
            .topic_img {
                height: rem(180);
                margin: rem(6) 0;
                font-size: 0;
                overflow: hidden;
                border-left: none;
                border-right: none;
                position: relative;
                .totalNum {
                    position: absolute;
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    background:rgba(0,0,0,0.5);
                    border-radius:rem(2);
                    font-size: rem(10);
                    color:rgba(255,255,255,1);
                    padding: rem(2) rem(5);
                    right: rem(10);
                    top: rem(20);
                }
                .img_bg {
                    width: 100%;
                }
            }
            .content {
                background-color: #fff;
                font-size: rem(14);
                font-family: PingFangSC;
                text-align: left;
                .contribute {
                    padding: rem(20) rem(20);
                    border-bottom: 6px solid #F2F2F2;
                    .publish {
                        display: flex;
                        align-items: center;
                        font-family: PingFangSC-Light;
                        color: rgba(136, 136, 136, 1);
                        .publish_bg {
                            display: inline-block;
                            width: rem(30);
                            height: rem(30);
                            .imgHead{
                                border-radius: 50%;
                                width: rem(30);
                                height: rem(30);
                            }
                        }
                        .authorD{
                            font-size: rem(12);
                            margin-left: rem(10);
                        }
                        .vote_btn{
                            padding: rem(0) rem(5);
                            display: inline-block;
                            height: rem(20);
                            line-height: rem(20);
                            text-align: center;
                            border-radius:rem(10);
                            font-size: rem(12);
                            border: rem(1) solid #4A90E2;
                            color: #4A90E2;
                        }
                    }
                    .contribute_title {
                        font-size: rem(20);
                        margin-top: rem(10);
                        font-family:PingFangSC-Medium;
                        font-weight:500;
                    }
                    .content_words {
                        margin-top: rem(20);
                    }
                    .content_image {
                        margin: rem(12) 0;
                        .pictureBox {
                            padding: 0;
                            margin: 0;
                            display: flex;
                            flex-wrap: wrap;
                            width: 100%;
                            justify-content: space-between;
                            position: relative;
                            li{
                                position: relative;
                            }
                            .longPic{
                                background:rgba(0,0,0,0.5);
                                font-size: rem(10);
                                color: #fff;
                                position: absolute;
                                padding: rem(2) rem(4);
                                border-radius: 3px;
                                bottom: rem(6);
                                right: rem(5);
                            }
                            .pictureOne {
                                width: 100%;
                                height: 43vw;
                                overflow: hidden;
                                width: 100%;
                                background-repeat: no-repeat;
                                background-size: cover;
                                background-position: center center;
                            }
                            .pictureThree {
                                list-style: none;
                                width: 32.4%;
                                margin-bottom: rem(5);
                            }
                            .pictureTwo {
                                list-style: none;
                                width: 49%;
                                margin-bottom: rem(8);
                            }
                            .bgImg {
                                width: 100%;
                                padding-bottom: 100%;
                                background-repeat: no-repeat;
                                background-size: cover;
                                background-position: center center;
                            }
                            li+li {
                                margin-top: 0
                            }
                        }
                    }
                }
                .vote {
                    margin: rem(20) 0;
                    padding: 0 rem(20);
                    .voter_turnout {
                        display: flex;
                        align-items: center;
                        .discussion {
                            width: rem(12.5);
                            height: rem(12.5);
                            border-radius: 50%;
                            background: rgba(255, 204, 0, 1);
                        }
                        .text {
                            flex: 1;
                            padding-left: rem(6);
                            font-size: rem(15);
                            font-family: PingFangSC-Light;
                        }
                        .amount{
                            font-size: rem(12);
                            font-family:PingFangSC-Light;
                            font-weight:300;
                            color:rgba(136,136,136,1);
                            .redCoins{
                                color: #F65C60;
                            }
                        }
                    }
                    .vote_title {
                        margin-top: rem(20);
                        font-size: rem(18);
                        font-family:PingFangSC-Medium;
                        font-weight:500;
                    }
                    .vote_content {
                        margin: rem(20) 0 rem(30);
                        .vote_btn {
                            display: flex;
                            justify-content: space-between;
                            .btn{
                                display: flex;
                                padding: 0;
                                margin: 0;
                                font-size: 0;
                                align-items: center;
                                height: rem(30);
                                text-align: left;
                                border-radius: 30px;
                                border: none;
                            }
                            .voteText{
                                display: inline-block;
                                padding: 0 rem(13) 0 rem(10);
                                font-size: rem(15);
                                color: rgba(255, 255, 255, 1);
                                font-family: PingFangSC-Light;
                            }
                            .vote_pot{
                                margin: rem(-5) 0 0 rem(5);
                                width: rem(11);
                                height: rem(17);
                                background: url("../../../assets/contribute/whilepot.png");
                                background-size: cover;
                                display: inline-block;
                            }
                            .icon_support {
                                display: inline-block;
                                width: rem(17.5);
                                height: rem(15.5);
                                background: url("../../../assets/contribute/support.png");
                                background-size: cover;
                            }
                            .disableBtn{
                                background:rgba(238,238,238,1) !important;
                                color: rgba(136,136,136,1);
                                box-shadow: 0px 2px 4px 0px rgba(99,99,99,0.5) !important;
                                .icon_support {
                                    background: url("../../../assets/contribute/dissupport.png");
                                    background-size: cover;
                                }
                                .vote_pot{
                                    background: url("../../../assets/contribute/greypot.png");
                                    background-size: cover;
                                }
                                .voteText{
                                    color:rgba(136,136,136,1);
                                }
                            }
                            .btn_agree {
                                background: rgba(245, 90, 93, 1);
                                box-shadow: 0px 2px 4px 0px rgba(253, 117, 117, 0.5);
                            }
                            .btn_disagree {
                                background: rgba(82, 174, 226, 1);
                                box-shadow: 0px 2px 4px 0px rgba(0, 99, 159, 0.5);
                            }
                        }
                        .vote_scale{
                            display: flex;
                            font-size: rem(15);
                            font-family:PingFangSC-Medium;
                            color:rgba(255,255,255,1);
                            width: 100%;
                            height: rem(20);
                            line-height: 130%;
                            margin-bottom: rem(15);
                            .scale{
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            }
                            .scalePk{
                                position: absolute;
                                margin-top: rem(-8);
                                margin-left: rem(-15);
                                width: rem(35);
                                height: rem(35);
                                background: url("../../../assets/contribute/PK.png") no-repeat;
                                background-size: contain;
                            }
                            .preLeft{
                                margin-left: rem(-40);
                            }
                            .preRight{
                                margin-left: rem(10);
                            }
                            .scale_left{
                                border-top-left-radius: rem(13);
                                border-bottom-left-radius: rem(13);
                                background: url("../../../assets/contribute/agree.png") no-repeat;
                                background-size: rem(20);
                                background-repeat: repeat-x;
                            }
                            .scale_right{
                                border-top-right-radius: rem(13);
                                border-bottom-right-radius: rem(13);
                                background: url("../../../assets/contribute/disagree.png") no-repeat;
                                background-size: rem(20);
                                background-repeat: repeat-x;
                            }
                        }
                        .vote_multiple_bg{
                            background-color: rgba(255, 204, 0, 1);
                        }
                        .vote_multiple{
                            background:rgba(240,240,240,1);
                            display: flex;
                            padding: rem(14) rem(17);
                            align-items: center;
                            margin-bottom: rem(10);
                            border-radius: rem(5);
                            position: relative;
                            overflow: hidden;
                            .vote_multiple_isChoice{
                                position: absolute;
                                top: 0;
                                left: 0;
                                height: 100%;
                                .vote_multiple_isChoice_box{
                                    width: 100%;
                                    height: 100%;
                                    background: #ddd;
                                    animation: votesTranslate 2s linear;
                                }
                            }
                            .vote_multiple_isChoiceY{
                                .vote_multiple_isChoice_box{
                                    background:rgba(255,220,0,1);
                                }
                            }
                            .vote_multiple_text{
                                z-index: 100;
                                flex: 1;
                                font-family:PingFangSC-Light;
                                font-weight:300;
                                color:rgba(0,0,0,1);
                                font-size: rem(12);
                                .vote_multiple_text_occupy{
                                    color:rgba(136,136,136,1);
                                }
                            }
                            .vote_multiple_btn{
                                border: rem(1) solid #D7D7D7;
                                border-radius: rem(3);
                                background-color: #fff;
                                width: rem(20);
                                height: rem(20);
                            }
                            .vote_multiple_btn_bg{
                                background-size: 100%;
                                background-repeat: no-repeat;
                                background-image: url("../../../assets/contribute/gou.png");
                            }
                        }
                        .vote_content_single{
                            .vote_multiple_btn{
                                border-radius: rem(10);
                            }
                            .vote_multiple_btn_ball{
                                margin: rem(3) rem(0) rem(0) rem(3);
                                display: inline-block;
                                width: rem(14);
                                height: rem(14);
                                border-radius: rem(7);
                                background: rgba(255, 204, 0, 1);
                            }
                        }
                        .vote_tips_notice{
                            height: rem(45);
                        }
                    }
                    .vote_content_mutiple_submit{
                        color:rgba(51,51,51,1);
                        padding-left: rem(64);
                        padding-right: rem(64);
                        margin-bottom: 0;
                    }
                    .vote_tips {
                        font-size: rem(12);
                        font-family: PingFangSC-Light;
                        color: rgba(136, 136, 136, 1);
                        margin: rem(23) 0 rem(30);
                        display: flex;
                        .redText{
                            color: #F55A5D;
                        }
                        .blueText{
                            color: #52AEE2;
                        }
                        .discussBtn{
                            flex: 1;
                            text-align: right;
                            text-decoration: underline;
                            font-size: rem(13);
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(74,144,226,1);
                        }
                    }
                }
            }
            .vote_yellowBtn{
                padding: 0  rem(35);
                display: inline-block;
                height: rem(45);
                margin: 0 auto rem(19);
                line-height: rem(45);
                text-align: center;
                background:rgba(255,220,0,1);
                border-radius:rem(50);
                font-size: rem(18);
                font-family:PingFangSC-Regular;
            }
            .innerH5, .innerApp{
                text-align: center;
            }
            .innerApp{
                font-size:rem(15);
                .voteCommon{
                    background-color: #fff;
                    .commonTitle{
                        border-top: 6px solid #F2F2F2;
                        padding: rem(18) rem(20) rem(5);
                        display: flex;
                        align-items: center;
                        font-family:PingFangSC-Light;
                        font-weight:300;
                        .ballPot {
                            display: inline-block;
                            width: rem(12.5);
                            height: rem(12.5);
                            border-radius: 50%;
                            background: rgba(255, 204, 0, 1);
                            margin-right: rem(8);
                        }
                    }
                    .commonNull{
                        .noticeText{
                            padding: rem(68) 0 rem(158);
                        }
                    }
                    .commonBox{
                        border-top: 2px solid #F2F2F2;
                    }
                    .commonHave{
                        text-align: left;
                        color: #38A0DC;
                        .commonTitle{
                            padding-top: rem(6);
                        }
                        .bt3{
                            border-top: 2px solid #F2F2F2;
                        }
                        .agreeCommon{
                            color: #F34044;
                            .headerImgBox{
                                .agreeImg{
                                    border: rem(1) solid #F34044;
                                }
                            }
                            .agreeNum{
                                span{
                                    color: #F34044!important;
                                }
                            }
                            .agreeZan{
                                background-image: url("../../../assets/contribute/redZan.png")!important;
                            }
                        }
                        .commonHeader{
                            padding: rem(10) rem(20);
                            display: flex;
                            align-items: center;
                            .headerImgBox{
                                margin-right: rem(10);
                                span{
                                    display: inline-block;
                                    border: rem(1) solid #38A0DC;
                                    border-radius: 50%;
                                    width: rem(34);
                                    height: rem(34);
                                }
                                .headerImg{
                                    margin: rem(2);
                                    border-radius: 50%;
                                    width: rem(30);
                                    height: rem(30);
                                }
                            }
                            .commonUser{
                                flex: 1;
                                .commonNick{
                                    font-size:rem(15);
                                    font-family:PingFangSC-Light;
                                    font-weight:300;
                                    line-height:rem(21);
                                    height: rem(21);
                                }
                                .commonTime{
                                    height:rem(17);
                                    font-size:rem(12);
                                    font-family:PingFangSC-Light;
                                    font-weight:300;
                                    color:rgba(136,136,136,1);
                                    line-height:rem(17);
                                }
                            }
                            .commonZanArea{
                                padding: rem(10) rem(0) rem(10) rem(20);
                            }
                            .commonZan{
                                display: inline-block;
                                vertical-align: sub;
                                cursor: pointer;
                                background-repeat: no-repeat;
                                background-image: url("../../../assets/contribute/dissupport.png");
                                background-size: cover;
                                width: rem(18);
                                height: rem(16);
                                margin-right: rem(4);
                            }
                            .agreeZan{
                                background-image: url("../../../assets/contribute/greenZan.png");
                            }
                            .agreeNum{
                                span{
                                    color: #38A0DC;
                                }

                            }
                            .commonNum{
                                display: inline-block;
                                color:rgba(136,136,136,1);
                                height:rem(17);
                                font-size:rem(12);
                                font-family:PingFangSC-Light;
                                font-weight:300;
                                line-height:rem(17);
                            }
                        }
                        .commonText{
                            word-break:break-all;
                            word-wrap:break-word;
                            color: #000000;
                            font-size: rem(13);
                            padding: 0 rem(20) rem(18);
                        }
                        .apiOver{
                            border-top: 2px solid #F2F2F2;
                            text-align: center;
                            height: rem(100);
                            line-height: rem(100);
                            width: 100%;
                            font-size: rem(14);
                            color:#000;
                        }
                    }
                    .toast{
                        font-size:rem(12);
                        font-family:PingFangSC-Light;
                        color:#000000;
                        span{
                            color: #F55155;
                        }
                    }
                }
            }

        }
        .suspend{
            display: inline-block;
            position: fixed;
            right: 0;
            left: 0;
            margin: 0 auto;
            width: rem(313);
            height: rem(40);
            line-height: rem(40);
            bottom: rem(20);
            text-align: center;
            background:rgba(255,220,0,1);
            border-radius:rem(50);
            font-size: rem(18);
            font-family:PingFangSC-Regular;

            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
        }

        .fade-enter-active {
            transition: all .3s ease;
        }
        .fade-leave-active {
            transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        }
        .fade-enter, .fade-leave-to
            /* .slide-fade-leave-active for below version 2.1.8 */ {
            transform: translateX(10px);
            opacity: 0;
        }
    }
    @keyframes votesTranslate
    {
        0% {
            width: 0;
        }
        100% {
            width: 100%;
        }
    }
</style>

<template>
    <div class="contribute-home contributeBetter" ref="betterScroll">
        <div>
            <div class="downloadApp" v-if="!isApp">
                <div class="ofo">
                    <label class="icon"></label>
                </div>
                <div class="text">
                    <label class="app">ofo<span>APP</span></label>
                    <label class="describe">骑时更轻松</label>
                </div>
                <div @click="openApp" class="open">打开</div>
            </div>
            <div class="container">
                <div class="topic_img">
                    <div class="totalNum">{{totalPeople}}人参与</div>
                    <img class="img_bg" :src="dataDetail.topic_pic">
                </div>
                <div class="content">
                    <div class="contribute">
                        <div class="publish">
                            <div class="publish_bg" @click="closeModal">
                                <img class="imgHead" v-lazy="dataDetail.author_head"></img>
                            </div>
                            <label class="authorD">{{dataDetail.author_nick || '大黄哥'}}</label>
                            <label class="authorD">{{dataDetail.publishTime}}</label>
                            <label style="flex:1"></label>
                            <label v-if="isApp" class="vote_btn" @click="toLink('/contribution', newsId)">
                                我也要投稿
                            </label>
                        </div>
                        <div class="contribute_title">{{dataDetail.title}}</div>
                        <div class="content_words" v-html="dataDetail.text"></div>
                        <div class="content_image" v-if="dataDetail.images && dataDetail.images.length > 0">
                            <div v-if="dataDetail.images.length == 1"  @click="preview(1)" class="pictureBox">
                                <div class="pictureOne" :style="{backgroundImage: 'url(' + dataDetail.images[0].url + ')'}">
                                </div>
                            </div>
                            <ul v-else-if="dataDetail.images.length == 5 || dataDetail.images.length == 8" class="pictureBox">
                                <li class="pictureTwo" @click="preview(ind)" v-for="(pic,ind) in dataDetail.images" v-if="ind < 2">
                                    <label v-show="pic.picLong" class="longPic">长图</label>
                                    <div class="bgImg" v-lazy:background-image="pic.url"></div>
                                </li>
                                <li class="pictureThree" @click="preview(ind)" v-for="(pic,ind) in dataDetail.images" v-if="ind > 1">
                                    <label v-show="pic.picLong" class="longPic">长图</label>
                                    <div class="bgImg" v-lazy:background-image="pic.url"></div>
                                </li>
                            </ul>
                            <ul v-else-if="dataDetail.images.length % 3 == 0" class="pictureBox">
                                <li class="pictureThree" @click="preview(ind)" v-for="(pic,ind) in dataDetail.images">
                                    <label v-show="pic.picLong" class="longPic">长图</label>
                                    <div class="bgImg" v-lazy:background-image="pic.url" ></div>
                                </li>
                            </ul>
                            <ul v-else class="pictureBox">
                                <li class="pictureTwo" @click="preview(ind)" v-for="(pic,ind) in dataDetail.images" v-if="ind < 4">
                                    <label v-show="pic.picLong" class="longPic">长图</label>
                                    <div class="bgImg"v-lazy:background-image="pic.url"></div>
                                </li>
                                <li class="pictureThree" @click="preview(ind)" v-for="(pic,ind) in dataDetail.images" v-if="ind > 3">
                                    <label v-show="pic.picLong" class="longPic">长图</label>
                                    <div class="bgImg"v-lazy:background-image="pic.url"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="vote" v-if="voteDetail.length != 0" :ref="voteDetail.length !=0? '_vote': ''">
                        <div class="voter_turnout">
                            <div class="discussion"></div>
                            <div class="text">话题讨论</div>
                            <div v-if="voteFlag" class="amount"><span>{{totalPeople}}</span>人参与</div>
                            <div v-else class="amount">
                                参与投票领<span class="redCoins">{{dataDetail.text_coins.split(',')[0]}}</span>金币
                            </div>
                        </div>
                        <div class="vote_title">
                            <div class="question">{{dataDetail.question}}</div>
                        </div>
                        <div v-if="voteDetail.length <3" class="vote_content">
                            <div v-if="voteDetail[0].occupy == 100" class="vote_scale">
                                <div class="scale_left scale" :style="{width: voteDetail[0].occupy + '%'}">{{voteFlag ? voteDetail[0].occupy + '%': ''}}</div>
                                <div class="preLeft scalePk" :style="{left: voteDetail[0].occupy+ '%'}"></div>
                            </div>
                            <div v-else-if="voteDetail[0].occupy == 0" class="vote_scale">
                                <div class="preRight scalePk" :style="{left: voteDetail[0].occupy+ '%'}"></div>
                                <div class="scale_right scale" :style="{width: 100 - voteDetail[0].occupy+ '%'}">{{voteFlag ? 100 - voteDetail[0].occupy + '%': ''}}</div>
                            </div>
                            <div v-else class="vote_scale">
                                <div class="scale_left scale" :style="{width: progressL(voteDetail[0].occupy) + '%'}">{{voteFlag && isApp ? voteDetail[0].occupy + '%': ''}}</div>
                                <div class="scalePk" :style="{left: progressL(voteDetail[0].occupy) + '%'}"></div>
                                <div class="scale_right scale" :style="{width: 100 - progressL(voteDetail[0].occupy)+ '%'}">{{voteFlag && isApp ? 100 - voteDetail[0].occupy + '%': ''}}</div>
                            </div>
                            <div class="vote_btn">
                                <div :class="{disableBtn: isApp && (voteFlag.indexOf(1) > -1)}" class="btn btn_agree" @click="toResult(1)">
                                    <span class="vote_pot"></span><label class="icon_support"></label><span class="voteText">{{voteDetail[0].viewpoint}}</span></div>
                                <div :class="{disableBtn: isApp && (voteFlag.indexOf(2) > -1)}" class="btn btn_disagree" @click="toResult(2)">
                                    <span class="vote_pot"></span><label class="icon_support"></label><span class="voteText">{{voteDetail[1].viewpoint}}</span></div>
                            </div>
                            <div class="vote_tips" v-if="isApp && voteDetail.length == 2 && voteFlag">
                                <div>
                                    <div v-if="voteFlag.indexOf(1) != -1" class="redText">您选择了：{{voteDetail[0].viewpoint}}!</div>
                                    <div v-else class="blueText">您选择了：{{voteDetail[1].viewpoint}}!</div>
                                </div>
                            </div>
                            <div v-if="isApp && !voteFlag" class="vote_tips">
                                <div >投票后才可以查看结果，并获得金币奖励哦！快点选择你支持的那一方吧</div>
                            </div>
                        </div>
                        <div v-else class="vote_content">
                            <div v-if="dataDetail.choice_type == 'single'" class="vote_content_single">
                                <div @click="multipleVote(ind)" class="vote_multiple" :class="{vote_multiple_bg: multipleChoice.indexOf(ind + 1) + 1 || voteFlag.indexOf(ind + 1) + 1 }" v-for="(item, ind) in voteDetail">
                                    <div class="vote_multiple_text">
                                        <div>{{item.viewpoint}}</div>
                                        <div v-if="voteFlag && isApp">{{item.occupy + '%'}}</div>
                                    </div>
                                    <div v-if="voteFlag && isApp" :style="{width: item.occupy + '%'}" :class="{'vote_multiple_isChoiceY': voteFlag.indexOf(ind + 1) + 1 }" class="vote_multiple_isChoice">
                                        <div class="vote_multiple_isChoice_box"></div>
                                    </div>
                                    <div v-if="!voteFlag || !isApp" class="vote_multiple_btn">
                                        <span :class="{vote_multiple_btn_ball: multipleChoice.indexOf(ind + 1) + 1 }"></span>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="vote_content_multiple">
                                <div @click="multipleVote(ind)" class="vote_multiple" :class="{vote_multiple_bg: multipleChoice.indexOf(ind + 1) + 1 || voteFlag.indexOf(ind + 1) + 1 }" v-for="(item, ind) in voteDetail">
                                    <div class="vote_multiple_text">
                                        <div>{{item.viewpoint}}</div>
                                        <div v-if="voteFlag && isApp">{{item.occupy + '%'}}</div>
                                    </div>
                                    <div v-if="voteFlag && isApp" :style="{width: item.occupy + '%'}" :class="{'vote_multiple_isChoiceY': voteFlag.indexOf(ind + 1) + 1 }" class="vote_multiple_isChoice">
                                        <div class="vote_multiple_isChoice_box"></div>
                                    </div>
                                    <div v-if="!voteFlag || !isApp" class="vote_multiple_btn" :class="{vote_multiple_btn_bg: multipleChoice.indexOf(ind + 1) + 1 }">
                                    </div>
                                </div>
                            </div>
                            <div v-if="isApp && !voteFlag">
                                <div v-if="!multipleChoice" class="vote_tips">
                                    <div class="vote_tips_notice">投票后才可以查看结果，并获得金币奖励哦！快点选择你支持的那一方吧</div>
                                </div>
                                <div v-else="multipleChoice" class="vote_tips">
                                    <div class="vote_yellowBtn vote_content_mutiple_submit" @click="toResult(multipleChoice)">投票</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="!isApp" class="innerH5">
                    <label class="vote_yellowBtn" @click="openApp">
                        在APP中打开，可以进行投票哦
                    </label>
                </div>
                <div v-else class="innerApp" :ref="voteDetail.length != 0? '' : '_vote'">
                    <div class="voteCommon">
                        <div v-if="commentData.length == 0" class="commonNull">
                            <div class="commonTitle">
                                <span class="ballPot"></span>
                                最新发布
                                <span style="flex:1"></span>
                                <div class="toast" v-show="showWords">
                                    {{toast_start}}<span>{{toast_num}}</span>{{toast_end}}
                                </div>
                            </div>
                            <div class="noticeText">
                                还没有人发布观点哦
                            </div>
                        </div>
                        <div v-else class="commonHave">
                            <div v-for="(item, ind) in commentData" class="commonBox">
                                <div class="commonTitle" v-if="ind < 1 + hotComment">
                                    <span class="ballPot"></span>
                                    {{item.comment_type == 'hot' ? '热门观点': '最新发布'}}
                                    <span v-if="item.comment_type !== 'hot'">{{totalCountComment === 0 ? null : `(${totalCountComment > 999 ? '999+': totalCountComment})`}}</span>
                                    <span style="flex:1"></span>
                                    <div class="toast" v-show="showWords">
                                        {{toast_start}}<span>{{toast_num}}</span>{{toast_end}}
                                    </div>
                                </div>
                                <div class="commonHeader" :class="{agreeCommon: item.vote_flag == 1}">
                                    <div class="headerImgBox" @click="itemClicked(item.id)">
                                        <span class="agreeImg">
                                            <img v-lazy="item.user_head" class="headerImg">
                                        </span>
                                    </div>
                                    <div class="commonUser">
                                        <div class="commonNick">观点：{{item.vote_flag == 1 ? dataDetail.choice1 : dataDetail.choice2}}</div>
                                        <div class="commonTime">{{operateTime(item.created_at)}}</div>
                                    </div>
                                    <div class="commonZanArea" @click="commonAgree(ind)">
                                        <div :class="{agreeZan: item.my_thumbs_up}" class="commonZan">
                                        </div>
                                        <div class="commonNum" :class="{agreeNum: item.my_thumbs_up}">
                                            <span>{{item.thumbs_num ? item.thumbs_num: '赞'}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="commonText" v-html="item.content.replace(/\n/ig, '<br/>')">
                                </div>
                            </div>
                            <div class="apiOver" v-show="!apiRequest">
                                没有了喔～
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <transform name="fade">
            <label v-show="isApp && showBtn" class="suspend" @click="toLink('/viewpoint')">发表观点</label>
        </transform>
        <popCoins v-if="voteCoinsShow" :coinsText="dataDetail.text_coins.split(',')[0]"></popCoins>
        <voteModal @close="closeModal" :voteText="'投票成功'" :previewText="'去评论'"  :closeText="'我知道了'" v-show="isModal"></voteModal>
        <voteModal @close="closeDeleteModal" :voteText="'是否删除评论？'" :previewText="'删除'"  :closeText="'取消'"
                   v-show="isDeleteModal"></voteModal>
    </div>
</template>

<script>
    import api  from '../../../service/contribute';
    import Loading from '../../../components/common/loadModal.vue';
    import utils from '../../../util/utils';
    import BScroll from 'better-scroll'
    import voteModal from '../../../components/common/voteModal.vue'
    import popCoins from '../../../components/common/popCoins.vue'
    import { find } from 'lodash'
    import CommonAPI from '../../../service/common'

    const whiteList = [
        {
            userId: 'an',
            cid: 'c8a94a6db90544364cf59ee1d99d8e3c'
        },
        {
            userId: 'yu',
            cid: '7f966b477cc658398be3264a20d8af20'
        },
        {
            userId: 'chen',
            cid: '3790a98b97539afedd828f4676babcf9'
        },
        {
            userId: 'ma',
            cid: '7d34b23daaca90a38922e9b7441c47dc'
        },
        {
            userId: 'peng',
            cid: '664030c044e9e5d58a009ac722780270'
        },
        {
            userId: 'yang',
            cid: 'c528e92621809e26252d4eb93c05fd54'
        },
        {
            userId: 'yang',
            cid: 'c528e92621809e26252d4eb93c05fd54'
        },
        {
            userId: 'xu',
            cid: 'a9de0ea89352a1f599f8103d5d6ecb23'
        }
    ];

    const whiteListInTest = [
        {
            userId: 'xu',
            cid: 'fb71a340e7122ee0607cc8dc88d4eb30'
        },{
            userId: '杨光',
            cid: 'b502b6efdf75b3b842ad1c50fbd41c88'
        },

    ];

    let trackTime = new Date().getTime()

    export default {
        name: 'contribute',

        components: {
            Loading,
            BScroll,
            voteModal,
            popCoins,
        },

        data() {
            return {
                screenRatio: screen.height / screen.width * 1.5,
                cid: '',
                newsId: '',
                amount: 0,
                dataDetail: {},
                modalData: {},
                imgList: [],
                colorCC: true,
                commentData: [],
                commentNum: 20,
                commentPage: 1,
                hotComment: false,
                isModal: false,
                apiIng: true,
                apiRequest: true,
                flag: 0,
                isApp: window.OFO_ENV.currentEnv != window.OFO_ENV.ENV.UNKNOWN,
                voteFlag: '',
                showBtn: false,
                showWords: true,
                totalCountComment: 0,
                toast_start: '发布观点领',
                toast_num: '88',
                toast_end: '金币',
                multipleChoice: '', // 多选时
                multipleArr: [],
                voteDetail: [],
                totalCount: '',
                totalPeople: '',
                voteChoice: '',
                voteCoinsShow: false,
                isDeleteModal: false,
                commentId: null,
            }
        },

        computed: {},

        created() {
            let id = ''
            let cid = ''
            console.log(window.location.href)
            let p = utils.getHashParam('id')
            console.log(p)
            if(typeof p == 'undefined' || p == ''){
                window.tip('参数缺失')
                return
            }
            p = p.split('@')
            if(p.length > 1){
                id = p[0]
                cid = p[1]
            }
            this.cid = cid
            this.newsId = id
            console.log(this.$route.query)
            let trackInfo = {
                news_id: id,
                from: this.isApp ? 'List': 'Share'
            }
            if (this.$route.query.outIn) {
                this.getCid()
            } else {
                this.intial()
            }
            this.trackMethod('VoteNewsPageView', trackInfo, 'view')
        },

        mounted() {
            // 去掉右上角标识
            ofoBridge.setRightItem({})
            window.ofoResponseProxy('setTitle',['话题讨论']);
            this.$nextTick(() => {
                this._initScroll()
            })
        },
        destroyed() {
            let trackInfo ={
                'event_classify':'kankan_v2',
                'event_page':'VoteNewsPage',
                'event_name': 'VoteNewsPageStayTime',
                'event_id':'',
                'event_type':'view',
                'event_info':{
                    staytime: (new Date().getTime() - trackTime) / 1000,
                    news_id: this.newsId
                },
            }
            window.saTrackCompat.clickExt('VoteNewsPage', 'VoteNewsPageStayTime', trackInfo);
            },
        methods: {

            trackMethod (eventName, eventInfo = {}, eventType = 'click') {
                let trackInfo ={
                    'event_classify':'kankan_v2',
                    'event_page':'VoteNewsPage',
                    'event_name': eventName,
                    'event_id':'',
                    'event_type':eventType,
                    'event_info':eventInfo,
                }
                if (eventType == 'click') {
                    window.saTrackCompat.clickExt('VoteNewsPage', eventName, trackInfo);
                } else {
                    window.saTrackCompat.viewExt('VoteNewsPage', eventName, trackInfo);
                }
            },

            intial () {
                const params1 = {
                    contribution_id: this.newsId,
                    cid: this.cid
                }
                this.getContributeDetail(params1);
                if (this.isApp) {
                    this.getComment()
                } else {
                    this.apiRequest = false
                }
            },
            getCid () {
                CommonAPI.getInfo()
                    .then( data => {
                        if(data.errorCode == 200) {
                            const {cid} = data.values.info;
                            this.cid = cid;
                            this.intial()
                        } else {
                            console.log(data.msg);
                        }
                    }, err => {
                        window.tip(err.msg || '请求失败');
                    }).catch((e) => {
                    window.tip('网络繁忙，请您稍后再试');

                })
            },
            // 页面滑动
            _initScroll () {
                if (!this.scroll) {
                    let betterScroll = this.$refs.betterScroll;
                    this.scroll = new BScroll(betterScroll, {
                        click: true,
                        probeType: 3,
                    })

                    let clientHeight = betterScroll.clientHeight //可见高度
                    this.scroll.on('scroll', (pos) => {
                        let _vote = this.$refs._vote;
                        let voteTop = _vote.offsetTop;
                        let _voteTop = voteTop - clientHeight;

                        if (Math.abs(pos.y) >= _voteTop){
                            this.showBtn = true;
                        } else {
                            this.showBtn = false;
                        }
                    })
                    this.scroll.on('touchEnd', (pos) => {
                        // 滚动到底部
                        let scrollHeight = betterScroll.scrollHeight //滚动高度
                        let scrollTop = scrollHeight - clientHeight
                        if (Math.abs(pos.y) >= scrollTop + 50) {
                            if (this.apiIng || !this.apiRequest) {
                                console.log('不符合接口条件：', this.apiIng || !this.apiRequest)
                                return
                            }
                            this.commentPage++
                            this.getComment()
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
            // 关闭弹窗
            closeModal (flag) {
                console.log(this.voteFlag)
                let dthat = this
                this.voteFlag = this.voteChoice + ''
                if (flag) {
                    this.voteFlag = this.voteChoice
                    this.toLink('/viewpoint')
                } else {
                    this.isModal = false
                    this.voteCoinsShow = true
                    setTimeout(()=>{
                        dthat.voteCoinsShow = false
                    }, 3000)
                }
            },
            // 打开App
            openApp () {
                let url = encodeURIComponent(window.location.href + '&outIn=1')
                console.log(url)
                window.location = `ofolink://ofo.com/web?url=${url}&title=话题讨论`
                //如果没安装app, 则去下载
                setTimeout(function(){
                    window.location = '//common.ofo.so/app/'
                },2000)
            },
            // 链接
            toLink (router) {
                let _Params = {
                    cid: this.cid,
                    newsId: this.newsId
                }
                let trackInfo = {
                    contribute_id: '',
                    news_id: this.newsId
                }
                let trackName = 'WantToContribute'
                if(router === '/viewpoint'){
                    trackInfo = {
                        comment_id: '',
                        news_id: this.newsId
                    }
                    trackName = 'Comment'
                    try {
                        if(this.voteChoice.length <= 0) {
                            window.tip('参与投票后，才能发布观点哦~')
                            return;
                        }
                        _Params = {
                            cid: this.cid,
                            single: this.dataDetail.choice_info.length < 3,
                            title: this.dataDetail.title,
                            commentId: this.voteFlag,
                            commentFlag: this.dataDetail.my_comment_flag,
                            commentCoins: this.dataDetail.text_coins.split(',')[1],
                            contribution_id: this.newsId,
                        }
                        if (this.voteChoice.length > 1) {
                            _Params.choice = false
                        } else {
                            _Params.choice = this.voteDetail[this.voteChoice -1].viewpoint
                        }
                    } catch (e) {
                        console.log(e.message)
                    }
                }
                console.log(_Params)
                this.trackMethod(trackName, trackInfo)


                this.$router.push({
                    path: router,
                    query: {
                        homeParams: _Params
                    }
                })
            },

            progressL (len) {
                if (!this.isApp) {
                    return 50
                }
                if (len >= 70) {
                    return 70
                } else if (len <= 30 ) {
                    return 30
                } else {
                    return len
                }
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
            // 评论列表
            getComment () {
                let params = {
                    contribution_id: this.newsId,
                    cid: this.cid,
                    flag: this.flag,
                    pageno: this.commentPage,
                    pagenum: this.commentNum,
                }
                api.contribute_comments(params).then(data=>{
                    this.apiIng = false
                    console.log('contribute_comments',data)
                    let dataP = data.data.contribution_comments
                    this.flag = dataP.flag
                    this.totalCountComment = dataP.total;
                    if (this.commentPage == 1 && dataP.list[0]) {
                        this.hotComment = dataP.list[0].comment_type == 'hot'
                        console.log('this.hotComment', this.hotComment)
                    }
                    this.commentData = this.commentData.concat(dataP.list)
                    if (dataP.list.length < 20) {
                        this.apiRequest = false
                    }
                    this.$nextTick(() => {
                        this._initScroll()
                    })
                }, err => {
                    this.apiIng = false
                    window.tip(err.msg || '网络繁忙，请您稍后再试');
                }).catch((e) => {
                    this.apiIng = false
                    window.tip('网络繁忙，请您稍后再试')
                })
                this.$nextTick(() => {
                    this._initScroll()
                })
            },
            // 某一评论点赞
            commonAgree (ind) {
                if (this.commentData[ind].apiReq) {
                    return
                }
                this.commentData[ind].apiReq = true
                if (this.commentData[ind].my_thumbs_up) {
                    this.commentData[ind].thumbs_num--
                } else {
                    this.commentData[ind].thumbs_num++
                }
                this.commentData[ind].my_thumbs_up = !this.commentData[ind].my_thumbs_up
                console.log(this.commentData[ind])
                let params = {
                    cid: this.cid,
                    comment_id: this.commentData[ind].id,
                    op_type: this.commentData[ind].my_thumbs_up ? 'thumbs_up': 'cancel_thumbs_up'
                }
                api.comments_op(params).then(data => {
                    this.commentData[ind].apiReq = false
                    this.trackMethod('CommentUp', {
                        news_id: this.newsId,
                        type: Boolean(this.commentData[ind].my_thumbs_up) * 1,
                        time: utils.formatTime(new Date(), "-", 6)
                    })
                    console.log(data)
                }, err => {
                    this.commentData[ind].apiReq = false
                    if (this.commentData[ind].my_thumbs_up) {
                        this.commentData[ind].thumbs_num--
                    } else {
                        this.commentData[ind].thumbs_num++
                    }
                    this.commentData[ind].my_thumbs_up = !this.commentData[ind].my_thumbs_up
                    window.tip(err.msg || '网络繁忙，请您稍后再试');
                }).catch((e) => {
                    this.commentData[ind].apiReq = false
                    if (this.commentData[ind].my_thumbs_up) {
                        this.commentData[ind].thumbs_num--
                    } else {
                        this.commentData[ind].thumbs_num++
                    }
                    this.commentData[ind].my_thumbs_up = !this.commentData[ind].my_thumbs_up
                    window.tip('网络繁忙，请您稍后再试')
                })
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
            // 关闭弹窗
            close () {
            },
            // 获取投稿咨询详情
            getContributeDetail (params, flag = true) {
                this.isShowLoading = true;
                api.contribute(params)
                    .then( data => {
                        if(data.errors) {
                            window.tip(data.errors[0].message)
                        } else {
                            let dataDetail = data.data.contribution_detail
                            this.voteFlag = dataDetail.my_choice
                            this.voteChoice = dataDetail.my_choice
                            this.totalCount = dataDetail.total_count
                            this.totalPeople = dataDetail.total_people
                            this.voteDetail = dataDetail.choice_info
                            this.voteOpt()
                            if (flag) {
                                dataDetail.text = dataDetail.text.replace(/\n/ig, '<br />')
                                let img = dataDetail.images, imgList = []
                                for (let i = 0; i < img.length; i++)
                                {
                                    imgList.push(img[i].url)
                                    img[i].picLong = img[i].height / img[i].width > this.screenRatio
                                }
                                dataDetail.images = img
                                this.imgList = imgList
                                this.dataDetail = dataDetail
                                console.log('contribute_detail', dataDetail)
                                this.dataDetail.publishTime = this.operateTime(dataDetail.post_time)
                                this.changeToast();
                            }
                            this.delayInitScroll()
                        }
                    }, err => {
                        this.isShowLoading = false;
                        window.tip(err.msg || '网络繁忙，请您稍后再试');
                    }).catch((e) => {
                    window.tip('网络繁忙，请您稍后再试');

                })
            },
            // 投稿
            Vote (params, c1, c2) {
                api.vote(params)
                    .then( data => {
                        if(data.errors){
                            window.tip(data.errors[0].message)
                            this.getContributeDetail(params, false)
                        } else{
                            this.trackMethod('Vote', {
                                news_id: this.newsId,
                                Vote_id: this.voteChoice,
                                time: utils.formatTime(new Date(), "-", 6)
                            })
                            this.isModal = true
                            this.voteDetail = data.data.vote.choice_info
                            this.totalCount = data.data.vote.total_count
                            this.totalPeople = data.data.vote.total_people
                            this.voteOpt()
                            console.log('vote', data)
                        }
                    }, err => {
                        window.tip(err.msg || '网络繁忙，请您稍后再试');
                    }).catch((e) => {
                    window.tip('网络繁忙，请您稍后再试');

                })
            },
            // 多个选择
            multipleVote (ind) {
                if (this.voteFlag || !this.isApp) {
                    return
                }
                let cho = ind + 1
                let pos
                if (this.dataDetail.choice_type == 'single') {
                    if (cho == this.multipleChoice) {
                        this.multipleChoice = ''
                        return
                    }
                    this.multipleChoice = cho + ''
                } else {
                    pos = this.multipleArr.indexOf(cho)
                    if (pos > -1) {
                        console.log('去掉：',cho)
                        this.multipleArr.splice(pos, 1);
                    } else {
                        console.log('加上：',cho)
                        this.multipleArr.push((cho))
                    }
                    this.multipleChoice = this.multipleArr.join(',')
                }
                console.log('选择',this.multipleChoice)
            },
            toResult(_choice = 1) {
                if (!this.isApp || this.voteFlag) {
                    console.log('不在App内 or 已经投过票')
                    return
                }
                this.voteChoice = _choice
                console.log('投票结果：', _choice)
                const params2 = {
                    contribution_id: this.newsId,
                    cid: this.cid,
                    commentFlag: this.dataDetail.my_comment_flag,
                    choice: _choice
                }
                this.Vote(params2)
            },
            // 投票管理
            voteOpt () {
                if (this.voteDetail.length == 0) {
                    return
                }
                if (!this.isApp || !this.voteChoice) {
                    console.log('不在App内')
                    this.voteDetail[0].occupy = 50
                    return
                }
                for (let i = 0, len = this.voteDetail.length; i < len; i++ ) {
                    this.voteDetail[i].occupy =  Math.floor(this.voteDetail[i].count / this.totalCount * 10000)/100
                }
                console.log('占比：', this.voteDetail)
            },

            changeToast () {
                const _flag = this.dataDetail.my_comment_flag;
                console.log(_flag)
                if (_flag === 2) {
                    this.showWords = false;
                } else if(_flag === 1) {
                    this.toast_start = '11个点赞可再得';
                    this.toast_num = this.dataDetail.text_coins.split(',')[2];
                    this.toast_end = '金币'
                }
            },
            itemClicked (id) {
                const list =  utils.getEnv() === 'development' ? whiteListInTest : whiteList
                if (find(list, (item) => item.cid === this.cid)) {
                    this.isDeleteModal = true
                    this.commentId = id
                }
            },
            closeDeleteModal (flag) {
                this.isDeleteModal = false
                // true表示要提交
                if (flag) {
                    console.log('delete')
                    this.commentId && this.deleteComment({
                        cid: this.cid,
                        comment_id: this.commentId,
                        op_type: 'report'
                    })
                } else {
                    this.commentId = null
                }
            },
            // 获取投稿咨询详情
            deleteComment (params) {
                this.isShowLoading = true;
                api.delete_comment(params)
                    .then( data => {
                        this.isShowLoading = false;
                        if(data.errors) {
                            window.tip(data.errors[0].message)
                        } else {
                            console.log('delete success!')
                            this.commentData = this.commentData.filter(t => t.id !== this.commentId)
                        }
                        this.commentId = null
                    }, err => {
                        this.isShowLoading = false;
                        window.tip(err.msg || '网络繁忙，请您稍后再试');
                        this.commentId = null
                    }).catch((e) => {
                    window.tip('网络繁忙，请您稍后再试');
                    this.commentId = null
                })
            },
        },
    }
</script>
