import $ from "jquery"
import { filter } from "minimatch";

export const getFilms = (token) => dispatch => {
    fetch('https://immense-ridge-54213.herokuapp.com/api/films', { 
        method: 'get', 
        headers: new Headers({
          'Authorization': 'Bearer '+ token, 
        }), 
    })
    .then(response => response.json())
    .then(function(data){
        dispatch(allFilms(data))
        return data
    })
}

export const getRatings = (token) => dispatch => {
    fetch(`https://immense-ridge-54213.herokuapp.com/api/ratings/average_ratings`, { 
        method: 'get', 
        headers: new Headers({
          'Authorization': 'Bearer '+ token, 
        }), 
    })
    .then(response => response.json())
    .then(function(data){
        dispatch(averageRatings(data['ratings']))
        return data
    })
}

export const addFilm = (token, data) => dispatch => {
    console.log(data)
    const {title, year, description} = data
    fetch("https://immense-ridge-54213.herokuapp.com/api/films/create_film", { 
        method: 'post', 
        headers: new Headers({
          'Authorization': 'Bearer '+ token, 
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({title, year, description})
    })
    .then(response => response.json())
    .then(function(data){
        dispatch(addFilm_(data))
        return data
    })
}

export const rateAFilm = (data, token) => {
    console.log(data, token)
}

export const currentFilm = (id, token) => dispatch => {
    fetch(`https://immense-ridge-54213.herokuapp.com/api/films/${id}`, { 
        method: 'get', 
        headers: new Headers({
          'Authorization': 'Bearer '+ token, 
        }), 
    })
    .then(response => response.json())
    .then(function(data){
        console.log(data)
        dispatch(currentFilm_(data))
        return data
    })
}

export const filterSearch = (token, data) => dispatch => {
    fetch(`https://immense-ridge-54213.herokuapp.com/api/films/filter/${data.minYear}/${data.maxYear}/${data.rating}`, { 
        method: 'get', 
        headers: new Headers({
          'Authorization': 'Bearer '+ token, 
        }), 
    })
    .then(response => response.json())
    .then(function(data){
        dispatch(filterSearch_(data["results"]))
        return data
    })
}

const addFilm_ = (data) => dispatch => {
    const action = {
        type: "ADD_FILM",
        payload: data
    }
    dispatch(action)
}

const allFilms = (data) => dispatch => {
    const action = {
        type: "GET_FILMS",
        payload: data
    }
    dispatch(action)
}

const averageRatings = (data) => dispatch => {
    const action = {
        type: "AVERAGE_RATINGS",
        payload: data
    }
    dispatch(action)
}

const currentFilm_ = data => dispatch => {
    const action = {
        type: "CURRENT_FILM",
        payload: data
    }
    dispatch(action)
}

const filterSearch_ = data => dispatch => {
    const action = {
        type: "FILTER_SEARCH",
        payload: data
    }
    dispatch(action)
}