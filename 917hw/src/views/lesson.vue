<template>
  <div class="lesson-container">
    <p :style="{fontSize: '24px',color: '#707070'}">自主学习</p>
    <div class="lesson-card-container">
        <div v-for="(item, index) in list" :key="'pro'+index">
            <div class="lesson-card">
                <div>
                    <p :style="{fontSize: '24px'}">{{ item.title }}</p>
                    <p :style="{fontSize: '16px',color: '#707070', marginTop: '10px'}">{{ item.title }}</p>
                </div>
                
                
                <button @click="jumpDescribe">继续学习</button>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lesson",
  components: {
    
  },
  data(){
      return{
          list:[
            {title:'计算机基础',text:'计算机基础'},
            {title:'HTML',text:'HTML'},
            {title:'趣味小课',text:'趣味小课'},
          ]
      }
  },
  methods: {
      jumpDescribe(item){
        this.$router.push({
            name: "describe",
        })
    }
  }
};
</script>

<style>
.lesson-container{
    width: 990px;
    position: absolute;
    left: 220px;
    display: flex;
    flex-direction: column;
    margin: 100px 200px;
    overflow: hidden;
}
.lesson-card-container{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}
.lesson-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e4e4e4;
    width: 800px;
    height: 150px;
    margin-bottom: 20px;
    padding: 0 50px;
}
.lesson-card button{
    width: 100px;
    height: 40px;
    font-size: 18px;
    color: white;
    background-color: #6964d1;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
}

</style>
