<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
    // props:{
    //     selected:{
    //         type:Boolean,
    //         default:false
    //     }
    // },
  setup(props, ctx) {
    //   console.log(props.selected);
    console.log(1);
    return {};
  },
};
</script>

<style lang="scss">
</style>