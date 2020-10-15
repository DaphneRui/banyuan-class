import React, { Component } from 'react';

import './Header.css';

export default class Header extends Component {
   render () {
      return (
         <div className="header-container">
            <div>
               <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/commonbg/logo.png" style={{ width : '200px'  }} alt=""/>
            </div>

            <ul className="ul">
               <li>首页</li>
               <li>职前集训</li>
               <li>
                            高校俱乐部
                  <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/commonbg/ic_arrow_down.svg" style={{ marginLeft : '5px' }} alt="" />
               </li>
               <li className="login">登录 | 注册</li>
            </ul>
         </div>
      );
   }
}

