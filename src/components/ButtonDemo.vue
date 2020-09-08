<template>
  <h1>Button 按钮</h1>
  <section>
    <h3>按钮主题:</h3>
    <p>使用theme属性来定义按钮的主题</p>
    <div class="background">
      <bili-button>默认按钮</bili-button>
      <bili-button theme="link">
        <a href="http://www.baidu.com" target="_blank">链接按钮</a>
      </bili-button>
      <bili-button theme="text">文字按钮</bili-button>
    </div>
  </section>
  <section>
    <h3>禁用按钮:</h3>
    <p>按钮不可用状态</p>
    <div class="background">
      <bili-button disabled>默认按钮</bili-button>
      <bili-button theme="link" disabled>
        <a href="http://www.baidu.com" target="_blank">链接按钮</a>
      </bili-button>
      <bili-button theme="text" disabled>文字按钮</bili-button>
    </div>
  </section>
  <section>
    <h3>加载中</h3>
    <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
    <div class="background">
      <bili-button loading>默认按钮</bili-button>
    </div>
  </section>
  <section>
    <h3>不同尺寸</h3>
    <p>Button 组件提供除了默认值以外的两种尺寸，可以在不同场景下选择合适的按钮尺寸</p>
    <div class="background">
      <bili-button theme="text" size="big">文字按钮</bili-button>
      <bili-button theme="text">文字按钮</bili-button>
      <bili-button theme="text" size="small">文字按钮</bili-button>
      <bili-button size="big">默认按钮</bili-button>
      <bili-button>默认按钮</bili-button>
      <bili-button size="small">默认按钮</bili-button>
    </div>
  </section>
  <section>
    <h3>不同等级</h3>
    <p>Button 组件提供除了默认值以外的两种等级，可以在不同场景下选择合适的按钮</p>
    <div class="background">
      <bili-button>默认按钮</bili-button>
      <bili-button level="danger">危险按钮</bili-button>
      <bili-button level="main">主要按钮</bili-button>
    </div>
  </section>
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
        <th>theme</th>
        <td>按钮主题</td>
        <td>string</td>
        <td>text,link</td>
        <td>button</td>
      </tr>
      <tr>
        <th>size</th>
        <td>按钮大小</td>
        <td>string</td>
        <td>big,small</td>
        <td>normal</td>
      </tr>
      <tr>
        <th>level</th>
        <td>按钮等级</td>
        <td>string</td>
        <td>main,danger</td>
        <td>false</td>
      </tr>
      <tr>
        <th>disabled</th>
        <td>是否禁用状态</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <th>loading</th>
        <td>是否加载中状态</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import BiliButton from "../lib/button/BiliButton.vue";
export default {
  components: {
    BiliButton,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import url("../assets/basic.scss");

</style>
