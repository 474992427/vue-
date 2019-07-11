// 入口JS
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServe'//加载mockserve就行
import loading from './common/image/loading.gif'
import VueLazyload from 'vue-lazyload'
import './filters'//加载过滤器
Vue.component(Button.name,Button)
Vue.use(VueLazyload, { //图片懒加载
  loading 
})

new Vue({
    el:'#app',
    render:h => h(App),
    router,
    store
})