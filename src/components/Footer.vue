<template>
  <footer>
    <div class="service">
      <a :href="item.link" v-for="(item, index) in service" :key="index">
        <span class="iconfont">{{ item.unicode }}</span>
        <span class="text">{{ item.text }}</span>
      </a>
    </div>
    <div class="link">
      <div class="item" v-for="(item, index) in link" :key="index">
        <span class="title">{{ item.title }}</span>
        <a :href="key.link" v-for="(key, index) in item.text" :key="index">
          <span>{{ key.title }}</span>
        </a>
      </div>
      <div class="contact">
        <span class="number">400-1234-5678</span>
        <span class="text">周一至周日 8:00-18:00<br />（仅收市话费）</span>
        <span class="customer">24小时在线客服</span>
      </div>
    </div>
    <div class="info">
      <div class="info-container">
        <div class="mi-logo"><img src="../assets/logo.png" /></div>
        <div class="text">
          <p>
            图书商城|blog|多看|关于|天猫店|淘宝直营店|网盟|移动商城|隐私政策|Select
            Region
          </p>
          <p>
            ©hahaha.com 京ICP证110507号 京ICP备10046444号
            京公网安备11010802020134号 京网文[2014]0059-0009号
          </p>
          <p>
            违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自网络
          </p>
        </div>
        <div class="info-logo">
          <img class="info-logo" src="../assets/info-logo-1.png" />
          <img class="info-logo" src="../assets/info-logo-2.png" />
          <img class="info-logo" src="../assets/info-logo-3.png" />
          <img class="info-logo" src="../assets/info-logo-4.png" />
        </div>
      </div>
    </div>
    <div class="slogan"><img src="" alt="" /></div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      service: [
        {
          text: "预约服务",
          unicode: "\ue6c4",
          link: ""
        },
        {
          text: "7天无理由退货",
          unicode: "\ue776",
          link: ""
        },
        {
          text: "15天免费换货",
          unicode: "\ue608",
          link: ""
        },
        {
          text: "满150元包邮",
          unicode: "\ue609",
          link: ""
        },
        {
          text: "520余家售后网点",
          unicode: "\ue627",
          link: ""
        }
      ],
      link: [
        {
          title: "帮助中心",
          text: [
            {
              title: "账户管理",
              link: ""
            },
            {
              title: "购物指南",
              link: ""
            },
            {
              title: "订单操作",
              link: ""
            }
          ]
        },
        {
          title: "服务支持",
          text: [
            { title: "售后政策", link: "" },
            { title: "自助服务", link: "" },
            { title: "相关下载", link: "" }
          ]
        },
        {
          title: "线下门店",
          text: [
            { title: "没有", link: "" },
            {
              title: "服务网点",
              link: ""
            },
            {
              title: "零售网点",
              link: ""
            }
          ]
        },
        {
          title: "关于我们",
          text: [
            { title: "了解我们", link: "" },
            { title: "加入我们", link: "" },
            { title: "联系我们", link: "" }
          ]
        },
        {
          title: "关注我们",
          text: [
            { title: "新浪微博", link: "" },
            {
              title: "没名字",
              link: ""
            },
            {
              title: "官方微信",
              link: ""
            }
          ]
        },
        {
          title: "特色服务",
          text: [
            { title: "码通道", link: "" },
            { title: "礼物码", link: "" },
            { title: "防伪查询", link: "" }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "iconfont"; /* project id 273742 */
  src: url("//at.alicdn.com/t/font_o29w1lx6rktn8kt9.eot");
  src: url("//at.alicdn.com/t/font_o29w1lx6rktn8kt9.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_o29w1lx6rktn8kt9.woff") format("woff"),
    url("//at.alicdn.com/t/font_o29w1lx6rktn8kt9.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_o29w1lx6rktn8kt9.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont", sans-serif !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
footer {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  .service {
    //width: 1226px;
    width: 100%;
    padding: 25px 0;
    margin-bottom: 30px;
    border-bottom: 1px solid #e0e0e0;
    background: #fff;
    display: flex;
    justify-content: center;
    > a {
      width: 265px;
      height: 35px;
      border-left: 1px solid #e0e0e0;
      font-size: 16px;
      line-height: 25px;
      color: #616161;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s;
      &:hover {
        color: #ff6700;
      }
      &:nth-child(1) {
        border: none;
      }
      .iconfont {
        font-size: 24px;
        margin-right: 15px;
      }
    }
  }
  .link {
    width: 1226px;
    margin: 0 auto;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    .item {
      width: 160px;
      height: 112px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      > .title {
        margin: 0 0 26px;
        font-size: 14px;
        color: #424242;
      }
      > a {
        display: flex;
        align-items: center;
        transition: all 0.2s;
        color: #757575;
        &:hover {
          color: #ff6700;
        }
      }
    }
    .contact {
      width: 251px;
      height: 112px;
      border-left: 1px solid #e0e0e0;
      text-align: center;
      color: #616161;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .number {
        margin: 0 0 5px;
        font-size: 22px;
        color: #ff6700;
      }
      .text {
        line-height: 16px;
      }
      .customer {
        background: #fff;
        color: #ff6700;
        width: 118px;
        height: 28px;
        line-height: 28px;
        border: 1px solid #ff6700;
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          background: #ff6700;
          color: #fff;
        }
      }
    }
  }
  .info {
    width: 100%;
    padding: 30px 0;
    font-size: 12px;
    background: #fafafa;
    .info-container {
      width: 1226px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .mi-logo > img {
        width: 57px;
        height: 57px;
        margin-right: 10px;
      }
      .text {
        color: #b0b0b0;
        text-align: left;
        margin-right: auto;
        line-height: 18px;
        > p:nth-child(1) {
          color: #757575;
        }
      }
      .info-logo {
        display: flex;
        justify-content: space-between;
        height: 28px;
      }
    }
  }
  .slogan {
    text-align: center;
    background: #fafafa;
    padding-bottom: 30px;
  }
}
</style>
