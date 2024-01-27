<template>
  <div class="Users">
    <navbar />
    <sidebar />
    <user-list />
  </div>
</template>

<script>
// import Vue from 'vue';
import Navbar from "@/components/commons/Navbar.vue";
import Sidebar from "@/components/commons/Sidebar.vue";
import UserList from "@/components/user/UserList.vue";

export default {
  name: "Users",
  components: {
    Navbar,
    Sidebar,
    UserList,
  },
  methods: {},
};
</script>