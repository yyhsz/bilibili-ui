"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
require("./lib/iz.scss"); //要先引用基础样式再创建组件，否则样式会出错
require("./index.scss");
var router_1 = require("./router");
var app = vue_1.createApp(App_vue_1["default"]);
app.use(router_1["default"]);
app.mount('#app');
