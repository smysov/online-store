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
    getProducts({ commit }, payload) {
      commit('GET_PRODUCTS', payload);
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProduct: (state) => (article) => state.products.find((item) => item.article === article),
  },
};
