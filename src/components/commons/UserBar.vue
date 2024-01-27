<template>
  <div id="UserBar">
    <div class="nologged" v-if="!$store.getters.auth">
      <router-link :to="redirect">
        <img src="@/assets/user.png" />
      </router-link>
    </div>

    <div class="logged" v-else :title="$store.getters.session.user.fullname">
      <span>{{ this.$store.getters.initials }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserBar",
  data: () => ({
    redirect: ''
  }),
  components: {},
  created() {
    this.redirect = '/login?redirect=' + this.$route.fullPath;
  },
};
</script>

<style lang="scss">
</style>