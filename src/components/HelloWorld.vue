<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="handleButtonClick">Click here to start adding your thoughts</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    handleButtonClick() {
      this.$router.push('thoughts')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  background-color: teal;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
}
</style>
