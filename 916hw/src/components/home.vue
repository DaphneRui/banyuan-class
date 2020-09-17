<template>
  <div>
    <Header></Header>

    <div class="home-whole">
      <div class="slide">
        <div class="slide-guide"><a @click="change('interest')" :style="{color: activeComp == 'Interest' ? 'rgb(105, 100, 209)' : '' }">趣味小课</a></div>
        <div class="slide-guide"><a @click="change('lesson')" :style="{color: activeComp == 'Lesson' ? 'rgb(105, 100, 209)' : '' }" >预备课程</a></div>
        <div class="slide-guide"><a @click="change('code')" :style="{color: activeComp == 'Code' ? 'rgb(105, 100, 209)' : '' }">编程入门</a></div>
        <div class="slide-guide"><a>技术门类 +</a></div>
      </div>
      <div class="home-container">
        <!-- <component :is="activeComp"></component> -->
      <!-- <div v-for="(item, index) in list" :key="'l' + index">
        <Center :url="item.url" :title="item.title" :text="item.text"></Center>
      </div> -->

        <!-- <div class="center-container"> -->
            <div v-for="(item, index) in thisList" :key="'i' + index" @click="jumpDescribe(item)">
                <div class="card-title">
                    <img :src="item.coverUrl" />
                    <div class="title">{{ item.title }}</div>
                </div>
                <div class="card-text">{{ item.summary }}</div>
            </div>
        <!-- </div> -->
        
      </div>
    </div>
    

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./header";
import Footer from "./footer";
import Data from "../utils/data"
// import Lesson from '../pages/lesson'
// import Code from '../pages/code'
// import Interest from '../pages/interest'
// import Center from "./center";

export default {
  name: "home",
  data(){
    return{
      activeComp: 'interest',
      list: Data.list
    }
  },
  methods :{
    change(name){
      this.activeComp = name
    },
    jumpDescribe(item){
      this.$router.push({
        name: "describe",
        query: {
          data: JSON.stringify(item)
        }
      })
    }
  },
  components: {
    Header,
    Footer,
    // Code,
    // Lesson,
    // Interest
    // Center
  },
  computed: {
    thisList(){
      let arr = [];
      switch (this.activeComp){
        case 'interest' :
          arr = this.list.filter(item =>{
            return item.type == 'interest'
          });
          break;
        case 'code' :
          arr = this.list.filter(item =>{
            return item.type == 'code'
          });
          break;
        case 'lesson' :
          arr = this.list.filter(item =>{
            return item.type == 'lesson'
          });
          break;
      }
      return arr
    }
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
    .card-title {
      width: 400px;
      background: #fff;
      border: 1px solid #eaeaea;
      border-radius: 4px;
      overflow: hidden;
      position: relative;
      z-index: 2;
      cursor: pointer;
      img {
      width: 400px;
      height: 198px;
      }
      .title {
        width: 100%;
        height: 68px;
        padding-left: 10px;
        line-height: 68px;
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #000;
        letter-spacing: 1.08px;
      }
    }
    .card-text {
      width: 400px;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #505050;
      line-height: 20px;
      padding: 12px 0;
      margin-bottom: 100px;
    }

  }

}

</style>
