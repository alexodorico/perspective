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
  box-shadow: 0 1px 6px 2px rgba(0, 0, 0, 0.12);
  margin: 0.5em;
  max-width: 600px;
  transition: box-shadow 0.5s ease;
  width: 100%;

  &:hover {
    box-shadow: 0 1px 8px 5px rgba(0,0,0,0.3);
  }
}
</style> 
