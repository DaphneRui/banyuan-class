import React from 'react'
import {
    useHistory
} from "react-router-dom";

export default function Modal() {
    let history = useHistory()
    return (
        <div className={'modal'}>
            <div className={'toLogin'}>
                <div>请先登录!</div>
                <button onClick={()=>{
                    history.push('/a')
                }}>确定</button>
            </div>
        </div>
    )
}
