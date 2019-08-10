<template>
  <div v-if="photos" class="wrapper">
    <PhotoCard 
      v-for="(photo, index) of photos"
      :key="index"
      :photo="photo"
    />
  </div>
</template>

<script>
import PhotoCard from "./PhotoCard";

export default {
  components: {
    PhotoCard
  },
  props: {
    viewingInfo: Boolean,
    viewingAstro: Boolean,
    photos: Array
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  margin: 0 auto;
  max-width: 1280px;
  padding: 1em;
  width: 100%;
  z-index: 0;

  &.goRight {
    display: flex;
  }

  &.goLeft {
    display: none;
  }
}

[astro="true"] {
  display: none;

  &.goRight {
    display: none;
  }

  &.goLeft {
    display: flex;
  }
}

</style>
