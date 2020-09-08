<template>
  <div class="bili-tabs">
    <div class="bili-tabs-nav" ref="container">
      <div
        class="bili-tabs-nav-item"
        v-for="(item,index) in titles"
        :key="index"
        :class="{'bili-selected':currentIndex === index,'bili-disabled':disIndex.some(ele=>ele === index)}"
        @click="itemClick(index)"
        :ref="el=>{if(currentIndex === index) selectedItem = el}"
      >{{item}}</div>
      <div class="bili-tabs-nav-indicator" ref="navIndicator"></div>
    </div>
    <div class="bili-tabs-content">
      <component
        :is="slots[currentIndex]"
        :key="slots[currentIndex].props.title"
        class="bili-tabs-content-item"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import BiliTab from "./BiliTab.vue";

export default {
  components: {
    BiliTab,
  },
  setup(props, ctx) {
    const currentIndex = ref(0);
    const slots = ctx.slots.default();
    const navIndicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const selectedItem = ref<HTMLDivElement>(null);
    
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
    //判断组件中有无disabled值
    const disIndex = [] //含有disabled的item索引值
    slots.forEach((ele,index)=>{
      if(ele.props.disabled || ele.props.disabled === '') disIndex.push(index)
    })
    console.log(disIndex);
    //获取子组件中默认选中元素的索引值
    const selectedIndex = slots.findIndex((ele) => {
      return ele.props.selected || ele.props.selected === ""; //这里应该是VUE3bug，
      //selected不传值默认为true才对，这里是空字符串
    });
    currentIndex.value =
      selectedIndex === -1 ? currentIndex.value : selectedIndex;
    //点击切换选项
    const itemClick = (index) => {
      return !disIndex.some(ele=>ele===index) && (currentIndex.value = index);
    };
    //使用watchEffect优化动态控制navIndicater
    onMounted(() => {
      watchEffect(() => {
        const result = selectedItem.value.getBoundingClientRect();
        //动态控制navIndicator的width,left
        navIndicator.value.style.width = result.width + "px";
        navIndicator.value.style.left =
          result.left - container.value.getBoundingClientRect().left + "px";
      });
    });

    return {
      slots,
      currentIndex,
      titles,
      itemClick,
      navIndicator,
      container,
      selectedItem,
      disIndex
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
      &.bili-selected {
        color: $blue;
      }
      &.bili-disabled {
        cursor: not-allowed;
        color: #999;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
      border-radius: 3px;
    }
  }
  &-content {
    padding: 8px 0;
    // &-item {
    //   display: none;
    //   &.selected {
    //     display: block;
    //   }
    // }
  }
}
</style>