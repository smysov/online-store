import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import NotFound from './pages/404.vue';
import Shop from './pages/Shop.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound,
    },
  ],
});