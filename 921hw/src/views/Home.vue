<template>
  <div class="home">
    <div class="aside">
      <p>姓名: {{ newName }}</p>
      <p>年龄: {{ newAge }}</p>
      <p>性别: {{ newGender }}</p>
      <p>学校: {{ newSchool }}</p>
    </div>
    <div class="set-container">
      <div class="set-container-title">个人信息</div>
      <div class="set-container-content">
        <p :style="{fontSize: '20px'}">信息修改</p>
        <div class="set-container-text">
          <div class="set-container-table">
            <div class="container-table">
              <p>姓名</p> <input type="text" v-model="name">
            </div>
            <div class="container-table">
              <p>年龄</p><input type="text" v-model="age">
              <p></p>
            </div>
            <div class="container-table">
              <p>性别</p><input type="text" v-model="gender">
            </div>
            <div class="container-table">
              <p>学校</p><input type="text" v-model="school">
            </div>
          </div>
        </div>
        <button @click="save">保存</button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return{
      // name: '',
      // age: '',
      // gender: '',
      // school: '' 
      name: this.$store.state.login.list.name,
      age: this.$store.state.login.list.age,
      gender: this.$store.state.login.list.gender,
      school: this.$store.state.login.list.school,
      newName: this.$store.state.login.list.name,
      newAge: this.$store.state.login.list.age,
      newGender: this.$store.state.login.list.gender,
      newSchool: this.$store.state.login.list.school,
    }
  },
  computed: {

  },
  methods: {
    save(){
      this.newName = this.name,
      this.newAge = this.age
      this.newGender = this.gender
      this.newSchool = this.school
    }
  },

};
</script>

<style lang="scss">
.home{
  display: flex;
  .aside{
    width: 250px;
    height: 790px;
    background-color: midnightblue;
    padding: 100px 20px 0;
    overflow: hidden;
    box-sizing: border-box;
    p{
      width: 100%;
      height: 40px;
      color: white;
      font-size: 20px;
      margin-bottom: 20px;
      line-height: 40px;
      text-align: center;
    }
  }
    .set-container{
      width: 1190px;
      height: 790px;
      position: absolute;
      left: 250px;
      display: flex;
      flex-direction: column;
      padding: 100px 160px;
      overflow: hidden;
      box-sizing: border-box;
      .set-container-title{
        font-size: 24px;
        color: #333333
      }
      .set-container-content{
        width: 870px;
        border: 1px solid #e4e4e4;
        box-shadow: 0 3px 10px #eeeeee;
        border-radius: 5px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        padding: 50px 80px;
        box-sizing: border-box;
        .set-container-text{
          margin-top: 40px;
          display: flex;
          .set-container-table{
            display: flex;
            flex-wrap: wrap;
            margin-left: 80px;
            align-items: center;
            .container-table{
              margin-bottom: 40px;
              margin-right: 40px;
              display: flex;
              align-items: center;
              input{
                width: 200px;
                height: 40px;
                border: 1px solid #e4e4e4;
                border-radius: 5px;
                display: flex;
                align-items: center;
                padding-left: 20px;
                margin-left: 20px;
                outline: none;
              }
            }
          }
        }
        button{
          color: white;
          height: 50px;
          width: 200px;
          margin-top: 20px;
          margin-left: 300px;
          font-size: 18px;
          background-color: #6964d1;
          border: 0;
          border-radius: 5px;
          cursor: pointer;
          outline: none;
        }

      }
    }
}





</style>
