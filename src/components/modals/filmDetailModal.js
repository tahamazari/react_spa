import React, {Component} from 'react';
import './modal.scss';

import {connect} from 'react-redux';
import {currentFilm} from '../../actions/allFilmsActions';

class FilmDetailModal extends Component {
    state = {
        currentFilm: "",
        average: ""
    }
    
    componentDidMount(){

        this.getCurrentFilm(this.props.id, this.props.token)
        this.getAverage(this.props.id, this.props.token)
    }

    getCurrentFilm  = (id, token) => {
        const outer_this = this
        fetch(`http://localhost:3000/api/films/${id}`, { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Bearer '+ token, 
            }), 
        })
        .then(response => response.json())
        .then(function(data){
            outer_this.setState({
                currentFilm: data[0]
            })
            return data
        })
    }

    getAverage = (id, token) => {
        const outer_this = this
        fetch(`http://localhost:3000/api/ratings/average_rating/${id}`, { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Bearer '+ token, 
            }), 
        })
        .then(response => response.json())
        .then(function(data){
            console.log(typeof(data.average))
            if(data['average'] == null){
                outer_this.setState({
                    average: "Film not rated yet"
                })
            }
            else {
                outer_this.setState({
                    average: data['average']
                })
            }
            return data
        })
    }

    render(){
        return(
            <div className="modal fade" id={`filmDetailModal${this.props.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-body">
                    <div className="film_details_main">
                        <div className="film_heading">{this.state.currentFilm.title}</div>
                        <div className="film_details">{this.state.currentFilm.description}</div>
                    </div>
                    <div>{this.state.average}</div>
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