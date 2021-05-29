import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'
import ElementUI from 'element-ui';
import * as echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$axios=axios
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
