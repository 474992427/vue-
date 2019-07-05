// 路由器对象
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'


export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component:MSite,
            meta:{//判断页面是否显示底部导航
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{//判断页面是否显示底部导航
                showFooter:true
            }
            
        },
        {
            path:'/order',
            component:Order,
            meta:{//判断页面是否显示底部导航
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{//判断页面是否显示底部导航
                showFooter:true
            }
        },
        {
            path:'/',
            redirect:'/msite'
        },
        {
            path:'/login',
            component:Login,
        },
    ]
})