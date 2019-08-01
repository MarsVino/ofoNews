<template>
    <div class="helper-container">
        <div class="helper" ref="helper" @touchstart="$emit('touchstart')">
            <div class="helper-time" v-if="time">{{time}}</div>
            <div :class="mainData.length !== 0 && mainData[0] && mainData[0].type == 5 ? 'helper-main1' : 'helper-main'">
                <div v-for="(item, idx) in mainData" :class="item.extraTime || item.type == 5 ? 'helper-cxt1' : 'helper-cxt'">
                    <div class="helper-time1" v-if="item.extraTime">{{item.extraTime}}</div>
                    <div class="helper-time1" v-if="item.type == 5">{{item.timeStr.slice(5,16)}}</div>
                    <!-- icon变化 -->
                    <span>
                        <img v-if="mainIcon == 2" src="../../assets/repair/ic_service1.png" alt="">
                        <img v-else src="../../assets/repair/ic_service.png" alt="">
                    </span>
                    <div class="helper-right">
                        <!-- title -->
                        <div v-if="item.type == 1 || item.type == 5 || item.type == 2 || item.type == 3 || item.type == 4 || item.type == 7" class="helper-title" :class="{'helper-title1': (item.type != 1 && item.type != 2 && item.type != 3 && item.type != 4)}">
                            <span v-if="item.type== 1">{{title(item.status)}}</span>
                            <span v-else="item.type == 2 || item.type == 3 || item.type == 4">{{item.title}}</span>
                            <span class="btn-text" v-if="item.type == 1" @click="$emit('handleDetail', item.orderId)">{{item.buttonText}}></span>
                        </div>
                        <div v-else-if="item.type == 6" class="helper-img">
                            <img :src="item.icon" alt="">
                        </div>
                        <!-- 内容 -->
                        <div class="helper-info" :class="{'helper-info1': item.type == 5 || item.type == 7, 'helper-info3' : item.type == 6}">
                            <div :class="item.type == 8 ? 'helper-right-img1' : 'helper-right-img'">
                                <img src="../../assets/repair/icon.png" alt="">
                            </div>
                            <div v-if="item.type == 5" class="helper-info-text">
                                {{item.msg}}
                            </div>
                            <div v-else-if="item.type == 6" class="helper-info-text">
                                {{item.title}}
                            </div>
                            <div v-else-if="item.type == 7" class="helper-info-7text" v-for="(v, idx) in item.subMenu">
                                <span @click="$emit('handleInfo', item.formType, v)">{{v.name}}</span>
                            </div>
                            <div v-else-if="item.type == 8" class="helper-info-text-msg">
                                {{item.msg}}
                            </div>
                            <div v-else-if="item.type == 9" class="helper-info-text-msg">
                                {{item.msg[0]}}<span class="msg-link" @click="$emit('yearcard', item.random)">{{item.msg[1]}}</span>
                            </div>
                            <div v-else>
                                <div v-if="item.type == 1">
                                    <div class="helper-info-text">{{type(item.type)}}类型: {{text(item.type)}}</div>
                                    <div class="helper-info-text">订单时间: {{item.orderTime}}</div>
                                    <div class="helper-info-text1">
                                        <span>起点: </span>
                                        <mapInfo :lat="item.startLat" :lng="item.startLng" class="mapInfo" />
                                    </div>
                                    <div class="helper-info-text1">
                                        <span>终点: </span>
                                        <mapInfo :lat="item.endLat" :lng="item.endLng" class="mapInfo"/>
                                    </div>
                                </div>
                                <div v-else-if="item.type == 2 || item.type == 3 || item.type == 4">
                                    <div class="helper-info-text">{{type(item.type)}}类型: {{text(item.type)}}</div>
                                    <div class="helper-info-text1">
                                        <span>位置: </span>
                                        <mapInfo :lat="item.startLat" :lng="item.startLng" class="mapInfo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="helper-bottom">
            <span v-for="(item, idx) in bottomData" :key="idx" @click="$emit('handleBottom', idx, item)">{{item}}</span>
        </div>
    </div>

</template>

