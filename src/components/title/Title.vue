<template>
  <div class="title" :class="type">
    <div class="card" v-if="title" :title="title.Title" @click="openModal()">
      <div class="card__image">
        <img class="js-image" alt="" :src="title.Poster" />
      </div>
    </div>

    <!-- fake -->
    <div class="card" v-else>
      <div class="card__image"><img class="js-image" alt="" /></div>
    </div>
    <!-- <div
      class="heart"
      :class="{ is_animating: heart }"
      @click="favorite()"

      v-if="type != 'fake'"
    ></div> -->
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["title", "type"],
  data: () => ({
    heart: false,
  }),
  components: {},
  methods: {
    openModal() {
      // redireciona para a rota do titulo
      // this.$router.push(`/title/${this.title._id}/${this.title.Title}`);
      var title = this.title.Title;
      title = title.replace(/ /g, "_");

      this.$router
        .push({
          name: "TitleView",
          params: {
            titleId: this.title.shortId,
            title: title,
          },
        })
        .catch((error) => {
          if (error.name != "NavigationDuplicated") {
            throw error;
          }
          if (error.name != "NavigationDuplicated") {
            throw error;
          }
        });
    },
    favorite() {
      this.heart = !this.heart;
    },
  },
  created() {
  },
};
</script>

<style lang="scss">
</style>