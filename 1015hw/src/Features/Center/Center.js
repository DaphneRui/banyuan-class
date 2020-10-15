import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './Center.css';

export default class Center extends Component {
   static propTypes = {
      item: PropTypes.object
   };
   constructor (){
      super();
      this.state = {
         time: 1599738102436
      };

   }
   render () {
      return (
         <div className="center-container">
            <div className="card-title">
               <img src={ this.props.item.cover } alt=""/>
               <div className="title">{ this.props.item.title }</div>
            </div>
            <div className="time">
               <span style={{ marginRight : '5px' }}>创建时间: { moment(this.state.time).format('YYYY-MM-DD') }</span>
            </div>
            <div className="card-text">{ this.props.item.decp }</div>
         </div>
      );
   }
}

