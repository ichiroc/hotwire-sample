<template>
  <div id="app">
    <p>{{ message }}</p>
    <button @click="clickButton">clickme!</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  },
  methods: {
    clickButton: () => {
      alert('hello!')
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
