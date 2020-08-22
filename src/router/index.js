import {createWebHashHistory,createRouter} from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import Switch from '../components/Switch.vue'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,
        children:[{name:'switch',path:'switch',component:Switch}]
    },
    ]
})

export default router