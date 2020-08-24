<template>
  <h1>主题</h1>
  <button-ab  >ass</button-ab>
  <button-ab theme="link" >ass</button-ab>
  <button-ab theme="text" >ass</button-ab>
  <h1>大小</h1>
  <button-ab size="big" >ass</button-ab>
  <button-ab theme="link" >ass</button-ab>
  <button-ab theme="text" size="small" >ass</button-ab>
  <h1>等级</h1>
  <button-ab level="main" >ass</button-ab>
  <button-ab theme="link" level="normal" >ass</button-ab>
  <button-ab theme="text" level="danger" >ass</button-ab>
  <h1>禁用</h1>
  <button-ab disabled >ass</button-ab>
  <h1>加载中</h1>
  <button-ab loading >ass</button-ab>
  
</template>

<script lang="ts">
import ButtonAb from "../lib/button/ButtonAb.vue";
export default {
  name: "Button",
  components: {
    ButtonAb
  },
  setup() {
   
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped>

</style>