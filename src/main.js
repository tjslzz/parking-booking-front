import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import store from './store'
import axios from 'axios';
import VueAxios from 'vue-axios';


Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(VueAxios, axios);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
