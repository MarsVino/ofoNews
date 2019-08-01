<template>
    <transition name="fade">
        <div class="h-picker" @click="hideSilder">
            <div class="mark" @click="close"></div>
            <div class="con area_ctrl" @click="stopPro">
                <div class="area_btn_box">
                    <div class="area_btn larea_cancel" @click="close">取消</div>
                    <div class="data_name">{{dataName}}</div>
                    <div class="area_btn larea_finish" @click="finish">确定</div>
                </div>
                <div class="area_roll_mask">
                    <div class="area_roll">
                        <div>
                            <div id="area_province" top="0" ref="province"  class="gear area_province" data-areatype="area_province" data-type="provs" :data-len="pData1.length" val="5"
                                 @touchstart="gearTouchStart" @touchmove="gearTouchMove" @touchend="gearTouchEnd">
                                <div class="tooth" v-for="(item,index) in pData1" :key="index">{{item.name}}</div>
                            </div>
                            <div class="area_grid"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        data () {
            return {
                pData1: [],
                pData2: [],
                pData3: [],
                selects: {
                    select1: ''
                },
                noData: false
            }
        },
        props: {
            isShow: {
                type: Boolean,
                default: false
            },
            dataList: {
                type: Array,
                default: []
            },
            selectDataIndex: {
                default: 0
            },
            dataName: {
                type: String,
                default: ''
            }
        },
        methods: {
            stopPro(e){
              e.stopPropagation()
            },
            hideSilder(){
                this.$emit('onHidden')
            },
            close: function (e) {
                this.$emit('onHidden')
                e.preventDefault();
            },
            finish: function (e) {
                console.log('=========e========', e)
                this.$emit('onSelected', this.selects.select1)
                e.preventDefault();
            },
            transfromUnit(val){
                return parseFloat(val*50/75).toFixed(5);
            },
            gearTouchStart(e) {
                e.preventDefault();
                var target = e.target;
                while (true) {
                    if (!target.classList.contains("gear")) {
                        target = target.parentElement;
                    } else {
                        break
                    }
                }
                clearInterval(target["int_" + target.id]);
                target["old_" + target.id] = e.targetTouches[0].screenY;
                target["o_t_" + target.id] = (new Date()).getTime();
                var top = target.getAttribute('top');
                if (top) {
                    target["o_d_" + target.id] = parseFloat(top.replace(/rem/g, ""));
                } else {
                    target["o_d_" + target.id] = 0;
                }
                target.style.webkitTransitionDuration = target.style.transitionDuration = '0ms';
            },
            //手指移动
            gearTouchMove(e) {
                e.preventDefault();
                var target = e.target;
                while (true) {
                    if (!target.classList.contains("gear")) {
                        target = target.parentElement;
                    } else {
                        break
                    }
                }
                target["new_" + target.id] = e.targetTouches[0].screenY;
                target["n_t_" + target.id] = (new Date()).getTime();
                var f = (target["new_" + target.id] - target["old_" + target.id]) * 5 / window.innerHeight;
                target["pos_" + target.id] = target["o_d_" + target.id] + f;
                target.style["-webkit-transform"] = 'translate3d(0,' + target["pos_" + target.id] + 'rem,0)';
                target.setAttribute('top', target["pos_" + target.id] + 'rem');
                if (e.targetTouches[0].screenY < 1) {
                    this.gearTouchEnd(e);
                }
            },
            gearTouchEnd(e) {
                e.preventDefault();
                var target = e.target;
                while (true) {
                    if (!target.classList.contains("gear")) {
                        target = target.parentElement;
                    } else {
                        break;
                    }
                }
                var flag = (target["new_" + target.id] - target["old_" + target.id]) / (target["n_t_" + target.id] - target["o_t_" + target.id]);

                if (Math.abs(flag) <= 0.1) {
                    target["spd_" + target.id] = (flag < 0 ? -0.04 : 0.04);
                } else {
                    if (Math.abs(flag) <= 0.25) {
                        target["spd_" + target.id] = (flag < 0 ? -0.08 : 0.08);
                    } else {
                        target["spd_" + target.id] = flag / 16;
                    }
                }
                if (!target["pos_" + target.id]) {
                    target["pos_" + target.id] = 0;
                }
                this.rollGear(target);
            },
            rollGear(target) {
                var _this = this
                var d = 0;
                var stopGear = false;
                function setDuration () {
                    target.style.webkitTransitionDuration = target.style.transitionDuration = '200ms';
                    stopGear = true;
                }
                clearInterval(target["int_" + target.id]);
                target["int_" + target.id] = setInterval(function () {
                    var pos = target["pos_" + target.id];
                    var speed = target["spd_" + target.id] * Math.exp(-0.03 * d);
                    pos += speed;
                    if (Math.abs(speed) > 0.1) {
                    } else {
                        pos = Math.round(pos / _this.transfromUnit(1) ) * _this.transfromUnit(1);
                        setDuration();
                    }
                    if (pos > 0) {
                        pos = 0;
                        setDuration();
                    }
                    var minTop = -(target.dataset.len - 1) * _this.transfromUnit(1);
                    if (pos < minTop) {
                        pos = minTop;
                        setDuration();
                    }
                    if (stopGear) {
                        var gearVal = pos / _this.transfromUnit(1);
                        _this.setGear(target, gearVal);
                        clearInterval(target["int_" + target.id]);
                    }
                    target["pos_" + target.id] = pos;
                    target.style["-webkit-transform"] = 'translate3d(0,' + pos + 'rem,0)';
                    target.setAttribute('top', pos + 'rem');
                    d++;
                }, 30);
            },
            setGear(target, val) {
                var _self = this
                var endVal =Math.abs(Math.round(val));
                var type = target.getAttribute('data-type');
                _self.selects.select1 = _self.pData1[endVal]
            },
            setTop() {
                this.$nextTick(()=> {
                    var province = this.$refs.province;
                    if (this.selectDataIndex != 0) {
                        let pos1 =  -(this.selectDataIndex * this.transfromUnit(1));
                        province.style.transform = province.style["-webkit-transform"] = 'translate3d(0,' + pos1 + 'rem,0)';
                        province.setAttribute('top', pos1 + 'rem');
                    }
                })
            },
            init() {
                this.pData1 = this.dataList;
                this.selects.select1 = this.pData1[this.selectDataIndex];
                this.setTop();
            }
        },
        created() {
            this.init();
        },
        watch: {
            dataList: {
                handler: function () {
                    this.init()
                },
                deep: true
            },
            isShow (val) {
                val && this.setTop();
            }
        }
    }
