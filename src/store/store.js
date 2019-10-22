import vue from "vue";
import vuex from "vuex";

vue.use(vuex);

export default new vuex.Store({
  state: {
    produtos: []
  },
  getters: {
    valorTotal(state) {
      return state.produtos
        .map(p => p.quantidade * p.preco)
        .reduce((total, atual) => total + atual, 0);
    }
  },
  mutations: {
    adicionarProduto(state, payload) {
      state.produtos.push(payload);
    }
  }
});
