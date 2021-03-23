import axios from '@/plugins/axios';

export default {
  state: {
    product: null,
  },
  mutations: {
    GET_PRODUCT(state, payload) {
      state.product = payload;
    },
  },
  actions: {
    async getProduct({ commit, dispatch }, article) {
      dispatch('setLoading', true);
      try {
        const response = await axios.get(`products/${article}.json`);
        commit('GET_PRODUCT', response.data);
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });
      } catch (e) {
        console.log(e.response.data);
      } finally {
        dispatch('setLoading', false);
      }
    },
  },
  getters: {
    getProduct(state) {
      return state.product;
    },
  },
};
