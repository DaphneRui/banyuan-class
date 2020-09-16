<template>
  <div class="whole">
    <!-- <Home> -->
      <router-view></router-view>
    <!-- </Home> -->
  </div>
</template>

<script>
// import Home from "./components/home";
export default {
  name: "App",
  components: {
    // Home
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.whole {
  margin: 0 auto;
  width: 1440px;
}
</style>
