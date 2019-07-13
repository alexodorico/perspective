<template>
  <div id="wrapper">
    <PhotoCard v-for="num in 10" :key="num" />
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
  padding: 1em;
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
