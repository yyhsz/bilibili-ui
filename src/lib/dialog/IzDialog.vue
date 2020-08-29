<template>
  <div v-if="visible">
      <div class="iz-dialog-overlay"></div>
  <div class="iz-dialog-wrapper">
    <header>
      标题
      <span class="iz-dialog-close"></span>
    </header>
    <main>
      <p>第一行</p>
      <p>第二行</p>
    </main>
    <footer>
      <iz-button>取消</iz-button>
      <iz-button>确认</iz-button>
    </footer>
  </div>
  </div>
</template>

<script>
import IzButton from "../button/IzButton.vue";
import { ref } from "vue";
export default {
    props:{
        visible:{
            type:Boolean,
            default:false
        }
    },
  components: {
    IzButton,
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
