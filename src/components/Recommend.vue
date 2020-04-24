<template>
  <div class="recommend">
    <h2>为你推荐</h2>
    <div class="container">
      <div class="wrapper">
        <div
          class="item"
          v-for="(item, index) in Items"
          :key="index"
          :class="{ active: index === selected }"
          @mouseenter="selected = index"
          @mouseleave="selected = ''"
        >
          <a :href="item.link">
            <img :src="item.imgUrl" />
          </a>
          <p class="title">{{ item.title }}</p>
          <p class="price">{{ item.price }}</p>
          <p class="text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
      Items: [
        {
          title: "空间简史",
          text: "434人好评",
          price: "29元",
          imgUrl: "./static/img/rec-1.jpg",
          link: "http://product.dangdang.com/25546541.html"
        },
        {
          title: "空间简史",
          text: "434人好评",
          price: "29元",
          imgUrl: "./static/img/rec-1.jpg",
          link: "http://product.dangdang.com/25546541.html"
        },
        {
          title: "空间简史",
          text: "434人好评",
          price: "29元",
          imgUrl: "./static/img/rec-1.jpg",
          link: "http://product.dangdang.com/25546541.html"
        },
        {
          title: "空间简史",
          text: "434人好评",
          price: "29元",
          imgUrl: "./static/img/rec-1.jpg",
          link: "http://product.dangdang.com/25546541.html"
        },
        {
          title: "空间简史",
          text: "434人好评",
          price: "29元",
          imgUrl: "./static/img/rec-1.jpg",
          link: "http://product.dangdang.com/25546541.html"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.recommend {
  width: 1226px;
  margin: 0 auto;
  background: #f5f5f5;
  padding-top: 60px;
  h2 {
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
  }
  .container {
    width: 1226px;
    margin: 0 auto;
    .wrapper {
      display: flex;
      justify-content: space-between;
      align-content: space-between;
      .active {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        margin-top: -1px;
        transition: all 0.2s linear;
      }
      .item {
        position: relative;
        overflow: hidden;
        height: 300px;
        width: 234px;
        color: #333;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        > a > img {
          width: 150px;
          height: 150px;
        }
        .title {
          font-size: 14px;
          font-weight: 400;
        }
        .text {
          color: #b0b0b0;
        }
        .price {
          color: #ff6709;
          font-size: 14px;
          margin-top: 10px;
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>
