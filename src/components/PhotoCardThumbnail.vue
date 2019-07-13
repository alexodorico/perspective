<template>
  <div :id="'photo' + photo.id" class="thumbnail-wrapper"></div>
</template>

<script>
export default {
  props: {
    photo: Object
  },
  mounted: function() {
    let element = document.getElementById(`photo${this.photo.id}`);
    element.style.backgroundImage = `url("https://gentle-island-72914.herokuapp.com${this.photo.image.url}")`;
  }
};
</script>

<style lang="scss" scoped>
.thumbnail-wrapper {
  height: 220px;
  width: 100%;
  background: #dddfe2;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
</style>
