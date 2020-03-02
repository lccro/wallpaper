<template>
  <div class="w-screen h-screen flex items-center">
    <form action="https://www.google.com/search"
          class="searchform text-lg items-center mx-auto md:text-5xl"
          method="get"
          name="searchform">
      <label for="q"></label>
      <input autocomplete="on"
             ref="searchInput"
             class="form-control search text-gray-800 p-2"
             name="q" id="q"
             required="required" type="text">
      <button class="button px-2" type="submit">Search</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Google",
    mounted() {
      this.$refs.searchInput.focus()
    }
  }
</script>

<style scoped>
</style>
