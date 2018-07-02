import React, { Component } from 'react';
import '../App.css';
import {
    Link,
} from 'react-router-dom';

class Nav extends Component {
    render(){
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 navigation'}>
                        <ul>
                            <Link to='/'>Strona główna</Link>
                            <Link to='/menu'>Menu</Link>
                            <Link to='/'>Catering</Link>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav