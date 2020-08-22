<template>
  <button>
    <span></span>
  </button>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
    height: $h;
    width: $h*2;
    border: none;
    border-radius: $h/2;
    position: relative;
    > span{
        width: $h2;
        height: $h2;
        background: white;
        border-radius: 50%;
        position: absolute;top:2px;left: 2px;
    }
}
</style>