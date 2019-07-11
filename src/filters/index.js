import Vue from 'vue'
//import moment from 'moment'
import format from 'date-fns/format' 
//自定过滤器 把数字转化为时间格式
Vue.filter('data-format',function(value,formatStr='YYY-MM-DD HH:mm:ss'){
  //return moment(value).format('YYY-MM-DD HH:mm:ss')
  return format(value,formatStr)
})