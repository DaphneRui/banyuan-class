import React from 'react';
import {
    Link,
} from "react-router-dom";

export default function Sider() {
    return (
        <div className={'sider'}>
            <ul>
                <li>
                    <Link to='/a'>A</Link>
                </li>

                <li>
                    <Link to='/b'>B</Link>
                </li>

                <li>
                    <Link to='/c'>C</Link>
                </li>

                <li>
                    <Link to='/d'>D</Link>
                </li>
            </ul>

        </div>
    )
}

