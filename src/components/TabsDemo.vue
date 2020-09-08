<template>
  <h1>NavMenu 导航菜单</h1>
  <section>
    <h3>顶栏</h3>
    <div class="background">
      <bili-tabs>
        <bili-tab title="社会">促就业利民生 中企深耕"一带一路"造福当地</bili-tab>
        <bili-tab title="财经" selected>恒指收跌1.73% 史上第四次低于道指</bili-tab>
        <bili-tab title="体育">权健官方宣布索萨下课 沈祥福现场指挥与鲁能一战</bili-tab>
        <bili-tab title="禁用" disabled>123</bili-tab>
      </bili-tabs>
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
            <th>selected</th>
            <td>默认选项</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <th>title</th>
            <td>导航栏的标题</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <th>disabled</th>
            <td>是否禁用该选项</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
  </section>
</template>

<script>
import BiliTabs from "../lib/tabs/BiliTabs.vue";
import BiliTab from "../lib/tabs/BiliTab.vue";

export default {
  components: {
    BiliTabs,
    BiliTab,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
@import url(../assets/basic.scss);
</style>