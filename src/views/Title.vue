<template>
  <div id="TitleView">
    <Navbar />
    <Sidebar />
    <Breadcrumb />
    <div class="content-body">
      <div class="container">          
        <TitleContent v-if="$store.getters.selectedTitle.status" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/commons/Navbar.vue";
import Sidebar from "@/components/commons/Sidebar.vue";
import Breadcrumb from "@/components/commons/Breadcrumb.vue";
import Content from "@/components/dashboard/Content.vue";
import TitleSearch from "@/components/title/TitleSearch.vue";
import TitleContent from "@/components/title/TitleContent.vue";

export default {
  name: "TitleView",
  data: () => ({}),
  components: {
    Navbar,
    Sidebar,
    Breadcrumb,
    Content,
    TitleSearch,
    TitleContent,
  },
};
</script>

<style lang="scss">
</style>