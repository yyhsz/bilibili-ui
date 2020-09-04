<template>
  <h1>示例1</h1>
  <bili-tabs>
    <template #aaa>
      <bili-tab title="导航1">123</bili-tab>
      <bili-tab title="导航2">456</bili-tab>
    </template>
  </bili-tabs>
</template>

<script>
import BiliTabs from "../lib/tabs/BiliTabs.vue";
import BiliTab from "../lib/tabs/BiliTab.vue";

export default {
  components: {
    BiliTabs,
    BiliTab,
  },
  setup(){
    
  }
};
</script>

<style lang="scss" scoped>
</style>