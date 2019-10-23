import vue from "vue";
import vuex from "vuex";

vue.use(vuex);

export default new vuex.Store({
  state: {
    produtos: [],
    quantidade: 2,
    preco: 19.99
  },
  getters: {
    valorTotal(state) {
      return state.produtos
        .map(p => p.quantidade * p.preco)
        .reduce((total, atual) => total + atual, 0);
    }
  },
  // setters
  // obj mutation: apenas mudar o estado centralizado
  // alguém deve fazer o commit na mutation
  mutations: {
    adicionarProduto(state, payload) {
      state.produtos.push(payload);
    },
    setQuantidade(state, payload) {
      state.quantidade = payload;
    },
    setPreco(state, payload) {
      state.preco = payload;
    }
  },
  // obj action: colocar regras para mudar o estado central
  // posso chamar uma ou mais mutations
  // trabalhar com async aqui
  actions: {
    // aqui eu recebo o context, equivale ao this da instancia vue
    // com ele, posso chamar o commit
    adicionarProduto(context, payload) {
      // simulando async
      setTimeout(() => {
        context.commit("adicionarProduto", payload);
      }, 1000);
    }

    // forma com destructuring abaixo
    // adicionarProduto({ commit }, payload) {
    //   // simulando async
    //   setTimeout(() => {
    //     commit("adicionarProduto", payload);
    //   }, 1000);
    // }
  }
});
