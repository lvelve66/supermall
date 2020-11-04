<template>
  <!-- 封装滚动组件 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 引入滚动插件
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      //默认是0， 不监听滚动
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  // 调用Bscroll方法使页面滚动
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true, //BScroll对象内的点击事件是否可点击
      probeType: this.probeType, //实时监听滚动位置模式
      pullUpLoad: this.pullUpLoad //上拉加载
    });
    this.scroll.scrollTo(0, 0);

    // 2.监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        // 传值到父组件
        this.$emit("scroll", position);
      });
    }

    // 3.监听scroll滚动到底部
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit("pullingUp")
      })
    }
  },
  // 封装返回顶部的距离
  methods: {
    //给它在外面做一层封装, 给它设置一个默认的滚动时间，300毫秒;
    scrollTo(x, y, time = 300) {
      // 如果有值就执行
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    //当上拉加载事件完成后，调用此方法，才可以进行下一次上拉加载;
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  }
};
</script>

<style lang="less">
</style>