<template>
  <div>
    <h1>示例1</h1>
    <iz-button @click="toogle">弹出</iz-button>
    <iz-dialog v-model:visible="visible" :confirm="confirm" >
      <template #title>提示</template>
      <template #content>
        <p>一行代码</p>
        <p>两行代码</p>
      </template>
    </iz-dialog>
    <h1>示例2</h1>
    <iz-button @click="showDialog">123</iz-button>
  </div>
</template>

<script>
import IzDialog from "../lib/dialog/IzDialog.vue";
import IzButton from "../lib/button/IzButton.vue";

import {openDialog} from '../lib/dialog/dialog'
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
    const confirm = ()=>{
      return true
    }
    const showDialog = ()=>{
      openDialog({
        title:`标题`,
        content:`一行二行`
      })
    }
    return {
      visible,
      toogle,
      confirm,
      showDialog
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
