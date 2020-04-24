<template>
  <div class="main">
    <div class="main-top">
      <mainNav></mainNav>
      <mainCarousel></mainCarousel>
      <mainRecommend></mainRecommend>
    </div>
    <div class="main-page">
      <!--明星单品-->
      <starGoods></starGoods>
      <!--独家特供-->
      <householdAppliances></householdAppliances>
      <!--青春-->
      <youth></youth>
      <!--搭配-->
      <collocation></collocation>
      <!--配件-->
      <parts></parts>
      <!--周边-->
      <relatedProducts></relatedProducts>
      <!--为你推荐-->
      <recommend></recommend>
      <!--热评产品-->
      <hotGoods></hotGoods>
      <!--内容-->
      <Content></Content>
      <!--视频-->
      <Video></Video>
    </div>
  </div>
</template>

<script>
import MainNav from "./MainNav";
import MainCarousel from "./MainCarousel";
import MainRecommend from "./MainRecommend";
import StarGoods from "./StarGoods";
import HouseholdAppliances from "./HouseholdAppliances";
import Youth from "./Youth";
import Collocation from "./Collocation";
import Parts from "./Parts";
import RelatedProducts from "./RelatedProducts";
import Recommend from "./Recommend";
import HotGoods from "./HotGoods";
import Content from "./Content";
import Video from "./Video";
export default {
  components: {
    mainNav: MainNav,
    mainCarousel: MainCarousel,
    mainRecommend: MainRecommend,
    starGoods: StarGoods,
    householdAppliances: HouseholdAppliances,
    youth: Youth,
    collocation: Collocation,
    parts: Parts,
    relatedProducts: RelatedProducts,
    recommend: Recommend,
    hotGoods: HotGoods,
    Content: Content,
    Video: Video
  }
};
</script>

<style lang="scss">
.main {
  > .main-top {
    width: 1226px;
    margin: 0 auto;
    background: #fff;
    position: relative;
  }
  .main-page {
    background: #f5f5f5;
    margin: 0 auto;
  }
}
</style>
