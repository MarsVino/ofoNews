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
                .top{
                    margin-bottom: rem(20);
                    .title{
                        width: 100%;
                        box-sizing: border-box;
                        padding: rem(10) rem(13);
                        height: rem(35);
                        border-radius:rem(5);
                        border:1px solid rgba(151,151,151,1);
                    }
                }
                .middle{
                    .img_area{
                        display: flex;
                        flex-wrap: wrap;
                        width: 100%;
                        margin-top: rem(20);
                        .img_add{
                            display: flex;
                            width:rem(107.5);
                            height:rem(107.5);
                            border:rem(0.5) solid rgba(212,212,212,1);
                            border-radius:rem(2.5);
                            margin: 0 rem(3) rem(5) 0;
                            .img{
                                width: 100%;
                                height: 100%;
                                background-size: cover;
                            }
                            .del{
                                position: relative;
                                left: rem(-20);
                                top: rem(10);
                                z-index: 10;
                                height: rem(15);
                                .img_del{
                                    width: rem(15);
                                }
                            }
                        }
                        .add_model{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-direction: column;
                            background:rgba(249,249,249,1);
                            color:rgba(136,136,136,1);
                            -webkit-text-stroke:rem(0.5) rgba(151,151,151,1);
                            text-stroke:rem(0.5) rgba(151,151,151,1);
                            .img_box{
                                margin-top: rem(5);
                                width: rem(30);
                                height: rem(50);
                                display: flex;
                                flex-direction: column;
                                justify-content: flex-end;
                                .file{
                                    position:absolute;
                                    opacity:0;
                                    width: 50px;
                                    height: 50px;
                                }
                                .icon_plus{
                                    width: rem(30);
                                    height: rem(30);
                                    display: block;
                                }
                            }
                            .p1{
                                font-size:rem(12);
                                margin-top: rem(10);
                                margin-bottom: 0;
                            }
                            .p2{
                                font-size:rem(10);
                                margin: 0;
                            }
                        }
                    }
                }
                .bottom{
                    margin-top: rem(10);
                    /*position: fixed;*/
                    /*bottom: rem(15);*/
                    .btn{
                        .submit{
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
                <div class="top">
                    <input maxlength="30" class="title" type="text" v-model="title" placeholder="请填写标题，最多30字哦">
                </div>
                <div class="middle">
                    <textArea :maxLength="600"
                              :changeMax="550"
                              :placeHolder="'请填写投稿内容，最多600字哦'"
                              @content="desciption"></textArea>
                    <div class="img_area">
                        <div v-for="(item, index) in imgList" class="img_add">
                            <img class="img" :src="item.src" alt="">
                            <div class="del" @click="img_del(index)">
                                <img class="img_del" src="../../../assets/contribute/img_del.png" alt="">
                            </div>
                        </div>
                        <div v-if="imgList.length < 9" class="img_add add_model">
                            <label class="img_box">
                                <!--<div class="file" @click="pickImg(2)"></div>-->
                                <img @click="pickImg" class="icon_plus" src="../../../assets/contribute/addImg.png">
                            </label>
                            <p class="p1">上传照片</p>
                            <p class="p2">大小控制在3M以内</p>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="btn">
                        <button @click="submit" class="submit">提交</button>
                    </div>
                </div>
            </div>
            <!-- loading部分 -->
            <loading v-if="showLoading"></loading>
        </div>
    </div>
</template>

<script>
    import api  from '../../../service/contribute';
    import Loading from '../../../components/common/loadModal.vue';
    import textArea from '../../../components/common/textArea'
    import reqwest from 'reqwest'
    import {upLoadHost} from '../../../constant/url'
    import utils from '../../../util/utils';
    export default {
        name: 'contribute',

        components: {
            Loading,
            textArea,
        },

        data() {
            return {
                title: '',
                desc: '',
                imgParams: {},
                showLoading: false,
                cid: [],
                imgList: [],
                size: 0,
                limit:9, //限制图片上传的数量
                maxSize: 3 * 1024 * 1024 //图片最大3M
            };
        },

        computed: {},

        created() {
            console.log(this.$route.query.homeParams)
            const _query = this.$route.query.homeParams;
            if (_query) {
                this.cid = _query.cid;
            } else{
                console.log('传参error')
            }
        },

        mounted() {
            ofoBridge.setRightItem({})
            ofoBridge.setRightItem(null)
            window.ofoResponseProxy('setTitle',['话题讨论']);
        },

        methods: {
            desciption (...desc) {
                this.desc = desc;
            },

            img_add(el) {
                if (!el.target.files[0].size) return;
                this.fileList(el.target);
                el.target.value = ''
            },

            fileList(fileList) {
                let files = fileList.files;
                for (let i = 0; i < files.length; i++) {
                    //判断是否为文件夹
                    if (files[i].type != '') {
                        this.fileAdd(files[i]);
                    } else {
                        //文件夹处理
                        console.log('文件夹')
                        // this.folders(fileList.items[i]);
                    }
                }
            },

            // 文件夹处理
            // folders(files) {
            //     let _this = this;
            //     //判断是否为原生file
            //     if (files.kind) {
            //         files = files.webkitGetAsEntry();
            //     }
            //     files.createReader().readEntries(function (file) {
            //         for (let i = 0; i < file.length; i++) {
            //             if (file[i].isFile) {
            //                 _this.foldersAdd(file[i]);
            //             } else {
            //                 _this.folders(file[i]);
            //             }
            //         }
            //     });
            //
            // },
            // foldersAdd(entry) {
            //     let _this = this;
            //     entry.file(function (file) {
            //         _this.fileAdd(file)
            //     })
            // },

            fileAdd(file) {
                // 检查视频文件
                if(file.type.split("/")[0] === 'video'){
                    window.tip('视频文件暂不支持哦~');
                } else if(file.size > this.maxSize) {
                    window.tip('单张图片不能大于3M')
                } else {
                    if (this.limit !== undefined) this.limit--;
                    if (this.limit !== undefined && this.limit < 0) return;
                    //总大小
                    this.size = this.size + file.size;

                    let reader = new FileReader();
                    let image = new Image();
                    let _this = this;
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        file.src = this.result;
                        image.onload = function(){
                            let width = image.width;
                            let height = image.height;
                            file.width = width;
                            file.height = height;
                            _this.imgList.push({
                                file
                            });
                        };
                        image.src= file.src;
                    }
                }
            },



            pickImg () {
                ofoBridge.pickImage(3, (res, fileBlob) => {
                    let img = new Image()
                    img.src = res.value.data
                    img.onload = () => {
                        let fileimg = this.ontpys(img);
                        const _item = {
                            src:fileimg.content,
                        }

                        this.imgList.push(_item)
                    }
                })
            },

            ontpys (img) {
                let originWidth = img.width // 压缩后的宽
                let originHeight = img.height
                let maxWidth = 500
                // let maxHeight = 400
                let quality = 0.9 // 压缩质量
                let canvas = document.createElement('canvas')
                let drawer = canvas.getContext('2d')
                canvas.width = maxWidth
                canvas.height = originHeight / originWidth * maxWidth
                drawer.drawImage(img, 0, 0, canvas.width, canvas.height)
                let base64 = canvas.toDataURL('image/jpeg', quality) // 压缩后的base64图片
                // let file = this.dataURLtoFile(base64, Date.parse(Date()) + '.jpg')
                // file = {content: base64, file: file}
                // return file
                return {
                    content: base64,
                }
            },

            img_del(index) {
                this.imgList.splice(index, 1);
                if (this.limit !== undefined) this.limit = 9-this.imgList.length;
            },

            beforeUpload () {
                let formData = new FormData();
                console.log(this.imgList)

                this.imgList.forEach((item) => {
                    formData.append('uploadfile', item.src)
                })
                this.showLoading = true;
                reqwest({
                    url: upLoadHost,
                    method: 'post',
                    processData: false,
                    data: formData,
                    success: res => {
                        this.showLoading = false;
                        res = JSON.parse(res);
                        if(res.msg === '文件上传成功') {
                            console.log(res.data)
                            this.urlTransform(res.data)
                        }
                    },
                    error: res => {
                        this.showLoading = false;
                        if(res.msg === undefined){
                            window.tip('网络繁忙，请您稍后再试')
                        } else {
                            window.tip(res.msg);
                        }
                    },
                });
            },

            urlTransform (data) {
                const _pic = [];
                data.map((item, index) => {
                    // if (item.size > this.maxSize) {
                    //     window.tip('图片大小不能超过3M');
                    // }
                    const _url = item.url + `?w=${item.width}&h=${item.height}&ptype=${item.type}`;
                    _pic.push(_url)
                    // if(item.name === this.imgList[index].src.name) {
                    //     try{
                    //         const _url = item.url + `?w=${this.imgList[index].file.width}&h=${this.imgList[index].file.height}&ptype=${this.imgList[index].file.type.split('/')[1]}`;
                    //         _pic.push(_url)
                    //     } catch (e) {
                    //         console.log(e.message)
                    //     }
                    // }
                })
                console.log(_pic)

                this.imgParams.pic = _pic;
                this.post_contribution();
            },

            submit() {
                if (this.title.length <= 0) {
                    window.tip('标题不能为空');
                    return
                }
                if (this.desc.length <= 0) {
                    window.tip('未输入投稿内容哦~');
                    return
                }
                this.desc = this.desc[0].replace(/\n/g, '<br/>')
                this.imgParams = {
                    text: this.desc,
                    cid: this.cid,
                    // cid: '1',
                    title: this.title
                }
                this.beforeUpload();
            },

            post_contribution () {
                console.log(this.imgParams)
                api.postContribution(this.imgParams)
                    .then( data => {
                        if(data.errors) {
                            this.showLoading = false;
                            window.tip(data.errors[0].message)
                        } else {
                            this.showLoading = false;
                            let dthat = this
                            let trackInfo ={
                                'event_classify':'kankan_v2',
                                'event_page':'ContributePage',
                                'event_name': 'ContributeConfirm',
                                'event_id':'',
                                'event_type':'click',
                                'event_info':{
                                    news_id: dthat.$route.query.homeParams.newsId,
                                    contribute_id: data.data.post_contribution,
                                    time: utils.formatTime(new Date(), "-", 6)
                                },
                            }
                            console.log(trackInfo)
                            window.saTrackCompat.clickExt('ContributePage', 'ContributeConfirm', trackInfo);
                            if(data.data.post_contribution){
                                window.tip('您的投稿审核后才会展示哦~')
                                let dthat = this
                                setTimeout(function(){
                                    dthat.$router.go(-1)
                                },1000)
                            }
                        }
                    }, err => {
                        this.isShowLoading = false;
                        window.tip(err.msg || '请求失败');
                    }).catch((e) => {
                    window.tip('网络繁忙，请您稍后再试');

                })
            }

        },
    }
</script>
