import React, {Component} from 'react';
import './allFilms.scss';

import {connect} from 'react-redux';
import {getFilms} from '../../../actions/allFilmsActions';

import blankImage from '../../../static/blank_image.png';
import filmsReducer from '../../../reducers/filmsReducer';

import 'babel-polyfill';

class AllFilms extends Component {

    componentDidMount(){
        this.props.getFilms(this.props.token)
    }

    getRatings(token, id){
        const outer_this = this
        fetch(`http://localhost:3000/api/ratings/fetch_ratings_for_film/${id}`, { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Bearer '+ token, 
            }), 
        })
        .then(response => response.json())
        .then(function(data){
            console.log(outer_this.average(data['ratings']))
            return outer_this.average(data['ratings'])
        })
    }

    average = (arr) => {
        let avg = 0
        for(let i = 0; i < arr.length; i++){
            avg += arr[i]
        }
        return (avg/arr.length).toFixed(2)
    }

    mapFilms(films){
        return (
            films.map((film) => {
                return(
                    <div key={film.id} className="film_card_main">
                        <div className="card">
                            <img className="card-img-top" src={blankImage} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">{film.title}</h5>
                                <p className="card-text">{film.description}</p>
                                <p>{this.getRatings(this.props.token, film.id)}/10</p>
                                <button href="" className="btn rate_btn">Rate</button>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    render(){
        return(
            <div className="all_films_main">
                {this.mapFilms(this.props.allFilms)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.user.token,
        allFilms: state.films.allFilms
    }
}

export default connect(mapStateToProps, {getFilms})(AllFilms);