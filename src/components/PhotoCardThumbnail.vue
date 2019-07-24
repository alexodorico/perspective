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
    element.style.backgroundImage = `url("${this.photo.taken_date}")`;
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

  @media (min-width: 450px) {
    height: 266px;
  }
}
</style>
