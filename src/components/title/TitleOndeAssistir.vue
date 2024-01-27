<template>
  <div id="TitleOndeAssistir" :class="{ open: openOndeAssitir }">
    <div class="title">
      <h2>Onde assistir?</h2>
    </div>
    <div class="wrapper flex">
      <div>
        <div class="link add" @click="add()">
          <div class="clink">
            <div class="icon">
              <img src="@/assets/plus.png" alt="" />
            </div>
            <div class="text">Add Link</div>
          </div>
        </div>
      </div>
      <div class="flex wrapper">
        <div class="link" v-for="(link, index) in links" :key="index">
          <div
            class="clink"
            @click="openTitle(link._id)"
            :class="{ open: linkOpen == link._id }"
          >
            <div class="flex">
              <!-- {{link}} -->
              <div class="icon">
                <img :src="link.host.icon" alt="" />
              </div>
              <div class="data">
                <div class="name">{{ link.host.hostname }}</div>
                <div class="value">
                  <a :href="link.link" target="_blank">
                    {{ link.linkClean }}
                  </a>
                </div>
              </div>
            </div>
            <div class="data-link-open">
              
              <div class="like-container flex">
                <div class="link_icon"><img src="@/assets/like_white.png" alt=""></div>
                <div class="link_count">50</div>
                <div class="dislike_icon"><img src="@/assets/like_white.png" alt=""></div>
                <div class="dislike_count">10</div>
              </div>
              <div class="broken-link">Informar link quebrado</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <title-onde-assistir-add v-if="openOndeAssitir" v-on:close="close()" />
  </div>
</template>

<script>
import TitleOndeAssistirAdd from "@/components/title/TitleOndeAssistirAdd";

export default {
  name: "TitleOndeAssistir",
  data: () => ({
    openOndeAssitir: false,
    linkOpen: false,
  }),
  components: {
    TitleOndeAssistirAdd,
  },
  computed: {
    links: {
      get() {
        return this.$store.getters.selectedTitle.data.links;
      },
    },
  },
  methods: {
    add() {
      this.openOndeAssitir = !this.openOndeAssitir;
    },
    close() {
      this.openOndeAssitir = !this.openOndeAssitir;
    },
    openTitle(linkId) {
      this.linkOpen = linkId;
    },
  },
  created() {
  },
};
</script>

<style lang="scss">
</style>