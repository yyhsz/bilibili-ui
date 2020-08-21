<template>
    <div class="top-nav">
      <div class="logo" @click="toggleMenu">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
    export default {
        name:'TopNav',
        setup(){
          const showMenu = inject<Ref<boolean>>('showMenu')
          const toggleMenu = ()=>{
            showMenu.value = !showMenu.value
          }
          return{
            toggleMenu
          }
        }
    }
</script>

<style lang="scss" scoped>
.top-nav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;z-index: 3;
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
}
</style>