import Vue from 'vue';
import Vuex from 'vuex';
import shop from './modules/shop';
import product from './modules/product';
import loader from './modules/loader';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shop,
    product,
    loader,
  },
});
