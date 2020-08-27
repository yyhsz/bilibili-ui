<template>
<h1>主题</h1>
<iz-button>ass</iz-button>
<iz-button theme="link">ass</iz-button>
<iz-button theme="text">ass</iz-button>
<h1>大小</h1>
<iz-button size="big">ass</iz-button>
<iz-button theme="link">ass</iz-button>
<iz-button theme="text" size="small">ass</iz-button>
<h1>等级</h1>
<iz-button level="main">ass</iz-button>
<iz-button theme="link" level="normal">ass</iz-button>
<iz-button theme="text" level="danger">ass</iz-button>
<h1>禁用</h1>
<iz-button disabled>ass</iz-button>
<h1>加载中</h1>
<iz-button loading>ass</iz-button>
</template>

<script lang="ts">
import IzButton from "../lib/button/IzButton.vue";
export default {
    name: "Button",
    components: {
        IzButton
    },
    setup() {

        return {

        };
    },
};
</script>

<style lang="scss" scoped>

</style>
