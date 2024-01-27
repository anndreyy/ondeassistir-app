<template>
  <div id="TitleContent">
    <div class="title-title">
      <h1>{{ title.Title }} ({{ title.Year }})</h1>
    </div>
    <div class="title-content flex">
      <div class="title-poster">
        <Title :title="title" type="modal" />
      </div>
      <div class="title-data">
        <div class="plot">
          <h4>Plot</h4>
          {{ title.Plot }}
        </div>
        <div class="Genre">
          <h4>Genre</h4>
          {{ title.Genre }}
        </div>
        <div class="Director-Writter flex">
          <div class="Director">
            <h4>Director</h4>
            {{ title.Director }}
          </div>
          <div class="Writer">
            <h4>Writer</h4>
            {{ title.Writer }}
          </div>
        </div>
        <div class="Actors">
          <h4>Actors</h4>
          {{ title.Actors }}
        </div>
        <div class="Country">
          <h4>Country</h4>
          {{ title.Country }}
        </div>
        <div class="Ratings flex flex-wrap">
          <div v-for="(rating, index) in title.Ratings" :key="index">
            <h4>{{ rating.Source }}</h4>
            {{ rating.Value }}
          </div>
          <div>
            <h4>IMDB Rating</h4>
            {{ title.imdbRating }}/10 ({{ title.imdbVotes }})
          </div>
        </div>
      </div>
    </div>

    <title-onde-assistir />

    <!-- <div class="title-title">
          <h2>Trailer / imagens</h2>
        </div> -->

    <title-comment />

    <!-- end modal -->
  </div>
</template>

<script>
import Title from "@/components/title/Title.vue";
import TitleOndeAssistir from "@/components/title/TitleOndeAssistir.vue";
import TitleComment from "@/components/title/TitleComment.vue";

export default {
  name: "TitleContent",
  data: () => ({
    title: null,
  }),
  components: {
    Title,
    TitleOndeAssistir,
    TitleComment,
  },
  created() {
    this.title = this.$store.getters.selectedTitle.data;

    // Formatação do ano
    if(this.title.Year.slice(-1) == '–'){
      this.title.Year += "Atual";
    }

    // Set o title do documento
    document.title = "Onde Assisir " + this.title.Title + "?";
    this.$store.dispatch("setTitlePage", this.title.Title );

    // dispara o evento para pegar o title
    // this.$store.dispatch('setSelectedTitle', null);
  },
};
</script>

<style lang="scss">
</style>