import React, {Component} from "react";
import './form_styles.scss';
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';

import {Login} from '../actions/loginActions';

class LoginForm extends Component {
  render(){
    return (
      <div className="login_form_main">
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
          <button type="submit" className="btn access_btn">Login</button>
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