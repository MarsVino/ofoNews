<template>
    <div class="home-page">
        <router-view></router-view>
    </div>
</template>

<script>
    import { axiosConfig } from '@/service/fetch';

    axiosConfig({
        'token': window.getOfoToken(),
        // 'base_url': userHostname,
        'source': window.OFO_ENV.sourceForApi
    });

    export default {
        name: 'integral_wall'
    }
</script>

<style lang="scss">
    @import '../../style/rem.scss';
    @import '../../style/reset.scss';
    @import '../../style/normalize.scss';
    html{
        height: 100%;
    }
    body{
        margin: 0;
        padding: 0;
        height: 100%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        height: 100%;
        background-color: #fff;
    }
    .home-page {
        width: 100%;
        height: 100%;
    }
</style>
