<template>
  <div>
  <button-ab @click="dianji" theme="text">ass</button-ab>
  <button-ab @click="dianji" >ass</button-ab>
  <button-ab @click="dianji" >ass</button-ab>
  <button-ab @click="dianji" >ass</button-ab>
  </div>
</template>

<script lang="ts">
import ButtonAb from "../lib/button/ButtonAb.vue";
export default {
  name: "Button",
  components: {
    ButtonAb
  },
  setup() {
    const dianji = () => {
      console.log(1);
    };
    return {
      dianji,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>