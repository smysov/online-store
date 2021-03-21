import axios from '@/plugins/axios';

export default {
  state: {
    products: [],
    loading: true,
  },
  mutations: {
    GET_PRODUCTS(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async getProducts({ commit, state }) {
      state.loading = true;
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
        state.loading = false;
      }
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getLoading(state) {
      return state.loading;
    },
  },
};
