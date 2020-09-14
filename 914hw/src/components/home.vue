<template>
    <div>
        <div class="home-right">
            <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/commonbg/logo-footer.png" alt="" class="logo">
            <img src="../assets/woman-svg.svg" alt="" class="avater">
            <p>阿扎西</p>
            <p :style="{fontSize: '12px',marginTop: '5px'}">付费会员</p>

            <div class="icon" :style="{marginTop: '90px',backgroundColor: activeComp == 'Lesson' ? '#3e3f85' : '' }" @click="change('Lesson')">
                <i class="fa fa-book" aria-hidden="true"></i>我的课程
            </div>
            <div class="icon"  @click="change('Mail')" :style="{backgroundColor: activeComp == 'Mail' ? '#3e3f85' : '' }"> 
                <i class="fa fa-envelope-o" aria-hidden="true"></i>邮箱    
            </div>
        
            <div class="icon" @click="change('Set')" :style="{marginTop: '160px',backgroundColor: activeComp == 'Set' ? '#3e3f85' : '' }">
            <i class="fa fa-cog" aria-hidden="true"></i>设置
            </div>
            <div class="icon">
            <i class="fa fa-power-off" aria-hidden="true"></i>退出
            
            </div>
            
            
            
        </div>
        <div>
            <component :is="activeComp"></component>
        </div>
    </div>
  
</template>

<script>
import Lesson from './lesson'
import Mail from './mail'
import Set from './set'

export default {
  name: "home",
  components: {
    Lesson,
    Mail,
    Set
  },
  data(){
    return{
      activeComp: 'Lesson',
      isClick: false
    }
  },
  methods :{
    change(name){
        this.activeComp = name
        this.isClick = !this.isClick
    }
  }
};
</script>

<style>
.home-right{
    height: 100vh;
    width: 220px;
    background-color: #151c3b;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 0;
    overflow: hidden;
    z-index: 99;
}
.logo{
    width: 146px;
    margin-top: 30px;
}
.avater{
    width: 64px;
    height: 64px;
    margin-top: 60px;
    margin-bottom: 10px;
}
.home-right p{
    color: white;
} 
.home-right i{
    color: white;
    margin-right: 20px;
}
.icon{
    color: white;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 120px;
    cursor: pointer;
}
.icon:hover{
    background-color: #3e3f85;
}

</style>
