<template>
  <div class="container">
    <Menu></Menu>
    <div class="line"></div>
    <Cart></Cart>
  </div>
</template>

<script>
import Menu from "./components/menu"
import Cart from "./components/cart"
export default {
  name: "App",
  components: {
    Menu,
    Cart
  }
};
</script>

<style lang="scss">
.container{
  width: 1000px;
  height: 500px;
  margin: 50px auto;
  padding: 50px;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
  display: flex;
  .line{
    width: 5px;
    height: 500px;
    background-color: darkgray;
    margin: 0 40px ;
  }
}
</style>
