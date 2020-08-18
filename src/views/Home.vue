<template>
  <div>
  <top-nav></top-nav>
    <div class="banner">
      <h1>IZ*ONE</h1>
      <h2>一个izone主题框架</h2>
      <p class="actions">
        <a>GitHub</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/content/TopNav.vue'
export default {
    name:"Home",
    components:{
        TopNav
    }
};
</script>

<style lang="scss" scoped>
</style>