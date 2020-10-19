import React from 'react';
import A from './Component/A'
import B from './Component/B'
import C from './Component/C'
import D from './Component/D'
import Sider from './Component/Sider'
import PrivateRoute from './Router/PrivateRoute'
import Modal from './Component/Modal'

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let user = localStorage.getItem('user')
  let showModal = false
  if(user){
    showModal = true
  }
  return (
    <div className={'main'}>
      <Router>

        <Sider></Sider>

        <Switch>

          <PrivateRoute path='/a' component={ A } />
          <Route path='/b'><B/></Route>
          <PrivateRoute path='/d' component={ D } />
          { showModal ? <Route path='/c'><C/></Route> : <Modal/> }
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
