<template>
  <div id="button-wrapper">
    <button>
      ?
    </button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
#button-wrapper {
  width: 100%;
}


button {
  background-color: transparent;
  border: 3px solid #000F08;
  border-radius: 50%;
  cursor: pointer;
  float: right;
  font-family: "Eczar";
  font-size: 24px;
  height: 37px;
  padding: 5px;
  width: 37px;
}
</style>
