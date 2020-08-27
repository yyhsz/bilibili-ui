<template>
  <div class="dialog-overlay"></div>
  <div class="wrapper">
      <header>标题</header>
      <main>
          <p>第一行</p>
          <p>第二行</p>
      </main>
      <footer>
          <iz-button>取消</iz-button>
          <iz-button>确认</iz-button>
      </footer>
  </div>
</template>

<script>
import IzButton from "../button/IzButton.vue"
import { ref } from "vue";
export default {
    components:{
        IzButton
    }
};
</script>

<style lang="scss" scoped>
</style>
