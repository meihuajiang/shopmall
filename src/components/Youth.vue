<template>
  <div class="intelligence">
    <h2>青春</h2>
    <div class="intel-container">
      <div class="wrapper-left">
        <div
          class="left-item"
          v-for="(item, index) in wrapLeft"
          :key="index"
          :class="{ active: index === selected_left }"
          @mouseenter="selected_left = index"
          @mouseleave="selected_left = ''"
        >
          <a :href="item.link">
            <img :src="item.imgUrl" />
          </a>
        </div>
      </div>
      <div class="wrapper-right">
        <div
          class="right-item"
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
          <p class="text">{{ item.text }}</p>
          <p class="price">{{ item.price }}</p>
          <transition-group name="commit-slide" class="commit-slide" tag="div">
            <div class="commit" v-if="selected === index" :key="index">
              <p class="text">{{ commits.text }}</p>
              <p class="source">{{ commits.source }}</p>
            </div>
          </transition-group>
        </div>
        <div class="right-item item-exrta">
          <div class="item">
            <a href="https://item.mi.com/1150500009.html">
              <p>
                <span class="title">小时光，微微甜</span>
                <span class="price">14.9元</span>
              </p>
              <img :src="pic_2" />
            </a>
          </div>
          <div class="item more">
            <a href="https://www.mi.com/smart/">
              <p>
                <span class="title">浏览更多</span>
                <span class="text">青春文学</span>
              </p>
              <img :src="pic_3" />
            </a>
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
      isMouseEnter: false,
      selected: "",
      selected_left: "",
      pic_2: "./static/img/intel-r-8.jpg",
      pic_3: "./static/img/right.png",
      wrapLeft: [
        {
          imgUrl: "./static/img/intel-l-1.jpg",
          link:
            "http://product.dangdang.com/23414990.html#ddclick_http://book.dangdang.com/01.01.htm"
        },
        {
          imgUrl: "./static/img/intel-l-2.jpg",
          link:
            "http://product.dangdang.com/23414990.html#ddclick_http://book.dangdang.com/01.01.htm"
        }
      ],
      Items: [
        {
          title: " 龙族3黑月之潮·下",
          text: "我们都是小怪兽，都将被正义的奥特曼，杀死！",
          price: "149元",
          imgUrl: "./static/img/intel-r-1.jpg",
          link:
            "http://product.dangdang.com/23414990.html#ddclick_http://book.dangdang.com/01.01.htm"
        },
        {
          title: " 龙族3黑月之潮·下",
          text: "我们都是小怪兽，都将被正义的奥特曼，杀死！",
          price: "149元",
          imgUrl: "./static/img/intel-r-1.jpg",
          link:
            "http://product.dangdang.com/23414990.html#ddclick_http://book.dangdang.com/01.01.htm"
        },
        {
          title: " 龙族3黑月之潮·下",
          text: "我们都是小怪兽，都将被正义的奥特曼，杀死！",
          price: "149元",
          imgUrl: "./static/img/intel-r-1.jpg",
          link:
            "http://product.dangdang.com/23414990.html#ddclick_http://book.dangdang.com/01.01.htm"
        },
        {
          title: " 龙族3黑月之潮·下",
          text: "我们都是小怪兽，都将被正义的奥特曼，杀死！",
          price: "149元",
          imgUrl: "./static/img/intel-r-1.jpg",
          link:
            "http://product.dangdang.com/23414990.html#ddclick_http://book.dangdang.com/01.01.htm"
        },
        {
          title: " 龙族3黑月之潮·下",
          text: "我们都是小怪兽，都将被正义的奥特曼，杀死！",
          price: "149元",
          imgUrl: "./static/img/intel-r-1.jpg",
          link:
            "http://product.dangdang.com/23414990.html#ddclick_http://book.dangdang.com/01.01.htm"
        },
        {
          title: " 龙族3黑月之潮·下",
          text: "我们都是小怪兽，都将被正义的奥特曼，杀死！",
          price: "149元",
          imgUrl: "./static/img/intel-r-1.jpg",
          link:
            "http://product.dangdang.com/23414990.html#ddclick_http://book.dangdang.com/01.01.htm"
        },
        {
          title: " 龙族3黑月之潮·下",
          text: "我们都是小怪兽，都将被正义的奥特曼，杀死！",
          price: "149元",
          imgUrl: "./static/img/intel-r-1.jpg",
          link:
            "http://product.dangdang.com/23414990.html#ddclick_http://book.dangdang.com/01.01.htm"
        }
      ],
      commits: {
        text: "樱花与怒火、旧事与幽灵、黑日与圣剑……...",
        source: "来自于 wu 的评价"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.intelligence {
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
  .intel-container {
    display: flex;
    justify-content: space-between;
    .wrapper-left {
      height: 614px;
      width: 234px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      > .active {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        margin-top: -1px;
        transition: all 0.2s linear;
      }
      .left-item {
        height: 300px;
        width: 234px;
        a > img {
          height: 300px;
          width: 234px;
        }
      }
    }
    .wrapper-right {
      width: 992px;
      height: 614px;
      color: #333;
      display: flex;
      flex-flow: wrap;
      justify-content: center;
      align-content: space-between;
      .active {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        margin-top: -1px;
        transition: all 0.2s linear;
      }
      .right-item {
        position: relative;
        overflow: hidden;
        height: 300px;
        width: 234px;
        margin-left: 14px;
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
          margin-top: 10px;
          margin-bottom: 15px;
        }
        .price {
          color: #ff6709;
          font-size: 14px;
        }
        .commit {
          position: absolute;
          z-index: 2;
          // bottom: 0px;
          left: 0;
          height: 90px;
          width: 234px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: left;
          background: #ff6700;
          transform: translateY(-50%);
          .text {
            color: #fff;
            width: 174px;
            margin-top: 10px;
            margin-bottom: 15px;
          }
          .source {
            color: rgba(255, 255, 255, 0.6);
            width: 174px;
          }
        }
      }
      .item-exrta {
        background: #f5f5f5;
        justify-content: space-between;
        overflow: visible;
        .item {
          height: 143px;
          width: 234px;
          background: #fff;
          display: flex;
          justify-content: space-around;
          align-items: center;
          transition: all 0.2s linear;
          &:hover {
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            margin-top: -1px;
          }
          a {
            width: 234px;
            display: flex;
            justify-content: space-around;
            p {
              display: flex;
              flex-direction: column;
              justify-content: center;
              text-align: left;
              .title {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                margin-bottom: 14px;
              }
            }
            img {
              width: 80px;
              height: 80px;
            }
          }
        }
        .more > a > img {
          width: 62px;
          height: 60px;
          margin-left: 20px;
        }
        .more .title {
          font-size: 18px;
        }
        .more .text {
          margin: 0;
        }
      }
    }
  }
}
//commit-slide动画
.commit-slide-enter-active,
.commit-slide-leave-active {
  transition: all 0.2s linear;
  bottom: -50px;
  opacity: 1;
}
.commit-slide-enter,.commit-slide-leave-to/* .fade-leave-active in <2.1.8 */ {
  bottom: -90px;
  opacity: 0;
  transition: all 0.2s linear;
}
</style>
