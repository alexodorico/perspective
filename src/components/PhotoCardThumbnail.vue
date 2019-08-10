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
