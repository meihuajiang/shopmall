<template>
  <div class="star-goods">
    <h2>星级单品</h2>
    <div class="goods-container">
      <div
        class="goods-item"
        v-for="(item, index) in starGoods"
        :key="index"
        @click="jump(item.title)"
      >
        <a>
          <img :src="item.imgUrl" alt="" />
          <p class="title">{{ item.title }}</p>
        </a>
        <p class="text">{{ item.text }}</p>
        <p class="price">{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item.title", "item.text", "item.price"],
  data() {
    return {
      starGoods: [
        {
          title: "夏目友人帐",
          text: "只要有想见的人，就不再会是孤身一人了",
          price: "29元",
          imgUrl: require("../static/img/xiamu.png"),
          link: "http://product.dangdang.com/24017532.html"
        },
        {
          title: "一个人的小时光",
          text: "一个人也要好好吃饭",
          price: "29元起",
          imgUrl: require("../static/img/yigeren.png"),
          link:
            "http://product.dangdang.com/23903560.html#ddclick_reco_reco_alsoview"
        },
        {
          title: "你当像鸟飞往你的山",
          text: "我们要背叛多少曾经，才能找到真正的自我！",
          price: "39元起",
          imgUrl: require("../static/img/nidangxiangniao.png"),
          link: "http://product.dangdang.com/28473192.html"
        },
        {
          title: "当你学会独处",
          text: "独处是灵魂生长的必要空间",
          price: "29元",
          imgUrl: require("../static/img/dangnixuehui.png"),
          link: "http://product.dangdang.com/28473192.html"
        },
        {
          title: "欲望的旗帜",
          text: "如果生活是一场永无休止的徒刑",
          price: "19元",
          imgUrl: require("../static/img/yuwangde.png"),
          link: "http://product.dangdang.com/28518600.html"
        }
      ]
    };
  },
  methods: {
    jump(value) {
      this.$router.push({
        name: "GoodDetail",
        query: { title: value }
      });
    }
  }
};
</script>

<style lang="scss">
.star-goods {
  width: 1226px;
  margin: 0 auto;
  margin-top: 26px;
  h2 {
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
  }
  .goods-container {
    height: 340px;
    width: 1226px;
    display: flex;
    justify-content: space-between;
    .goods-item {
      width: 234px;
      height: 300px;
      background: #fafafa;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      transition: all 0.2s linear;
      &:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        margin-top: -1px;
      }
      &:nth-child(1) {
        border-top: 1px solid #ffac13;
      }
      &:nth-child(2) {
        border-top: 1px solid #83c44e;
      }
      &:nth-child(3) {
        border-top: 1px solid #2196f3;
      }
      &:nth-child(4) {
        border-top: 1px solid #e53935;
      }
      &:nth-child(5) {
        border-top: 1px solid #00c0a5;
      }
      a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 400;
        img {
          width: 160px;
          height: 160px;
        }
      }
      .text {
        color: #b0b0b0;
        font-size: 12px;
        margin-top: 10px;
        margin-bottom: 15px;
      }
      .price {
        color: #ff6709;
        font-size: 14px;
      }
    }
  }
}
</style>
