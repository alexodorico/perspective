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
  left: 0;
  margin: 0 auto;
  max-width: 1280px;
  padding: 1em;
  position: absolute;
  width: 100%;
  z-index: 0;
  transition: left 0.33s;

  &.goRight {
    left: 0;
  }

  &.goLeft {
    left: -100vw;
  }
}

[astro="true"] {
  top: 60px;
  left: 100vw;

  &.goRight {
    left: 100vw;
  }

  &.goLeft {
    left: 0;
  }
}

</style>
