<template>
  <div id="app">
    <Header @info-click="toggleInfo"/>
    <Information v-if="viewingInfo" @close-click="toggleInfo"/>
    <PhotoCardWrapper />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Information from "./components/Information";
import PhotoCardWrapper from "./components/PhotoCardWrapper";
import "normalize.css";

export default {
  name: "app",
  data: function() {
    return {
      viewingInfo: false
    }
  },
  components: {
    Header,
    Information,
    PhotoCardWrapper
  },
  methods: {
    toggleInfo: function() {
      this.viewingInfo = !this.viewingInfo;
    }
  }
};
</script>

<style lang="scss">
$dark: #000F08;
$light: #D3DBD8;

#app {
  background-color: $light;
  color: $dark;
  min-height: 100vh;
}
</style>
