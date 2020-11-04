<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.recommend{
    display: flex;
    width: 100%;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
}
a {
  text-decoration: none;
  color: #002;
}
.recommend-item{
    flex: 1;
    text-align: center;
    font-size: 12px;
}
.recommend-item img{
    width: 65%;
}
</style>