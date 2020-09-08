import { createApp } from 'vue'
import App from './App.vue'
import './lib/bili.scss' //要先引用基础样式再创建组件，否则样式会出错
import './index.scss'
import router from './router'



const app = createApp(App)
app.use(router)
app.mount('#app')
