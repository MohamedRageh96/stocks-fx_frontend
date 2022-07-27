import { createStore } from "vuex";

export default createStore({
  state: {
    symbols: ["IBM"],
    forexs: [["USD", "JPY"]],
  },
  getters: {},
  mutations: {
    setSymbols(state, symbol) {
      state.symbols.push(symbol);
    },
    setForex(state, forexPairs) {
      state.forexs.push(forexPairs);
    },
  },
  actions: {},
  modules: {},
});
