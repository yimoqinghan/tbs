import Vue from 'vue'
import App from './index.vue'
import router from './router'
import * as echarts from 'echarts';
// Vue.prototype.$http = service
// Vue.prototype.utils = utils;
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')