import axios from '../plugins/axios';

export default {
  state: {
    product: null,
    loading: true,
  },
  mutations: {
    GET_PRODUCT(state, payload) {
      state.product = payload;
    },
  },
  actions: {
    async getProduct({ commit, state }, article) {
      state.loading = true;
      try {
        const response = await axios.get(`products/${article}.json`);
        commit('GET_PRODUCT', response.data);
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1500);
        });
      } catch (e) {
        console.log(e.response.data);
      } finally {
        state.loading = false;
      }
    },
  },
  getters: {
    getProduct(state) {
      return state.product;
    },
    getLoadingProduct(state) {
      return state.loading;
    },
  },
};
