import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import 'lib-flexible'

import 'swiper/dist/css/swiper.css'
import "@/assets/resets.css"
import error from "./assets/error.jpg"
import loading from "./assets/loading.gif"

import fastClick from "fastclick"
fastClick.attach(document.body);

router.beforeEach((to, from, next) => {
  // window.console.log(to.meta.title)
  document.title = to.meta.title
  window.console.log(from)
  // window.console.log(next) 
  // 这个函数里面必须执行next，否则不显示！！！
  next()
})

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: error,
  loading: loading,
  attempt: 1
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
