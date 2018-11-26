<template>
  <div class="home">
    <HelloWorld msg="Welcome to Thought Keeper, a place to keep your thoughts"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
