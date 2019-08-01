<template>
  <!--
    <modal v-if="showModal" @close="showModal = false">
        <div slot="header">
            <p>title</p>
        </div>
        <div slot="body">
            <p>123</p>
            <p>fsf</p>
            <p>12fsdfds3</p>
            <p>1vcxv23</p>
            <p>1vxcv23</p>
        </div>
    </modal>
    import modal from '../../components/common/modal'
    components: {
            modal,
        },
  -->
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                default body
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                <button class="modal-default-button" @click="$emit('close')">
                  OK
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>
<style scoped>

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  /*垂直居中*/
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 82%;
    margin: 0 auto;
    padding: 20px 12px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    text-align: center;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>