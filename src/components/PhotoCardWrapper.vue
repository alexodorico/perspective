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
    viewingAstro: Boolean,
    photos: Array
  }
};
</script>
