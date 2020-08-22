<template>
  <div class="top-nav">
    <span class="toggleAside" @click="toggleMenu"></span>
    <div class="logo" >LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  name: "TopNav",
  setup() {
    const showMenu = inject<Ref<boolean>>("showMenu");
    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
    };
    return {
      toggleMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.top-nav {
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  position: relative;
  z-index: 3;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    background: rgb(221, 243, 201);
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin-right: 0;
    }
    > .toggleAside{
      display:inline-block
    }
  }
}
</style>