<template>
  <div v-if="photos" id="wrapper" :class="this.viewingInfo ? 'blur' : ''">
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
  props: {
    viewingInfo: Boolean
  },
  components: {
    PhotoCard
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
  padding: 1em;
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  transition: all .3s ease-in 0.2s;
  z-index: 0;
}

.blur {
  filter: blur(6px) grayscale(100%);
}
</style>
