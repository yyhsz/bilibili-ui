<template>
  <div>
    <h1>Dialog 对话框</h1>
    <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
    <p>需要设置visible属性，它接收Boolean，当为true时显示 Dialog.</p>
    <p>content属性用于定义内容，title属性用于定义标题，它们都需要具名slot</p>
    <section>
      <h3>基本用法</h3>
      <div class="background">
        <bili-button @click="toogle">弹出对话框1</bili-button>
        <bili-dialog v-model:visible="visible" :confirm="confirm">
          <template #title>提示</template>
          <template #content>
            <p>一行代码</p>
            <p>两行代码</p>
          </template>
        </bili-dialog>
      </div>
      <pre class="markdown-body">
        通过visible的值决定对话框的显示与否
        &ltbili-dialog v-model:visible="visible" :confirm="confirm">
          &lttemplate #title>提示&lt/template>
          &lttemplate #content>
            &ltp>一行代码&lt/p>
            &ltp>两行代码&lt/p>
          &lt/template>
        &lt/bili-dialog>
      </pre>
    </section>
    <section>
      <h3>以代码形式快速建立简易Dialog</h3>
      <div class="background">
        <bili-button
          @click="openDialog({
        title: `标题`,
        content: `一行二行`,
        closeOnClickOverlay: true,
        confirm: () => {return true}
      })"
        >弹出对话框2</bili-button>
      </div>
      <pre class="markdown-body">
          import { openDialog } from "bili-ui/dialog/dialog"; //引入弹出对话框函数
          //在按钮上绑定openDialog函数，并传入相应参数
          &ltbili-button
          @click="openDialog({
            title: `标题`,
            content: `一行二行`,
            closeOnClickOverlay: true,
            confirm: () => {return true}
          })"
        >弹出对话框2&lt/bili-button>
      </pre>
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
            <th>visible</th>
            <td>是否显示 Dialog</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <th>title</th>
            <td>Dialog 的标题，应通过具名 slot （见下表）传入</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <th>content</th>
            <td>Dialog 的内容，应通过具名 slot （见下表）传入</td>
            <td>any</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <th>openDialog</th>
            <td>便捷打开Dialog的方法，需要传入参数（见下表）</td>
            <td>function</td>
            <td>—</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h3>Slot</h3>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>title</th>
            <td>Dialog 标题区的内容</td>
          </tr>
          <tr>
            <th>content</th>
            <td>Dialog 的内容</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h3>Function参数</h3>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>类型</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>title</th>
            <td>string</td>
            <td>标题内容，可以是html模板字符串也可以是字符串</td>
          </tr>
          <tr>
            <th>content</th>
            <td>string</td>
            <td>标题内容，可以是html模板字符串也可以是字符串</td>
          </tr>
          <tr>
            <th>closeOnClickOverlay</th>
            <td>boolean</td>
            <td>是否需要点击别处关闭浮层</td>
          </tr>
           <tr>
            <th>confirm</th>
            <td>function</td>
            <td>返回值为boolean，用于对dialog内容校验后确认是否可以关闭dialog</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import BiliDialog from "../lib/dialog/BiliDialog.vue";
import BiliButton from "../lib/button/BiliButton.vue";

import { openDialog } from "../lib/dialog/dialog";
import { ref } from "vue";
export default {
  name: "DialogDemo",
  components: {
    BiliDialog,
    BiliButton,
  },
  setup() {
    const visible = ref(false);
    const toogle = () => {
      visible.value = !visible.value;
    };
    const confirm = () => {
      return true;
    };
    return {
      visible,
      toogle,
      confirm,
      openDialog,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url(../assets/basic.scss);
</style>
