<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="iz-dialog-overlay" @click="clickOverlay"></div>
      <div class="iz-dialog-wrapper">
        <header>
          <slot name="title" />
          <span class="iz-dialog-close" @click="close"></span>
        </header>
        <main>
          <slot name="content" />
        </main>
        <footer>
          <iz-button @click="close">取消</iz-button>
          <iz-button @click="confirm">确认</iz-button>
        </footer>
      </div>
    </teleport>
  </template>
</template>

<script>
import IzButton from "../button/IzButton.vue";
import { ref } from "vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false,
    },
    confirm:{
        type:Function
    }
  },
  components: {
    IzButton,
  },
  setup(props, ctx) {
    const confirm = () => {
      props.confirm ? props.confirm()&&close() : false
    };
    const close = () => {
      ctx.emit("update:visible", false);
    };
    const clickOverlay = () => {
      console.log(props.closeOnClickOverlay);
      return props.closeOnClickOverlay && close();
    };
    return {
      confirm,
      close,
      clickOverlay,
    };
  },
};
</script>

<style lang="scss" scoped>
$radius: 4px;
$border-color: #d9d9d9;
.iz-dialog {
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    height: 100vh;
    width: 100vw;
    background: rgba($color: #000000, $alpha: 0.4);
  }
  &-wrapper {
    border: 1px solid;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    background: white;
    > header {
      padding: 12px 16px;
      border-bottom: 1px solid $border-color;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
    }
    > main {
      padding: 12px 16px;
    }
    > footer {
      border-top: 1px solid $border-color;
      padding: 12px 16px;
      text-align: right;
    }
  }
  &-close {
    cursor: pointer;
    display: inline-block;
    width: 16px;
    height: 16px;
    position: relative;
    &::before,
    &::after {
      content: "";
      height: 1px;
      width: 100%;
      background: #000;
      position: absolute;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
