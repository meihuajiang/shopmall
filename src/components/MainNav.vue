<template>
  <div class="main-nav">
    <div
      class="nav-first"
      @mouseenter="isNavEnter = true"
      @mouseleave="isNavEnter = false"
    >
      <ul>
        <li
          v-for="(item, index) in navFirst"
          :key="index"
          :class="{ active: item.type === selected }"
          @mouseenter="selected = item.type"
        >
          <p>
            <span>{{ item.name }}</span>
            <span class="icon">></span>
          </p>
        </li>
      </ul>
    </div>
    <div
      class="nav-sec"
      v-show="isNavEnter || isMenuEnter"
      @mouseenter="isMenuEnter = true"
      @mouseleave="isMenuEnter = false"
    >
      <ul
        v-for="(item, index) in navFirst"
        v-show="item.type === selected"
        :key="index"
      >
        <li v-for="(key, index) in navSec[item.type]" :key="index">
          <div class="product">
            <a :href="key.link">
              <img :src="key.imgUrl" alt="" />
              <p class="title">{{ key.title }}</p>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
      isNavEnter: false,
      isMenuEnter: false,
      navFirst: [
        { name: "电子书 网络文学", type: "mainNav1" },
        { name: "教育", type: "mainNav2" },
        { name: "小说", type: "mainNav3" },
        { name: "文学 艺术", type: "mainNav4" },
        { name: "青春文学 动漫", type: "mainNav5" },
        { name: "童书", type: "mainNav6" },
        { name: "人文社科", type: "mainNav7" },
        { name: "经管", type: "mainNav8" },
        { name: "成功 励志", type: "mainNav9" },
        { name: "生活", type: "mainNav10" }
      ],
      navSec: {
        mainNav1: [
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          }
        ],
        mainNav2: [
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          }
        ],
        mainNav3: [
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          }
        ],
        mainNav4: [
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          }
        ],
        mainNav5: [
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          }
        ],
        mainNav6: [
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          }
        ],
        mainNav7: [
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          }
        ],
        mainNav8: [
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          }
        ],
        mainNav9: [
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          }
        ],
        mainNav10: [
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          },
          {
            title: "小说",
            imgUrl: require("../static/img/xm6.png"),
            link: ""
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.main-nav {
  font-size: 14px;
  width: 1226px;
  background: #fff;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: flex-start;
  > .nav-first {
    width: 235px;
    height: 458px;
    position: relative;
    z-index: 5;
    ul {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.6);
      padding: 20px 0;
      color: #fff;
      li {
        padding-left: 30px;
        height: 42px;
        line-height: 42px;
        cursor: pointer;
        &:hover {
          background: #ff6700;
        }
        > p {
          display: flex;
          justify-content: space-between;
          > .icon {
            margin-right: 20px;
            font-weight: bold;
          }
        }
      }
    }
  }
  .nav-sec {
    height: 458px;
    width: 992px;
    position: absolute;
    top: 0;
    right: 0;
    background: #fff;
    z-index: 5;
    overflow: hidden;
    border: 1px solid #e0e0e0;
    border-left: none;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
    ul {
      height: 458px;
      display: flex;
      flex-flow: wrap;
      flex-direction: column;
      align-items: flex-start;
      align-content: flex-start;
      justify-content: flex-start;
      li {
        width: 265px;
        height: 76px;
        .product {
          a {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            transition: color 0.2s;
            width: 265px;
            padding: 20px 20px;
            &:hover {
              color: #ff6700;
            }
            img {
              width: 40px;
              height: 40px;
              margin-right: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
