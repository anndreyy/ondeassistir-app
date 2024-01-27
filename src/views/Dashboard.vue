<template>
  <div class="Dashboard">
    <Navbar />
    <Sidebar />

    <Content v-if="!$store.getters.titleSearch.status" />
    <!-- Exibe  conteudo da busca, caso tenha algum valor -->
    <TitleSearch v-else />

    <!-- <div class="backdrop" v-if="$store.getters.selectedTitle.status"> -->
      <!-- <div
        class="cover"
        v-bind:style="{
          backgroundImage:
            'url(' + $store.getters.selectedTitle.data.Poster + ')',
        }"
      ></div> -->

      <!-- <div
        class="blur"
        @click="closeModal()"
        v-bind:class="{ show: $store.getters.selectedTitle.status }"
      ></div> -->
    <!-- </div> -->

    <!-- <TitleModal v-if="$store.getters.selectedTitle.status" /> -->
  </div>
</template>

<script>
// import Vue from 'vue';
import Navbar from "@/components/commons/Navbar.vue";
import Sidebar from "@/components/commons/Sidebar.vue";
import Content from "@/components/dashboard/Content.vue";
import TitleSearch from "@/components/title/TitleSearch.vue";
import TitleModal from "@/components/title/TitleModal.vue";

export default {
  name: "Dashboard",
  components: {
    Navbar,
    Sidebar,
    Content,
    TitleSearch,
    TitleModal,
  },
  methods: {
    closeModal() {
      // limpa o title selecionado para fechar o modal
      this.$store.commit("setSelectedTitle", null);

      // Define a proxima rota baseado na anterior
      var prevRoute = this.$store.getters.prevRoute;
      var nextRoute = {};
      if (!prevRoute.length) {
        nextRoute.name = "Dashboard";
      } else {
        nextRoute = prevRoute[prevRoute.length - 1];
      }

      this.$router.push(nextRoute);
    },
  },
  created() {
    // Inicia o carregamento das tasks
    this.$store.dispatch("getTitles");

  },
};
</script>