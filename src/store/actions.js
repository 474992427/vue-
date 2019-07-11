// 通过moutations间接更新state的多个方法的对象
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    INCREMENT_FOOD_COUNT,
    DEREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SERACH_SHOPS
} from './mutation-types' 
import { reqAddress, reqFoodCategorys, reqShops, reqUserInfo, reqLogout, reqShopGoods, reqShopInfo, reqShopRatings,reqSearchShop } from '../api'
export default {
    //异步获取地址
    async getAddress({ commit, state }) {
        //发送异步请求
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        //提交一个mutations
        if (result.code == 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, { address })
        }

    },
    //异步获取食品分类列表
    async getCategory({ commit }) {
        //发送异步请求

        const result = await reqFoodCategorys()
        //提交一个mutations
        if (result.code == 0) {
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, { categorys })
        }

    },

    //异步获取商家列表
    async getShops({ commit, state }) {
        //发送异步请求
        const { latitude, longitude } = state
        // [6、用户名密码登陆](#6用户名密码登陆)<br/>
        const result = await reqShops(latitude, longitude)
        //提交一个mutations
        if (result.code == 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, { shops })
        }

    },
    //同步记录用户信息
    reqUserInfo({ commit }, userInfo) {
        commit(RECEIVE_USER_INFO, { userInfo })
    },
    //异步记录用户信息实现自动登录
    async getUserInfo({ commit }) {
        const result = await reqUserInfo()
        if (result.code == 0) {
            const userInfo = result.data
            commit(RECEIVE_USER_INFO, { userInfo })
        }
    },
    //异步登出
    async logout({ commit }) {
        const result = await reqLogout()
        if (result.code == 0) {
            commit(RESET_USER_INFO)
        }

    },
    //异 步 获 取 商 家 信 息 

    async getShopInfo({ commit }) {
        const result = await reqShopInfo()
        if (result.code === 0) {
            const info = result.data
            commit(RECEIVE_INFO, { info })
        }

    },

    //异 步 获 取 商 家 评 价 列 表 
    async getShopRatings({ commit },callback) {
        const result = await reqShopRatings()
        if (result.code === 0) {
            const ratings = result.data
            commit(RECEIVE_RATINGS, { ratings })
            callback && callback()
        }

    },
    //异 步 获 取 商 家 商 品 列 表
    async getShopGoods({ commit }, callback) {
        const result = await reqShopGoods()
        if (result.code === 0) {
            const goods = result.data
            commit(RECEIVE_GOODS, { goods })
            callback && callback()
        }

    },
    //同布更新food中的count的值
    updateFoodCount({commit},{isAdd,food}){
            if(isAdd){
                commit(INCREMENT_FOOD_COUNT,{food})
            }else {
                commit(DEREMENT_FOOD_COUNT,{food})
            }
    },
    //同步清空购物车
    clearCart({commit}){
        commit(CLEAR_CART)
    },
    //异步搜索商家信息
    async getSearchShops({ commit,state }, keyword,callback) {
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqSearchShop(keyword,geohash)
        if (result.code === 0) {
            const searchShops = result.data
            commit(RECEIVE_SERACH_SHOPS, { searchShops })
            callback && callback()
        }
      
    },
}