<template>
  <button @click="toggle" class="bili-switch" :class="classes">
    <span></span>
  </button>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: {
    checked: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    aaa: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const toggle = () => {
      return !props.disabled && ctx.emit("update:checked", !props.checked);
    };
    const classes = computed(() => {
      return {
        [`bili-checked`]: props.checked,
        [`bili-disabled`]: props.disabled,
      };
    });

    return { toggle, classes };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
$blue: #00a1d6;
$red: #fb7299;
.bili-switch {
  height: $h;
  width: $h * 2;
  border: none;
  border-radius: $h/2;
  position: relative;
  outline: none;
  background: $red;
  cursor: pointer;
  &.bili-checked {
    background: $blue;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &.bili-checked.bili-disabled{
    background: lighten($color: $blue, $amount: 8);
  }
  &.bili-disabled{
    cursor:not-allowed;
    background: lighten($color: $red, $amount: 8);
  }
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
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.bili-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>