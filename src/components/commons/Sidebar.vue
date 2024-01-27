<template>
  <div id="Sidebar" class="flex column stretch" :class="{openMenu: this.$store.getters.menu}">
    <div id="Logo">
      <a href="/" class="brand-logo">
        <img class="logo-abbr" src="@/assets/producthunt.svg" alt="" />
      </a>
    </div>
    
    <div class="link" v-if="$store.getters.admin">
      <router-link to="/users">
        <div class="logo">
          <img src="@/assets/users.png" alt="" />
        </div>
        <div class="desc">Users</div>
      </router-link>
    </div>
    <div class="link" v-if="$store.getters.admin">
      <router-link to="/users">
        <div class="logo">
          <img src="@/assets/clipboard.png" alt="" />
        </div>
        <div class="desc">Playlist</div>
      </router-link>
    </div>
    <div class="link" v-if="$store.getters.admin">
      <router-link to="/users">
        <div class="logo">
          <img src="@/assets/window.png" alt="" />
        </div>
        <div class="desc">Blog</div>
      </router-link>
    </div>
    <div class="link">
      <router-link to="/users"  v-if="$store.getters.auth">
        <div class="logo">
          <img src="@/assets/profile.png" alt="" />
        </div>
        <div class="desc">Profile</div>
      </router-link>
    </div>
    <div class="link last-item" v-if="$store.getters.auth">
      <router-link to="/login?action=logout">
        <div class="logo">
          <img src="@/assets/logout.png" alt="" />
        </div>
        <div class="desc">Logout</div>
      </router-link>
    </div>


    <div class="backdrop" @click="closeMenu()"></div>
  </div>
</template>

<script>
import store from "../../store";
import { mapState } from "vuex";

export default {
  name: "Sidebar",
  components: {},
  data: () => ({
    timeout: false,
  }),
  computed: {
    search: {
      get() {
        return this.$store.getter.titleSearch.value;
      },
      set(value) {
        //br:Função  auxiliar para evitar redundancia
        const fast = () => this.$store.commit("updateSearch", value);

        //Executa  update do search quando o retonor Ã© vazia para agilizar
        if (value == "") {
          fast();
        }

        //Interrompe o timeout anterior
        if (this.timeout) {
          clearTimeout(this.timeout);
        }

        //Add um delay extra para executar o update quando usuÃ¡rio terminar de digitar
        this.timeout = setTimeout(() => fast(), 500);
      },
    },
  },
  methods:{
    closeMenu(){
      this.$store.dispatch('setMenu', false)

    }
  }
};
</script>