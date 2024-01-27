<template>
  <div id="UserList">
    <div class="content-body">
      <div class="container">
        <div class="header flex">
          <img src="@/assets/users.png" alt="" class="icon" />
          <h3>Users</h3>
          <div class="search">
            <input type="text" placeholder="Search" v-model="search" />
          </div>
          <div class="add">
            <button @click="openModal()">Adicionar</button>
          </div>
        </div>
        <div class="datatable">
          <table>
            <thead>
              <tr>
                <th v-for="(column, index) in columns" :key="index">
                  <span> {{ column.label }} </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(user, index) in rows"
                :key="index"
                @click="openUser(user)"
                v-bind:class="{ desactive: !user.status }"
              >
                <td>{{ user.fullname }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.status ? "Ativo" : "Desativado" }}</td>
              </tr>
            </tbody>
          </table>
          <div class="flex flex-end">
            <button @click="pagePrev()">Prev</button>
            <div class="page">{{ getPage() }}</div>
            <button @click="pageNext()">Next</button>
          </div>
        </div>
      </div>
    </div>

    <Modal name="ModalUser">
      <form-user :user="selectedUser" />
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/commons/Modal";
import FormUser from "@/components/user/FormUser";

export default {
  name: "UserList",
  data: () => ({
    // columns: [],
    // rows: []
    selectedUser: null,
  }),
  computed: {
    search: {
      get() {
        return this.$store.getters.usersSettings.qry;
      },
      set(value) {
        this.$store.dispatch("userUpdateSearch", value);
      },
    },
    columns: {
      get() {
        return this.$store.getters.usersColumns;
      },
    },
    rows: {
      get() {
        return this.$store.getters.users;
      },
    },
  },
  components: {
    Modal,
    FormUser,
  },
  methods: {
    show() {
      this.$sidebarModal.show("ModalUser");
    },
    openUser(user) {
      this.selectedUser = user;
      this.show();
    },
    openModal() {
      this.selectedUser = null;
      this.show();
    },
    getPage() {
      var page = this.$store.getters.usersSettings.page;
      return parseInt(page);
    },
    pageNext() {
      this.$store.dispatch("setPage", this.getPage() + 1);
    },
    pagePrev() {
      this.$store.dispatch("setPage", this.getPage() - 1);
    },
  },
  created() {
    this.$store.dispatch("getUsers");
  },
};
</script>

<style lang="scss">
</style>