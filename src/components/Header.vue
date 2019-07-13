<template>
  <header>
    <img src="../assets/icons/camera.png" />
    <h1>perspective</h1>
    <div id="button-wrapper">
      <button>
        ?
      </button>
    </div>
  </header>
</template>

<script>
export default {
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

#button-wrapper {
  width: 100%;

  button {
    cursor: pointer;
    float: right;
    font-size: 24px;
    font-family: "Eczar";
    width: 37px;
    height: 37px;
    border-radius: 50%;
    padding: 5px;
    background-color: transparent;
    border: 3px solid #000F08;
  }
}
</style>
