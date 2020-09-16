<template>
    <div class="des-container">
        <div class="des-left">
            <div class="left-back">
                <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/catalog/back.png" alt="">
                <span>编程入门</span>
            </div>
            <div class="left-about">
                课程介绍
            </div>
            <div class="left-container">
                课程内容
                <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/catalog/arrow_down.png" alt="">
            </div>
        </div>
        <div class="des-right">
            <div class="right-header">
                <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/catalog/more.png" alt="">
                <span>开始编写HTML页面</span>
            </div>
            <div class="right-container">
                <h3>什么是HTML</h3>
                <img src="http://by-courses.oss-cn-hangzhou.aliyuncs.com/%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/FirstHtml/image/whatishtml.png" alt="">
                <p>HTML为超文本(Hyper Text)标记(Markup)语言，html编写的代码是给浏览器看的。浏览器加载html，读取其中的内容，进行解析，最后将内容展现在浏览器页面上。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'describe',
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
    .des-right{
        width: 100%;
        .right-header{
            width: 1120px;
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
                position: absolute;
                left: 500px;
            }
        }
        .right-container{
            height: 648px;
            padding: 66px 120px 0;
            border: 20px solid #263445;
            border-top: 0;
            h3{
                margin-bottom: 16px;
                font-weight: 700;
            }
            img{
                width: 100%;
                margin-bottom: 16px;
            }
        }
    }
}    
</style>