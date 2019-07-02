import React, {Component} from 'react';
import './login.scss';

import LoginForm from '../../forms/login_form';

class Login extends Component {
    render(){
        return(
            <div className="login_main">
                <LoginForm />
            </div>
        )
    }
}

export default Login;