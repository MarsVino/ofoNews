<!-- 奖励规则 -->
<template>
    <popup
        :visible="visible"
        @close="$emit('close')"
        @click-overlay="$emit('click-overlay')">
        <div slot="wrap" class="modal-wrap" @click="handleClick">
            <main>
                <ul>
                    <li>1.每一个任务，每一位用户只有一次参会机会；</li>
                    <li>2.完成任务即可获得对应任务的奖励，奖励会发放到用户对应手机号码的账户中；</li>
                    <li>3.您可以在【ofo小黄车客户端-钱包】页面查看任务奖励的账户余额；</li>
                    <li>4.您可以在【ofo小黄车客户端-钱包-单车卡】页面查看任务奖励的次卡、周卡及月卡等；</li>
                </ul>
            </main>
            <!-- <footer>
                <button @click="$emit('btnClick')">去做任务</button>
            </footer> -->
        </div>
    </popup>
</template>

<script>
    import popup from './popup'

    export default {
        name: 'integral_wall',
        components: {
            popup
		},
        data () {
            return {
                showModal: false
            }
        },
        props: {
            visible: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            visible () {
                // console.log(`奖励规则：${this.visible}`)
            }
        },
        methods: {
            handleClick (e) {
                e.stopPropagation();
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../style/variable.scss";
	@import "../../../style/rem.scss";
    @import "../../../style/mixin_text.scss";

    @mixin font-common($s, $f: 'FZLTXHK--GBK1-0', $w: 400) {
        font: {
            size: rem($s);
            family: $f;
            weight: $w;
        }
    }

    .modal-wrap{
        background: url('../../../assets/integral_wall/rule-bg.png') no-repeat;
        background-size: cover;
        width: rem(325);
        height: rem(304);
        main{
            height: rem(130);
            width: 100%;
            padding: rem(159) rem(38);
            ul{
                @include font-common(11);
                li{
                    line-height: rem(19)
                }
            }
        }
        footer{
            text-align: center;
            width: 100%;
            button{
                width: rem(149);
                height: rem(31);
                border: none;
                background:rgba(255,228,3,1);
                border-radius: rem(16);
                @include font-common(15);
                color: #804C0E;
            }
        }
    }
</style>
