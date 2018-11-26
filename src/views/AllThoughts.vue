<template>
    <div>
        <Thoughts></Thoughts>
        <ThoughtList></ThoughtList>
    </div>    
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Thoughts from '@/components/Thoughts.vue'
import ThoughtList from '@/components/ThoughtList.vue'
export default {
    name: "AllThoughts",
    components: {
        Thoughts,
        ThoughtList
    }

}
</script>

<style>

</style>
