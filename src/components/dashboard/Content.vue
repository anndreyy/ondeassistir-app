<template>

<div class="content-body">
  <div class="container">

    <title-bar type="movies">
        Filmes mais populares
    </title-bar>
    <title-bar type="series">
        Séries mais populares
    </title-bar>
    <title-bar type="animes">
        Animes mais populares
    </title-bar>
    <title-bar type="games">
        Games mais populares
    </title-bar>
    <title-bar type="latest">
        Últimos titulos adicionados
    </title-bar>

      
  </div>

</div>
</template>

<script>
import TitleBar from "@/components/title/TitleBar.vue"


export default {
  name: 'DashContent',
  components: {
      TitleBar,
  },
  methods: {
},
created(){
  
}

}
</script>