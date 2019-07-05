import React, {Component} from 'react';
import './allFilms.scss';

import {connect} from 'react-redux';
import {getFilms, getRatings, rateAFilm} from '../../../actions/allFilmsActions';
import FilmDetailModal from '../../modals/filmDetailModal';
import blankImage from '../../../static/blank_image.png';

import 'babel-polyfill';

class AllFilms extends Component {

    componentDidMount(){
        this.props.getFilms(this.props.token)
        this.props.getRatings(this.props.token)
    }
    
    mapFilms(films){
        return (
            films.map((film) => {
                return(
                    <div key={film.id} className="film_card_main">
                        <div className="card">
                            <img className="card-img-top" src={blankImage}/>
                            <div className="card-body">
                                <h5 className="card-title">{film.title}</h5>
                                <button type="button" className="btn rate_btn" 
                                    data-toggle="modal" data-target={`#filmDetailModal${film.id}`}>
                                    View Details
                                </button>
                                <FilmDetailModal id={film.id} token={this.props.token} title={film.title}/>
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
        allFilms: state.films.allFilms,
        averageRatings: state.films.averageRatings
    }
}

export default connect(mapStateToProps, {getFilms, getRatings, rateAFilm})(AllFilms);