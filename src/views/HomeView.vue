<script setup>
import HomeSlider from '../components/Home/HomeSlider.vue'
import HomeSearch from '../components/Home/HomeSearch.vue'
import HomeCategories from '../components/Home/HomeCategories.vue'
import Divisor from '../components/Commons/Divisor.vue'
</script>

<template>
    <div class="container">
      <divisor />
      <home-slider />
      <divisor />
      <home-search />
      <divisor />
      <home-categories />
      <divisor />
    </div>
</template>
