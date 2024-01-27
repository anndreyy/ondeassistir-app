<template>
  <div class="outernav">
    <div id="Navbar" v-bind:class="{fixed: $store.getters.titleSearch.status}">
      <div class="header-content">
            <div id="menu" @click="menu()">
              <!-- <img src="@/assets/menu.png" alt=""> -->
              <img src="@/assets/producthunt.svg" alt="">
            </div>
            <search-bar />

            <!-- dark-mode -->
            <!-- user icon -->
            <!-- <dark-bar /> -->
            <user-bar />

      </div>
    </div>
  </div>
</template>

<script>

import SearchBar from "@/components/commons/SearchBar"
import DarkBar from "@/components/commons/DarkBar"
import UserBar from "@/components/commons/UserBar"

export default {
  name: "Navbar",
  components: {
    SearchBar,
    DarkBar,
    UserBar,
  },
  methods:{
    menu(){
      this.$store.dispatch('setMenu', !this.$store.getters.menu)
    }
  }
}

</script>

<style lang="scss">
</style>
