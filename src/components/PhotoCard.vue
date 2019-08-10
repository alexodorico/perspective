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
