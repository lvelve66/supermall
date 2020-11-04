<template>
  <div class="goods">
      <!-- 传值item对象到goodsListItem -->
      <goods-list-item v-for="item in goods" :goods-item="item" :key="item.id" />
  </div>
</template>

<script>
// 引入
import GoodsListItem from './GoodsListItem'
export default {
  name: "GoodsList",
  components: {
      GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
};
</script>

<style scoped>
.goods{
  width: 96%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
</style>