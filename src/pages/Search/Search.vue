<template>
 
    <section class="search">
     <HeaderTop title="搜索"></HeaderTop>
        <form class="search_form" @submit.prevent="search">
            <input type="search" placeholder="请输入商家名称" class="search_input" v-model="keyword">
            <input type="submit" class="search_submit">
        </form>
        <section class="list" ref="heightUl">

            <ul class="list_container" >
              <!-- to="'/shop?id='+item.id" -->
              <router-link :to="{path:'/shop', query:{id:item.id}}" tag="li" v-for="item in searchShops" :key="item.id" class="list_li">
                  <section class="item_left">
                      <img :src="imgBaseUrl + item.image_path" class="restaurant_img">
                  </section>
                  <section class="item_right">
                      <div class="item_right_text">
                          <p> <span>{{item.name}}</span> 
                          </p>
                          <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
                          <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离 {{item.distance}}</p>
                      </div>
                  </section>
              </router-link>
             </ul>
        </section>
        <div class="search_none" v-if="emptyResult">很抱歉！无搜索结果</div> 
    </section>
</template>


<script>

 import HeaderTop from '../../components/HeaderTop/HeaderTop'
 import {mapState} from 'vuex'
import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        keyword:'',
       imgBaseUrl: 'http://cangdu.org:8001/img/', 
       emptyResult:false
      }
    },
    components:{
      HeaderTop
    },
    methods:{
      search(){
          //得到关键字
          const keyword=this.keyword.trim()
          //搜索
          if(keyword){
            this.$store.dispatch('getSearchShops',keyword
              
            )
          }
      }
    },
    watch:{
      searchShops(value){
        if(!value.length){
          this.emptyResult=true
        }
      }
    },
    computed:{
      ...mapState(['searchShops'])
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
     .header
            background-color #02a774
            position fixed
            z-index 100
            left 0
            top 0
            width 100%
            height 45px
            .header_search
              position absolute
              left 15px
              top 50%
              transform translateY(-50%)
              width 10%
              height 50%
              .icon-sousuo
                font-size 25px
                color #fff
            .header_title
              position absolute
              top 50%
              left 50%
              transform translate(-50%, -50%)
              width 50%
              color #fff
              text-align center
              .header_title_text
                font-size 20px
                color #fff
                display block
            .header_login
              font-size 14px
              color #fff
              position absolute
              right 15px
              top 50%
              transform translateY(-50%)
              .header_login_text
                color #fff
   .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
  .search
    width 100%
    height 100%
    overflow hidden
    .search_form
      clearFix()
      margin-top 45px
      background-color #fff
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search_input
          float left
          width 79%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search_submit
          float right
          width 18%
          border 4px solid #02a774
          font-size 16px
          color #fff
          background-color #02a774

    .list
      .list_container
        background-color: #fff;
        .list_li
          display: flex;
          justify-content: center;
          padding: 10px
          border-bottom: 1px solid $bc;
          .item_left
            margin-right: 10px
            .restaurant_img
              width 50px
              height 50px
              display block
          .item_right
            font-size 12px
            flex 1
            .item_right_text
              p
                line-height 12px
                margin-bottom 6px
                &:last-child
                  margin-bottom 0
    .search_none
      margin: 0 auto
      color: #333
      background-color: #fff
      text-align: center
      margin-top: 0.125rem
</style>