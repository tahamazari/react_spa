export const getFilms = (token) => dispatch => {
    fetch('http://localhost:3000/api/films', { 
        method: 'get', 
        headers: new Headers({
          'Authorization': 'Bearer '+ token, 
        }), 
    })
    .then(response => response.json())
    .then(function(data){
        dispatch(allFilms(data))
        console.log(data)
        return data
    })
}

export const getRatings = (token, id) => dispatch => {
    fetch(`http://localhost:3000/api/ratings/fetch_ratings_for_film/${id}`, { 
        method: 'get', 
        headers: new Headers({
          'Authorization': 'Bearer '+ token, 
        }), 
    })
    .then(response => response.json())
    .then(function(data){
        console.log(data['average'])
        dispatch(averageRatings(data['average']))
        return data['average']
    })
}

export const addFilm = (token, data) => dispatch => {
    console.log(data)
    const {title, year, description} = data
    fetch("http://localhost:3000/api/films/create_film", { 
        method: 'post', 
        headers: new Headers({
          'Authorization': 'Bearer '+ token, 
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({title, year, description})
    })
    .then(response => response.json())
    .then(function(data){
        console.log(data)
        dispatch(addFilm_(data))
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