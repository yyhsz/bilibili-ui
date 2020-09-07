<template>
  <h1>主题</h1>
  <bili-button>ass</bili-button>
  <bili-button theme="link">ass</bili-button>
  <bili-button theme="text">ass</bili-button>
  <h1>大小</h1>
  <bili-button size="big">ass</bili-button>
  <bili-button theme="link">ass</bili-button>
  <bili-button theme="text" size="small">ass</bili-button>
  <h1>等级</h1>
  <bili-button level="main">ass</bili-button>
  <bili-button theme="link" level="normal">ass</bili-button>
  <bili-button theme="text" level="danger">ass</bili-button>
  <h1>禁用</h1>
  <bili-button disabled>ass</bili-button>
  <h1>加载中</h1>
  <bili-button loading>ass</bili-button>
</template>

<script lang="ts">
import BiliButton from "../lib/button/BiliButton.vue";
export default {
  components: {
    BiliButton,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
