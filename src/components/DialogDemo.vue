<template>
  <div>
    <h1>示例1</h1>
    <bili-button @click="toogle">弹出</bili-button>
    <bili-dialog v-model:visible="visible" :confirm="confirm" >
      <template #title>提示</template>
      <template #content>
        <p>一行代码</p>
        <p>两行代码</p>
      </template>
    </bili-dialog>
    <h1>示例2</h1>
    <bili-button @click="showDialog">123</bili-button>
  </div>
</template>

<script>
import BiliDialog from "../lib/dialog/BiliDialog.vue";
import BiliButton from "../lib/button/BiliButton.vue";

import {openDialog} from '../lib/dialog/dialog'
import { ref } from "vue";
export default {
  name: "DialogDemo",
  components: {
    BiliDialog,
    BiliButton,
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
        content:`一行二行`,
        closeOnClickOverlay:true,
        confirm:()=>{
          return true
        }
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
