<template>
  <div>
    <bili-switch v-model:checked="checked"/>
  </div>
</template>

<script>
import BiliSwitch from "../lib/switch/BiliSwitch.vue";
import {ref} from 'vue'
export default {
  name: "SwitchDemo",
  components: {
    BiliSwitch,
  },
  setup(){
   const checked =  ref(true)
   return{
     checked
   }
  }
};
</script>

<style lang="scss" scoped>
</style>