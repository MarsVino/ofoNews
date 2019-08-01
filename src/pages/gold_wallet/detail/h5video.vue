<template>
    <div class="goldWallet-video">
        <video-player class=" video-player vjs needsclick videoPlayer vjs-custom-skin"
                       ref="videoPlayer"
                       :playsinline="true"
                       :options="playerOptions"
                       @play="onPlayerPlay($event)"
                       @pause="onPlayerPause($event)"
                       @ended="onPlayerEnded($event)"
                       @loadeddata="onPlayerLoadeddata($event)"
                       @waiting="onPlayerWaiting($event)"
                       @playing="onPlayerPlaying($event)"
                       @timeupdate="onPlayerTimeupdate($event)"
                       @canplay="onPlayerCanplay($event)"
                       @canplaythrough="onPlayerCanplaythrough($event)"
                       @ready="playerReadied"
                       @statechanged="playerStateChanged($event)">
        </video-player>
        <div>
            <video class="h5video" controls  webkit-playsinline="true">
                <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4">
            </video>
        </div>

    </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'



// import "video.js/dist/video-js.css";
// import "vue-video-player/src/custom-theme.css";

export default {
  name: 'gold_wallet',

  components:{
      videoPlayer
  },

  data(){
    return{
        isPlay: false,
        playerOptions: {}
    }
  },

  computed:{
      player() {
          return this.$refs.videoPlayer.player
      }
  },

  created() {
  },

  mounted(){
      this.playerOptions = {
          height: '360',
          autoplay: true,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
              type: "video/mp4",
              // mp4
              src: "http://vjs.zencdn.net/v/oceans.mp4",
              // webm
              // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
      }
  },

  methods:{
      onPlayerPlay(player) {
          console.log(player);
      },
      onPlayerPause(player){
          console.log(player );
      },
      onPlayerEnded(player) {
          console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
          console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
          console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
          console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
          // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
          // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
          // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
          //console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
          // seek to 10s
          console.log('example player 1 readied', player)
          player.currentTime(10)
          // console.log('example 01: the player is readied', player)
      }
  }

}
</script>

<style lang="scss" scoped>
    @import "../../../style/variable.scss";
    @import "../../../style/rem.scss";
    @import "../../../style/mixin_text.scss";
    html{
        font-size: 20vw;
        overflow: visible;
        background: #fff;
    }
    .goldWallet-video{
        .h5video{
            width: 100%;
            border: 1px solid #2db7f5;
        }
    }
</style>
