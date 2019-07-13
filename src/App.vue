<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import "normalize.css";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style lang="scss">
$dark: #000F08;
$light: #D3DBD8;


#app {
  background-color: $light;
  color: $dark;
}
</style>
