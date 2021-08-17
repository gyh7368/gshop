<template>
	<div id="foot">
    <div class="footlist"
    :class="{on: iscurrent('/home')}" @click="goTo('/home')">
      <span class="listicon"><i class="iconfont icon-waimai"></i></span>
      <span class="listval">外卖</span>
    </div>
    <div class="footlist"
    :class="{on: iscurrent('/search')}" @click="goTo('/search')">
      <span class="listicon"><i class="iconfont icon-search"></i></span>
      <span class="listval">搜索</span>
    </div>
    <div class="footlist"
    :class="{on: iscurrent('/order')}" @click="goTo('/order')">
      <span class="listicon"><i class="iconfont icon-dingdan"></i></span>
      <span class="listval">订单</span>
    </div>
    <div class="footlist"
    :class="{on: iscurrent('/profile')}" @click="goTo('/profile')">
      <span class="listicon"><i class="iconfont icon-geren"></i></span>
      <span class="listval">我的</span>
    </div>
	</div>
</template>

<script>
	export default {
    components: {
    },
		data() {
			return {
			}
		},
		methods: {
      goTo(path) {
        this.$router.push(path)
      },
      iscurrent(path) {
       return this.$route.path === path
      }
		},
	}
</script>

<style lang="scss" scoped>
  #foot {
    width: 100vw;
    height: 49px;
    border-top: 1px solid #E4E4E4;
    display: flex;
    font-size: 12px;
    padding-top: 3px;
    color: #999999;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    .on{
      color: green;
    }
    .footlist {
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: center;
      .listicon {
        padding-bottom: 2px;
        i{
          font-size: 25px;
        }
      }
    }
  }
</style>
