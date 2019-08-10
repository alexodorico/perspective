<template>
  <div class="detail-wrapper">
    <div class="detail-top">
      <h2>{{ photo.title }}</h2>
      <div class="location-wrapper">
        <img src="../assets/icons/location.png" />
        <h3>{{ photo.location }}</h3>
      </div>
    </div>
    <div class="detail-bottom">
      <div class="setting">
        <img src="../assets/icons/shutterspeed.png" />
        <div class="value">{{ photo.shutter_speed }}</div>
      </div>
      <div class="setting">
        <img src="../assets/icons/fstop.png" />
        <div class="value">{{ photo.aperture }}</div>
      </div>
      <div class="setting">
        <img src="../assets/icons/iso.png" />
        <div class="value">{{ photo.iso }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photo: Object
  },
};
</script>
