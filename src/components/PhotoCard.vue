<template>
  <div class="card-wrapper">
    <PhotoThumbnail :photo="photo"/>
    <PhotoDetail :photo="photo"/>
  </div>
</template>

<script>
import PhotoThumbnail from "./PhotoCardThumbnail";
import PhotoDetail from "./PhotoCardDetail";

export default {
  props: {
    photo: Object
  },
  components: {
    PhotoThumbnail,
    PhotoDetail
  }
};
</script>

<style scoped lang="scss">
.card-wrapper {
  width: 100%;
  max-width: 400px;
  margin: 0.5em;
  box-shadow: 0 1px 6px 2px rgba(0, 0, 0, 0.12);
}
</style> 
