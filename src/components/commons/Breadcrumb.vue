<template>
  <div class="breadcrumb">
    <ul>
      <!-- <li
        v-for="(breadcrumb, idx) in breadcrumbList"
        :key="idx"
        @click="routeTo(idx)"
        :class="{ linked: !!breadcrumb.link }"
      >
        {{ breadcrumb.name }}
      </li> -->

      <li       
        @click="routeTo('Dashboard')"
        class="linked"
      >
        Home
      </li>
      <li        
        class=""
      >
        {{$store.getters.titlePage}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      breadcrumbList: [],
    };
  },
  mounted() {
    this.updateList();
  },
  computed: {
      title(){  
          return this.$store.getters.selectedTitle;
      }
  },
  watch: {
    $route() {
      this.updateList();
    },
  },
  methods: {
    routeTo(route) {      
        this.$router.push({ name: route });
    },
    updateList() {
      this.breadcrumbList = this.$route.meta.breadcrumb;
    },
  },
};
</script>

<style  lang="scss">
.breadcrumb {
  margin-top: 10px;
}
ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul > li {
  display: flex;
  float: left;
  height: 10px;
  width: auto;
  color: #909090;
  font-weight: bold;
  font-size: 1em;
  cursor: default;
  align-items: center;
}
ul > li:not(:last-child)::after {
  content: "/";
  float: right;
  font-size: 1em;
  margin: 0 0.5em;
  color: #af00d5;
  cursor: default;
}
.linked {
  cursor: pointer;
  font-size: 1em;
  font-weight: normal;
}
</style>