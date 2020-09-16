<template>
  <div>
    <Header></Header>

    <div class="home-whole">
      <div class="slide">
        <div class="slide-guide"><a @click="change('Interest')" :style="{color: activeComp == 'Interest' ? 'rgb(105, 100, 209)' : '' }">趣味小课</a></div>
        <div class="slide-guide"><a @click="change('Lesson')" :style="{color: activeComp == 'Lesson' ? 'rgb(105, 100, 209)' : '' }" >预备课程</a></div>
        <div class="slide-guide"><a @click="change('Code')" :style="{color: activeComp == 'Code' ? 'rgb(105, 100, 209)' : '' }">编程入门</a></div>
        <div class="slide-guide"><a>技术门类 +</a></div>
      </div>
      <div class="home-container">
        <component :is="activeComp"></component>
      <!-- <div v-for="(item, index) in list" :key="'l' + index">
        <Center :url="item.url" :title="item.title" :text="item.text"></Center>
      </div> -->
    </div>
    </div>
    

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./header";
import Footer from "./footer";
import Lesson from '../pages/lesson'
import Code from '../pages/code'
import Interest from '../pages/interest'
// import Center from "./center";

export default {
  name: "home",
  data(){
    return{
      activeComp: 'Interest',
    }
  },
  methods :{
    change(name){
      this.activeComp = name
    }
  },
  components: {
    Header,
    Footer,
    Code,
    Lesson,
    Interest
    // Center
  }
};
</script>

<style lang="scss">
.home-whole{
  display: flex;
  padding: 0 120px;
  .slide{
    width: 280px;
    padding-top: 180px;
    .slide-guide{
      padding-top: 20px;
      a{
        text-decoration: none;
        font-family: PingFangSC-Medium;
        font-size: 18px;
        letter-spacing: 1.2px;
        display: inline-block;
        width: 160px;
        height: 34px;
        line-height: 34px;
        padding-left: 8px;
        position: relative;
        white-space: nowrap;
      }
      a:hover{
        color: rgba(105,103,206,.8)!important
      }
    }
  }
  .home-container {
    padding-top: 180px;
    width: 920px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

}

</style>
