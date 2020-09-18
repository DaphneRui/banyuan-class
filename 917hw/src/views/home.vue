<template>
    <div>
        <div class="home-right">
            <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/commonbg/logo-footer.png" alt="" class="logo">
            <img src="../assets/woman-svg.svg" alt="" class="avater">
            <p>阿扎西</p>
            <p :style="{fontSize: '12px',marginTop: '5px'}">付费会员</p>

            <router-link to="/lesson" :style="{marginTop: '90px'}" >
                <div class="icon" :style="{backgroundColor: routeName == 'lesson' ? '#3e3f85' : '' }" >
                    <i class="fa fa-book" aria-hidden="true"></i>我的课程
                </div>
            </router-link>
            <router-link to="/mail" >
                <div class="icon" :style="{backgroundColor: routeName == 'mail' ? '#3e3f85' : '' }"> 
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>邮箱   
                </div>
            </router-link>
        
            <router-link to="/set" :style="{marginTop: '160px'}">
                <div class="icon" :style="{backgroundColor: routeName == 'set' ? '#3e3f85' : '' }">
                    <i class="fa fa-cog" aria-hidden="true"></i>设置
                </div>
            </router-link>
            <div class="iconLast">
                <i class="fa fa-power-off" aria-hidden="true"></i>退出
            </div>
             
        </div>

        <div class="home-left">
            <div class="home-left-guide">
                <i class="fa fa-undo fa-2x" aria-hidden="true" @click="goBack"></i>
                <p @click="goHome">返回首页</p>
                <p v-if="routeName == 'lesson'">我的课程</p>
                <p v-else-if="routeName == 'mail'">邮箱</p>
                <p v-else>设置</p>
            </div>
            <router-view></router-view>
        </div>
    </div>
  
</template>

<script>

export default {
  name: "home",
  data(){
    return{
        
    }
  },
  methods :{
    goBack(){
        this.$router.go(-1)
    },
    goHome(){
        this.$router.push({
            name:'home'
        })
    }
  },
  //计算属性值变化
  computed: {
      routeName(){
        return this.$route.name
      }
  }
};
</script>

<style lang="scss">
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
    p{
        color: white;
    } 
    a{
        text-decoration: none;
        color: white;
        height: 50px;
        width: 100%;
        line-height: 50px;
        .icon{
            padding-left: 60px;
            cursor: pointer;
            i{
                color: white;
                margin-right: 20px;
            }
        }
        .icon:hover{
            background-color: #3e3f85;
        }
    }
    .iconLast{
        color: white;
        height: 50px;
        width: 100%;
        display: flex; 
        align-items: center;
        padding-left: 120px;
        cursor: pointer;
        i{
            color: white;
            margin-right: 20px;
        }
        
    }
    .iconLast:hover{
        background-color: #3e3f85;
    }
    
}
.home-left{
    .home-left-guide{
        position: fixed;
        left: 220px;
        right: 0;
        top: 0;
        height: 60px;
        width: 1240px;
        box-shadow: 0 3px 10px #efefef;
        display: flex;
        align-items: center;
        color: #707070;
        i{
            color: #707070;
            margin: 0 20px;
        }
        p{
            margin-left: 20px;
        }
    }
}


</style>