</script>


<style lang="scss" scoped>
@import '../../style/rem.scss';
@import '../../style/reset.scss';
@import '../../style/normalize.scss';
    .h-picker{
        height:100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        // background:rgba(0,0,0,0.4);
        font-size: rem(14);
        overflow: auto;
        .gearArea {
            font-family: 'PingFangSC-Regular';
            font-size: rem(14);
            background-color:#FFFFFF;
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9900;
            overflow: hidden;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both
        }
        .area_ctrl {
            font-size: rem(14);
            vertical-align: middle;
            background-color: #fff;
            color: #000;
            margin: 0;
            height: auto;
            width: 100%;
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
            z-index: 9901;
            overflow: hidden;
            border-radius: rem(10) rem(10) 0 0;
        }
        .fade-enter-active,.fade-leave-active {
            transition: .3s;
        }
        .fade-enter,
        .fade-leave-to {
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0)
        }
        .area_roll {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            height: auto;
            overflow: hidden;
            background-color: transparent;
            -webkit-mask: -webkit-gradient(linear, 0% 10%, 0% 100%, from(#debb47), to(rgba(36, 142, 36, 0)));
            -webkit-mask: -webkit-linear-gradient(top, #debb47 10%, rgba(36, 142, 36, 0));
        }
        .area_roll>div {
            font-size: rem(14);
            height: rem(250);
            float: left;
            background-color: transparent;
            position: relative;
            overflow: hidden;
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1
        }
        .area_roll>div .gear {
            width: 100%;
            float: left;
            position: absolute;
            z-index: 9902;
            margin-top: rem(100)
        }
        .area_roll_mask {
            -webkit-mask: -webkit-gradient(linear, 0% 40%, 0% 0%, from(#debb47), to(rgba(36, 142, 36, 0)));
            -webkit-mask: -webkit-linear-gradient(bottom, #debb47 50%, rgba(36, 142, 36, 0));
            padding: 0
        }
        .area_grid {
            position: relative;
            top: rem(100);
            width: 100%;
            height: rem(50);
            margin: 0;
            box-sizing: border-box;
            z-index: 0;
            background: url("../../assets/common/001.png") no-repeat center;
            background-size: cover;
        }
        .area_roll>div:nth-child(3) .area_grid>div {
            left: 42%
        }
        .area_btn {
            width: rem(60);
            color: #333333;
            font-size: rem(14);
            line-height: rem(50);
            height: rem(50);
            text-align: center;
            font-size: rem(15);
            &.larea_cancel{
                color:#999999;
            }
            &.larea_finish{
                color: #333333;
            }
        }
        .area_btn_box:before,.area_btn_box:after {
            content: '';
            position: absolute;
            height: 1px;
            width: 100%;
            display: block;
            background-color: #fff;
            z-index: 15;
            -webkit-transform: scaleY(0.33);
            transform: scaleY(0.33)
        }
        .area_btn_box {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-align: stretch;
            -webkit-align-items: stretch;
            -ms-flex-align: stretch;
            align-items: stretch;
            background-color: #fff;
            position: relative;
            height: rem(50);
            line-height: rem(50);
            border-bottom: 1px solid #EAEAEA;
            border-radius: rem(10) rem(10) 0 0;
        }
        .area_btn_box:before {
            left: 0;
            top: 0;
            -webkit-transform-origin: 50% 20%;
            transform-origin: 50% 20%
        }
        .area_btn_box:after {
            left: 0;
            bottom: 0;
            -webkit-transform-origin: 50% 20%;
            transform-origin: 50% 20%
        }
        .tooth {
            height: rem(50);
            line-height: rem(50);
            font-size: 18px;
            text-align: center;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            line-clamp: 1;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            overflow: hidden
        }
        .data_name{
            font-size: rem(19);
            font-family: PingFangSC-Semibold;
            color: #333;
        }
    }
    .mark {
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        left: 0;
        background: rgba(0,0,0,0.5);
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
        .mark {
            transition: opacity .3s;
        }
        .con {
            transition: transform .3s;
        }
    }
    .fade-enter, .fade-leave-to {
        opacity: 1;
        .mark {
            opacity: 0;
        }
        .con {
            transform: translateY(100%);
        }
    }
</style>
