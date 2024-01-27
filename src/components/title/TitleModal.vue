<template>
  <div id="TitleModal">
    <!-- <div class="backdrop" 
        @click="closeModal()"
        v-bind:class="{ show: $store.getters.selectedTitle.status }"
    ></div> -->
    <div class="modal">
      <div class="modal-content">
        <title-content />
      </div>
    </div>
  </div>
</template>

<script>
import TitleContent from "@/components/title/TitleContent.vue";

export default {
  name: "TitleModal",
  components: {
    TitleContent
  },
  methods: {
    closeModal() {
      this.$store.commit("setSelectedTitle", null);
    },
  }
};
</script>

<style lang="scss">
</style>