<template>
  <div class="dang-video">
    <h2>视频</h2>
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
          <a class="pic" :href="item.link">
            <img :src="item.imgUrl" />
            <span class="icon" :class="{ active: index === selected }"></span>
          </a>
          <a class="content" :href="item.link">
            <p class="title">{{ item.title }}</p>
            <p class="text">{{ item.text }}</p>
          </a>
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
          title: "长安十二时辰",
          text: "唐天宝三年，元月十四日，长安",
          imgUrl: "./static/img/m-v-1.jpg",
          link: "#"
        },
        {
          title: "长安十二时辰",
          text: "唐天宝三年，元月十四日，长安",
          imgUrl: "./static/img/m-v-1.jpg",
          link: "#"
        },
        {
          title: "长安十二时辰",
          text: "唐天宝三年，元月十四日，长安",
          imgUrl: "./static/img/m-v-1.jpg",
          link: "#"
        },
        {
          title: "长安十二时辰",
          text: "唐天宝三年，元月十四日，长安",
          imgUrl: "./static/img/m-v-1.jpg",
          link: "#"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.dang-video {
  width: 1226px;
  margin: 0 auto;
  background: #f5f5f5;
  padding-top: 60px;
  padding-bottom: 60px;
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
        width: 296px;
        height: 285px;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        > .pic {
          position: relative;
          img {
            width: 296px;
            height: 180px;
          }
          .icon {
            position: absolute;
            bottom: 10px;
            left: 15px;
            width: 32px;
            height: 32px;
            background: url(../assets/play.png);
          }
          .active {
            background: url(../assets/play-active.png);
          }
        }
        .content {
          width: 240px;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          .text {
            width: 200px;
            font-size: 12px;
            line-height: 20px;
            color: #b0b0b0;
          }
          .title {
            font-size: 14px;
            font-weight: 400;
            line-height: 1.25;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
}
</style>
