<template>
  <section class="container">
    <div>
      <app-header/>
    </div>
    <div>
      <app-timeline/>
    </div>
    <div>
      <app-logo/>
    </div>
  </section>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppTimeline from '~/components/AppTimeline.vue'
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppHeader,
    AppTimeline,
    AppLogo
  }
}
</script>

<style>

</style>
