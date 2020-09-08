<template>
  <h1>Switch 开关</h1>
  <p>表示两种相互对立的状态间的切换，多用于触发「开/关」</p>
  <section>
    <h3>基本用法</h3>
    <p>使用v-model把一个Boolean类型的变量绑定到checked属性</p>
    <div class="background">
      <bili-switch v-model:checked="checked1"/>
    </div>
  </section>
  <section>
    <h3>禁用状态</h3>
    <div class="background">
      <bili-switch disabled v-model:checked="checked2" />
    </div>
  </section>
  <section>
    <h3>Attributes</h3>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>checked</th>
          <td>绑定值</td>
          <td>boolean</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <th>disabled</th>
          <td>是否禁用</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import BiliSwitch from "../lib/switch/BiliSwitch.vue";
import { computed, ref, watchEffect } from "vue";
export default {
  name: "SwitchDemo",
  components: {
    BiliSwitch,
  },
  setup() {
    const checked1 = ref(true);
    const checked2 = ref(false)
    watchEffect(()=>{
      // console.log(checked.value);
    })
    return {
      checked1,
      checked2
    };
  },
};
</script>

<style lang="scss" scoped>
@import url(../assets/basic.scss);
</style>