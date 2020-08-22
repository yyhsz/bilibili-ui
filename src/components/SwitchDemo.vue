<template>
  <div>
    <Switch :checked="checked" @switchClick="checked = $event"/>
  </div>
</template>

<script>
import Switch from "../lib/switch/Switch.vue";
import {ref} from 'vue'
export default {
  name: "SwitchDemo",
  components: {
    Switch,
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