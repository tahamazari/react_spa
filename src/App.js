import React, {Component} from 'react';
import './App.scss';
import Check from './components/check';

import Header from './components/header/header'

import {Provider} from 'react-redux';
import store from './store/store';

class App extends Component {
    render(){
        return(
            <Provider store={store}>
                <div className="App">
                    <Header />
                    {/*</div>{<Check />*/}
                </div>            
            </Provider>
        )
    }
}

export default App;