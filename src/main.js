import Vue from 'vue';
import App from './App.vue';
import router from './route';
import store from './store';
import carousel from './plugins/carousel';

import './assets/scss/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  carousel,
  render: (h) => h(App),
}).$mount('#app');
