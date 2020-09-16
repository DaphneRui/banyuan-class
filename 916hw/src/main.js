import Vue from "vue";
import App from "./App.vue";
import Config from "./utils/config";
import router from './router/index'

Vue.config.productionTip = false;

Vue.directive("oss-src", function(el, binding) {
  let imgURL = binding.value;
  if (imgURL) el.setAttribute("src", Config.ossPath + imgURL);
});

Vue.directive("img-src", function(el, binding) {
  let imgURL = binding.value;
  if (imgURL) el.setAttribute("src", Config.imgPath + imgURL);
});

Vue.filter("globalFormatTime", time => {
  let value = new Date(time);
  let y = value.getFullYear();
  let m = value.getMonth() + 1;
  let d = value.getDate();
  return y + "-" + m + "-" + d;
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
