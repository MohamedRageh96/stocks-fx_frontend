import { createStore } from "vuex";

export default createStore({
  state: {
    symbols: ["IBM"],
  },
  getters: {},
  mutations: {
    setSymbols(state, symbol) {
      state.symbols.push(symbol);
    },
  },
  actions: {},
  modules: {},
});
