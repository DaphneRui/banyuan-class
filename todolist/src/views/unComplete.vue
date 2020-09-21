<template>
  <div class="uncomplete">
   <div class="list-item" @mouseover="over(index)" @mouseout="out(index)" :style="{background:indexNow === index  ? '#e3e3e3':''}">
       <input type="checkbox" v-model="item.isComplete"  @click="checkList()"/>
       <p :class="['text',isComplete === true ? 'textCheck': '']">{{item.todo}}</p>
       <div>
        <p v-show="isShow" @click="remove()">x</p>
       </div>
   </div>
   
  </div>
</template>

<script>
export default {
  name: "unComplete",
  data(){
    return{
        isShow: false,
        isComplete: '',
        indexNow: '',
        doList: []
    }
  },
  
  props:['item','index'],
  created(){
     
  },
  computed:{
  },  
  methods: {
    remove(){
        let params = {
            index: this.index
        }
        this.$emit('remove', params)

    },
    checkList(){
        this.item.isComplete = ! this.item.isComplete 
        // this.isComplete = true
        // isComplete = true
        // return this.doList.push()
        // console.log(doList)
    },
    over(index){
        this.indexNow = index
        this.isShow = !this.isShow  
    },
    out(index){
        this.indexNow = ''
        this.isShow = !this.isShow
    }
  },
}
</script>

<style lang="scss">
.uncomplete{
    .list-item{
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        border-bottom: 1px solid #eeeeee;
        justify-content: space-between;
        input{
            width: 20px;
            height: 20px;
            border: 1px solid cornflowerblue;
            border-radius: 5px;
            outline: none;
            cursor: pointer;
            background-color: #fff;
        }
        div{
            width: 20px;
            margin-right: 10px;
            cursor: pointer;
            .text{
                font-size: 16px;
            }
            
        }
        

    }
}
.textCheck{
    text-decoration: line-through;
    color: #757474;
}
</style>