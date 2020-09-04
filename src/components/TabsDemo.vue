<template>
  <h1>示例1</h1>
  <Tabs>
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script>
import Tabs from "../lib/tabs/Tabs";
import Tab from "../lib/tabs/Tab";

export default {
  name: "Tabs",
  components: {
    Tabs,
    Tab,
  },
};
</script>

<style lang="scss" scoped>
</style>