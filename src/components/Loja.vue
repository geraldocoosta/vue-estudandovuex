<template>
  <Painel titulo="Loja Virtual" verde>
    <div class="loja">
      <span>Adicionar</span>
      <input type="number" v-model.number="quantidade" />
      <span>
        itens de
        <strong>R$</strong>
      </span>
      <input type="number" v-model.number="preco" />
      <button @click="adicionar">Agora!</button>
    </div>
  </Painel>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      sequencia: 1
    };
  },
  computed: {
    quantidade() {
      return this.$store.state.quantidade;
    },
    preco() {
      return this.$store.state.preco;
    }
  },
  methods: {
    // formas de "pegar" as actions no store
    // actions e mutations ficam geralmente nos
    // methods, já os getters e o state ficam no
    // computed
    ...mapActions(["adicionarProduto"]),
    // por baixo dos panos, o vuex cria a funação abaixo
    // quando usamos o destructuring no mapActions
    // adicionarProduto(produto){
    //   this.$store.dispatch('adicionarProduto', produto);
    // },
    adicionar() {
      const produto = {
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade: this.quantidade,
        preco: this.preco
      };
      this.sequencia++;
      // this.$store.state.produtos.push(produto);
      // -> forma de chamar uma mutation abaixo
      // fazemos um "commit" na mutation
      // this.$store.commit("adicionarProduto", produto);
      this.adicionarProduto(produto);

      // outra forma de chamar a action abaixo
      // this.$store.dispatch("adicionarProduto", produto);
    }
  }
};
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
