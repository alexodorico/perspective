<template>
  <div id="app" :class="viewingAstro ? 'dark' : 'light'" >
    <Header
      :viewingInfo="viewingInfo"
      :astro="viewingAstro"
      @header-click="toggleInfo"
      @toggle-view="toggleView"
    />
    <Information
      :viewingInfo="viewingInfo"
      @close-click="toggleInfo"
    />
    <PhotoCardWrapper
      :viewingInfo="viewingInfo"
      :astro="false"
      :photos="photos"
      :class="viewingAstro ? 'goLeft' : 'goRight'"
    />
    <PhotoCardWrapper
      :viewingInfo="viewingInfo"
      :astro="true"
      :photos="astroPhotos"
      :class="viewingAstro ? 'goLeft' : 'goRight'"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Information from "./components/Information";
import PhotoCardWrapper from "./components/PhotoCardWrapper";
import axios from "axios";
import "normalize.css";
import "./main.scss";

export default {
  name: "app",
  data: function() {
    return {
      viewingInfo: false,
      viewingAstro: false,
      astroPhotos: [],
      photos: []
    };
  },
  components: {
    Header,
    Information,
    PhotoCardWrapper
  },
  created: function() {
    axios
      .get(`https://gentle-island-72914.herokuapp.com/photos`)
      .then(response => this.sortPhotos(response.data))
      .catch(error => this.displayError(error));
  },
  methods: {
    toggleInfo: function() {
      this.viewingInfo = !this.viewingInfo;
    },
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
