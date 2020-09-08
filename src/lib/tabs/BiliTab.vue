<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    return {};
  },
};
</script>

<style lang="scss">
</style>