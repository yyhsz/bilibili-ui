<template>
  <div>
    <top-nav></top-nav>
    <div class="content">
      <div class="mask1"></div>
      <div class="mask2"></div>
      <aside v-if="showMenu" :class="{'menu-active':showMenu === menuActive}">
        <div class="mask3"></div>
        <div class="mask4"></div>
        <ol>
          <li
            v-for="(item,index) in liItems"
            :key="index"
            @click="liItemClick(index)"
            :class="{active:currentIndex === index}"
          >
            <img v-if="currentIndex === index" src="../../public/images/toubi.png" alt />
            <span v-else></span>
            <router-link :to="`/doc/${item}`">{{item.toUpperCase()}}</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/content/TopNav.vue";

import { inject, ref, Ref } from "vue";
import router from "../router";

export default {
  name: "Doc",
  components: {
    TopNav,
  },
  setup() {
    const showMenu = inject<Ref<boolean>>("showMenu");
    const menuActive = inject<Ref<boolean>>("menuActive");
    const liItems = ref<string[]>(["intro",'start',"switch", "button", "dialog", "tabs"]);
    const currentIndex = ref<number>(0);
    //刷新页面时，currentIndex指向当前打开的内容
    currentIndex.value = 
    liItems.value.findIndex((ele)=>{
      return ele === router.currentRoute.value.path.slice(5)
    })
    const liItemClick = (index) => {
      currentIndex.value = index;
      menuActive.value = false
    };
    return {
      showMenu,
      liItems,
      currentIndex,
      liItemClick,
      menuActive
    };
  },
};
</script>
<style lang="scss" scoped>
.mask1,
.mask2,
.mask3,
.mask4 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.mask1 {
  background: rgba($color: #000000, $alpha: 0.4);
}
.mask2 {
  background: rgba($color: #fff, $alpha: 0.1);
}
.mask3 {
  background: rgba($color: #000000, $alpha: 0.08);
  display: none;
}
.mask4 {
  background: rgba($color: #fff, $alpha: 0.45);
  display: none;
}
.content {
  height: 100vh;
  width: 100vw;
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
  background: url("../../public/images/bg-1.png") center center no-repeat;
  background-size: cover;
  position: relative;
}
aside {
  width: 200px;
  padding-top: 100px;
  height: 100%;
  background-size: 100%;
  background-position-y: 100%;
  @media (max-width: 500px) {
    position: absolute;
    top: 0;
    left: -200px;
    transition: left 0.3s;
    .mask3,
    .mask4 {
      display: block;
    }
  }
  &.menu-active {
    left: 0;
    background: #fff;
    z-index: 4;
    background: url("../../public/images/bg2.jpg") center center;
    background-size: 200px;
    box-shadow: 1px 0 4px 4px rgba($color: #000000, $alpha: 0.4);
  }
  > ol {
    position: relative;
    margin: 0 auto;
    width: 200px;
    > li {
      font-size: 14px;
      width: 100%;
      text-align: center;
      margin: 20px auto;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      // box-shadow: 0 0 4px 4px rgba($color: #000000, $alpha: .4);
      span {
        display: inline-block;
        height: 22px;
        width: 22px;
        background: #fff;
        border-radius: 50%;
        border: 4px solid #00a1d6;
        // #f25d8e
      }
      img {
        height: 26px;
        width: 26px;
      }
      a {
        display: inline-block;
        height: 30px;
        width: 80px;
        line-height: 30px;
        color: #fff;
        background: #00a1d6;
        border-radius: 20px;
        margin-left: 6px;
      }
    }
    li.active {
      a {
        background: #fb7299;
      }
    }
    li:hover {
      transform: translateY(-4px);
      transition: all 0.3s;
    }
  }
}
main {
  position: relative;
  z-index: 3;
  overflow: auto;
  flex: 1 0;
  margin: 60px;
  background: rgba(248, 246, 246,.6);
  padding: 28px;
  border-radius: 6px;
  @media (max-width: 500px) {
    padding:8px;
    margin: 8px;
  }
}

</style>