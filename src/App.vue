<!--  -->
<template>
  <div id="app">
    <router-view></router-view>
    <!-- 判断页面是否显示底部导航 -->
    <FooterGuide v-show='$route.meta.showFooter'/>
  </div>
</template>



<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'

export default {
mounted (){
  this.getAddress()
  this.getUserInfo()
},
methods:{
  ...mapActions(['getAddress','getUserInfo']),
  
 
},
  components:{
    FooterGuide
  },
  data () {
    return {
    }
  }


}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.app
  width 100%
  height 100%
  background #f5f5f5

</style>
