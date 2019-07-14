<template>
    <button @click="emitInfoClick">
      ?
    </button>
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
button {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  float: right;
  font-family: "Neucha-Regular";
  font-size: 30px;
  height: 32px;
  width: 17px;
  padding: 0;
}
</style>
