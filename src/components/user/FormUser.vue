<template>
  <div id="FormUser">
    <form action="">
      <h1>
        User
        <span v-if="form._id" class="id">({{ form._id }})</span>
      </h1>


      <div class="form-input">
        <label for="form-fullname">
          <span>Nome </span>

          <input
            type="text"
            placeholder="fullname"
            name="form-fullname"
            id="form-fullname"
            v-model="form.fullname"
          />
        </label>
      </div>
      <div class="form-input">
        <label for="form-username">
          <span> username </span>

          <input
            type="text"
            placeholder="username"
            name="form-username"
            id="form-username"
            v-model="form.username"
          />
        </label>
      </div>
      <div class="form-input">
        <label for="form-email">
          <span> email </span>

          <input
            type="text"
            placeholder="email"
            name="form-email"
            id="form-email"
            v-model="form.email"
          />
        </label>
      </div>
      <div class="form-input">
        <label for="form-status">
          <span> status </span>

          <select
            name="form-status"
            id="form-status"
            v-model="form.status"
          >
          <option value="1">Ativo</option>
          <option value="0">Desativado</option>
          </select>
        </label>
      </div>
      <div class="form-input">
        <label for="form-admin">
          <span> admin </span>

          <select
            name="form-admin"
            id="form-admin"
            v-model="form.admin"
          >
          <option value="true">Ativo</option>
          <option value="false">Desativado</option>
          </select>
        </label>
      </div>
      <div class="form-input">
        <label for="form-status">
          <span> password </span>

          <input
            type="text"
            placeholder="password"
            name="form-password"
            id="form-password"
            v-model="form.password"
          />
        </label>
      </div>

      <h4>Observações</h4>

      <div class="form-btn">
        <div @click="addComment()" class="btn">Adicionar</div>
      </div>

      <div class="form-input" v-for="(comment, index) in comments" :key="index">
        <label for="user-comments">
          <span> Comentário {{ index + 1 }} </span>
          <span class="btn remove" @click="removeComment(index)">
            remover
          </span>

          <textarea
            type="text"
            placeholder="Digite o seu comentário"
            name="user-comments"
            id="user-comments"
            v-model="comment.value"
          />
        </label>
      </div>

      <div class="footer">
        <div class="form-btn" v-if="!edit">
          <button v-on:click.stop.prevent="validate()">Salvar</button>
        </div>
        <div class="form-btn" v-else>
          <button v-on:click.stop.prevent="validate()">Alterar</button>
          <!-- <button
            v-on:click.stop.prevent="complete()"
            class="success"
            v-if="task.status == 'Não iniciado'"
          >
            Finalizar tarefa
          </button>
          <button v-on:click.stop.prevent="active()" class="info" v-else>
            Restaurar tarefa
          </button> -->
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import UserService from "@/services/User.service";

export default {
  name: "FormUser",
  components: {},
  data: () => ({
    form: {
      fullname: "", //fullname
      username: "", //username
      email: "", //email
      password: "", //password
      status: "", //status
      admin: "", //admin
     
    },
    edit: false,
    comments: [
      {
        value: "",
      },
    ],
  }),
  props: ["user"],
  methods: {
    validate() {
      const service = new UserService();

      var form = this.form;
      form.comments = this.comments;

      if (this.edit) {
        service.edit(form).then(async (res) => {
          this.$store.dispatch("getUsers");
          this.$sidebarModal.hide("ModalUser");
        });
      } else {
        //
        service.save(form).then(async (res) => {
            if(!res.data.status){
                return false;
            }

          this.$store.dispatch("getUsers");
          this.$sidebarModal.hide("ModalUser");
        });
      }
    },
    complete() {
    //   this.form.status = "Finalizado";

    //   this.validate();
    },
    active() {
    //   this.form.status = "Não iniciado";

    //   this.validate();
    },

    // Comentários
    addComment() {
      this.comments.push({ value: "" });
    },
    removeComment(is) {
      // this.comments.splice(i, 1);

      var newArray = [];

      for (let i = 0; i < this.comments.length; i++) {
        if (i != is) {
          newArray.push(this.comments[i]);
        }
      }

      this.comments = newArray;
    },
  },
  mounted() {
    
    if (this.user) {

      // Define os campos do formuláro
      this.form = this.user;

      // Define o campo comentário a parte para que ele possa ser reativo
      this.comments = this.user.comments;
      if (!this.comments) {
        this.comments = [{ value: "" }];
      }

      // Define que o formulário é edit
      this.edit = true;
    } else {
      this.edit = false;
    }
  },
};
</script>
<style lang="scss">
</style>