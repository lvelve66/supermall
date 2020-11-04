<template>
  <div class="goods-item">
    <img :src="showImage" alt @load="imageLoad" @click="itemClick" />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}&nbsp;</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    // 接收goodsList传来的对象
    goodsItem: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  // 计算属性
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  methods: {
    imageLoad() {
      // 使用事件总线（传到home.vue中，因为涉及到非父子组件的通信，所以这里我们选择了事件总线）
      this.$bus.$emit("itemImageLoad");

      if (this.$route.path.indexOf("/home")) {
        this.$bus.$emit("homeItemImgLoad");
      } else if (this.$route.path.indexOf("/detail")) {
        this.$bus.$emit("detailItemImgLoad");
      }
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  }
};
</script>

<style scoped>
.goods-item {
  margin-top: 10px;
  width: 50%;
  text-align: center;
}
.goods-info {
  width: 91%;
  margin: 0 auto;
  font-size: 0.9rem;
}
.goods-info p {
  white-space: nowrap; /* 不换行 */
  text-overflow: ellipsis; /*多出省略号代替*/
  overflow: hidden;
}
.goods-item img {
  width: 95%;
}
.price {
  color: var(--color-high-text);
}
.collect {
  position: relative;
  margin-left: 15px;
}
.collect::before {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  left: -15px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>