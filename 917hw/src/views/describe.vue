<template>
    <div class="des-container">
        <div :class="['des-left',showSlide ? '': 'hidden-left']">
            <div class="left-back">
                <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/catalog/back.png" alt=""  @click="goBack">
                <span>编程入门</span>
            </div>
            <div class="left-about" @click="showw('title')">
                课程介绍
            </div>
            <div class="left-container" @click="showw('summary')">
                课程内容
                <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/catalog/arrow_down.png" alt="">
            </div>
        </div>
        <div :class="['des-right', showSlide ? '': 'left-change']">
            <div class="right-header">
                <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/catalog/more.png" alt="" @click="showSlide = !showSlide">
                <span>开始编写HTML页面</span>
            </div>
            <div class="right-container">
                <div>
                    <h3>什么是HTML</h3>
                    <img src="http://by-courses.oss-cn-hangzhou.aliyuncs.com/%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/FirstHtml/image/whatishtml.png" alt="">
                    <p>HTML为超文本(Hyper Text)标记(Markup)语言，html编写的代码是给浏览器看的。浏览器加载html，读取其中的内容，进行解析，最后将内容展现在浏览器页面上。</p>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'describe',
    data(){
        return{
            showTab: 'title',
            showSlide: true
        }
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        showw(name){
            this.showTab = name
        }
    },

}
</script>

<style lang="scss">
.des-container{
    width: 1440px;
    display: flex;
    .des-left{
        width: 300px;
        height: 790px;
        display: flex;
        flex-direction: column;
        background-color: #334154;
        overflow: hidden;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        .left-back{
            width: 280px;
            height: 56px;
            background: #334154;
            padding-left: 20px;
            white-space: nowrap;
            display: flex;
            align-items: center;
            img{
                width: 26px;
                height: 32px;
                margin-right: 30px;
            }
            span{
                font-size: 16px;
                font-weight: 400;
                line-height: 56px;
                color: #fff;
            }
        }
        .left-about{
            width: 260px;
            height: 52px;
            font-size: 14px;
            background: #2c3849;
            padding: 0 20px;
            color: #d8d8d8;
            font-weight: 300;
            line-height: 52px;
        }
        .left-container{
            color: #fff;
            font-weight: 400;
            background: #263445;
            padding: 0 20px;
            font-size: 14px;
            height: 52px;
            line-height: 52px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            img{
                width: 18px;
                height: 11px;
            }
        }
    }
    .hidden-left{
        display: none;
    }
    .des-right{
        position: fixed;
        left: 300px;
        right: 0;
        top: 0;
        bottom: 0;
        .right-header{
            width: 100%;
            height: 56px;
            background: #263445;
            padding-left: 20px;
            display: flex;
            align-items: center;
            position: relative;
            img{
                width: 20px;
                height: 20px;
            }
            span{
                font-size: 16px;
                font-weight: 400;
                color: #fff;
                margin: auto;
            }
        }
        .right-container{

            height: calc(100vh - 76px);
            // padding: 66px 120px 0 120px;
            border: 20px solid #263445;
            border-top: 0;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            div{
                width: 980px;
                margin: auto;
                h3{
                margin-bottom: 16px;
                font-weight: 700;
                }
                p{
                    margin-bottom: 16px;
                }
                img{
                    width: 980px;
                    margin-bottom: 16px;
                }
            }
            
        }
    }
    .left-change{
        left: 0;
    }
}    
</style>