<template>
  <div class="home">
    <div class="header">
      <div class="theme">
          <p>任务列表</p>
      </div>  
      <div class="addlist">
          <p>添加任务:</p> 
          <input type="text" v-model="inputValue" placeholder="输入任务名称,点回车即可添加任务" @keyup.enter="addlist">
      </div>
    </div>

    <div class="container">
      <div class="aside">
        <div :class="['title', activeComp == 'UnComplete' ? 'on': '']" @click="change('UnComplete')" >
          <p>未完成任务(0)</p>
        </div>
        <div :class="['title', activeComp == 'Complete' ? 'on': '']"  @click="change('Complete')" > 
          <p>已完成任务({{countY}})</p>   
        </div>
        <div :class="['title', activeComp == 'AllList' ? 'on': '']" @click="change('AllList')" >
          <p>全部任务({{this.list.length}})</p>
        </div>
    </div> 
      
    <div class="list">
      <div v-for="(item, index) in list" :key="'pro'+index" >
        <component :is="activeComp" :item="item" :index="index" @remove="fatherRemove"></component>
      </div>
    </div>

  </div> 
    
    
  </div>
</template>

<script>
import UnComplete from "../views/unComplete"
import Complete from "../views/complete"
import AllList from "../views/allList"

export default {
  name: "Home",
  components: {
    UnComplete,
    Complete,
    AllList
  },
  data(){
      return{
        activeComp: 'UnComplete',
        inputValue: '',
        list:[],
        countY: 0
        // isComplete: false
      }
  },
  computed:{
    // unComplete(){
    //   return this.list.filter(item=>{
    //     return item.isComplete == false
    //   }).length
    // },
    
  },
  methods: {
    change(name){
      this.activeComp = name
    },
    addlist(){
      this.list.push({
        todo: this.inputValue,
        isComplete: false
      
      })
      this.inputValue = ''
    },
    fatherRemove(item){
      var index = this.list.indexOf(item);
      this.list.splice(index,1)
    },
    // count(){
    //   if(!isComplete){
    //     countY++
    //   }
    // }
  },
  computed: {
    
  },
};
</script>

<style lang="scss">
.home{
  margin: 20px auto;
  box-shadow: 0px 3px 10px black;
  border-radius: 10px;
  width: 1120px;
  height: 750px;
  overflow: hidden;
  position: relative;
  .header{
    .theme{
        background-color: cornflowerblue;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            color: white;
            font-size: 24px;
            font-weight: 700;
        }
    }
    .addlist{
        height: 160px;
        display: flex;
        padding: 0 100px;
        align-items: center;
        background-color: #eeeeee;
        p{
          font-size: 18px;
          font-weight: 500;
          margin-right: 24px;
        }
        input{
            width: 795px;
            outline: none;
            padding: 5px 10px;
            font-size: 18px; 
        }
    }  

  }
  .container{
    padding: 0 100px;
    background-color: #eeeeee;
    display: flex;
    .aside{
      width: 220px;
      height: 600px;
      .title{
        cursor: pointer;
        text-align: center;
        font-size: 24px;
        color: cornflowerblue;
        width: 200px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: #fff;
        margin-bottom: 20px;
      }
      .on{
        color: white;
        background-color: cornflowerblue;
      }
      
      
    }
    .list{
      width: 700px;
      height: 500px;
      background-color: #fff;
      border-radius: 5px;
      border: 5px solid #e3e3e3;
    }
  }
}
</style>
