<template>
  <div id="app">
    <Header :viewingInfo="viewingInfo" @header-click="toggleInfo" />
    <Information :viewingInfo="viewingInfo" @close-click="toggleInfo" />
    <PhotoCardWrapper :viewingInfo="viewingInfo" />
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
    };
  },
  components: {
    Header,
    Information,
    PhotoCardWrapper
  },
  methods: {
    toggleInfo: function() {
      this.viewingInfo = !this.viewingInfo;
    },

  }
};
</script>

<style lang="scss">
$dark: #000f08;
$light: #d3dbd8;

* {
  box-sizing: border-box;
}

#app {
  background-color: $light;
  color: $dark;
  min-height: 100vh;
}
</style>
