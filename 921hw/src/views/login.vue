<template>
  <div class="login">
      <h1>登录</h1>
      <input type="text" placeholder="姓名" v-model="name">
      <input type="text" placeholder="年龄" v-model="age">
      <input type="text" placeholder="性别" v-model="gender">
      <input type="text" placeholder="大学" v-model="school">
      <router-link to="/home"><button @click="login">登录</button></router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return{
      name: '',
      age: '',
      gender: '',
      school: '', 
    }
  },
  methods: {
    login(){
        this.$store.commit("login/loginMessage", { 
            name: this.name,
            age: this.age,
            gender: this.gender,
            school: this.school
        });
    }
  }
};
</script>

<style lang="scss">
.login{
    width: 500px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        margin-top: 20px;
        padding: 0 10px;
        width: 400px;
        height: 40px;
        border: 1px solid #e3e3e3;
        border-radius: 5px;
        outline: none;
        font-size: 18px;
    }
    button{
        font-size: 22px;
        font-weight: 500;
        color: white;
        outline: none;
        cursor: pointer;
        margin-top: 20px;
        width: 420px;
        height: 40px;
        border: 0;
        border-radius: 5px;
        background-color: cornflowerblue;
    }
}  
</style>