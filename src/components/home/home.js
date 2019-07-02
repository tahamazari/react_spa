import React, {Component} from 'react';
import './home.scss';

import Header from '../header/header';
import Footer from '../footer/footer';

import {Link} from 'react-router-dom';


class Home extends Component {
    render(){
        return(
            <div className="home_main">
                <Header />
                <Footer />
            </div>
        )
    }
}

export default Home;