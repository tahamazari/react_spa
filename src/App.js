import React, {Component} from 'react';
import './App.scss';

import Check from './components/check';
import Home from './components/home/home';

import {Provider} from 'react-redux';
import store from './store/store';
import {Router, Route, Link} from 'react-router-dom';
import history from './history';

// import createHistory from 'history/createBrowserHistory';
// const history = createHistory(); 

class App extends Component {
    render(){
        return(
            <Router history={history}>
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