<template>
  <div id="information-wrapper">
    <div class="clearfix">
      <img @click="emitCloseInfo" src="../assets/icons/close.png" />
    </div>
    <div id="information-text">
      <h2>Hi, my name’s Alex Odorico!</h2>
      <p>
        I developed this website so I can have a
        place to share some of my photography.
      </p>
      <p>
        I love taking of pictures of landscapes and nature,
        but my latest obsession has been astrophotography.
      </p>
      <p>
        I currently shoot with a Fujifilm XT-3 for those
        of you who may be into that kind of thing.
      </p>
      <p>Feel free to shoot me a message if you want to chat!</p>
      <p>Thanks for visiting!</p>
    </div>
  </div>
</template>

<script>
export default {
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

#information-wrapper {
  background-color: #d3dbd8;
  font-family: "Montserrat-Medium";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

img {
  float: right;
  width: 37px;
  padding: 20px 20px 0 0;
  cursor: pointer;
}

#information-text {
  padding: 1.25em;
  max-width: 480px;
  margin: 0 auto;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>
