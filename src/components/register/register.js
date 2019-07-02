import React, {Component} from 'react';
import './register.scss';

import Header from '../header/header';
import Footer from '../footer/footer';
import RegisterForm from '../../forms/register_form';

class Register extends Component {
    render(){
        return(
            <div className="register_main">
                <Header />
                <RegisterForm />
                <Footer />
            </div>
        )
    }
}

export default Register;