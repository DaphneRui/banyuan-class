import React from 'react';

import Header from './Features/Header/Header';
import Footer from './Features/Footer/Footer';
import Center from './Features/Center/Center';

import uuid from 'react-uuid';

import './App.css';

const list = [

   { cover: 'http://by-camp.oss-cn-shanghai.aliyuncs.com/wiki/Javase-online/images/PRE_MACBOOK.png', title:'操作系统使用技巧', decp:'学习编程过程中，我们将花费大量时间使用计算机，使用其中的工具完成我们的工作。这些工具的运行都是依靠操作系统，这里我们来介绍一下如何高效的使用操作系统以及工具。' },
   { cover: 'http://by-camp.oss-cn-shanghai.aliyuncs.com/wiki/Javase-online/images/PRE_markdown.png', title:'操作系统使用技巧', decp:'学习编程过程中，我们将花费大量时间使用计算机，使用其中的工具完成我们的工作。这些工具的运行都是依靠操作系统，这里我们来介绍一下如何高效的使用操作系统以及工具。' },
   { cover: 'http://by-camp.oss-cn-shanghai.aliyuncs.com/wiki/Javase-online/images/PRE_terminal.jpg', title:'操作系统使用技巧', decp:'学习编程过程中，我们将花费大量时间使用计算机，使用其中的工具完成我们的工作。这些工具的运行都是依靠操作系统，这里我们来介绍一下如何高效的使用操作系统以及工具。' },
   { cover: 'http://by-camp.oss-cn-shanghai.aliyuncs.com/online/frontcover/PRE_code.png', title:'操作系统使用技巧', decp:'学习编程过程中，我们将花费大量时间使用计算机，使用其中的工具完成我们的工作。这些工具的运行都是依靠操作系统，这里我们来介绍一下如何高效的使用操作系统以及工具。' },
];

function renderCards () {
   return list.map((item)=>{

      return (

         <Center item={ item } key={ uuid() }/>
      );
   });
}

function App () {

   return (
      <div>
         <Header></Header>
         <div className="home-container">
            { renderCards() }
         </div>
         <Footer></Footer>
      </div>
   );
}

export default App;