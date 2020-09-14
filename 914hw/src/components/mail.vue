<template>
  <div class="mail-container">
      <div class="mail-container-title">
          <div class="mail-container-titleLeft">
            <p :style="{fontSize: '24px',color: '#707070'}">消息列表</p>
            <div class="already">全部已读</div>
          </div>
          <div class="mail-container-titleRight">
            <i class="fa fa-pencil-square-o fa-2x " aria-hidden="true"></i>
            <p>意见反馈</p>
          </div>
      </div>
      <div class="mail-container-text">
          <div class="mail-container-textTop">
              <p :style="{marginLeft: '100px'}">内容</p>
              <p :style="{marginLeft: '300px'}">发布者</p>
              <p :style="{marginLeft: '100px'}">日期</p>
          </div>
          <div class="mail-container-textContent">
              暂无数据
          </div>
      </div>
    
  </div>
</template>

<script>

export default {
  name: "mail",
  components: {
    
  }
};
</script>

<style>
.mail-container{
    width: 990px;
    position: absolute;
    left: 220px;
    display: flex;
    flex-direction: column;
    margin: 100px 200px;
    overflow: hidden;
}
.mail-container-title{
    display: flex;
    align-items: center;

}
.already{
    width: 80px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #efefef;
    border-radius: 5px;
    color: #707070;
    margin-left: 20px;
}
.mail-container-titleLeft{
    display: flex;
    align-items: center;
    
}
.mail-container-titleRight{
    display: flex;
    align-items: center;
    margin-left: 500px;
}
.mail-container-titleRight i{
    color: #957ee2;
    margin-right: 10px;
}
.mail-container-text{
    width: 800px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
  
}
.mail-container-textTop{
    height: 60px;
    background-color: #e4e4e4;
    display: flex;
    align-items: center;
}
.mail-container-textTop p{
    color: #7a797b;
    font-weight: 500;
    font-size: 20px;
}
.mail-container-textContent{
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #7a797b;
}
</style>
