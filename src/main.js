import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import {
  Button,
  Row,
  Col,
  Swipe,
  SwipeItem,
  Lazyload,
  Field,
  List,
  NavBar,
  Tab,
  Tabs,
  PullRefresh,
  Stepper,
  Tabbar,
  TabbarItem,
  Icon
} from "vant";
(function(useArr) {
  for (let i = 0; i < useArr.length; i++) {
    Vue.use(useArr[i]);
  }
})([
  Button,
  Row,
  Col,
  Swipe,
  SwipeItem,
  Lazyload,
  Field,
  List,
  NavBar,
  Tab,
  Tabs,
  PullRefresh,
  Stepper,
  Tabbar,
  TabbarItem,
  Icon
]);
Vue.config.productionTip = false;
Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
