// 直接更新state的多个方法的对象
import Vue from 'vue'
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    DEREMENT_FOOD_COUNT,
    INCREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SERACH_SHOPS
} from './mutation-types'
export default{
[RECEIVE_ADDRESS] (state,{address}){
    state.address=address
},
[RECEIVE_CATEGORYS] (state,{categorys}){
    state.categorys=categorys
},
[RECEIVE_SHOPS] (state,{shops}){
    state.shops=shops
},
[RECEIVE_USER_INFO] (state,{userInfo}){
    state.userInfo=userInfo
},
[RESET_USER_INFO] (state){
    state.userInfo={}
},
[RECEIVE_INFO](state, {info}) { 
    state.info = info 
},
[RECEIVE_RATINGS](state, {ratings}) { 
    state.ratings = ratings
 },
[RECEIVE_GOODS](state, {goods}) { 
    state.goods = goods
 },
 //减少
 [DEREMENT_FOOD_COUNT](state, {food}) { 
     if(food.count){
        food.count--
        //当减到0时页面会显示0  所以移除food中的count属性
        if(food.count==0){
            //将food从cartFoods中移除
            state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            Vue.delete(food,'count')
        }
     }
    
 },
 //增加
 [INCREMENT_FOOD_COUNT](state, {food}) { 
    if(!food.count){
        //food.count=1
        Vue.set(food,'count',1)//让新增的属性也有数据绑定
        state.cartFoods.push(food)
    }else{
        food.count++
    }
 },

[CLEAR_CART](state){
    //清楚food中的count
    state.cartFoods.forEach(function(food){
        food.count=0
        
    })
   //移除购物车的所有项目
    state.cartFood=[]
},
[RECEIVE_SERACH_SHOPS](state, {searchShops}) { 
    state.searchShops = searchShops
 },

}