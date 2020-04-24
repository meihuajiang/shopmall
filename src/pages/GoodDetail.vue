<template>
  <div>
    <h1>这里是商品详情页面</h1>
    <div>我是从{{ title }}跳转过来的</div>
  </div>
</template>

<script>
export default {
  name: "GoodDetail.vue",
  data() {
    return {
      title: " "
    };
  },
  created() {
    // 接收GoodsInfo.vue传过来的goodsId
    this.title = this.$route.query.title;
  }
};
</script>

<style scoped></style>
