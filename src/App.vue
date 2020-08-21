<template>
  <router-view/>
</template>

<script lang="ts">
import { ref, provide } from 'vue'

export default {
  name: 'App',
  components: {
   
  },
  setup(){
    const showMenu = ref(false)
    provide('showMenu',showMenu)
  }
}
</script>
