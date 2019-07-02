import React, {Component} from "react";
import './form_styles.scss';
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import {Login} from '../actions/loginActions';

class LoginForm extends Component {
  render(){
    return (
      <div className="access_form_main">
        <form onSubmit={this.props.handleSubmit(this.props.Login)}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field name="password" component="input" type="password" className="form-control"/>
          </div>
          <div className="access_error_msg">{this.props.login_error}</div>
          <div className="access_btn_main">
            <button type="submit" className="btn access_btn">Login</button>
            <Link to='/register' className="btn access_btn">Register here!</Link>
          </div>
        </form>
      </div>
    )
  }
}

LoginForm = reduxForm({
  form: 'login' 
})(LoginForm)

const mapStateToProps = (state) => {
  return {
      name: state.user.name,
      login_error: state.user.login_error
  }
}

export default connect(mapStateToProps, {Login})(LoginForm)