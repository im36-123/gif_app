<template>
  <div class="v-timeline">
    <app-card
      v-for="gif in gifs"
      :key="gif.id"
      :gif="gif"/>
  </div>
</template>

<style>

</style>


<script>
import AppCard from '~/components/AppCard.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    AppCard,
  },
  computed: {
    ...mapGetters([
      'gifs'
    ])
  }
}
</script>
