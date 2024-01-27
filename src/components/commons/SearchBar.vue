<template>
  <div id="SearchBar" class="flex">
    <div class="icon">
      <img src="@/assets/search.png" />
    </div>
    <input
      type="text"
      placeholder="Está afim de assistir o que hoje? (ex.: Drama, Suspense, Harry Potter)"
      v-model="search"
      v-if="
        this.$router.currentRoute.name !=
        'Users' /* Não exibe o filtro na tela de usuarios*/
      "
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  components: {},
  data: () => ({
    timeout: false,
  }),
  computed: {
    search: {
      get() {
        return this.$store.getters.titleSearch.value;
      },
      set(value) {
        //br:Função  auxiliar para evitar redundancia
        // const fast = () => this.$store.dispatch("updateSearch", value);
        const fast = () => {
          this.$store.dispatch("updateSearch", value);
          this.$router
            .push({ name: "TitleSearch", params: { query: value } })
            .catch((error) => {
              if (error.name != "NavigationDuplicated") {
                throw error;
              }
            });
        };

        //Executa  update do search quando o retonor vazia para agilizar
        if (value == "") {
          fast();
        }

        //Interrompe o timeout anterior
        if (this.timeout) {
          clearTimeout(this.timeout);
        }

        //Add um delay extra para executar o update quando usuário terminar de digitar
        this.timeout = setTimeout(() => fast(), 500);
      },
    },
  },
};
</script>

<style lang="scss">
#SearchBar {
  width: 100%;
  margin: 29px auto;
  position: relative;

  .icon {
    margin: 3px 10px;
    position: absolute;

    img {
      width: 40px;
      margin-top: 8px;
    }
  }

  input {
    width: 100%;
    height: 60px;
    border-radius: 35px;
    background: #1f1f1f;
    border: 0;
    font-size: 20px;
    padding: 0 0 0 56px;
    color: white;
  }
}
</style>
