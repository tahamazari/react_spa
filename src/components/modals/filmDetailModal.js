import React, {Component} from 'react';
import './modal.scss';

import {connect} from 'react-redux';
import {currentFilm} from '../../actions/allFilmsActions';

class FilmDetailModal extends Component {
    state = {
        currentFilm: ""
    }
    
    componentDidMount(){
        const outer_this = this
        fetch(`http://localhost:3000/api/films/${this.props.id}`, { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Bearer '+ this.props.token, 
            }), 
        })
        .then(response => response.json())
        .then(function(data){
            outer_this.setState({
                currentFilm: data[0]
            })
            console.log(outer_this.state.currentFilm)
            return data
        })
        console.log(this.state.currentFilm)
    }

    render(){
        return(
            <div className="modal fade" id={`filmDetailModal${this.props.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-body">
                    <div>{this.state.currentFilm.id}</div>
                    <div>{this.state.currentFilm.title}</div>
                    <div>{this.state.currentFilm.description}</div>
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

const mapStateToProps = state => {
    return {
        currentFilm: state.films.currentFilm
    }
}

export default connect(mapStateToProps, {currentFilm})(FilmDetailModal);