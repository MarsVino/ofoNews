<!--
    使用方法：
    <mapInfo :lat="lat" :lng="lng"></mapInfo>
    <script>
        import mapInfo from '@/components/common/map'
        export default {
            components: {
                mapInfo
            }
        }
    </script>
    -->
<template>
    <div class="mapInfo" id="container">
        <div>{{mapAdd}}</div>
    </div>
</template>

<script>
    export default {
        name: 'mapInfo',
        props: ['lat', 'lng'],
        data() {
            return {
                mapAdd: '',
            }
        },
        computed:{
        },
        methods: {
            initMap(lat, lng) {
                let that  = this;
                AMap.plugin('AMap.Geocoder', function () {
                    let geocoder = new AMap.Geocoder({
                        city: "010"
                    });
                    let lnglat = [lng, lat]
                    geocoder.getAddress(lnglat, function (status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            that.mapAdd = result.regeocode.formattedAddress;
                        } else {
                            //获取地址失败
                        }
                    });
                });
            }
        },
        watch: {
            'lat': function (arg) {
                this.initMap(this.lat, this.lng)
            }
        },
        created() {
            this.initMap(this.lat, this.lng)

        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/rem.scss';
    @import '../../style/variable.scss';
    @import '../../style/mixin_text.scss';

    .mapInfo {
        display: inline-block;
    }
</style>
