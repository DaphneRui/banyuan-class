<template>
    <div class="center-container">
        <div v-for="(item, index) in list" :key="'i' + index">
            <div class="card-title">
                <img :src="item.coverUrl" />
                <div class="title">{{ item.title }}</div>
            </div>
            <div class="card-text">{{ item.summary }}</div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'interest',
    data(){
        return{
            list: [
                {
                    "id": 657,
                    "coverUrl": "http://by-camp.oss-cn-shanghai.aliyuncs.com/online/procedural_thinking/sorting/sorting_cover.png",
                    "summary": "是计算机内经常进行的一种操作，其目的是将一组“无序”的记录序列调整为“有序”的记录序列。",
                    "title": "排序算法",
                    "type": "interest"
                },
                {
                    "id": 589,
                    "coverUrl": "http://by-camp.oss-cn-shanghai.aliyuncs.com/online/procedural_thinking/design_pattern/a_example_of_Adapter.png",
                    "summary": "是计算机内经常进行的一种操作，其目的是将一组“无序”的记录序列调整为“有序”的记录序列。",
                    "title": "排序算法",
                    "type": "interest"
                },
                {
                    "id": 544,
                    "coverUrl": "http://by-camp.oss-cn-shanghai.aliyuncs.com/online/procedural_thinking/recursion/%E9%80%92%E5%BD%92.jpg",
                    "summary": "程序调用自身的编程技巧称为递归。它通常把一个大型复杂的问题层层转化为一个与原问题相似的规模较小的问题来求解，递归只需少量的程序就可描述出解题过程所需要的多次重复计算，大大地减少了程序的代码量。",
                    "title": "递归",
                    "type": "interest"
                },
                {
                    "id": 555,
                    "coverUrl": "http://by-image.oss-cn-shanghai.aliyuncs.com/Pre/drumkit/demo-2.gif",
                    "summary": "简单的打击鼓页面，希望你可以谱写出华丽的乐章。",
                    "title": "架子鼓",
                    "type": "interest"
                },
                {
                    "id": 567,
                    "coverUrl": "http://by-image.oss-cn-shanghai.aliyuncs.com/Pre/clock/rotate.gif",
                    "summary": "时钟的实现",
                    "title": "时钟",
                    "type": "interest"
                },
            ]
        }
    }
}
</script>

<style lang="scss">
.center-container {
    width: 920px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card-title {
  width: 400px;
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  z-index: 2;
  cursor: pointer;
}
.center-container img {
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
.time {
  width: 400px;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #505050;
  line-height: 20px;
  padding-top: 12px;
}
</style>