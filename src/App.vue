<template>
  <router-view/>
</template>

<script lang="ts">
import { ref, provide } from 'vue'
import router from './router'

export default {
  name: 'App',
  components: {
   
  },
  setup(){
    const width = document.documentElement.clientWidth
    const showMenu = ref(width <= 500 ? false : true)
    provide('showMenu',showMenu)
    router.afterEach(()=>{
      if(width <= 500) showMenu.value = false
    })
  }
}
</script>
