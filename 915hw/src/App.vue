<template>
  <div class="whole">
    <Aliyun></Aliyun>
  </div>
</template>

<script>
import Aliyun from "./components/aliyun"

export default {
  name: "App",
  components: {
    Aliyun
  }
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.whole{
  width: 1440px;
  margin: 0 auto;
}
</style>
