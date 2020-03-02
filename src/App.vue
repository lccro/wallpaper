<template>
  <div id="app" class="subpixel-antialiased text-white w-full h-full bg-cover">
    <Google/>
    <Links/>
    <Clock/>
  </div>
</template>

<script>
  import Clock from './components/Clock.vue'
  import Links from './components/Links.vue'
  import Google from './components/Google.vue'

  export default {
    name: 'App',
    components: {
      Clock,
      Links,
      Google
    }
  }
</script>

<style scoped>
  #app {
    background: rgba(0, 0, 0, 0.6) url('https://source.unsplash.com/random') no-repeat scroll center center;
    background-size: cover;
    background-blend-mode: darken;
  }
</style>
