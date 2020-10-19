import React from 'react';
import { Route,Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component , ...rest }) {

    let user = localStorage.getItem('user');
    let auth = false;

    if(user){
        auth = true;
    }

    if(rest.path === '/a'){
        auth = true;
    }

    return (
        <Route {...rest} render={ ()=>{
            return (
                auth ? <Component/> : <Redirect to='/a'></Redirect>
            )
        }} ></Route>
            
    )
}
