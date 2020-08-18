<template>
  <div>
    <top-nav></top-nav>
    <div class="content">
      <aside>边栏</aside>
      <main>主内容</main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/content/TopNav.vue";
export default {
  name: "Doc",
  components: {
    TopNav,
  },
};
</script>

<style scoped>
</style>