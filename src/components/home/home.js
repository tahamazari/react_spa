import React, {Component} from 'react';
import './home.scss';

import Header from '../header/header';
import Footer from '../footer/footer';
import Login from '../login/login';

class Home extends Component {
    render(){
        return(
            <div className="home_main">
                <Header />
                <Login />
                <Footer />
            </div>
        )
    }
}

export default Home;