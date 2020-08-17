import {createWebHashHistory,createRouter} from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc},

    ]
})

export default router