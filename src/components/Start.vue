<template>
  <h1>快速上手</h1>
  <section>
    <h2>使用之前</h2>
    <p>在使用bili-ui之前，我们假设您已经了解Vue、Vue组件、Vue单文件组件的基础知识。</p>
  </section>
  <section>
    <h2>搭配构建工具使用</h2>
    <p>一般在入口页面main.js中如下配置：</p>
    <pre>
        import { createApp } from 'vue'
        import App from './App.vue'
        import './lib/bili.scss' //请先引用基础样式再创建组件，否则样式会出错
        import bili from 'bili-ui';
        const app = createApp(App)
        app.use(bili)
        app.mount('#app')
    </pre>
    <p>以上代码便完成了bili-ui的引入。需要注意的是，样式文件需要单独引入。</p>
  </section>
  <section>
    <h2>特别注意</h2>
    <p>使用bili-ui时，您需要使用border-box盒模型，否则会影响样式。CSS代码示例：</p>
    <pre>
      *, *::before, *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }</pre>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/basic";
</style>