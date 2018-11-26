<template>
    <div class="container">
      <ul>
        <li v-for="thought in thoughts">{{thought.thought}}</li>
      </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "ThoughtList",
    computed: {
        ...mapGetters(['thoughts'])
    }

}
</script>

<style scoped>
li {
    list-style: none;
    text-align: center
}

</style>
