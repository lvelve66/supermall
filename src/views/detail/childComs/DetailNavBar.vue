<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          class="title-item"
          v-for="(item,index) in titles"
          :class="{active : index === currentIndex}"
          @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";


export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    // 点击参数选项
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index)
    },
    // 点击返回页面
    backClick() {
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.back {
  display: table;
}
.back img {
  vertical-align: middle;
  margin-left: 20px;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>