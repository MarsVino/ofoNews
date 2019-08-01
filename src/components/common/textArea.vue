<style lang="scss" scoped>

    @import '../../style/rem';
    *{
        margin: 0;
        padding: 0;
    }
    .textArea{
        padding: rem(15) rem(13);
        border-radius:rem(5);
        border:1px solid rgba(151,151,151,1);
        height: rem(115);
        color:rgba(136,136,136,1);
        .area{
            outline:none;
            border: none;
            font-size: rem(14);
            width: 100%;
            height: rem(90);
            border: 0;
        }
        ::-webkit-input-placeholder{
            font-size: rem(14);
        }
        .words_amount{
            text-align: right;
            .current_amount{
                color:rgba(245,90,93,1);
            }
        }
    }
</style>
<template>
    <div class="textArea">
        <textarea class="area" :placeholder='placeHolder' :maxlength='maxLength' v-model="desc" @input="descInput"></textarea>
        <div class="words_amount">
            <span :class="remnant>=changeMax? 'current_amount': null">{{remnant}}</span>/{{maxLength}}
        </div>
    </div>
</template>
<script>
    export default {
        name: 'textArea',
        props :['maxLength', 'changeMax', 'placeHolder'],
        data() {
            return {
                remnant: 0,
                desc: ''
            }
        },
        methods:{
            descInput () {
                if(this.desc.length<=0) {
                    console.log('none')
                    var input = document.getElementsByClassName("area")[0];
                    input.focus();
                } else{

                }
                let txtVal = this.desc.length;
                this.remnant = txtVal;

                this.$emit('content', this.desc)
            }
        }
    }
</script>
