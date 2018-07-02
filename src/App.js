import React, { Component } from 'react';
import './App.css';
import Main from "./js/Main";
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import Nav from "./js/Nav";
import Menu from "./js/Menu";

class App extends React.Component {
    render() {
        return <HashRouter>
            <div>
                <Nav/>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path ='/menu' component={Menu}/>
                </Switch>
            </div>
        </HashRouter>;
    }
}

export default App;
