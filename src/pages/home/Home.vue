<template>
   <section class="msite">
        <!--首页头部-->
    <HeadTop title="昌平区北七家宏福科技园(337省道北)">
          <span class="header_search" slot='left'>
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span class="header_login" slot='right'>
            <span class="header_login_text">登录|注册</span>
          </span>
        </HeadTop>
        <!--首页导航-->
    <nav class="msite_nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide>
                  <div class="swiper-slide">
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/1.jpg">
                    </div>
                    <span>甜品饮品</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/2.jpg">
                    </div>
                    <span>商超便利</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/3.jpg">
                    </div>
                    <span>美食</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/4.jpg">
                    </div>
                    <span>简餐</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/5.jpg">
                    </div>
                    <span>新店特惠</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/6.jpg">
                    </div>
                    <span>准时达</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/7.jpg">
                    </div>
                    <span>预订早餐</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/8.jpg">
                    </div>
                    <span>土豪推荐</span>
                  </a>
                </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="swiper-slide">
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/9.jpg">
                    </div>
                    <span>甜品饮品</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/10.jpg">
                    </div>
                    <span>商超便利</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/11.jpg">
                    </div>
                    <span>美食</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/12.jpg">
                    </div>
                    <span>简餐</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/13.jpg">
                    </div>
                    <span>新店特惠</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/14.jpg">
                    </div>
                    <span>准时达</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/1.jpg">
                    </div>
                    <span>预订早餐</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/2.jpg">
                    </div>
                    <span>土豪推荐</span>
                  </a>
                </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
        <!--首页附近商家-->
        <ShopList></ShopList>
  </section>

</template>

<script>
import HeadTop from '../../components/head/HeadTop.vue'
import ShopList from '../../components/shoplist/ShopList.vue'

import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
  export default {
    name: 'Home',
    components: {
      HeadTop,
      swiper,
      swiperSlide,
      ShopList

    },
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          // 显示分页
          pagination: {
            el: ".swiper-pagination",
            clickable: true //允许分页点击跳转
          },
        }
      };
    },
    computed: {
        swiper() {
          return this.$refs.mySwiper.swiper;
        }
      },
    mounted() {

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/css/mixins.styl'

  .msite  //首页
    width 100%
    overflow hidden
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


</style>
