<template>
  <div class="hot-goods">
    <h2>热评产品</h2>
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
          <div class="content">
            <div class="commit">
              <p class="text">{{ item.text }}</p>
              <p class="source">{{ item.source }}</p>
            </div>
            <div class="info">
              <p class="title">{{ item.title }}</p>
              <p class="price">{{ item.price }}</p>
            </div>
          </div>
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
          title: "人生最美是清欢",
          text:
            "在复杂的世界里，做一个简单的人，以清静心看世界，以欢喜心过生活，淡定从容地过好这一生。=￣ω￣=",
          price: "69元",
          source: "来自于 wu 的评价",
          imgUrl: "./static/img/h-g-1.jpg",
          link: "http://product.dangdang.com/23898712.html"
        },
        {
          title: "人生最美是清欢",
          text:
            "在复杂的世界里，做一个简单的人，以清静心看世界，以欢喜心过生活，淡定从容地过好这一生。",
          price: "149元",
          source: "来自于 wu 的评价",
          imgUrl: "./static/img/h-g-2.jpg",
          link: "http://product.dangdang.com/23898712.html"
        },
        {
          title: "人生最美是清欢",
          text:
            "在复杂的世界里，做一个简单的人，以清静心看世界，以欢喜心过生活，淡定从容地过好这一生。",
          price: "399元",
          source: "来自于 wu 的评价",
          imgUrl: "./static/img/h-g-3.jpg",
          link: "http://product.dangdang.com/23898712.html"
        },
        {
          title: "人生最美是清欢",
          text:
            "在复杂的世界里，做一个简单的人，以清静心看世界，以欢喜心过生活，淡定从容地过好这一生。",
          price: "1299元",
          source: "来自于 wu 的评价",
          imgUrl: "./static/img/h-g-4.jpg",
          link: "http://product.dangdang.com/23898712.html"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.hot-goods {
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
        width: 296px;
        height: 415px;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        > a > img {
          width: 296px;
          height: 220px;
        }
        .content {
          height: 190px;
          width: 240px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          color: #333;
          .commit {
            text-align: left;
            margin: 28px 0 15px 0;
            width: 240px;
            .text {
              font-size: 14px;
              font-weight: 400;
              line-height: 24px;
              height: 72px;
            }
            .source {
              color: #b0b0b0;
              margin: 22px 0 0 0;
            }
          }
          .info {
            display: flex;
            width: 240px;
            align-items: center;
            .title {
              font-size: 14px;
              font-weight: 400;
              padding-right: 10px;
              border-right: 2px solid #e0e0e0;
            }
            .price {
              color: #ff6709;
              padding-left: 10px;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
