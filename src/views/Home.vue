<template>
  <div>
    <top-nav></top-nav>
    <div class="banner">
      <div class="mask1"></div>
      <div class="mask2"></div>
      <div class="content">
        <div class="xiaodianshi"><img src="../../public/images/bilibili.png" alt=""></div>
        <div class="desc">
          <img src="../../public/images/logo-white.png" alt />
        </div>
        <h1>一个bilibili主题框架</h1>
        <p class="actions">
          <a href="https://github.com/yyhsz/bilibili-ui" target="_blank">GitHub</a>
          <router-link to="/doc/intro">开始</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/content/TopNav.vue";
export default {
  name: "Home",
  components: {
    TopNav,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  height: 100vh;
  width: 100vw;
  padding-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("../../public/images/bg1.jpg") center center ;
  background-size: 120vw;
  background-position-y: 300px;
  background-position-x: 120px;
  position: relative;
  .mask1,
  .mask2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .mask1 {
    background: rgba(255, 255, 255, 0.2);
  }
  .mask2 {
    background: rgba(0, 0, 0, 0.4);
  }
  
  .content {
    position: fixed;
    top:250px;left: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 400px;
  }
  .xiaodianshi{
    width: 180px;
    margin: 0 auto;
    img{
      width:100%;
    }
  }
  .desc{
    img{
      width: 100px;
    }
  }
  h1{
    color: rgb(255, 255, 255);
  }
  .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #00a1d6;
      display: inline-block;
      width: 100px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      color: white;
      transition: all .3s;
    }
    a:hover{
      background: #fb7299;

    }
  }

}
</style>