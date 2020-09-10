<template>
  <div class="header-container">
    <div>
      <img
        v-oss-src="'/commonbg/logo.png'"
        :style="{ width: wid * 2 + 'px' }"
        alt=""
      />
    </div>

    <ul class="ul">
      <li>首页</li>
      <li>职前集训</li>
      <li>
        高校俱乐部
        <img
          v-oss-src="'/commonbg/ic_arrow_down.svg'"
          :style="{ marginLeft: '5px' }"
        />
      </li>
      <li class="login">登录 | 注册</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      wid: 100
    };
  }
};
</script>

<style>
.header-container {
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 1220px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 120px;
  box-shadow: 0 3px 10px #efefef;
  overflow: hidden;
  z-index: 99;
}
.ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ul li {
  list-style: none;
  margin-right: 50px;
}
.login {
  margin: 0 50px;
}
</style>
