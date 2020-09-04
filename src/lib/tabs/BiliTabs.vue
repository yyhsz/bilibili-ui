<template>
  <div class="bili-tabs">
    <div class="bili-tabs-nav">
      <div
        class="bili-tabs-nav-item"
        v-for="(item,index) in titles"
        :key="index"
        :class="{selected:currentIndex === index}"
        @click="itemClick(index)"
      >{{item}}</div>
    </div>
    <div class="bili-tabs-content">
      <component
        v-for="(item,index) in slots"
        :key="index"
        :is="item"
        :class="{selected:currentIndex === index}"
        class="bili-tabs-content-item"
      ></component>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import BiliTab from "./BiliTab.vue";

export default {
  components: {
    BiliTab,
  },
  setup(props, ctx) {
    const currentIndex = ref(0);
    const slots = ctx.slots.default();
    let titles = [];
    //判断使用者传入的子组件类型
    if (slots[0].type === "template") {
      //如果使用者用template包住插槽内容
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
      titles = slots.map((ele) => {
        return ele.props.title;
      });
    }
    //获取子组件中默认选中元素的索引值
    const selectedIndex = slots.findIndex((ele) => {
      return ele.props.selected;
    });
    console.log(selectedIndex);
    currentIndex.value =
      selectedIndex === -1 ? currentIndex.value : selectedIndex;
    //
    const itemClick = (index) => {
      currentIndex.value = index;
    };
    return { slots, currentIndex, titles, itemClick };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.bili-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>