import React, {Component} from 'react';
import './App.scss';
import Check from './components/check';

import Home from './components/home/home';

import {Provider} from 'react-redux';
import store, {history} from './store/store';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
    render(){
        return(
            <Router>
                <Provider store={store}>
                    <div className="App">
                    </div>
                    <Route exact path='/' component={Home}></Route>   
                    <Route exact path='/check' component={Check}></Route>          
                </Provider>
            </Router>
        )
    }
}

export default App;