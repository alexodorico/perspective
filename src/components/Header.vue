<template>
  <header>
    <div id="header-wrapper">
      <img src="../assets/icons/camera.png" />
      <h1>perspective</h1>
      <InformationButton @info-click="emitInfoClick"/>
    </div>
  </header>
</template>

<script>
import InformationButton from "./InformationButton";

export default {
  components: {
    InformationButton
  },
  methods: {
    emitInfoClick: function() {
      this.$emit("info-click");
    }
  }
};
</script>

<style scoped lang="scss">
@font-face {
  font-family: "Eczar";
  src: url("../assets/fonts/Eczar-SemiBold.ttf");
}

header {
  background-color: rgba(255, 255, 255, 0.66);
  box-shadow: 0 1px 6px 2px rgba(0, 0, 0, 0.12);
}

#header-wrapper {
  align-items: center;
  display: flex;
  padding: 0 1.5em 3px;
  height: 60px;
  width: 100%;
  max-width: 448px;
  margin: 0 auto;

  @media (min-width: 864px) {
    max-width: 864px;
  }

    @media (min-width: 1280px) {
    max-width: 1280px;
  }
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
