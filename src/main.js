import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router'
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

// Vue.use(Antd)
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
