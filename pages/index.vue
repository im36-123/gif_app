<template>
  <section class="container">
    <div>
      <app-timeline/>
    </div>
    <div>
      <app-logo/>
    </div>
  </section>
</template>

<script>
import AppTimeline from '~/components/AppTimeline.vue'
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppTimeline,
    AppLogo
  }
}
</script>

<style>

</style>
