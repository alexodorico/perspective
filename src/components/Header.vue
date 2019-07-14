<template>
  <header :class="this.viewingInfo ? 'blur' : ''" @click="handleHeaderClick">
    <div id="header-wrapper">
      <h1>perspective</h1>
    </div>
  </header>
</template>

<script>

export default {
  props: {
    viewingInfo: Boolean
  },
  methods: {
    handleHeaderClick: function() {
      this.$emit("header-click");
    }
  }
};
</script> 

<style scoped lang="scss">
@font-face {
  font-family: "Neucha-Regular";
  src: url("../assets/fonts/Neucha-Regular.ttf");
}

header {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 1px 6px 2px rgba(0, 0, 0, 0.12);
  position: sticky;
  top: 0;
  transition: all .3s ease-in 0.2s;
  margin: 0 auto;
  z-index: 1;
}

#header-wrapper {
  align-items: center;
  display: flex;
  padding: 0 1.5em 3px;
  height: 60px;
  width: 100%;
  max-width: 448px;

  @media (min-width: 864px) {
    max-width: 864px;
  }

    @media (min-width: 1280px) {
    max-width: 1280px;
  }
}

h1 {
  font-family: "Neucha-Regular";
  font-size: 30px;
  margin: 3px 0 0 12px;
}

.blur {
  filter: blur(6px) grayscale(100%);
}
</style>
