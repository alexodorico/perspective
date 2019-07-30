<template>
  <div v-if="photos" id="wrapper">
    <PhotoCard 
      v-for="(photo, index) of photos"
      :key="index"
      :photo="photo"
    />
  </div>
</template>

<script>
import PhotoCard from "./PhotoCard";
import axios from "axios";

export default {
  components: {
    PhotoCard
  },
  props: {
    viewingInfo: Boolean
  },
  data: function() {
    return {
      photos: []
    }
  },
  created: function() {
    axios
      .get("https://gentle-island-72914.herokuapp.com/photos")
      .then(response => this.photos = (response.data))
      .catch(error => this.displayError(error));
  }
};
</script>

<style scoped lang="scss">
#wrapper {
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  padding: 1em;
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  z-index: 0;
}
</style>
