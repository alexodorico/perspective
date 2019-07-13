<template>
  <header>
    <img src="../assets/icons/camera.png" />
    <h1>perspective</h1>
    <InformationButton />
  </header>
</template>

<script>
import InformationButton from "./InformationButton";

export default {
  components: {
    InformationButton
  },
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
@font-face {
  font-family: "Eczar";
  src: url("../assets/fonts/Eczar-SemiBold.ttf");
}

header {
  align-items: center;
  display: flex;
  padding: 0 24px 3px ;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.66);
}

h1 {
  font-family: "Eczar";
  font-size: 30px;
  margin: 3px 0 0 7px;
}

img {
  height: 28px;
  width: 28px;
}
</style>
