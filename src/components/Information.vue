<template>
  <section :class="this.viewingInfo ? 'slide-in' : 'slide-out'">
    <div class="clearfix button-wrapper">
      <img @click="emitCloseInfo" src="../assets/icons/close.png" :class="this.viewingInfo ? 'fade-in' : 'fade-out'" />
    </div>
    <div id="information-text" class="text-wrapper" :class="this.viewingInfo ? 'fade-in' : 'fade-out'">
      <h2>Hi, I'm Alex Odorico!</h2>
      <p>
        I made this website so I would have a
        place to share some of the pictures I've taken.
      </p>
      <p>
        I currently shoot with a Fujifilm XT-3 for those
        of you who may be into that kind of thing.
      </p>
      <p>Thanks for visiting!</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    viewingInfo: Boolean
  },
  methods: {
    emitCloseInfo: function() {
      this.$emit("close-click");
    }
  }
};
</script>

<style scoped lang="scss">
@font-face {
  font-family: "Montserrat-Medium";
  src: url("../assets/fonts/Montserrat-Medium.ttf");
}

section {
  background-color: #d3dbd8;
  font-family: "Montserrat-Medium";
  position: fixed;
  left: 0;
  top: -100vh;
  width: 100vw;
  height: 100vh;
  transition: top 0.33s ease-in 0.2s;
  z-index: 2;
}

.button-wrapper {
  max-width: 480px;
  margin: 0 auto;
  position: relative;
  top: 57px;
  left: -42px;
}

img {
  float: right;
  cursor: pointer;
  width: 20px;
  opacity: 0;
  transition: opacity 0.25s ease-in 1.05s;
}

#information-text {
  padding: 1.25em;
  max-width: 480px;
  margin: 0 auto;
}

h2 {
  font-family: "Neucha-Regular";
}

p {
  line-height: 1.55;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.text-wrapper {
  opacity: 0;
  transition: color 0.75s ease 0.6s, opacity 0.75s ease;
}

.slide-in {
  top: 0;
}

.slide-out {
  top: -100vh;
}

.fade-in {
  opacity: 1;
}

.fade-out {
  opacity: 0;
  color: #d3dbd8;
}
</style>
