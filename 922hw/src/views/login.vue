<template>
  <div class="login">
      <h1>登录</h1>
      <input type="text" placeholder="姓名" v-model="name">
      <input type="text" placeholder="年龄" v-model="age">
      <input type="text" placeholder="性别" v-model="sex">
      <input type="text" placeholder="大学" v-model="school">
      <button @click="login">登录</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "login",
  data() {
    return{
      name: '',
      age: null,
      sex: '未知',
      school: ''
    }
  },
  methods: {
    ...mapActions([
        'updateUser'
    ]),
    login () {
      if(!this.name){
        this.$message.error('请输入姓名');
      } else if (!this.age) {
        this.$message.error('请输入年龄');
      } else if (this.sex==='未知') {
        this.$message.error('请输入性别');
      } else if (!this.school) {
        this.$message.error('请输入学校');
      } else {
        
        let data = {
          name: this.name,
          age: this.age,
          sex: this.sex,
          school: this.school
        }

        // 提交mutation
        this.updateUser(data)

        // 跳转
        this.$router.push({
          name: "aside"
        })
      }
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