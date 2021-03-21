import Vue from 'vue';
import Vuex from 'vuex';
import shop from './shop';
import product from './product';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shop,
    product,
  },
});
