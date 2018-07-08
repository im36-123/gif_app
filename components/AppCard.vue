<template>
  <div class="v-card">
    <a :href="gif.media[0].gif.url" target="_blank">
      <div class="img">
        <video :src="gif.media[0].webm.url" alt="" autoPlay loop></video>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    gif: Object
  }
};
</script>

<style lang="scss" scoped>
.v-card {
  overflow: hidden;
}

.v-card a {
  display: block;
  width: 100%;
  height: 100%;
}

.v-card .img {
  width: inherit;
}

.v-card .img video {
  width: 100%;
  height: 100%;
}

.v-card .text {
  padding: 24px 16px;
}

.v-card .text__title {
  font-size: 24px;
}
</style>
