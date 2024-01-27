<template>
  <div id="TitleOndeAssistirAdd">
    <div class="">
      <h2>Associar link</h2>
    </div>
    <div class="form-input">
      <label for="form-fullname">
        <span>Link do título </span>

        <input
          type="url"
          placeholder="Exemplo: https://www.netflix.com/title/70298414"
          name="form-fullname"
          id="form-fullname"
          v-model="link"
          @keyup="validate()"
          autocomplete="off"
        />
      </label>
    </div>
    <div class="status">{{ status }}</div>
    <div class="form-btn">
      <div @click="add()" class="btn" :class="{ valid: valid }">Adicionar</div>
    </div>
  </div>
</template>

<script>
import LinkService from "@/services/Link.service.js";

export default {
  name: "TitleOndeAssistirAdd",
  data: () => ({
    link: "",
    valid: false,
    status: "",
  }),
  components: {},
  methods: {
    async add() {
      const service = new LinkService();
      const titleId = this.$store.getters.selectedTitle.data._id;
      const shortId = this.$store.getters.selectedTitle.data.shortId;

      // Valida o se o campo não está vazio
      if (!this.link) {
        return false;
      }

      // Cria o objeto para inserir no banco
      var form = {
        link: this.link,
        titleId: titleId,
      };

      // Chama o servidor para inserir o link
      var _res = await service.add(form);

      // Valida o retorno
      if (_res.data.status) {
        // Atualiza os titulos
        this.$store.dispatch("refreshTitle", shortId);

        this.$emit("close"); // Fecha o modal
      } else {
        this.status = _res.data.error;
      }
    },
    validate() {
      this.valid = this.link != "";
    },
  },
};
</script>

<style lang="scss">
</style>