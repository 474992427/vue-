// 路由器对象
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import MSite from '../pages/MSite/MSite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
//路由懒加载 
const MSite = () => import('../pages/MSite/MSite.vue') 
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
 const Profile = () => import('../pages/Profile/Profile.vue')

export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component:MSite,//返回路由组件函数，只有执行此函数才会加载路由组件
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
        {
            path:'/shop',
            component:Shop,
            children:[
                {
                    path:'/shop/goods',
                    component:ShopGoods,
                },
                {
                    path:'/shop/ratings',
                    component:ShopRatings,
                },
                {
                    path:'/shop/info',
                    component:ShopInfo,
                },
                {
                    path:'',
                    redirect:'/shop/goods'
                }
            ]
        }
    ]
})