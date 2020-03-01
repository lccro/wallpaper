<template>
  <div class="clock">
    {{ time }}
  </div>
</template>

<script>
  export default {
    name: 'Clock',
    data() {
      return {
        timer: null,
        time: "⏱"
      }
    },
    mounted() {
      this.timer = setInterval(this.updateClock, 1000)
    },
    destroyed() {
      clearInterval(this.timer)
    },
    methods: {
      updateClock() {
        const now = new Date()
        this.time = now.toLocaleTimeString('pt-BR')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .clock {
    color: white;
    font-size: 10rem;
    position: fixed;
    left: 40px;
    bottom: 10px;
  }
</style>
