<template>
  <div class="TitleBar">
    <h3>
      <slot></slot>
    </h3>
    <div class="wrapper-title" v-if="!$store.getters.statusTitle">
        <Title v-for="count in fakeLoadQty" :key="count" 
          type="fake"
        />
    </div>
    <div class="wrapper-title" v-else>
        <Title v-for="(title, index) in $store.getters[type]" 
          :key="index"
          :title="title"
          type="poster"
        />
    </div>
  </div>
</template>


<script>
import Title from "@/components/title/Title.vue";

export default {
  name: "TitleBar",
  data: () => ({
    fakeLoadQty: 10
  }),
  props: ["type"],
  components: {
    Title,
  },
  created(){

  }
};
</script>

<style lang="scss">

</style>