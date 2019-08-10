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
