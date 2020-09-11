<template>
  <div>
    <Header></Header>

    <div class="home-container">
      <div v-for="(item, index) in list" :key="'l' + index">
        <Center :url="item.url" :title="item.title" :text="item.text"></Center>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./header";
import Footer from "./footer";
import Center from "./center";

export default {
  name: "home",
  data() {
    return {
      list: [
        {
          url: "/WEB_css.jpeg",
          title: "CSS入门",
          text:
            "CSS是一种能为网页增添样式的语言。它能够修改网页中的字体样式、颜色、背景，增加华丽的动画与3D 效果，是给网页增添设计感的工具。"
        },
        {
          url: "/WEB_css_block.jpeg",
          title: "CSS工具箱",
          text:
            "在你进一步了解CSS样式和布局之前，这里为你提供一个助你写出合格CSS和理解所有基本理论的工具箱。"
        },
        {
          url: "/WEB_css_style.png",
          title: "CSS样式文件",
          text:
            "在这里我们开始学习为文本添加样式的基础，包括设置字体、粗细、斜体、行还有字符间距、阴影以及文本的其他特征。"
        },
        {
          url: "/WEB_css_layout.jpg",
          title: "CSS布局",
          text:
            "接下来我们将介绍如何把你想要的内容放在正确位置上，将涉及浮动和定位等相关的布局方法。"
        }
      ]
    };
  },
  components: {
    Header,
    Footer,
    Center
  }
};
</script>

<style>
.home-container {
  padding-top: 180px;
  width: 920px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
