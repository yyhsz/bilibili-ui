<template>
  <div>
    <h1>示例1</h1>
    <iz-button @click="toogle">弹出</iz-button>
    <iz-dialog :visible="visible"></iz-dialog>
  </div>
</template>

<script>
import IzDialog from "../lib/dialog/IzDialog.vue";
import IzButton from "../lib/button/IzButton.vue";

import { ref } from "vue";
export default {
  name: "DialogDemo",
  components: {
    IzDialog,
    IzButton,
  },
  setup() {
    const visible = ref(false);
    const toogle = () => {
      visible.value = !visible.value;
    };
    return{
      visible,
      toogle
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
