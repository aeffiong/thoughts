<template>
    <div class="container">
      <form @submit.prevent="add">
        <input type="text" v-model="thought" />
        <br>
        <button type="submit">Submit your thought</button>
      </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "Thoughts",
    data: function() {
      return {
        thought: ''
      }
    },
    methods: {
        ...mapActions(['addThought']),
        add() {
          this.addThought(this.thought)
          this.thought = ''
        }
    }

}
</script>

<style scoped>
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
