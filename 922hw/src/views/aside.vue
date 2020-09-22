<template>
    <div>
        <div class="aside">
            <p>姓名: {{ form.name }}</p>
            <p>年龄: {{ form.age }}</p>
            <p>性别: {{ form.sex }}</p>
            <p>学校: {{ form.school }}</p>
        </div> 
        <div class="right">
            <router-view></router-view>
        </div>       
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'aside',
  data () {
    return {
      
    }
  },
  computed: {
    // user () {
    //   return this.$store.state.login.user
        
    // }
    ...mapState({
        "form": state => state.user

    })
  },

}
</script>

<style lang="scss">
.aside{
    width: 250px;
    height: 790px;
    background-color: midnightblue;
    padding: 100px 20px 0;
    overflow: hidden;
    box-sizing: border-box;
    p{
        width: 100%;
        height: 40px;
        color: white;
        font-size: 20px;
        margin-bottom: 20px;
        line-height: 40px;
        text-align: center;
    }
}
.right{
    position: fixed;
    left: 250px;
    top: 0;
    bottom: 0;
    right: 0;
}
</style>