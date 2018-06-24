<template>
  <div class="VueToNuxtLogo">
    <div @click="request">クリック</div>
    <div @click="axios">axios</div>
    <div>{{ storeKeyword }}</div>

    <pre>{{ state }}</pre>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      keyword: 'data',
      state: this.$store.state
    }
  },
  methods: {
    request: function () {
      this.$store.commit('updateKeyword', this.keyword)
    },
    axios: function () {
      this.$store.dispatch('callApi', {
        url: 'search.json',
        method: 'get',
      })
    }
  },
  computed: {
    storeKeyword() {
      return this.$store.state.keyword
    },
  }
}
</script>
