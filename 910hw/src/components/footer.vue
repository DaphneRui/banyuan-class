<template>
  <div class="footer-container">
    <div class="about-us" :style="{ width: '290px', marginRight: '180px' }">
      <img
        v-oss-src="'/commonbg/logo-footer.png'"
        :style="{ width: '146px' }"
      />
      <span class="text"
        >© 2020 半圆（南京）网络有限公司 版权所有<br />
        苏 ICP备 18056744-1<br />
        营业执照 ICP许可证</span
      >
    </div>

    <div class="about-us">
      <h2>我们的故事</h2>
      <h3>半圆的发展历程和背景,更清晰的了解我们</h3>
    </div>

    <div class="about-us">
      <h2>成为一员</h2>
      <h3>半圆学社致力于数字领域的不断开拓,欢迎志同道合的朋友加入我们。</h3>
    </div>

    <div class="about-us" :style="{ width: '220px', marginRight: '0px' }">
      <h2>和我们交流</h2>
      <h3>
        <div>
          <img v-oss-src="'/commonbg/phone.svg'" class="icon1" />
          025-58703536
        </div>
        <div class="address">
          <img v-oss-src="'/commonbg/map.svg'" class="icon1" />
          <span>南京市仙林紫东国际创意园B9栋</span>
        </div>
        <img v-oss-src="'/commonbg/weixin.png'" class="icon2" />
        <img v-oss-src="'/commonbg/weibo.png'" class="icon2" />
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {};
  }
};
</script>

<style>
.footer-container {
  background-color: #303232;
  display: flex;
  padding: 64px 120px 85px 120px;
  overflow: hidden;
}
.about-us {
  display: flex;
  flex-direction: column;
  margin-right: 120px;
  width: 155px;
}
.about-us h2 {
  font-size: 22px;
  line-height: 30px;
  color: #e3e3e3;
  font-weight: 500;
  cursor: pointer;
}

.about-us h3 {
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  color: #e3e3e3;
  font-weight: 400;
  margin-top: 40px;
}

.text {
  font-size: 12px;
  color: #e3e3e3;
  font-weight: 400;
  line-height: 24px;
  margin-top: 40px;
}
.icon1 {
  width: 16px;
  height: 16px;
  margin-right: 12px;
  display: inline-block;
  vertical-align: top;
}
.icon2 {
  margin-top: 20px;
  margin-right: 15px;
  width: 24px;
  height: 24px;
}
.address {
  margin-top: 10px;
  display: flex;
}
</style>
