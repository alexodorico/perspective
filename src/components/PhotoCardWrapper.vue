<template>
  <div id="wrapper">
    <PhotoCard />
  </div>
</template>

<script>
import PhotoCard from "./PhotoCard";
export default {
  props: {
    msg: String
  },
  components: {
    PhotoCard
  }
};
</script>

<style scoped lang="scss">
  #wrapper {
    padding: 1.5em;
  }
</style>
