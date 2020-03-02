<template>
  <div class="clock fixed bottom-0 left-0 px-3 text-4xl md:text-6xl">
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

<style scoped>
</style>
