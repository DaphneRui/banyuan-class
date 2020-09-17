<template>
  <div class="set-container">
    <div class="set-container-title">
      <div :style="{fontSize: '24px',color: '#333333',borderBottom:'5px solid #726dd3'}">个人信息</div>
      <div :style="{fontSize: '24px',color: '#707070',marginLeft: '50px'}">账号信息</div>
    </div>
    <div class="set-container-content">
      <p :style="{fontSize: '20px'}">信息修改</p>
      <div class="set-container-text">
        <div>
          <img src="../assets/woman-svg.svg" alt="" class="avater2">
          <p :style="{color: '#707070',marginTop: '10px'}">头像修改</p>
        </div>
        <div class="set-container-table">
          <div><p>姓名</p><div class="container-table">阿扎西</div></div>
          <div><p>学校</p><div class="container-table">家里蹲大学</div></div>
          <div><p>昵称</p><div class="container-table">Zzzzz~</div></div>
          <div><p>学历</p><div class="container-table">本科</div></div>
          <div><p>性别</p><div class="container-table">女</div></div>
          <div><p>行业</p><div class="container-table">IT</div></div>
          <div><p>年龄</p><div class="container-table">26</div></div>
        </div>
        
      </div>
      <button>保存</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "set",
  components: {
    
  }
};
</script>

<style>
.set-container{
  width: 990px;
  position: absolute;
  left: 220px;
  display: flex;
  flex-direction: column;
  margin: 100px 200px;
  overflow: hidden;
}
.set-container-title{
  display: flex;
}
.set-container-content{
  width: 800px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding: 50px 80px;
}
.avater2{
  width: 64px;
  height: 64px;
}
.set-container-text{
  margin-top: 40px;
  display: flex;
}
.set-container-table{
  display: flex;
  flex-wrap: wrap;
  margin-left: 80px;
  align-items: center;
}
.set-container-table>div{
  margin-bottom: 40px;
  margin-right: 40px;
  display: flex;
  align-items: center;
}
.container-table{
  width: 200px;
  height: 40px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-left: 20px;
}
.set-container-content button{
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
</style>
