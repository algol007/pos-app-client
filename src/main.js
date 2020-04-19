import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import './registerServiceWorker';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
import store from './store';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueSweetalert2);
Vue.use(Chartkick.use(Chart));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
