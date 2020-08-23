<template>
  <button class="default" :class="`theme-${theme}`">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props:{
    theme:{
      type:String,
      default:'button'
    }
  },
  setup(props,ctx) {
      
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>