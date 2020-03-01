<template>
  <div id="app">
    <Clock/>
    <Links/>
  </div>
</template>

<script>
  import Clock from './components/Clock.vue'
  import Links from './components/Links.vue'

  export default {
    name: 'App',
    components: {
      Clock,
      Links
    }
  }
</script>

<style>
  html {
    background: rgba(0, 0, 0, 0.5) url('https://source.unsplash.com/random') no-repeat scroll center center;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    background-blend-mode: darken;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
