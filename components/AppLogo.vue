<template>
  <div class="VueToNuxtLogo">
    <div @click="axios">axios</div>
  </div>
</template>

<script>
import key from '../static/key.json'
export default {
  data: function() {
    return {
      state: this.$store.state
    }
  },
  methods: {
    axios: function () {
      this.$store.dispatch('callApi', {
        url: `https://api.tenor.com/v1/search?tag=happy&key=${key.key}`,
      })
    }
  }
}
</script>
