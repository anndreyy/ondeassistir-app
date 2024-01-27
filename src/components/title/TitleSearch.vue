<template>
  <div id="TitleSearch" class="content-body">
    <div class="content-body">
      <div class="container flex flex-wrap">
          <Title v-for="(title, index) in $store.getters.titleSearch.data" 
          :key="index"
          :title="title"
          type="search"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/title/Title.vue";
export default {
  name: "TitleSearch",
  data: () => ({}),
  components: {
    Title
  },
};
</script>

<style lang="scss">
</style>