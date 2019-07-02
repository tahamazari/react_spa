import React, {Component} from 'react';
import './App.scss';
import Check from './components/check';

import Header from './components/header/header'
import Footer from './components/footer/footer'

import {Provider} from 'react-redux';
import store from './store/store';

class App extends Component {
    render(){
        return(
            <Provider store={store}>
                <div className="App">
                    <Header />
                    <Footer />
                    {/*</div>{<Check />*/}
                </div>            
            </Provider>
        )
    }
}

export default App;