<template>
    <div class="set-container">
      <div class="set-container-title">个人信息</div>
      
      <div class="set-container-content">

        <p :style="{fontSize: '20px'}">信息修改</p>

        <div class="set-container-text">
          <div class="set-container-table">
            <div class="container-table">
              <p>姓名</p> <input type="text" v-model="user.name">
            </div>
            <div class="container-table">
              <p>年龄</p><input type="text" v-model="user.age">
              <p></p>
            </div>
            <div class="container-table">
              <p>性别</p><input type="text" v-model="user.sex">
            </div>
            <div class="container-table">
              <p>学校</p><input type="text" v-model="user.school">
            </div>
          </div>
        </div>

        <button @click="save">保存</button>

      </div>
      
    </div>


</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'user',
  data () {
    return {
    //   form: {}
    }
  },
  computed: {
    ...mapState({
        "list": state => JSON.parse(JSON.stringify(state.user))
    })
  },
  created() {
    this.user = JSON.parse(JSON.stringify(this.list))
    // this.form = JSON.parse(JSON.stringify(this.$store.state.login.user))
  },
  methods: {
    ...mapActions([
        'updateUser'
    ]),
    save () {
        this.updateUser(JSON.parse(JSON.stringify(this.user)))
    //   this.$store.commit("login/setUserInfo", JSON.parse(JSON.stringify(this.form)) );
    }
  },
}
</script>

<style lang="scss">
.set-container{
    width: 1190px;
    height: 790px;
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
  
</style>