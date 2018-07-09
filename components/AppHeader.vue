<template>
  <div class="v-header">
    <header>
      <input type="text" :value="value" @input="input">
        <div class="VueToNuxtLogo">
          <div @click="axios">axios</div>
        </div>
    </header>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      value: ""
    };
  },
  methods: {
    input: function(e) {
      this.$store.commit("updateText", e.target.value);
    },
    axios: function() {
      this.$store.dispatch("callApi", this.$store.state);
    }
  }
};
</script>


<style>
</style>
