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
  border: 2px solid #000F08;
  border-radius: 50%;
  cursor: pointer;
  float: right;
  font-family: "Eczar";
  font-size: 14px;
  height: 28px;
  padding: 6px 5px 6px 6px;
  width: 28px;
}
</style>
