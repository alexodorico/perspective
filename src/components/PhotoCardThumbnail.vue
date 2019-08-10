<template>
  <div :id="'photo' + photo.id" class="thumbnail-wrapper"></div>
</template>

<script>
export default {
  props: {
    photo: Object
  },
  mounted: function() {
    const element = document.getElementById(`photo${this.photo.id}`);
    element.style.backgroundImage = `url("${this.photo.url}")`;
  }
};
</script>

<style lang="scss" scoped>
.thumbnail-wrapper {
  background: #dddfe2;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vw;
  max-height: 400px;
  width: 100%;
}
</style>
