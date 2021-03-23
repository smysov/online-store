export default {
  state: {
    loading: true,
  },
  mutations: {
    SET_LOADING(state, boolean) {
      state.loading = boolean;
    },
  },
  actions: {
    setLoading({ commit }, payload) {
      commit('SET_LOADING', payload);
    },
  },
  getters: {
    getLoading({ loading }) {
      return loading;
    },
  },
};
