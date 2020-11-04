<template>
  <div class="home">
    <!-- 指定要用的插槽 slot -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- :probe-type 因为是驼峰命名所以得用-连接 加:的话就是number类型,不加:则当成字符串类型 -->
    <!-- @子组件传来的方法=当前页面所用的方法 -->
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <!-- 轮播 -->
      <home-swiper :banners="banners" />
      <recommend-view :recommend="recommends" />
      <feature-view />
      <!-- 选项卡 -->
      <!-- <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" /> -->
      <tab-control></tab-control>
      <!-- <goods-list :goods="showGoods"></goods-list> -->
    </scroll>

    <!-- 返回顶部 -->
    <!-- native 监听组件的原生事件时使用才可以监听 -->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
// 子组件
import HomeSwiper from "./childComps/HomeSwiper";
import FeatureView from "./childComps/FeatureView";
import RecommendView from "./childComps/RecommendView";

// 公共组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

// 引入多个路由（数据）
import { getHomeMultidata, getHomeGoods } from "network/home";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    FeatureView,
    RecommendView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false
    };
  },
  // 计算属性
  computed: {
    // 返回商品信息
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 请求首页数据
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    // tabClick(index) {
    //   console.log('index1',index)
    //   switch (index) {
    //     case 0:
    //       this.currentType = "pop";
    //       break;
    //     case 1:
    //       this.currentType = "new";
    //       break;
    //     case 2:
    //       this.currentType = "sell";
    //     // 最后一个break可写可不写 如果有default()就必须写，否则可能到default函数中
    //   }
    // },
    // 返回顶部方法
    backClick() {
      // 调用 ref=scroll 的原生组件中的scrollTo方法
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
    },
    loadMore() {
      // 当前选项卡下的商品
      this.getHomeGoods(this.currentType);
    },

    
    /**
     * 网络请求相关的方法
     */
    // 获取轮播数据
    getHomeMultidata() {
      // 请求多个数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 获取商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // 把res.data.list结构出来依次添加到this.goods[type].list
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 调用ref=scroll的子组件的方法
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
.home {
  padding-top: 44px;
}
.home-nav {
  /* 引入变量color-tint */
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  /* 固定定位与非固定定位切换 如果距离上边小于44px的时候就变成固定定位 */
  position: sticky;
  top: 44px;
  background: #fff;
  position: relative;
}
.content {
  /* 顶部导航44px 底部tab49px */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>