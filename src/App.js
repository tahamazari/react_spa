import React, {Component} from 'react';
import './App.scss';
import Check from './components/check';

import {Provider} from 'react-redux';
import store from './store/store';

class App extends Component {
    render(){
        return(
            <Provider store={store}>
                <div className="App">React App
                    <Check />
                </div>
            </Provider>
        )
    }
}

export default App;