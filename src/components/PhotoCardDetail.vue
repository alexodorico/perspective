<template>
  <div class="detail-wrapper">
    <div class="detail-top">
      <h2>Jupiter</h2>
      <div class="location-wrapper">
        <img src="../assets/icons/location.png" />
        <h3>Higgins Lake, MI</h3>
      </div>
    </div>
    <div class="detail-bottom">
    </div>
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
@font-face {
  font-family: "Montserrat";
  src: url("../assets/fonts/Montserrat-Medium.ttf");
  font-weight: 600;
}

@font-face {
  font-family: "Montserrat";
  src: url("../assets/fonts/Montserrat-Regular.ttf");
  font-weight: 400;
}

.detail-wrapper {
  padding: 0.75em;
  font-family: "Montserrat";
  font-weight: 400;
  background-color: rgba(255, 255, 255, 0.66);

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }
}

.detail-top {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(151, 151, 151, 0.15);
}

.location-wrapper {
  display: flex;
  align-items: center;
  margin-top: 5px;

  img {
    width: 14px;
  }

  h3 {
    font-size: 14px;
    padding-left: 5px;
    opacity: 0.8;
    margin: 0;
  }
}
</style>
