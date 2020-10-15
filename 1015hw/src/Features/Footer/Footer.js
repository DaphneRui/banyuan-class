import React, { Component } from 'react';

import './Footer.css';

export default class Footer extends Component {
   render () {
      return (
         <div className="footer-container">
            <div className="about-us" style={{ width : '290px', marginRight : '180px' }}>
               <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/commonbg/logo-footer.png" alt="" style={{ width : '146px' }} />
               <span className="text"
               >© 2020 半圆（南京）网络有限公司 版权所有<br />
                            苏 ICP备 18056744-1<br />
                            营业执照 ICP许可证</span
               >
            </div>

            <div className="about-us">
               <h2>我们的故事</h2>
               <h3>半圆的发展历程和背景,更清晰的了解我们</h3>
            </div>

            <div className="about-us">
               <h2>成为一员</h2>
               <h3>半圆学社致力于数字领域的不断开拓,欢迎志同道合的朋友加入我们。</h3>
            </div>

            <div className="about-us" style={{ width : '220px', marginRight : '0px' }}>
               <h2>和我们交流</h2>
               <h3>
                  <div>
                     <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/commonbg/phone.svg" alt="" className="icon1" />
                            025-58703536
                  </div>
                  <div className="address">
                     <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/commonbg/map.svg" alt="" className="icon1" />
                     <span>南京市仙林紫东国际创意园B9栋</span>
                  </div>
                  <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/commonbg/weixin.png" alt="" className="icon2" />
                  <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/commonbg/weibo.png" alt="" className="icon2" />
               </h3>
            </div>
         </div>
      );
   }
}

