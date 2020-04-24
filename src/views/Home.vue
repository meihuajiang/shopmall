/* src/components/Layout.vue */

<template>
  <div class="home">
    <topBar></topBar>
    <topHeader></topHeader>
    <mainPage></mainPage>
    <Footer></Footer>
  </div>
</template>

<script>
import "../assets/normalize.css";
import "../assets/reset.css";
import TopBar from "../components/TopBar";
import TopHeader from "../components/TopHeader";
import MainPage from "../components/MainPage";
import Footer from "../components/Footer";
export default {
  components: {
    topBar: TopBar,
    topHeader: TopHeader,
    mainPage: MainPage,
    Footer: Footer
  }
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
    "Hiragino Sans GB", "Heiti SC", sans-serif;
}
</style>
