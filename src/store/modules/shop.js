import axios from '@/plugins/axios';

export default {
  state: {
    products: [],
  },
  mutations: {
    GET_PRODUCTS(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async getProducts({ commit, dispatch }) {
      dispatch('setLoading', true);
      try {
        const response = await axios.get('products/products.json');
        commit('GET_PRODUCTS', response.data);
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
      } catch (e) {
        console.log(e.response.data);
      } finally {
        dispatch('setLoading', false);
      }
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
};
