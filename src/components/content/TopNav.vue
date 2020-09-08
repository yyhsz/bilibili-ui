<template>
  <div class="top-nav">
    <div class="logo" @click="toggleMenu">
      <img src="../../../public/images/logo.png" alt />
    </div>
    <ul class="menu">
      <li>
        <img class="deco" src="../../../public/images/2.jpg" alt />
      </li>
      <li>
        <a href="https://github.com/yyhsz/bilibili-ui">
          <img src="../../../public/images/github.png" alt />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import router from "../../router";
export default {
  name: "TopNav",
  setup() {
    const showMenu = inject<Ref<boolean>>("showMenu");
    const menuActive = inject<Ref<boolean>>("menuActive");

    const toggleMenu = () => {
      if (
        router.currentRoute.value.path !== "/" &&
        document.documentElement.clientWidth <= 500
      ) {
        //在非主页且小屏模式下才展示菜单
        showMenu.value = !showMenu.value;
        menuActive.value = showMenu.value ? true : false;
      }
    };
    return {
      toggleMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.top-nav {
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  box-shadow: 0 2px 4px 3px rgba($color: #000000, $alpha: 0.1);
  > .logo {
    max-width: 6em;
    margin-left: 20px;
    margin-right: auto;
    cursor: pointer;
    img {
      width: 80px;
      margin-left: 30px;
    }
  }
  > .menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    white-space: nowrap;
    flex-wrap: nowrap;
    img {
      height: 32px;
      width: 32px;
      margin-right: 20px;
    }
    .deco {
      height: 46px;
      width: 46px;
    }
    > li {
      margin: 0 1em;
    }
  }
  // > .toggleAside {
  //   width: 24px;
  //   height: 24px;
  //   background: rgb(221, 243, 201);
  //   position: absolute;
  //   left: 16px;
  //   top: 50%;
  //   transform: translateY(-50%);
  //   display: none;
  // }
  @media (max-width: 500px) {
    .logo {
      margin-left: 0;
    }
    > .menu {
      display: none;
    }
  }
}
</style>