import React, {Component} from 'react'
import {HashRouter, Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Products from './Products'
import Managers from './Managers'

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Acme Product Managers</h1>
                    <Route render = {({location, history}) => <Nav history = {history} location = {location} />}/>
                    <Route exact path = '/' component = {Home}/>
                    <Route exact path = '/products' component = {Products}/>
                    <Route exact path = '/managers' component = {Managers}/>
                </div>
            </HashRouter>
        )
    }
}