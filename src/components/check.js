import React, {Component} from 'react';
import {connect} from 'react-redux';

import LoginForm from '../forms/login_form'

import {changeText} from '../actions/testActions';

class Check extends Component {
    render(){
        return (
            <div className="header_main">
                <div className="header_text">DATA.POLICE.UK</div>
                <input onChange={this.props.changeText} value={this.props.text} type="text"/>
                <p>{this.props.check}</p>
                <LoginForm />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        check: state.test.check,
        text: state.test.text
    }
}


export default connect(mapStateToProps, {changeText})(Check);