<template>
  <div id="button-wrapper">
    <button @click="emitInfoClick">
      ?
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    emitInfoClick: function() {
      this.$emit("info-click");
    }
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
