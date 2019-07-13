<template>
  <div class="card-wrapper">
    <PhotoThumbnail />
    <PhotoDetail />
  </div>
</template>

<script>
import PhotoThumbnail from "./PhotoCardThumbnail";
import PhotoDetail from "./PhotoCardDetail";

export default {
  props: {
    msg: String
  },
  components: {
    PhotoThumbnail,
    PhotoDetail
  }
};
</script>

<style scoped lang="scss"></style> 
