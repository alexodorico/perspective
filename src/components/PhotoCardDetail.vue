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
      <div class="setting">
        <img src="../assets/icons/shutterspeed.png">
        <div class="value">500</div>
      </div>
      <div class="setting">
        <img src="../assets/icons/fstop.png">
        <div class="value">f/1.4</div>
      </div>
      <div class="setting">
        <img src="../assets/icons/iso.png">
        <div class="value">2400</div>
      </div>
      <div class="date">
        12/31/2019
      </div>
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

.detail-bottom {
  padding: 13px 0 3px;
  display: flex;
  align-items: center;
}

.setting {
  display: flex;
  align-items: center;
  margin-right: 15px;
  opacity: 0.8;

  img {
    height: 14.75px;
  }

  .value {
    padding: 0 0 0 5px;
    font-size: 14px;
  }
}

.date {
  font-size: 14px;
  width: 100%;
  text-align: right;
  padding-right: 4px;
  opacity: 0.8;
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
