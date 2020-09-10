<template>
  <div class="center-container">
    <div class="card-title">
      <img v-img-src="url" />
      <div class="title">{{ title }}</div>
    </div>
    <div class="time">
      <span :style="{ marginRight: '5px' }">创建时间:</span>
      {{ time | globalFormatTime }}
    </div>
    <div class="card-text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "Center",
  data() {
    return {
      time: 1599738102436
    };
  },
  props: ["url", "title", "text"]
};
</script>

<style>
.center-container {
  width: 400px;
  height: 450px;
}
.card-title {
  width: 400px;
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  z-index: 2;
  cursor: pointer;
}
.center-container img {
  width: 400px;
  height: 198px;
}
.title {
  width: 100%;
  height: 68px;
  padding-left: 10px;
  line-height: 68px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #000;
  letter-spacing: 1.08px;
}
.card-text {
  width: 400px;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #505050;
  line-height: 20px;
  padding: 12px 0;
}
.time {
  width: 400px;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #505050;
  line-height: 20px;
  padding-top: 12px;
}
</style>
