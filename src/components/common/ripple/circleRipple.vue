<template>
  <transition name="mu-ripple">
    <div class="mu-circle-ripple" :style="styles"></div>
  </transition>
</template>

<script>
export default {
  props: {
    mergeStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    color: {
      type: String,
      default: ''
    },
    opacity: {
      type: Number
    }
  },
  computed: {
    styles () {
      return Object.assign({}, {color: this.color, opacity: this.opacity}, this.mergeStyle)
    }
  }
}
</script>

<style lang="scss" scoped>

  .mu-circle-ripple{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    // pointer-events: none;
    user-select: none;
    border-radius: 50%;
    background-color: currentColor;
    background-clip: padding-box;
    opacity: 0.1;
  }

  .mu-ripple-enter-active, .mu-ripple-leave-active {
    transition: transform .45s ease-out, opacity .5s ease-out;
  }

  .mu-ripple-enter {
    transform: scale(0);
  }

  .mu-ripple-leave-to {
    opacity: 0.2 !important;
  }
</style>