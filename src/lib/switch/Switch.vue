<template>
  <button @click="toggle" class="iz-switch" :class="{'iz-checked':checked}">
    <span></span>
  </button>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    checked: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, ctx) {
    const toggle = () => {
      ctx.emit("update:checked", !props.checked);
    };
    return { toggle };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.iz-switch {
  height: $h;
  width: $h * 2;
  border: none;
  border-radius: $h/2;
  position: relative;
  outline: none;
  background: #bfbfbf;
  cursor: pointer;
  > span {
    width: $h2;
    height: $h2;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: all 250ms ease-in-out;
  }
  &.iz-checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.iz-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>