<template>
  <div class="top-header">
    <div class="container">
      <a class="logo-dang"></a>
      <a class="gif"></a>
      <div
        class="header-nav"
        @mouseenter="isNavEnter = true"
        @mouseleave="isNavEnter = false"
      >
        <ul>
          <li
            class="item"
            v-for="(item, index) in navItems"
            :key="index"
            :class="{ active: item.type === selected }"
            @mouseenter="selected = item.type"
          >
            <a href="#">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div
        class="header-search"
        @mouseenter="searchEnter"
        @mouseleave="searchLeave"
      >
        <form>
          <input
            class="search-text"
            type="search"
            @focus="inputFocus"
            @blur="inputBlur"
            :class="{ 'search-focus': isFocus, 'search-enter': isEnter }"
          />
          <label
            class="search-btn"
            value=""
            :class="{ 'search-focus': isFocus, 'search-enter': isEnter }"
          >
            <span class="icon"></span>
          </label>
        </form>
        <ul class="search-result" v-show="isFocus">
          <li v-for="(item, index) in results" :key="index">
            <span class="item-name">{{ item.name }}</span>
            <span class="item-num">约有{{ item.number }}件</span>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="header-menu"
      v-show="selected !== '' && (isNavEnter || isMenuEnter)"
      @mouseenter="isMenuEnter = true"
      @mouseleave="isMenuEnter = false"
    >
      <ul
        v-for="(item, index) in navItems"
        v-show="item.type === selected"
        :key="index"
      >
        <li v-for="(key, index) in tabItems[item.type]" :key="index">
          <div class="product">
            <p class="info">{{ key.info }}</p>
            <a :href="key.link"><img :src="key.imgUrl" alt=""/></a>
            <p class="title">{{ key.title }}</p>
            <p class="price">{{ key.price }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import $ from 'jQuery'
// import HeaderMenu from './HeaderMenu'
export default {
  data() {
    return {
      navItems: [
        { name: "童书", type: "navItem1" },
        { name: "教辅", type: "navItem2" },
        { name: "文学", type: "navItem3" },
        { name: "励志", type: "navItem4" },
        { name: "青春", type: "navItem5" },
        { name: "管理", type: "navItem6" },
        { name: "历史", type: "navItem7" },
        { name: "服务", type: "" },
        { name: "社区", type: "" }
      ],
      results: [
        { name: "苏东坡传", number: "11" },
        { name: "哈利波特", number: "1" },
        { name: "苏东坡传", number: "4" },
        { name: "哈利波特", number: "8" },
        { name: "苏东坡传", number: "21" },
        { name: "哈利波特", number: "3" },
        { name: "苏东坡传", number: "2" },
        { name: "哈利波特", number: "1" },
        { name: "苏东坡传", number: "13" },
        { name: "哈利波特", number: "32" }
      ],
      tabItems: {
        navItem1: [
          {
            title: "哈利波特",
            imgUrl: "./static/img/xm6.png",
            link: "https://www.mi.com/mi6/",
            price: "2499元起",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/max2.png",
            link: "https://www.mi.com/max2/",
            price: "1699元起",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/xiaomiNOTE2.jpg",
            link: "https://www.mi.com/minote2/",
            price: "2799元起",
            info: "现货"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/MIX.jpg",
            link: "https://www.mi.com/mix/",
            price: "3499元起",
            info: "现货"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/5splus.jpg",
            link: "https://www.mi.com/mi5splus/",
            price: "2299元起",
            info: "现货"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/mi5c.png",
            link: "https://www.mi.com/mi5c/",
            price: "1499元起",
            info: "现货"
          }
        ],
        navItem2: [
          {
            title: "哈利波特",
            imgUrl: "./static/img/hmn4x.jpg",
            link: "https://www.mi.com/redminote4x/",
            price: "799元起",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/hm4x.jpg",
            link: "https://www.mi.com/redmi4x/",
            price: "699元起",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/hm4a.png",
            link: "https://www.mi.com/redmi4a/",
            price: "599元起",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/hm4.jpg",
            link: "https://www.mi.com/redmi4",
            price: "799元起",
            info: "新品"
          }
        ],
        navItem3: [
          {
            title: "哈利波特",
            imgUrl: "./static/img/mipad3.png",
            link: "https://www.mi.com/mipad3/",
            price: "1499元",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/bijiben12.5.jpg",
            link: "https://www.mi.com/mibookair-12/",
            price: "3599元",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/bijiben13.3.jpg",
            link: "https://www.mi.com/mibookair/",
            price: "4999元",
            info: "新品"
          }
        ],
        navItem4: [
          {
            title: "哈利波特",
            imgUrl: "./static/img/xmds_49.png",
            link: "https://www.mi.com/mitv4/49/",
            price: "3499元",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/xmds_55.png",
            link: "https://www.mi.com/mitv4/55/",
            price: "3999元起",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/xmds_65.png",
            link: "https://www.mi.com/mitv4/65/",
            price: "9999元",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/xmds4a_43.png",
            link: "https://www.mi.com/mitv4A/43/",
            price: "2099元",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/xmds4a_49.png",
            link: "https://www.mi.com/mitv4A/49/",
            price: "2599元",
            info: "新品"
          }
        ],
        navItem5: [
          {
            title: "哈利波特",
            imgUrl: "./static/img/mihezi.png",
            link: "https://www.mi.com/mibox3s/",
            price: "299元",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/mihezi3c.png",
            link: "https://www.mi.com/mibox3c/",
            price: "199元",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/hezi3s.jpg",
            link: "https://www.mi.com/hezi3s/",
            price: "399元",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/jiatingyingyuan.png",
            link: "https://www.mi.com/misurround/",
            price: "1999元",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/yinxiang.jpg",
            link: "https://item.mi.com/1160800074.html",
            price: "699元",
            info: "新品"
          }
        ],
        navItem6: [
          {
            title: "哈利波特",
            imgUrl: "./static/img/HD-Pro.png",
            link: "https://www.mi.com/miwifihd/",
            price: "499元起",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/3G.png",
            link: "https://www.mi.com/miwifi3g/",
            price: "249元",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/xmlyq3.png",
            link: "https://www.mi.com/miwifi3/",
            price: "149元起",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/3C.png",
            link: "https://www.mi.com/miwifi3c/",
            price: "99元",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/cilimao.png",
            link: "https://www.mi.com/plc/",
            price: "249元",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/fdq2.jpg",
            link: "https://item.mi.com/1164700010.html",
            price: "49元",
            info: "新品"
          }
        ],
        navItem7: [
          {
            title: "哈利波特",
            imgUrl: "./static/img/tzc.jpg",
            link: "https://www.mi.com/scale2/",
            price: "199元",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/sh2.png",
            link: "https://www.mi.com/shouhuan2/",
            price: "149元",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/jsqcs.png",
            link: "https://www.mi.com/water3/",
            price: "1499元起",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/xmvrplay2.png",
            link: "https://www.mi.com/mivr2c/",
            price: "99元",
            info: "新品"
          },
          {
            title: "哈利波特",
            imgUrl: "./static/img/dfb.jpg",
            link: "https://www.mi.com/dianfanbao2/",
            price: "399元",
            info: "新品"
          }
        ]
      },
      selected: "",
      isFocus: false,
      isEnter: false,
      isNavEnter: false,
      isMenuEnter: false
    };
  },
  methods: {
    inputFocus: function() {
      this.isFocus = true;
    },
    inputBlur: function() {
      this.isFocus = false;
    },
    searchEnter: function() {
      this.isEnter = true;
    },
    searchLeave: function() {
      this.isEnter = false;
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.top-header {
  width: 100%;
  position: relative;
  > .container {
    width: 1226px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .logo-dang {
      width: 55px;
      height: 55px;
      background: url(../assets/logo-dang.png) no-repeat;
    }
    > .gif {
      width: 163px;
      height: 66px;
      margin-left: 20px;
      background: url(../assets/win.gif) no-repeat;
    }
    > .header-nav {
      margin-right: auto;
      height: 100px;
      display: flex;
      align-items: center;
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .item > a {
          height: 66px;
          line-height: 66px;
          padding: 0 10px;
          font-size: 16px;
          &:hover {
            color: #ff6700;
          }
        }
      }
    }
    > .header-search {
      position: relative;
      form {
        height: 50px;
        display: flex;
        align-items: center;
        .search-text {
          width: 223px;
          height: 50px;
          padding: 0 10px;
          border: 1px solid #e0e0e0;
          border-right: none;
          font-size: 14px;
          line-height: 48px;
          outline: 0;
          transition: all 0.2s;
        }
        .search-enter {
          border-color: #333;
        }
        .search-btn {
          width: 52px;
          height: 48px;
          border: 1px solid #e0e0e0;
          font-size: 24px;
          line-height: 24px;
          background: #fff;
          color: #616161;
          outline: 0;
          transition: all 0.2s;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          > .icon {
            background: url(../assets/icon-search.png) no-repeat;
            display: inline-block;
            width: 20px;
            height: 20px;
            background-size: 100% 100%;
            transition: all 0.2s;
          }
          &:hover {
            background: #ff6700;
            > .icon {
              background: url(../assets/icon-search-white.png) no-repeat;
              display: inline-block;
              width: 20px;
              height: 20px;
              background-size: 100% 100%;
            }
          }
        }
        .search-enter {
          border-color: #b0b0b0;
        }
        .search-focus {
          border-color: #ff6700;
        }
      }
      .search-result {
        position: absolute;
        z-index: 3;
        box-sizing: border-box;
        top: 50px;
        width: 224px;
        border: 1px solid #ff6700;
        border-top: 0;
        background: #fff;
        li {
          padding: 7px 13px;
          color: #424242;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .item-num {
            color: #b0b0b0;
          }
          &:hover {
            color: #ff6700;
          }
        }
      }
    }
  }
}
.header-menu {
  position: absolute;
  top: 100px;
  left: 18%;
  right: 18%;
  height: 230px;
  z-index: 6;
  background: #fff;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  > ul {
    display: flex;
    justify-content: center;
    > li {
      width: 160px;
      padding: 0 10px;
      &:first-child {
        margin-left: 80px;
      }
      &:last-child > .product > a {
        border-right: 0;
      }
      .product {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        > a {
          border-right: 1px solid #e0e0e0;
          padding-right: 10px;
        }
        a > img {
          width: 159px;
          height: 110px;
        }
        .info {
          line-height: 10px;
          height: 10px;
          padding: 5px 20px;
          margin-bottom: 20px;
          color: #ff6700;
          border: 1px solid #ff6700;
        }
        .title {
          margin-top: 20px;
          margin-bottom: 5px;
          color: #333;
        }
        .price {
          color: #ff6700;
        }
      }
    }
  }
}
</style>
