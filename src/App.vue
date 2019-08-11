<template>
  <div id="app" :class="viewingAstro ? 'dark' : 'light'" >
    <Header
      :astro="viewingAstro"
      @toggle-view="toggleView"
    />
    <PhotoCardWrapper
      :astro="false"
      :photos="photos"
      :class="viewingAstro ? 'goLeft light' : 'goRight light'"
    />
    <PhotoCardWrapper
      :astro="true"
      :photos="astroPhotos"
      :class="viewingAstro ? 'goLeft dark' : 'goRight dark'"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import PhotoCardWrapper from "./components/PhotoCardWrapper";
import axios from "axios";
import "normalize.css";
import "./main.scss";

export default {
  name: "app",
  data: function() {
    return {
      viewingAstro: false,
      astroPhotos: [],
      photos: []
    };
  },
  components: {
    Header,
    PhotoCardWrapper
  },
  created: function() {
    axios
      .get(`https://gentle-island-72914.herokuapp.com/photos`)
      .then(response => this.sortPhotos(response.data))
      .catch(error => this.displayError(error));
  },
  methods: {
    toggleView: function() {
      this.viewingAstro = !this.viewingAstro;
    },
    sortPhotos: function(data) {
      data.forEach(photo => {
        if (photo.astro == false) {
          this.photos.push(photo)
        } else {
          this.astroPhotos.push(photo);
        }
      });
    }
  }
};
</script>
