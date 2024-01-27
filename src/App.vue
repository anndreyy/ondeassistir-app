<template>
  <div id="app">
    <Loading v-if="$store.getters.loading" />
    <router-view/>
  </div>
</template>
<script>
import Loading from "@/components/commons/Loading.vue"


export default {
  components:{
    Loading
  },
}
</script>

<style lang="scss">
</style>
