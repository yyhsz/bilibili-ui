<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide, watchEffect } from "vue";
import router from "./router";

export default {
  name: "App",
  components: {},
  setup() {
    const width = document.documentElement.clientWidth;
    const showMenu = ref(width <= 500 ? false : true);
    const menuActive = ref(false);
    provide("menuActive", menuActive);
    provide("showMenu", showMenu);
    watchEffect(() => {
      console.log(menuActive.value);
    });
    router.afterEach(() => {
      if (width <= 500) showMenu.value = false;
    });
  },
};
</script>