<script>
    import moment from 'moment';
    import DicDataUtil from '../../pages/repair/params.js';
    import mapInfo from './map.vue'
    export default {
        name: 'helper',
        props: ['setTitle', 'bottomData', 'time', 'mainData', 'mainIcon', 'extraTime'],
        data() {
            /**
             * 1:报修详情  5:消息类  6:图文类型  2,3,4:反馈类  7:问题类  8:空数组
             * 详情请看 : https://lanhuapp.com/web/#/item/board?type=share_mark&pid=67029caa-7af2-422b-8f3f-a02bfebe3da7&param=bb5421d1-30d8-47e3-9e5f-ff4a4a5bc7b7 ; https://lanhuapp.com/web/#/item/board?pid=fe29a5ff-de01-4db4-853d-bc8396c0c388
             */
            return {}
        },
        watch: {
            /**
             * 监听 mainData 变化, 滚动条变化
             */
            'mainData': function (arg) {
                this.scrollToBottom();
            }
        },
        methods: {
            /**
             * 状态枚举值 转 文字
             */
            text(idx) {
                return DicDataUtil.transfromTextByKey(idx, DicDataUtil.repairType)
            },
            type(idx) {
                return DicDataUtil.transfromTypeByKey(idx, DicDataUtil.repairType)
            },
            title(idx) {
                return DicDataUtil.transfromTextByKey(idx, DicDataUtil.repairStatus)
            },
            /**
             * 页面进入滚动到底部
             */
            scrollToBottom() {
                this.$nextTick(() => {
                    setTimeout(()=>{
                        let helper = this.$refs.helper
                        let bottom = helper.scrollHeight;
                        this.$refs.helper.scrollTop = bottom;
                    },400)
                })
            }

        },
        computed: {

        },
        mounted() {
            window.ofoResponseProxy('setTitle', [this.setTitle]);
            this.scrollToBottom();
        },
        components: {
            mapInfo
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../style/rem.scss';
    @import '../../style/variable.scss';
    @import '../../style/mixin_text.scss';
    * {
        margin: 0;
        padding: 0;
    }

    .helper-container{
        width: 100%;
        height: 100%;
        margin-top: rem(-5);
    }

    .helper {
        width: 100%;
        height: 100%;
        overflow: auto;
        background: #F3F3F3;
        .helper-time {
            padding-top: rem(30);
            text-align: center;
            color: #999999;
            font-size: rem(12);
            margin-bottom: rem(-15);
        }

        .helper-main,  .helper-main1 {
            padding: rem(30) rem(19) rem(70) rem(19);
            .helper-cxt, .helper-cxt1 {
                display: flex;
                justify-content: space-between;
                margin-bottom: rem(15);
                span {
                    width: rem(60);
                    img {
                        width: rem(40);
                        height: rem(40);
                    }
                }
                .btn-text{
                    text-align: right;
                }
                .helper-right {
                    width: rem(280);
                    background: rgba(255, 255, 255, 1);
                    border-radius: rem(10);
                    font-size: rem(15);
                    .helper-title {
                        border-bottom: 1px solid #EAEAEA;
                        display: flex;
                        justify-content: space-between;
                        padding: 0 rem(19);
                        margin-top: rem(18);
                        padding-bottom: rem(14);
                        span:nth-child(1) {
                            width: 75%;
                            display: inline-block;
                            font-weight: 700;
                            color: #333333;
                        }
                        span:nth-child(2) {
                            display: inline-block;
                            color: #4F93EA;
                        }
                    }
                    .helper-img {
                        width: 100%;
                        height: rem(128.5);
                        border: 1px solid;
                        img {
                            width: 100%;
                            height: rem(128.5);
                        }
                    }
                    .helper-info {
                        padding: rem(19) rem(19);
                        color: #666666;
                        position: relative;
                        .helper-info-text {
                            line-height: 1.5;
                            text-align: justify;
                        }
                        .helper-info-text1 {
                            display: flex;
                            span {
                                display: inline-block;
                                width: 16%;
                            }
                            .mapInfo{
                                width: 84%;
                            }
                        }


                    }
                    .helper-info-7text{
                        color: #4F93EA;
                        margin-bottom: rem(10);
                        &:last-child{
                            margin-bottom: 0;
                        }
                    }
                    .helper-title1 {
                        border-bottom: 0;
                        span:nth-child(1) {
                            width: 100%;
                        }
                    }
                    .helper-info1 {
                        padding: 0 rem(19) rem(19) rem(19);
                    }
                    .helper-info3 {
                        padding: rem(11) rem(19) rem(11) rem(19);
                    }
                }
            }
            .helper-cxt1{
                margin-top: rem(60);
                position: relative;
                .helper-time1 {
                    text-align: center;
                    color: #999999;
                    font-size: rem(12);
                    position: absolute;
                    top: rem(-30);
                    position: absolute;
                    left: 0;
                    right: 0;
                }
            }
        }
        .helper-main1{
            padding: 0 rem(19) rem(70) rem(19);
        }
    }
    .helper-info-text-msg{
        color:#333;
        font-size: rem(15);
        font-family: PingFangSC-Regular;
        line-height: 1.5;
        text-align: justify;
    }
    .helper-right-img {
        position: absolute;
        left: rem(-10);
        top: rem(-40);
        width: rem(10);
        height: rem(12);
        img {
            width: rem(10);
            height: rem(12);
        }
    }

    .helper-right-img1 {
        position: absolute;
        left: rem(-10);
        top: rem(14);
        width: rem(10);
        height: rem(12);
        img {
            width: rem(10);
            height: rem(12);
        }
    }

    .helper-bottom {
        -moz-user-select:none;
        -webkit-user-select:none;
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: fixed;
        bottom: 0;
        height: rem(52);
        background: rgba(255, 255, 255, 1);
        align-items: center;
        span {
            height: rem(52);
            width: 33.3%;
            text-align: center;
            line-height: rem(52);
            font-size: rem(13);
            color: #333;
        }
        span:nth-child(2) {
            border-left: 1px solid #EAEAEA;
            border-right: 1px solid #EAEAEA;
        }
    }

    .msg-link {
        color: #4F93EA;
    }
</style>
