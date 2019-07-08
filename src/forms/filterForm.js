import React, {Component} from 'react';
import './form_styles.scss';

import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { filterSearch } from '../actions/allFilmsActions';

class FilterForm extends Component {
    render(){
        return(
            <div className="filter_form_main">
                <form onSubmit={this.props.handleSubmit(this.props.filterSearch.bind(null, this.props.token))}>
                    <div className="form-group">
                        <label htmlFor="minYear">Min Year</label>
                        <Field name="minYear" type="date" component="input" className="form-control filter_input"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="maxYear">Max Year</label>
                        <Field name="maxYear" type="date" component="input" className="form-control filter_input"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rating Above:</label>
                        <Field name="rating" component="input" type="number" className="form-control filter_input" min="0" max="10"/>
                    </div>
                    <div className="access_btn_main">
                        <button type="submit" className="btn access_btn">Filter Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

FilterForm = reduxForm({
    form: 'filter'
  })(FilterForm)
  
  const mapStateToProps = (state) => {
    return {
        token: state.user.token
    }
  }
  
  export default connect(mapStateToProps, {filterSearch})(FilterForm)