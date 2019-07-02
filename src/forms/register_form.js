import React, {Component} from "react";
import './form_styles.scss';
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import {Register} from '../actions/registerActions';

class RegisterForm extends Component {
  render(){
    return (
      <div className="access_form_main">
        <form onSubmit={this.props.handleSubmit(this.props.Register)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <Field name="name" component="input" type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="password" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="password_match">Retype Password</label>
                <Field name="password_match" component="input" type="password" className="form-control"/>
            </div>
            <div className="access_error_msg">{this.props.register_error}</div>
            <div className="access_btn_main">
                <button type="submit" className="btn access_btn_register access_btn">Register</button>
            </div>
        </form>
      </div>
    )
  }
}

RegisterForm = reduxForm({
  form: 'register' 
})(RegisterForm)

const mapStateToProps = (state) => {
  return {
    register_error: state.register.register_error
  }
}

export default connect(mapStateToProps, {Register})(RegisterForm)