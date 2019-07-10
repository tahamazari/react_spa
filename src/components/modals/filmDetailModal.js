import React, {Component} from 'react';
import './modal.scss';

import {connect} from 'react-redux';
import {currentFilm} from '../../actions/allFilmsActions';

class FilmDetailModal extends Component {
    state = {
        currentFilm: "",
        average: "",
        ratingDiv: false,
        editDiv: false,
        rating: 5,
        newRatingResponse: "",
        editFilm: {
            title: this.props.title,
            year: this.props.year,
            description: ""
        }
    }
    
    componentDidMount(){

        this.getCurrentFilm(this.props.id, this.props.token)
        this.getAverage(this.props.id, this.props.token)
    }

    ratingDiv(){
        this.setState({
            ratingDiv: !this.state.ratingDiv,
        })
    }

    editDiv(){
        this.setState({
            editDiv: !this.state.editDiv,
        })
    }

    getCurrentFilm  = (id, token) => {
        const outer_this = this
        fetch(`https://react-spa-tintash.herokuapp.com/api/films/${id}`, { 
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
        fetch(`https://react-spa-tintash.herokuapp.com/api/ratings/average_rating/${id}`, { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Bearer '+ token, 
            }), 
        })
        .then(response => response.json())
        .then(function(data){
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

    changeRating(e){
        this.setState({
            rating: e.target.value
        })
    }

    editRateFilm = (id, token, rating, film_id) => {
        const outer_this = this
        fetch(`https://react-spa-tintash.herokuapp.com/api/ratings/update_ratings/${id}`, { 
            method: 'put', 
            headers: new Headers({
              'Authorization': 'Bearer '+ token, 
              "Content-Type": "application/json"
            }), 
            body: JSON.stringify({
                rating: rating,
                film_id: film_id
            })
        })
        .then(response => response.json())
        .then(function(data){
            console.log(data, "ggc")
            outer_this.getAverage(film_id, token)
            outer_this.setState({
                newRatingResponse: data.message
            })
            return data
        })
    }

    RateFilm = (id, token, rating, film_id) => {
        const outer_this = this
        fetch(`https://react-spa-tintash.herokuapp.com/api/ratings/give_rating`, { 
            method: 'post', 
            headers: new Headers({
              'Authorization': 'Bearer '+ token, 
              "Content-Type": "application/json"
            }), 
            body: JSON.stringify({
                rating: rating,
                film_id: film_id,
                user_id: id
            })
        })
        .then(response => response.json())
        .then(function(data){
            outer_this.getAverage(film_id, token)
            outer_this.setState({
                newRatingResponse: data.message
            })
            return data
        })
    }
    
    editFilm(e){
        e.preventDefault()
        const {title, year, description} = this.state.editFilm
        fetch(`https://react-spa-tintash.herokuapp.com/api/films/update/${this.props.id}`, { 
            method: 'put', 
            headers: new Headers({
              'Authorization': 'Bearer '+ this.props.token, 
              "Content-Type": "application/json"
            }), 
            body: JSON.stringify({
                title: title,
                year: year,
                description: description
            })
        })
        .then(response => response.json())
        .then(function(data){
            console.log(data, "ggc")
            outer_this.getAverage(film_id, token)
            outer_this.setState({
                newRatingResponse: data.message
            })
            return data
        })

    }

    editFilmTitle(e){
        this.setState({
            editFilm: {...this.state.editFilm, title: e.target.value}
        })
    }

    editFilmYear(e){
        this.setState({
            editFilm: {...this.state.editFilm, year: e.target.value}
        })
    }

    editFilmDescription(e){
        this.setState({
            editFilm: {...this.state.editFilm, description: e.target.value}
        })
    }

    render(){
        return(
            <div className="modal fade" id={`filmDetailModal${this.props.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-body">
                    <div className="film_details_main">
                        <div className="film_heading">
                            {this.state.currentFilm.title}
                        </div>
                        <div className="film_content">
                            <b>Year:</b>
                            <p>{this.state.currentFilm.year}</p>
                        </div>
                        <div className="film_content">
                            <b>Description:</b>
                            <p>{this.state.currentFilm.description}</p>
                        </div>
                        <div className="film_content">
                            <b>Rating:</b>
                            <p>{this.state.average}</p>
                        </div>
                        <div className="film_detail_btns_main">
                            <button onClick={this.ratingDiv.bind(this)} className="btn access_btn">Rate Film</button>
                            <button onClick={this.editDiv.bind(this)} className="btn access_btn">Edit Film</button>
                        </div>
                        {
                            this.state.ratingDiv ? 
                            <div className="ratings_div">
                                <div className="ratings_div_number">{this.state.rating}</div>
                                <input onChange={this.changeRating.bind(this)} type="range" min="0" max="10"
                                    value={this.state.rating} className="ratings_slider" id="myRange">                                    
                                </input>
                                <div className="ratings_message">{this.state.newRatingResponse}</div>
                                <button onClick={this.RateFilm.bind(null, this.props.userID, this.props.token, this.state.rating, this.props.id)} 
                                className="btn access_btn">
                                    Rate Film
                                </button>
                                <button onClick={this.editRateFilm.bind(null, this.props.userID, this.props.token, this.state.rating, this.props.id)} 
                                className="btn access_btn">
                                    Update Rating
                                </button>
                            </div> : ""
                        }
                        {
                            this.state.editDiv ? 
                            <div className="edit_film_form_main">
                                <form onSubmit={this.editFilm.bind(this)}>
                                    <div className="form-group">
                                        <label for="title">Title</label>
                                        <input onChange={this.editFilmTitle.bind(this)} value={this.state.editFilm.title} type="text" className="form-control" 
                                            placeholder="Change title">
                                        </input>
                                    </div>
                                    <div className="form-group">
                                        <label for="year">Year</label>
                                        <input onChange={this.editFilmYear.bind(this)} value={this.state.editFilm.year} type="date" className="form-control" 
                                            placeholder="Change title">
                                        </input>
                                    </div>
                                    <div className="form-group">
                                        <label for="description">Description</label>
                                        <input onChange={this.editFilmDescription.bind(this)} type="text" className="form-control" 
                                            placeholder="Change description">
                                        </input>
                                    </div>
                                    <button id="edit_film_btn" className="btn access_btn">Edit Film</button>
                                </form>
                            </div> : ""
                        }
                    </div>
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
        userID: state.user.userID,
        currentFilm: state.films.currentFilm,
    }
}

export default connect(mapStateToProps, {currentFilm})(FilmDetailModal);