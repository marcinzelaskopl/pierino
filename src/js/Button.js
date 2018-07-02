import React, { Component } from 'react';
import '../App.css';
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';

class Button extends Component {
    render(){
        return (
            <Link to='/menu'><button className={'show-more'}>Zobacz menu</button></Link>
        )
    }
}

export default Button