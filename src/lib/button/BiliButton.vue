<template>
  <button class="bili-button" :class="classes">
    <span v-if="loading" class="bili-loading-indicator"></span>
    <slot></slot>
  </button>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "medium",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const { theme, loading, size, level, disabled } = props;
    const classes = computed(() => {
      return {
        [`bili-theme-${theme}`]: theme,
        [`bili-size-${size}`]: size,
        [`bili-level-${level}`]: level,
        loading: loading,
        disabled: disabled,
      };
    });

    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: white;
$blue: #00a1d6;
$red: #fb7299;
$radius: 4px;

.bili-button {
  a:focus {
    outline: none;
  }
  & + & {
    margin-left: 12px;
  }
  &:hover {
    background: $red;
  }
  &:focus {
    outline: none;
    border-color: $red;
  }
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  color: $color;
  background: $blue;
  border: none;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: all 0.2s;
  &.bili-size-big {
    font-size: 20px;
  }
  &.bili-size-small {
    font-size: 14px;
  }
  &.bili-level-danger {
    background: #fa6464;
    &:hover {
      background: lighten($color: #fa6464, $amount: 6);
    }
  }
  &.bili-level-main {
    background: $red;
    &:hover {
      background: lighten($color: $red, $amount: 10);
    }
  }
}
.bili-theme-link {
  background: white;
  color: $blue;
  box-shadow: none;
  &:hover {
    background: white;
    color: $red;
  }
}
.bili-theme-text {
  background: white;
  color: $blue;
  box-shadow: none;
  &:hover {
    background: white;
    color: darken($color: $blue, $amount: 20);
  }
}
.disabled {
  cursor: not-allowed;
  filter: alpha(opacity=60);
  box-shadow: none;
  opacity: 0.6;
  a {
    pointer-events: none;
    cursor: not-allowed;
  }
  &:hover {
    background: $blue;
  }
  &:hover.bili-theme-link {
    background: white;
    pointer-events: none;
    color: $blue;
  }
  &:hover.bili-theme-text {
    background: white;
  }
}
.loading {
  pointer-events: none;
}
.bili-loading-indicator {
  width: 14px;
  height: 14px;
  display: inline-block;
  margin-right: 6px;
  border-radius: 8px;
  border-color: white white white transparent;
  border-style: solid;
  border-width: 2px;
  animation: bili-spin 1s infinite linear;
}
@keyframes bili-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>