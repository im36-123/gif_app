<template>
  <div class="v-card">
    <!-- <a :href="gif.url" target="_blank"> -->
      <div class="img">
        <img :src="gif.media[0].gif.url" alt="">
      </div>
      <div class="text">
        <p class="text__title" v-if="gif.title">{{ gif.title }}</p>
        <p class="text__title" v-else>無題</p>
      </div>
      <div class="tag">
        <p class="tag__title">タグ</p>
        <ul class="tag__list">
          <li class="tag__time"></li>
        </ul>
      </div>
    <!-- </a> -->
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
  width: 320px;
  height: 500px;
  border-radius: 8px;
  background-color: red;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  overflow: hidden;
}

.v-card a {
  display: block;
  width: 100%;
  height: 100%;
}

.v-card .img {
  width: inherit;
  height: calc(500px / 3 * 2);
  background-color: aquamarine;
}
.v-card .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.v-card .text {
  padding: 24px 16px;
}
.v-card .text__title {
  font-size: 24px;
}
</style>
