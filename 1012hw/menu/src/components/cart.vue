<template>
  <div>
    <div v-for="item in $store.state.menu.list" :key="item.id"  class="menu">
      <h2>{{ item.name }}</h2>
      <div class="menu-count-container">
        <h2>￥: {{ item.price }}</h2>
        <button class="menu-remove-btn" @click="sub(item)">-</button>
        <div class="menu-count">{{ item.count }}</div>
        <button class="menu-add-btn" @click="add(item)">+</button>
      </div>    
    </div>
    <div class="total">
      <!-- 总价格: {{ total }}  元 -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'cart',
  data(){
    return{
    }
       
  },
  computed:{
    // total(){
    //   var totalPrice=0;
    //   for(let i = 0; i < this.$store.state.menu.list.length; i++){
    //     totalPrice += this.menu[i].price * this.menu[i].count;
    //   }
    //   return totalPrice;
    // }
  },
  methods: {
    sub() {
      this.$store.commit('menu/removeCount');

      // this.$store.dispatch('menu/updateRemove');
    },
    add() {
      this.$store.commit('menu/addCount');

      // this.$store.dispatch('menu/updateAdd');
    }
  }
}
</script>

<style lang="scss" scoped>


.menu{
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f3f3f3;
  margin-bottom: 20px;
  line-height: 50px;
  padding: 0px 20px;
  border-radius: 5px;
  h2{
    font-size: 16px;
    margin-right: 20px;
  }
  .menu-count-container{
    display: flex;
    align-items: center;
    .menu-add-btn{
      height:30px;
      width: 30px;
      background-color: black;
      color:white;
      text-align: right;
      line-height: 30px;
      border:0;
      font-size: 18px;
      padding-right: 10px;
      border-top-left-radius: 0px;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 0px;
      outline: none;
      cursor: pointer;
    }

    .menu-remove-btn{
      height:30px;
      width: 30px;
      background-color: black;
      color:white;
      line-height: 30px; 
      border:0;
      font-size: 18px;
      border-top-left-radius: 15px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 15px;
      outline: none;
      cursor: pointer;
    }

    .menu-count{
      height:30px;
      width: 24px;
      background-color: black;
      color:white;
      line-height: 30px;
      font-size: 18px;
      text-align: center; 
    }
  }
}
.total{
  font-size: 20px;
  margin-top: 40px;
  margin-left: 300px;
}

</style>


