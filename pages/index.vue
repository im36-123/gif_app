<template>
  <section class="container">
    <div>
      <app-header/>
    </div>
    <div>
      <app-timeline/>
    </div>
  </section>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppTimeline from '~/components/AppTimeline.vue'

export default {
  components: {
    AppHeader,
    AppTimeline,
  }
}
</script>

<style>

</style>
