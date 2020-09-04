<template>
  <div v-for="(item,index) in titles" :key="index" >{{item}}</div>
  <slot name="aaa"></slot>
</template>

<script>
import { onMounted, ref } from "vue";
import BiliTab from "./BiliTab.vue";

export default {
  components: {
    BiliTab,
  },
  setup(props, ctx) {
    const slots = ctx.slots.aaa();
    if (slots[0].type === "template") {
      slots[0].children.forEach((ele) => {
        if (ele.type !== BiliTab) {
          throw new Error("bili-tabs子元素必须是bili-tab");
        }
      });
    } else {
      slots.forEach((ele) => {
        if (ele.type !== BiliTab) {
          throw new Error("bili-tabs子元素必须是bili-tab");
        }
      });
      const titles = slots.map((ele) => {
        return ele.props.title;
      });
      return {titles};
    }
  },
};
</script>

<style lang="scss" scoped>
</style>