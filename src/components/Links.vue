<template>
  <ul class="links fixed right-0 top-0 px-4 text-right py-2 text-lg md:text-4xl">
    <li v-for="l in links" :key="l.url">
      <a :href="l.url">{{l.lbl}}</a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Links",
    data() {
      return {
        links: [
          {url: 'https://facebook.com/', lbl: "Facebook"},
          {url: 'https://instagram.com/', lbl: "Instagram"},
          {url: 'https://youtube.com/', lbl: "Youtube"},
          {url: 'https://reddit.com/', lbl: "Reddit"},
          {
            url: 'https://globoplay.globo.com/agora-na-globo/',
            lbl: "GloboPlay"
          },
          {
            url: 'https://globosatplay.globo.com/globonews/ao-vivo/',
            lbl: "GloboNews"
          },
          {url: 'https://ifood.com.br/', lbl: "iFood"},
        ]
      }
    }
  }
</script>

<style scoped>
</style>
