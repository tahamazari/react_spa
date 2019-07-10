import React, {Component} from 'react';
import './App.scss';

import Check from './components/check';
import Home from './components/home/home';
import Register from './components/register/register';
import Dashboard from './components/dashboard/dashboard';

import {Provider} from 'react-redux';
import store from './store/store';
import {Router, Route, Link} from 'react-router-dom';
import history from './history';

class App extends Component {
    componentDidMount(){
        console.log("Hi!")
        fetch('https://immense-ridge-54213.herokuapp.com/')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(JSON.stringify(data));
        });
    }
    render(){
        return(
            <Router history={history}>
                <Provider store={store}>
                    <div className="App">
                    </div>
                    <Route exact path='/' component={Home}></Route>   
                    <Route exact path='/check' component={Check}></Route>
                    <Route exact path='/register' component={Register}></Route>
                    <Route exact path='/dashboard' component={Dashboard}></Route>
                </Provider>
            </Router>
        )
    }
}

export default App;