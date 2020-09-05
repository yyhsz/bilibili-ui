<template>
  <div class="bili-tabs">
    <div class="bili-tabs-nav" ref="container">
      <div
        class="bili-tabs-nav-item"
        v-for="(item,index) in titles"
        :key="index"
        :class="{selected:currentIndex === index}"
        @click="itemClick(index)"
        :ref="el=>{if(el) navItems[index] = el}"
      >{{item}}</div>
      <div class="bili-tabs-nav-indicator" ref="navIndicator"></div>
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

<script lang="ts">
import { onMounted, ref } from "vue";
import BiliTab from "./BiliTab.vue";

export default {
  components: {
    BiliTab,
  },
  setup(props, ctx) {
    const currentIndex = ref(0);
    const slots = ctx.slots.default();
    const navItems = ref<HTMLDivElement[]>([]);
    const navIndicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    let titles = [];
    //判断使用者传入的子组件类型
    slots.forEach((ele) => {
      if (ele.type !== BiliTab) {
        throw new Error("bili-tabs子元素必须是bili-tab");
      }
    });
    titles = slots.map((ele) => {
      return ele.props.title;
    });
    //获取子组件中默认选中元素的索引值
    const selectedIndex = slots.findIndex((ele) => {
      return ele.props.selected || ele.props.selected === "";
    });
    currentIndex.value =
      selectedIndex === -1 ? currentIndex.value : selectedIndex;
    //点击切换选项
    const itemClick = (index) => {
      currentIndex.value = index;
      //动态控制navIndicator的width
      navIndicator.value.style.width =
        [...navItems.value][index].getBoundingClientRect().width + "px";
      //动态控制navIndicator的left
      navIndicator.value.style.left =
        navItems.value[index].getBoundingClientRect().left -
        container.value.getBoundingClientRect().left +
        "px";
    };
    //
    onMounted(() => {
      const result = [...navItems.value]
        .find((ele) => {
          return ele.classList.contains("selected");
          //上下两种写法效果一样
          //return [...ele.classList].find(ele=>ele === 'selected')
        })
        .getBoundingClientRect();
      //动态控制navIndicator的width,left
      navIndicator.value.style.width = result.width + "px";
      navIndicator.value.style.left =
        result.left - container.value.getBoundingClientRect().left + "px";
    });

    return {
      slots,
      currentIndex,
      titles,
      itemClick,
      navItems,
      navIndicator,
      container,
    };
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
    position: relative;
    &-item {
      padding: 8px 1px;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition:all 250ms;
      border-radius: 3px;
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