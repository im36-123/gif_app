<template>
  <div class="v-timeline">
    <app-card
      v-for="gif in gifs"
      :key="gif.id"
      :gif="gif"/>
  </div>
</template>

<script>
import AppCard from "~/components/AppCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    AppCard
  },
  computed: {
    ...mapGetters(["gifs"])
  }
};
</script>

<style lang="scss" scoped>
.v-timeline {
  margin: 0 auto;
  padding: 5px;
  background-color: #fff;
  column-count: 2;
  column-gap: 0;

  > div {
    padding: 5px;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
  }
}
</style>

