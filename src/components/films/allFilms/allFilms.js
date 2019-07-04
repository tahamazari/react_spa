import React, {Component} from 'react';
import './allFilms.scss';

import {connect} from 'react-redux';
import {getFilms, getRatings} from '../../../actions/allFilmsActions';

import blankImage from '../../../static/blank_image.png';

import 'babel-polyfill';

class AllFilms extends Component {

    componentDidMount(){
        this.props.getFilms(this.props.token)
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
                                <p className="card-text">{film.description}</p>
                                <button href="#" className="btn rate_btn">Rate film</button>
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

export default connect(mapStateToProps, {getFilms, getRatings})(AllFilms);