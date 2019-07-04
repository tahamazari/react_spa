import React, {Component} from 'react';
import './modal.scss';

import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import {addFilm} from '../../actions/allFilmsActions';

class AddFilmModal extends Component {
    render(){
        return(
            <div className="modal fade" id="addFilmModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-body">
                        <form onSubmit={this.props.handleSubmit(this.props.addFilm.bind(null, this.props.token))}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <Field name="title" component="input" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="year">Year</label>
                                <Field name="year" component="input" type="date" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <Field name="description" component="input" type="text" className="form-control"/>
                            </div>
                            <button id="add_film_btn" type="submit" className="btn access_btn">Add Film</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button id="add_film_btn" type="button" className="btn access_btn" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

AddFilmModal = reduxForm({
    form: 'addfilmmodal' 
  })(AddFilmModal)
  
const mapStateToProps = (state) => {
    return {
        token: state.user.token
    }
}
  
export default connect(mapStateToProps, {addFilm})(AddFilmModal)